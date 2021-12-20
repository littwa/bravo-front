import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopPageComponent } from './develop-page/develop-page.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: DevelopPageComponent }
];

@NgModule({
  declarations: [
    DevelopPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DevelopModule { }
