import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { first, last, takeLast } from 'rxjs/operators';
import { catalogAddRequest } from 'src/app/core/catalog/actions';
import { AvailabilityProduct } from "../../enums"
import { unitValidators } from '../../validators';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit, OnDestroy {

  Availability = AvailabilityProduct
  form: FormGroup;
  price: FormArray;
  uns: Subscription;
  @Input() submitFormAddProduct: Observable<any>;

  constructor(public store: Store) { }

  ngOnInit(): void {

    this.uns = this.submitFormAddProduct.pipe(first()).subscribe(v => { this.submit() })

    this.form = new FormGroup({
      productCode: new FormControl("", [Validators.required]),
      product: new FormControl("", [Validators.required]),
      availability: new FormControl("In stock"),
      exclusively: new FormControl("", [Validators.maxLength(100)]),
      replacementProducts: new FormControl("", [Validators.maxLength(100)]),
      price: new FormArray([new FormGroup({
        unit: new FormControl("kg", [Validators.required, unitValidators]),
        cost: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      })]),
    })

    this.price = this.form.get('price') as FormArray;
  }

  addUnit() {
    (<FormArray>this.form.controls["price"]).push(new FormGroup({
      unit: new FormControl("", [Validators.required, unitValidators]),
      cost: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    }));
  }

  submit() {

    let price = this.form.value.price.reduce((acc, el) => {
      acc[el.unit] = el.cost;
      return acc
    }, {})

    this.store.dispatch(catalogAddRequest({ ...this.form.value, price }))

    // this.form.reset()
  }

  removeCost($event, i) {
    (this.form.controls.price as FormArray).removeAt(i)
  }

  testClick() {
    console.log(this.form)
  }

  ngOnDestroy() { }

}
