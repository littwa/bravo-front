import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-order-form',
  templateUrl: './add-order-form.component.html',
  styleUrls: ['./add-order-form.component.scss']
})
export class AddOrderFormComponent implements OnInit {

  form: FormGroup

  constructor(public formBuilder: FormBuilder, public store: Store) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      orderNo: new FormControl(""),
      customerId: new FormControl(""), //select, ID
      customer: new FormControl(""),
      customerNo: new FormControl(""),
      items: new FormControl(""),
      notes: new FormControl(""),
      status: new FormControl(""),
      productsList: new FormControl(""), // Array of string(ID)
      ordered: new FormControl({}), // Date
      reqDelivery: new FormControl({}), // Date
    })
  }

  submitFormCustomer() {
    console.log("submitFormAddOrder", this.form.value)
    // this.store.dispatch(customersAddRequest(this.form.value))
  }




  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  // Initially fill the selectedStates so it can be used in the for loop**
  selectedStates = this.states;

  // Receive user input and send to search method**
  onKey(value) {
    this.selectedStates = this.search(value);
  }

  // Filter the states list and send back to populate the selectedStates**
  search(value: string) {
    let filter = value.toLowerCase();
    return this.states.filter(option => option.toLowerCase().startsWith(filter));
  }

}
