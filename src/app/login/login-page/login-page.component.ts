import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { authLogInManagerRequest } from 'src/app/core/auth/actions';

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
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  isCustomer = true;

  valueInputEmailCustomer = '';
  valueInputPasswordCustomer = '';
  valueInputEmail = '';


  EStatusInput = EStatusInput;
  EStatusInputField = EStatusInputField;

  statusInput = EStatusInput.default;
  statusInputCustomerPassword = EStatusInputField.default;
  statusInputCustomerEmail = EStatusInputField.default;

  constructor(public store: Store, public dialog: MatDialog) { }

  @ViewChild("email") email;
  @ViewChild("emailCustomer") emailCustomer;
  @ViewChild("passwordCustomer") passwordCustomer;

  ngOnInit(): void { }

  handleToggle() {
    this.isCustomer = !this.isCustomer;
  }

  handleChangeCustomerEmail(v, ref) {
    console.log(v, ref)
    console.log(this.statusInputCustomerEmail, ref.valid)
    if (!ref.value) return this.statusInputCustomerEmail = EStatusInputField.typing
    if (!!ref.value && !ref.valid) this.statusInputCustomerEmail = EStatusInputField.typing
    if (ref.invalid && ref.touched) return this.statusInputCustomerEmail = EStatusInputField.invalid
    if (ref.invalid && ref.dirty && ref.touched) return this.statusInputCustomerEmail = EStatusInputField.invalid
    if (ref.valid && !!ref.value) return this.statusInputCustomerEmail = EStatusInputField.valid
  }

  handleChange(v, ref) {
    console.log(v, ref)
    console.log(this.statusInput, ref.valid)
    if (!ref.value) return this.statusInput = EStatusInput.typing
    if (!!ref.value && !ref.valid) this.statusInput = EStatusInput.typing
    if (ref.invalid && ref.touched) return this.statusInput = EStatusInput.invalid
    if (ref.invalid && ref.dirty && ref.touched) return this.statusInput = EStatusInput.invalid
    if (ref.valid && !!ref.value) return this.statusInput = EStatusInput.valid
  }

  handleChangePass(v) {
    console.log(this.statusInputCustomerPassword, !this.passwordCustomer.value)
    if (!this.passwordCustomer.value) return this.statusInputCustomerPassword = EStatusInputField.typing
    if (!!this.passwordCustomer.value && !this.passwordCustomer.valid) this.statusInputCustomerPassword = EStatusInputField.typing
    if (this.passwordCustomer.invalid && this.passwordCustomer.touched) return this.statusInputCustomerPassword = EStatusInputField.invalid
    if (this.passwordCustomer.invalid && this.passwordCustomer.dirty && this.passwordCustomer.touched) return this.statusInputCustomerPassword = EStatusInputField.invalid
    if (this.passwordCustomer.valid && !!this.passwordCustomer.value) return this.statusInputCustomerPassword = EStatusInputField.valid

  }

  handleClickAdmin(): void {
    this.store.dispatch(authLogInManagerRequest({ email: this.valueInputEmail, role: "admin" }))
  }

  handleClickCustomer(): void {
    console.log({
      email: this.valueInputEmailCustomer,
      password: this.valueInputPasswordCustomer,
      role: "customer"
    })
  }

  //===================

  handleChangeCustomer(e) { }

}
