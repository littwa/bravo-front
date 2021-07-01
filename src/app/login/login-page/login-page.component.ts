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

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  EStatusInput = EStatusInput;

  statusInput = EStatusInput.default

  valueInputEmail = '';

  constructor(public store: Store, public dialog: MatDialog) { }

  @ViewChild("modalLogIn") modalLogIn

  @ViewChild("email") email

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.openLogInModal();

  }

  openLogInModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(this.modalLogIn, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    //   if (result) {
    //     this.handleClick()
    //   }
    // });

  }

  handleChange(v) {

    if (!!this.email.value && !this.email.valid) this.statusInput = EStatusInput.typing
    if (this.email.invalid && this.email.touched) return this.statusInput = EStatusInput.invalid
    if (this.email.invalid && this.email.dirty && this.email.touched) return this.statusInput = EStatusInput.invalid
    if (this.email.valid && !!this.email.value) return this.statusInput = EStatusInput.valid
  }

  handleClick() {

    this.store.dispatch(authLogInManagerRequest({ email: this.valueInputEmail }))

  }

}
