import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { customersEditRequest } from 'src/app/core/customers/actions';

@Component({
  selector: 'app-edit-customer-form',
  templateUrl: './edit-customer-form.component.html',
  styleUrls: ['./edit-customer-form.component.scss']
})
export class EditCustomerFormComponent implements OnInit {

  form: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public rowData: any, public formBuilder: FormBuilder, public store: Store) { }

  ngOnInit(): void {
    const { contactName, customerNo, deliveryAddress, deliveryDays, mobilePhone, name, notifyCustomerMessage, shortlistedProducts } = this.rowData

    this.form = new FormGroup({
      customerNo: new FormControl(customerNo),
      name: new FormControl(name),
      deliveryDays: this.formBuilder.group(deliveryDays),
      deliveryAddress: new FormControl(deliveryAddress),
      contactName: new FormControl(contactName),
      mobilePhone: new FormControl(mobilePhone),
      notifyCustomerMessage: new FormControl(notifyCustomerMessage),
      shortlistedProducts: new FormControl(shortlistedProducts),
    })
  }

  submitFormCustomer() {
    this.store.dispatch(customersEditRequest({ payload: this.form.value, id: this.rowData._id }))
  }

}


