import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import customersdb from '../../shared/data/customersdb.json'

import { AddCustomerFormComponent } from "../../shared/components/add-customer-form/add-customer-form.component"
import { EditCustomerFormComponent } from "../../shared/components/edit-customer-form/edit-customer-form.component"
import { Store } from '@ngrx/store';
import { getCustomers, getLoading } from 'src/app/core';
import { customersGetAllRequest } from 'src/app/core/customers/actions';
import { first, map, takeUntil } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';


@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.scss']
})
export class CustomersPageComponent implements OnInit, OnDestroy {
  isLoading: Observable<boolean> = of(false);
  AddCustomerFormComponent = AddCustomerFormComponent

  name = "Customers";
  displayedColumns: string[] = ["customerNo", "name", "deliveryAddress", "deliveryDays"];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource: MatTableDataSource<any>
  private unsub$ = new Subject<void>()

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef, public store: Store) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("addProductModal") addProductModal;
  @ViewChild("replaceCatalogModal") replaceCatalogModal;

  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);

  }

  ngAfterViewInit() {

    this.store.select(getCustomers).pipe(takeUntil(this.unsub$)).subscribe(customers => {

      if (customers.length === 0) {
        this.store.dispatch(customersGetAllRequest())
      }

      this.dataSource = new MatTableDataSource(customers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    this.isLoading = this.store.select(getLoading).pipe(map(load => !load))
    this.cdr.detectChanges();
  }




  clickedRowsEdit(v) {
    console.log(v)
  }

  editCustomer(e, row) {


    const dialogRef = this.dialog.open(EditCustomerFormComponent, { data: row });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        console.log(`editCustomer Dialog result: ${result}`);
      }
    });
  }

  applyFilter = (event: Event) => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    this.unsub$.next(null)
    this.unsub$.complete()
  }

}
