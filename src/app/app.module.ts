import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperatorModule } from './operator/operator.module';
import { OperationModule } from './operation/operation.module';
import { ClientModule } from './client/client.module';
import { AccountModule } from './account/account.module';
import { AuthentificationModule } from './authentification/authentification.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OperatorModule,
    OperationModule,
    ClientModule,
    AccountModule,
    AuthentificationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
