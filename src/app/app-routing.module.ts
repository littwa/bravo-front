import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: MainLayoutComponent, children: [
      { path: '', redirectTo: "order", pathMatch: 'full' },
      { path: 'order', loadChildren: () => import("./order/order.module").then(m => m.OrderModule) },
      { path: 'customers', loadChildren: () => import("./customers/customers.module").then(m => m.CustomersModule) },
      { path: "catalog", loadChildren: () => import("./catalog/catalog.module").then(m => m.CatalogModule) },
    ]
  },
  { path: 'login', loadChildren: () => import("./login/login.module").then(m => m.LoginModule) },
  { path: "register", loadChildren: () => import("./register/register.module").then(m => m.RegisterModule) },
  { path: "choicse-customer", loadChildren: () => import("./choice-customer/choice-customer.module").then(m => m.ChoiceCustomerModule) },
  { path: '**', loadChildren: () => import("./not-found/not-found.module").then(m => m.NotFoundModule) }
];

const config = { preloadingStrategy: PreloadAllModules }

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
