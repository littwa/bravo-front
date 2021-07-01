import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store'
import { CatalogEffects } from './effects';
import { catalogReducer } from './reducers';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature("catalog", catalogReducer),
    EffectsModule.forFeature([CatalogEffects])
  ],

})
export class CatalogStateModule { }
