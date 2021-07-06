import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getCustomers } from 'src/app/core';
import { catalogGetAllRequest } from 'src/app/core/catalog/actions';
import { customersGetAllRequest } from 'src/app/core/customers/actions';

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
      customerId: new FormControl(""), //select, ID
      customerNo: new FormControl(""),
      items: new FormControl(""),
      notes: new FormControl(""),
      status: new FormControl("new"),
      productsList: new FormControl(""), // Array of string(ID)
      ordered: new FormControl({}), // Date
      reqDelivery: new FormControl({}), // Date
    })
  }

  submitFormCreateOrder() {
    // console.log("submitFormAddOrder", this.form.value)
    const dtoCreatOrder = { ...this.form.value, customerId: this.form.value.customerId._id }
    console.log(dtoCreatOrder)
    // this.store.dispatch(customersAddRequest(this.form.value))
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
    console.log(event$)
    this.form.patchValue({ customer: event$.value.name, customerNo: event$.value.customerNo }); // customerId: event$.value._id
    console.log(this.form)
  }

  arrProductId(e) {
    this.form.patchValue({ productsList: e })
    console.log(111, e)
  }

}
