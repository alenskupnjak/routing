import { NgModule} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { DetaljlisteComponent } from './lista/lista/detaljliste/detaljliste.component';
import { ListaComponent } from './lista/lista/lista.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerReslover } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}
  ]},

  {path: 'servers',
  // canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  component: ServersComponent,
  children: [
    {path: ':id', component: ServerComponent, resolve: {server: ServerReslover}},
    {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
  ]},
  {path: 'lista', component: ListaComponent},
  {path: 'lista/:id/:name/:status', component: DetaljlisteComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  {path: 'not-found', component: PageNotFoundComponent},

  // '**' mora biti zadnji u nizu !!!
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
 imports: [
   RouterModule.forRoot(appRoutes)
 ],
 exports: [RouterModule]
})

export class AppRoutingModule {

}
