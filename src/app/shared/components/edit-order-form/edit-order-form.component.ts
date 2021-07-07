import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { getCustomers } from 'src/app/core';
import { customersGetAllRequest } from 'src/app/core/customers/actions';
import { ordersAddRequest, ordersEditRequest } from 'src/app/core/orders/actions';

@Component({
  selector: 'app-edit-order-form',
  templateUrl: './edit-order-form.component.html',
  styleUrls: ['./edit-order-form.component.scss']
})
export class EditOrderFormComponent implements OnInit {


  form: FormGroup
  allCustomers = [];
  selectedCustomers = []

  constructor(@Inject(MAT_DIALOG_DATA) public rowData: any, public formBuilder: FormBuilder, public store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(customersGetAllRequest())

    this.store.select(getCustomers).pipe().subscribe(customers => {
      this.allCustomers = this.selectedCustomers = customers
    })

    console.log("rowData--- ", this.rowData)

    this.form = new FormGroup({
      orderNo: new FormControl(this.rowData.orderNo),
      customer: new FormControl(this.rowData.customer),
      customerId: new FormControl(this.rowData.customerId),
      customerNo: new FormControl(this.rowData.customerNo),
      items: new FormControl(this.rowData.items),
      notes: new FormControl(this.rowData.notes),
      status: new FormControl("new"),
      productsList: new FormControl(this.rowData.productsList),
      ordered: new FormControl(new Date(this.rowData.ordered.date)),
      reqDelivery: new FormControl(new Date(this.rowData.reqDelivery.date)),
    })
  }

  submitFormEditOrder() {
    const reqDelivery = this.utilityDateTransformation(this.form.value.reqDelivery);
    const ordered = this.utilityDateTransformation(this.form.value.ordered);
    const payload = { ...this.form.value, customerId: this.form.value.customerId._id, reqDelivery, ordered };
    // console.log("dtoEditOrder--", this.form.value.customerId);
    console.log("dtoEditOrder--", payload);
    this.store.dispatch(ordersEditRequest({ payload, id: this.rowData._id }))
    // { payload: dtoEditOrder, id: this.rowData._id }
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
