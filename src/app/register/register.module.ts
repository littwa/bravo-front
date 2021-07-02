import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RegisterPageComponent } from './register-page/register-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: "", component: RegisterPageComponent }])
  ]
})
export class RegisterModule { }
