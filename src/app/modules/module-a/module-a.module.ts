import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule } from './module-a-routing.module';
import { MAXComponent } from './m-a-x/m-a-x.component';
import { MAZComponent } from './m-a-z/m-a-z.component';


@NgModule({
  declarations: [
    MAXComponent,
    MAZComponent
  ],
  imports: [
    CommonModule,
    ModuleARoutingModule
  ]
})
export class ModuleAModule { }
