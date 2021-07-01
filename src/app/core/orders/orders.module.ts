import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store'
import { OrdersEffects } from './effects';
import { ordersReducer } from './reducers';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature("orders", ordersReducer),
    EffectsModule.forFeature([OrdersEffects])
  ],

})
export class OrdersStateModule { }
