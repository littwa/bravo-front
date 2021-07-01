import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { errorReducers } from './reducers';


@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature("error", errorReducers)
  ]
})
export class ErrorStateModule { }
