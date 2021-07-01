import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { loadingReducers } from './reducers';


@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature("loading", loadingReducers)
  ]
})
export class LoadingStateModule { }
