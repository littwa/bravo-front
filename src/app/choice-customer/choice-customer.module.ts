import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoiceCustomerPageComponent } from './choice-customer-page/choice-customer-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ChoiceCustomerPageComponent],
  imports: [SharedModule,
    RouterModule.forChild([{ path: '', component: ChoiceCustomerPageComponent }])]
})
export class ChoiceCustomerModule { }
