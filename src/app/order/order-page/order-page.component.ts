import { Component, Input, OnInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Store } from '@ngrx/store';
import { Observable, of, Subject } from 'rxjs';
import { first, map, startWith, takeUntil, tap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { ordersGetAllAggregateRequest, ordersConfirmStatusRequest } from 'src/app/core/orders/actions';
import { getLoading, getOrders, getRole } from 'src/app/core';
import { AddOrderFormComponent } from 'src/app/shared/components/add-order-form/add-order-form.component'
import { MatDialog } from '@angular/material/dialog';
import { EditOrderFormComponent } from 'src/app/shared/components/edit-order-form/edit-order-form.component';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrderPageComponent implements OnInit, OnDestroy {
  isLoading: Observable<boolean> = of(true);
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  itemsCtrl = new FormControl();
  filteredItems: Observable<string[]>;
  items: string[] = [];
  allItems: string[] = [];
  expandedElement: any
  dataSource: MatTableDataSource<any>;
  displayedColumns = ["orderNo", "customer", "customerNo", "items", "notes", "ordered", "reqDelivery", "status"]; //'select',
  name: string = "Orders";
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<any>(this.allowMultiSelect, this.initialSelection);
  visibility: boolean = true;
  private unsub$ = new Subject<void>();
  AddOrderFormComponent = AddOrderFormComponent;
  statuses = ["canceled", "in progress", "deliverred"]; // ,"new" , "completed"
  role: Observable<string> = of("");
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  @ViewChild('formField') formField;
  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public activatedRoute: ActivatedRoute, private store: Store, private cdr: ChangeDetectorRef, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.isLoading = this.store.select(getLoading).pipe(map(load => !load))
    this.dataSource = new MatTableDataSource([]);
    this.role = this.store.select(getRole).pipe(tap(r => r === "customer" ? this.statuses = ["canceled"] : this.statuses))
  }

  ngAfterViewInit() {

    this.store.select(getOrders).pipe(takeUntil(this.unsub$)).subscribe(orders => {

      if (orders.length === 0) {
        this.store.dispatch(ordersGetAllAggregateRequest())
      }

      const unicArr = new Set(orders.map(el => el.customer));
      this.allItems = [...unicArr]

      this.filteredItems = this.itemsCtrl.valueChanges.pipe(
        startWith(null),
        map((value: string | null) => value ? this._filter(value) : this.allItems.slice()));

      this.dataSource = new MatTableDataSource(orders);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    this.cdr.detectChanges();
  }

  datePickChanged(v, e) {
    if (v === "ordered") {
      this.dataSource.filterPredicate = this.filterPeriodOrdered;
    }
    if (v === "reqDelivery") {
      this.dataSource.filterPredicate = this.filterPeriodReqDelivery;
    }

    this.dataSource.filter = '' + Math.random();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  filterPeriodOrdered = (data, filter: string) => {
    if (!this.range) return true;
    return new Date(data.ordered.date).getTime() > this.range.value.start.getTime() && new Date(data.ordered.date).getTime() < this.range.value.end.getTime();
  }

  filterPeriodReqDelivery = (data, filter: string) => {
    if (!this.range) return true;
    return new Date(data.reqDelivery.date).getTime() > this.range.value.start.getTime() && new Date(data.reqDelivery.date).getTime() < this.range.value.end.getTime();
  }

  togleChip() {
    this.visibility = !this.visibility;
  }

  remove(value: string): void {
    const index = this.items.indexOf(value);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
    this.allItems.push(value)

    this.filteredItems = this.itemsCtrl.valueChanges.pipe(
      startWith(null),
      map((value: string | null) => value ? this._filter(value) : this.allItems.slice()),
      tap(() => { this.applyFilterChips.call(this, value) })
    );
  }

  selectedCH(event: MatAutocompleteSelectedEvent): void {
    this.items.push(event.option.viewValue);
    this.itemInput.nativeElement.value = '';
    this.itemsCtrl.setValue(null);
    this.allItems = [...this.allItems].filter(el => el !== event.option.viewValue)

    this.filteredItems = this.itemsCtrl.valueChanges.pipe(
      startWith(null),
      map((value: string | null) => value ? this._filter(value) : this.allItems.slice()),
      tap(() => this.applyFilterChips.call(this, event.option.viewValue))
    );
  }

  filterFnCustomers = (data, filter) => this.items.length === 0 || this.items.includes(data.customer) ? true : false

  applyFilterChips(filterValue) {
    this.dataSource.filterPredicate = this.filterFnCustomers
    this.dataSource.filter = filterValue;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allItems.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
  }

  applyFilter = (event: Event) => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handleConfirmed(e, row): void {
    e.stopPropagation();
    // this.store.dispatch(ordersConfirmStatusRequest({ payload: row, id: row._id }))
  }

  handleChangeStatus($event, row, status) {
    this.store.dispatch(ordersConfirmStatusRequest({ payload: { status }, id: row._id }))
  }

  handleChangeOrder(e, row) {
    e.stopPropagation();

    const dialogRef = this.dialog.open(EditOrderFormComponent, { data: row });

    dialogRef.afterClosed().subscribe(result => {

      // if (result) {
      //   // this.$strm.next()
      //   console.log(`editCustomer Dialog result: ${result}`);
      // }
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next(null)
    this.unsub$.complete()
  }

  handleConfirmedToCompleted(e, row) {
    e.stopPropagation()
    this.store.dispatch(ordersConfirmStatusRequest({ payload: { status: "completed" }, id: row._id }))
  }


}
