import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getEmailManager, getErrorAuth, getLoading, getRole } from 'src/app/core';
import { authVerifyCustomerRequest, authVerifyManagerRequest } from 'src/app/core/auth/actions';
import { ERole } from 'src/app/shared/enums';


@Component({
  selector: 'app-check-email-page',
  templateUrl: './check-email-page.component.html',
  styleUrls: ['./check-email-page.component.scss']
})
export class CheckEmailPageComponent implements OnInit {

  isInvalid = false;
  isLoading = false;
  statusInputCheck;
  valueInputEmail: string = "";
  valueInputEmail2: string = "";
  emailManger$: Observable<any>
  loading$: Observable<any>;
  error$: Observable<any>;
  role: string;

  @ViewChild("modalCheck") modalCheck
  @ViewChild("inp2") inp2

  constructor(public dialog: MatDialog, private store: Store) { }

  ngOnInit() {
    this.emailManger$ = this.store.select(getEmailManager)
    this.loading$ = this.store.select(getLoading).pipe(map(v => !!v))
    this.error$ = this.store.select(getErrorAuth).pipe(map(v => !!v))
    this.store.select(getRole).subscribe(v => this.role = v)
  }


  changeValueInputEmail(valueInpEmail) {
    if (valueInpEmail.length === 3) {
      this.inp2.nativeElement.focus()
      if (valueInpEmail.length === 3 && this.valueInputEmail2.length === 3) {
        this.verifyRequest(this.valueInputEmail2, valueInpEmail)
      }
    }
  }

  changeValueInputEmail2(valueInpEmail2) {
    if (valueInpEmail2.length === 3 && this.valueInputEmail.length === 3) {
      this.verifyRequest(this.valueInputEmail, valueInpEmail2)
    }
  }

  verifyRequest(input1, input2) {
    if (this.role === ERole.Customer) return this.store.dispatch(authVerifyCustomerRequest({ payload: (input1 + input2) }))
    if (this.role === ERole.Admin) return this.store.dispatch(authVerifyManagerRequest({ payload: (input1 + input2) }))
  }

}
