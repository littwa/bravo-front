import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
// CheckEmailPageModule

const routes = [
  { path: '', component: LoginPageComponent },
  { path: "verify", loadChildren: () => import("../check-email/check-email.module").then(m => m.CheckEmailModule) },
  { path: "register", loadChildren: () => import("../register/register.module").then(m => m.RegisterModule) }
]

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class LoginModule { }
