import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: NotFoundPageComponent }])
  ]
})
export class NotFoundModule { }
