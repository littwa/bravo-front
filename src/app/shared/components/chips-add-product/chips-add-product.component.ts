import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipList, MatChipListChange } from '@angular/material/chips';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { getCatalog } from 'src/app/core';
import { catalogGetAllRequest } from 'src/app/core/catalog/actions';



@Component({
  selector: 'app-chips-add-product',
  templateUrl: './chips-add-product.component.html',
  styleUrls: ['./chips-add-product.component.scss']
})
export class ChipsAddProductComponent implements OnInit {
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  productCtrl = new FormControl();
  filteredProducts: Observable<string[]>;
  products: string[] = [];
  allProducts: any[] = [];
  arrProductId: string[] = [];
  arrProductObj: any[] = [];

  @ViewChild('productInput') productInput: ElementRef<HTMLInputElement>;
  @Output() arrProductIdChanged = new EventEmitter<string[]>();
  @Input() initialProductList = null

  constructor(private store: Store) { }

  ngOnInit() {

    if (this.initialProductList) this.products = this.initialProductList.map(el => el.product)
    this.store.dispatch(catalogGetAllRequest())

    this.store.select(getCatalog).pipe().subscribe((catalog: any) => {
      this.arrProductObj = catalog;
      this.allProducts = catalog.map(el => el.product)

      this.filteredProducts = this.productCtrl.valueChanges.pipe(
        startWith(null),
        map((product: string | null) => product ? this._filter(product) : this.allProducts.slice()));
      //console.log(44444, this.allProducts)
    })

  };

  add(event: MatChipInputEvent): void {
    console.log("add ", this.products)
    const value = (event.value || '').trim();
    if (value) this.products.push(value);
    event.input.value = "";
    this.productCtrl.setValue(null);

    this.utilGetArrProductIdAndEmit()

  }

  remove(product: string): void {
    const index = this.products.indexOf(product);
    if (index >= 0) this.products.splice(index, 1);

    this.utilGetArrProductIdAndEmit()

  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log("selected ", this.products)
    if (!this.products.includes(event.option.viewValue)) this.products.push(event.option.viewValue);
    this.productInput.nativeElement.value = '';
    this.productCtrl.setValue(null);

    this.utilGetArrProductIdAndEmit()

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allProducts.filter(product => product.toLowerCase().includes(filterValue));
  }

  utilGetArrProductIdAndEmit = () => {
    this.arrProductId = this.products.map(el => this.arrProductObj.find(obj => obj.product === el)._id);
    this.arrProductIdChanged.emit(this.arrProductId)
  }

}


