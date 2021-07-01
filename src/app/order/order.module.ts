import { NgModule } from '@angular/core';
import { OrderPageComponent } from './order-page/order-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes = [
  { path: '', component: OrderPageComponent },
  { path: 'print', component: OrderPageComponent, data: { print: true } }
]

@NgModule({
  declarations: [
    OrderPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
