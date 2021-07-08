import { ChangeDetectorRef, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, Subject } from 'rxjs';
import { AvailabilityProduct } from "../../shared/enums"
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

import catalogdb from '../../shared/data/catalogdb.json'
import { CatalogService } from 'src/app/shared/services/catalog.service';
import { Store } from '@ngrx/store';
import { catalogGetAllSuccess, catalogGetAllRequest, catalogDelRequest } from 'src/app/core/catalog/actions';
import { getCatalog, getLoading, getRole } from 'src/app/core';
import { first, map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit, OnDestroy {
  isLoading: Observable<boolean> = of(false);
  name = "Catalog";
  //displayedColumns: string[] = ["productCode", "product", "unit", "price", "availability", "action"];
  columnsToDisplay: string[] = ["productCode", "product", "unit", "price", "availability", "action"]; // this.displayedColumns.slice();
  columnsToDisplayForRoleCustomer: string[] = ["productCode", "product", "unit", "price", "availability"];
  dataSource: MatTableDataSource<any>;
  $strm: Subject<any> = new Subject<any>();
  AvailabilityProduct = AvailabilityProduct;
  filterAvailavle: string[] = [];
  private unsub$ = new Subject<void>()
  role$: Observable<string>

  constructor(public cdr: ChangeDetectorRef, public dialog: MatDialog, public catalogService: CatalogService, public store: Store) { }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("addProductModal") addProductModal;
  @ViewChild("editProductModal") editProductModal;
  @ViewChild("replaceCatalogModal") replaceCatalogModal;
  @ViewChild("selectAvailability") selectAvailability;

  ngOnInit(): void {
    this.role$ = this.store.select(getRole);
    this.dataSource = new MatTableDataSource([]);
    this.isLoading = this.store.select(getLoading).pipe(map(load => !load));
  }

  ngAfterViewInit() {
    this.store.select(getCatalog).pipe(takeUntil(this.unsub$)).subscribe(catalog => {
      if (catalog.length === 0) {
        this.store.dispatch(catalogGetAllRequest())
      }

      this.dataSource = new MatTableDataSource(catalog);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    this.cdr.detectChanges();
  }

  btnModalEmit() {
    console.log("btnModalEmit")
    // this.$strm.next()
  }

  addProduct(): void {

    const dialogRef = this.dialog.open(this.addProductModal);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.$strm.next()
      }
    });

  }

  replaceCatalog(): void {

    const dialogRef = this.dialog.open(this.replaceCatalogModal);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result replaceCatalog: ${result}`);
      if (result) {
        // this.$strm.next()
      }

    });

  }

  editProduct(e, row): void {

    // this.role$.subscribe

    const dialogRef = this.dialog.open(this.editProductModal, { data: { row } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.$strm.next()
      }
    });

  }

  removeProduct(e, row) {

    const dialogRef = this.dialog.open(DeleteModalComponent, { data: { name: row.product } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.store.dispatch(catalogDelRequest({ id: row._id }))

      }

    });

  }

  togleAvailability() {

    this.applyFilterChips(this.filterAvailavle)

  }

  filterFnAvailability = (data, filter) => {

    return filter.length === 0 || filter.includes(data.availability) ? true : false

  }

  applyFilterChips(filterValue) {
    this.dataSource.filterPredicate = this.filterFnAvailability
    this.dataSource.filter = filterValue;
  }

  applyFilter = (event: Event) => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  changeAvailability() {
    if (!this.selectAvailability.panelOpen) {
      console.log("filterAvailable: ", this.filterAvailavle)
    }
  }

  ngOnDestroy() {
    this.unsub$.next(null)
    this.unsub$.complete()
  }

}
