import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store'
import { CustomersEffects } from './effects';
import { customersReducer } from './reducers';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature("customers", customersReducer),
    EffectsModule.forFeature([CustomersEffects])
  ],

})
export class CustomersStateModule { }
