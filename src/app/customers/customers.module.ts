import { NgModule } from '@angular/core';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes = [
  { path: '', component: CustomersPageComponent }
];

@NgModule({
  declarations: [
    CustomersPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomersModule { }
