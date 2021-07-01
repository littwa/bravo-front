import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ManegerEffects } from './effects';
import { reducer, reducers } from './reducers';
// import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([ManegerEffects]),
  ]
})
export class AuthStateModule { }
