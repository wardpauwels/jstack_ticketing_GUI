import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpErrorHandler} from "./http-error-handler.service";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {LoginService} from "./_services";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    HttpErrorHandler,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
