import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpErrorHandler} from "./http-error-handler.service";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {LoginService} from "./_services";
import {IndexComponent} from './index/index.component';
import {AuthGuard} from "./_guards";
import {AssociationsListComponent} from './associations-list/associations-list.component';
import {AssociationComponent} from './association/association.component';
import {TicketComponent} from './ticket/ticket.component';
import {AssociationsService} from "./_services/associations.service";
import {UserService} from './_services/user.service';
import {TicketsService} from './_services/tickets.service';
import {TokenStorage} from "./_token/token.storage";
import {TokenInterceptor} from "./_interceptor/token-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    AssociationsListComponent,
    AssociationComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    AssociationsService,
    AuthGuard,
    HttpErrorHandler,
    LoginService,
    UserService,
    TicketsService,
    TokenStorage,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
