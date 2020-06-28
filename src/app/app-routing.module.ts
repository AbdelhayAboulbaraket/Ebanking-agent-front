import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client/components/client-list/client-list.component';
import { LoginComponent } from './authentification/components/login/login.component';
import { ClientFormComponent } from './client/components/client-form/client-form.component';
import { AccountListComponent } from './account/components/account-list/account-list.component';
import { AccountFormComponent } from './account/components/account-form/account-form.component';
import { OperatorListComponent } from './operator/components/operator-list/operator-list.component';
import { OperatorFormComponent } from './operator/components/operator-form/operator-form.component';
import { OperationListComponent } from './operation/components/operation-list/operation-list.component';
import { OperationFormComponent } from './operation/components/operation-form/operation-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'clients',
    component: ClientListComponent,
  },
  {
    path: 'clientForm',
    component: ClientFormComponent,
  },
  {
    path: 'client/:id/accounts',
    component: AccountListComponent,
  },
  {
    path: 'client/:id/accountForm',
    component: AccountFormComponent,
  },
  {
    path: 'operators',
    component: OperatorListComponent,
  },
  {
    path: 'operatorForm',
    component: OperatorFormComponent,
  },
  {
    path: 'client/:id/account/:id2/operations',
    component: OperationListComponent,
  },
  {
    path: 'client/:id/account/:id2/operationForm',
    component: OperationFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
