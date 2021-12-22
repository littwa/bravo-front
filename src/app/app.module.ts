import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './shared/components/menu/menu.component';
import { DndDirective } from './shared/directives/dnd.directive';
import { AuthSetTokenInterceptor } from './shared/interceptors/auth.interceptor';
import { AuthGuard } from './shared/guards/auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthSetTokenInterceptor
};

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MenuComponent,
    DndDirective,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LayoutModule,
    AppRoutingModule,
    LoginModule,
    CoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [INTERCEPTOR_PROVIDER, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
