import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getCustomers } from 'src/app/core';
import { authLogInManagerRequest } from 'src/app/core/auth/actions';
import { customersGetAllRequest } from 'src/app/core/customers/actions';
import { ERole } from 'src/app/shared/enums';
import { ISignUp } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  allCustomers: object[];
  valueInputEmailCustomer = '';
  valueInputPasswordCustomer = '';
  valueInputEmail = '';
  private unsub$ = new Subject<void>();
  constructor(public store: Store, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(customersGetAllRequest())

    this.store.select(getCustomers).pipe(takeUntil(this.unsub$)).subscribe(customers => {
      this.allCustomers = customers
    })

    this.form = new FormGroup({
      customer: new FormControl("", [Validators.minLength(24), Validators.maxLength(24), Validators.required]),
      emailCustomer: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.minLength(6), Validators.required]),
      repeatPassword: new FormControl("", [Validators.minLength(6), Validators.required]),
    })
  }

  handleClickRegister(): void {
    const dto: ISignUp = {
      role: ERole.Customer,
      password: this.form.value.password,
      email: this.form.value.emailCustomer,
      customer: this.form.value.customer
    }

    this.store.dispatch(authLogInManagerRequest(dto))
  }

  ngOnDestroy(): void {
    this.unsub$.next(null)
    this.unsub$.complete()
  }

}
