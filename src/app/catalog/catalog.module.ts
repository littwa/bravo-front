import { NgModule } from '@angular/core';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes = [
  { path: '', component: CatalogPageComponent }
]

@NgModule({
  declarations: [
    CatalogPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CatalogModule { }
