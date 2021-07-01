import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { customersAddRequest } from 'src/app/core/customers/actions';


@Component({
  selector: 'app-add-customer-form',
  templateUrl: './add-customer-form.component.html',
  styleUrls: ['./add-customer-form.component.scss']
})
export class AddCustomerFormComponent implements OnInit {

  form: FormGroup

  constructor(public formBuilder: FormBuilder, public store: Store) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      customerNo: new FormControl(""),
      name: new FormControl(""),
      deliveryDays: this.formBuilder.group({ Mon: false, Wed: false, Fri: false, Tue: false, Thu: false, Sat: false, Sun: false }),
      deliveryAddress: new FormControl(""),
      contactName: new FormControl(""),
      mobilePhone: new FormControl(""),
      notifyCustomerMessage: new FormControl(true),
      shortlistedProducts: new FormControl(""),
    })
  }

  submitFormCustomer() {
    console.log("submitFormCustomer", this.form.value)
    this.store.dispatch(customersAddRequest(this.form.value))
  }

}


