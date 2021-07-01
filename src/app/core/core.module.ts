import { NgModule } from '@angular/core';
import { AuthStateModule } from './auth/auth.module';
import { DataStateModule } from './data/data.module';
import { ErrorStateModule } from './error/error.module';
import { CatalogStateModule } from './catalog/catalog.module';
import { CustomersStateModule } from './customers/customers.module';
import { OrdersStateModule } from './orders/orders.module';
import { LoadingStateModule } from './loading/loading.module';
import { NotifyStateModule } from './notify/notify.module';

@NgModule({
  declarations: [],
  imports: [
    AuthStateModule,
    ErrorStateModule,
    LoadingStateModule,
    DataStateModule,
    CatalogStateModule,
    CustomersStateModule,
    OrdersStateModule,
    NotifyStateModule
  ],
  exports: []
})
export class CoreModule { }
