import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {AuthGuard} from "../_guards";
import {AssociationsListComponent} from "../associations-list/associations-list.component";
import {AssociationComponent} from "../association/association.component";

const routes: Routes = [
  {path: '', canActivate: [AuthGuard], redirectTo: 'index', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'index', canActivate: [AuthGuard], runGuardsAndResolvers: 'always', component: AssociationsListComponent,
    children: [
      {path: ':id', canActivate: [AuthGuard], component: AssociationComponent}
    ]
  },

  // otherwise redirect to home
  {path: '**', canActivate: [AuthGuard], redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
