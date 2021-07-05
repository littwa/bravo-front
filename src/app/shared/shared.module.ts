import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { CdkTableModule } from '@angular/cdk/table';
import { ExpandedTableComponent } from './components/expanded-table/expanded-table.component';
import { StylePaginatorDirective } from './directives/style-paginator.directive';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { ReplaceCatalogComponent } from './components/replace-catalog/replace-catalog.component';
import { ProgressComponent } from './components/progress/progress.component';
import { MapArrPipe } from './pipes/map-arr.pipe';
import { ButtonMainComponent } from './components/button-main/button-main.component';
import { AddCustomerFormComponent } from './components/add-customer-form/add-customer-form.component';
import { EditCustomerFormComponent } from './components/edit-customer-form/edit-customer-form.component';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';
import { AlertComponent } from './components/alert/alert.component';
import { AddOrderFormComponent } from './components/add-order-form/add-order-form.component';
import { SplitStrPipe } from './pipes/split-str.pipe';
import { FilterStatusesPipe } from './pipes/filter-statuses.pipe';


@NgModule({
  declarations: [
    SearchFormComponent,
    ExpandedTableComponent,
    StylePaginatorDirective,
    DeleteModalComponent,
    ModalContainerComponent,
    AddProductFormComponent,
    ReplaceCatalogComponent,
    ProgressComponent,
    MapArrPipe,
    ButtonMainComponent,
    AddCustomerFormComponent,
    EditCustomerFormComponent,
    EditProductFormComponent,
    AlertComponent,
    AddOrderFormComponent,
    SplitStrPipe,
    FilterStatusesPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    CdkTableModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSortModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSortModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    SearchFormComponent,
    ExpandedTableComponent,
    StylePaginatorDirective,
    DeleteModalComponent,
    ModalContainerComponent,
    AddProductFormComponent,
    ReplaceCatalogComponent,
    ProgressComponent,
    MapArrPipe,
    ButtonMainComponent,
    AddCustomerFormComponent,
    EditCustomerFormComponent,
    EditProductFormComponent,
    AlertComponent,
    MatMenuModule,
    SplitStrPipe,
    FilterStatusesPipe,
  ],
  providers: [],
})
export class SharedModule { }



