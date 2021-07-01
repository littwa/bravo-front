import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { first, last, takeLast } from 'rxjs/operators';
import { catalogEditRequest } from 'src/app/core/catalog/actions';
import { AvailabilityProduct } from "../../enums"

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent implements OnInit, OnDestroy {

  Availability = AvailabilityProduct

  @Input() submitForm: Observable<any>;


  @Input() rowData: any
  form: FormGroup;
  price
  uns: Subscription;

  constructor(public store: Store) { }

  ngOnInit(): void {

    this.uns = this.submitForm.pipe(first()).subscribe(v => { this.submit() })
    const { productCode, product, availability, exclusively, replacementProducts, price } = this.rowData; // , price
    this.form = new FormGroup({
      productCode: new FormControl(productCode),
      product: new FormControl(product),
      availability: new FormControl(availability),
      exclusively: new FormControl(exclusively),
      replacementProducts: new FormControl(replacementProducts),
      price: new FormArray(Object.entries(price).map(value => {
        return new FormGroup({
          unit: new FormControl(value[0]),
          cost: new FormControl(value[1]),
        })
      })),
    })

    this.price = this.form.get('price') as FormArray;

  }

  addUnit() {
    (<FormArray>this.form.controls["price"]).push(new FormGroup({
      unit: new FormControl(""),
      cost: new FormControl(""),
    }));
  }

  submit() {

    let price = this.form.value.price.reduce((acc, el) => {
      acc[el.unit] = el.cost;
      return acc
    }, {})

    this.store.dispatch(catalogEditRequest({ payload: { ...this.form.value, price }, id: this.rowData._id }))

  }

  ngOnDestroy() {
    // this.uns.unsubscribe();
  }

  removeCost($event, i) {

    (this.form.controls.price as FormArray).removeAt(i)


  }

}
