import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { getCustomers } from 'src/app/core';
import { authLogInManagerRequest } from 'src/app/core/auth/actions';
import { customersGetAllRequest } from 'src/app/core/customers/actions';
import { ERole } from 'src/app/shared/enums';
import { ISignUp } from 'src/app/shared/interfaces';


enum EStatusInput {
  valid = "valid-input-email",
  invalid = "invalid-input-email",
  default = "default-input-email",
  typing = "typing-input-email"
}

enum EStatusInputField {
  valid = "valid-input",
  invalid = "invalid-input",
  default = "default-input",
  typing = "typing-input"
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup



  allCustomers
  // = [{ q: 1 }, { q: 2 }]

  valueInputEmailCustomer = '';
  valueInputPasswordCustomer = '';
  valueInputEmail = '';


  EStatusInput = EStatusInput;
  EStatusInputField = EStatusInputField;

  statusInput = EStatusInput.default;
  statusInputCustomerPassword = EStatusInputField.default;
  statusInputCustomerEmail = EStatusInputField.default;

  constructor(public store: Store, public dialog: MatDialog) { }


  ngOnInit(): void {

    this.store.dispatch(customersGetAllRequest())

    this.store.select(getCustomers).pipe().subscribe(customers => {
      this.allCustomers = customers
    })
    // takeUntil(this.unsub$
    this.form = new FormGroup({
      customer: new FormControl("", [Validators.minLength(24), Validators.maxLength(24), Validators.required]),
      emailCustomer: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.minLength(6), Validators.required]),
      repeatPassword: new FormControl("", [Validators.minLength(6), Validators.required]),
    })
  }


  handleClickRegister(): void {
    // "role": "customer", "email": "devacc@meta.ua", "username": "devacc", "password": "123456", "customer": "60d5e94af00841375443485f" }
    // console.log(this.form.value.password === this.form.value.repeatPassword)
    const dto: ISignUp = {
      role: ERole.Customer,
      password: this.form.value.password,
      email: this.form.value.emailCustomer,
      customer: this.form.value.customer
    }

    this.store.dispatch(authLogInManagerRequest(dto))

  }



  // handleChangeCustomer(e) { }

}
