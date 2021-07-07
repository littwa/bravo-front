import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getCustomers } from 'src/app/core';
import { catalogGetAllRequest } from 'src/app/core/catalog/actions';
import { customersGetAllRequest } from 'src/app/core/customers/actions';
import { ordersAddRequest } from 'src/app/core/orders/actions';

@Component({
  selector: 'app-add-order-form',
  templateUrl: './add-order-form.component.html',
  styleUrls: ['./add-order-form.component.scss']
})
export class AddOrderFormComponent implements OnInit {

  form: FormGroup
  allCustomers = [];
  selectedCustomers = []

  constructor(public formBuilder: FormBuilder, public store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(customersGetAllRequest())

    this.store.select(getCustomers).pipe().subscribe(customers => {
      this.allCustomers = this.selectedCustomers = customers
    })

    this.form = new FormGroup({
      orderNo: new FormControl(""),
      customer: new FormControl(""),
      customerId: new FormControl(""),
      customerNo: new FormControl(""),
      items: new FormControl(""),
      notes: new FormControl(""),
      status: new FormControl("new"),
      productsList: new FormControl(""),
      ordered: new FormControl(new Date()),
      reqDelivery: new FormControl(null),
    })
  }

  submitFormCreateOrder() {
    const reqDelivery = this.utilityDateTransformation(this.form.value.reqDelivery);
    const ordered = this.utilityDateTransformation(this.form.value.ordered)
    const dtoCreateOrder = { ...this.form.value, customerId: this.form.value.customerId._id, reqDelivery, ordered };
    this.store.dispatch(ordersAddRequest(dtoCreateOrder))
  }

  onKey(value) {
    this.selectedCustomers = this.search(value);
  }

  search(value: string) {
    let filterStr = value.toLowerCase().trim();
    if (!filterStr) return this.selectedCustomers = this.allCustomers
    return this.allCustomers.filter(customer => customer.name.toLowerCase().includes(filterStr));
  }

  sel(event$) {
    this.form.patchValue({ customer: event$.value.name, customerNo: event$.value.customerNo }); // customerId: event$.value._id
  }

  arrProductId(e) {
    this.form.patchValue({ productsList: e })
  }

  utilityDateTransformation = (inputDate: Date) => {
    const date = inputDate.toISOString();
    const timezone_type = inputDate.getTimezoneOffset();
    const timezone = inputDate.toLocaleDateString('en-GB', { timeZoneName: 'long' }).split(", ")[1]
    return { date, timezone_type, timezone }
  }

}
