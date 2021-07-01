import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckEmailPageComponent } from './check-email-page/check-email-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CheckEmailPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([{ path: "", component: CheckEmailPageComponent }])
  ]
})
export class CheckEmailModule { }
