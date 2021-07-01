import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { dataReducer } from './reducers';


@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature("data", dataReducer)
  ]
})
export class DataStateModule { }
