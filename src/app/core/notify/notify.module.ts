import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { notifyReducers } from './reducers';


@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature("notify", notifyReducers)
  ]
})
export class NotifyStateModule { }
