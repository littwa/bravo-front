import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MAXComponent } from './m-a-x/m-a-x.component';
import { MAZComponent } from './m-a-z/m-a-z.component';

const routes: Routes = [
  { path: '', component: MAXComponent, children: [
      { path: '', component: MAZComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleARoutingModule { }
