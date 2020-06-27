import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorRoutingModule } from './operator-routing.module';
import { OperatorListComponent } from './components/operator-list/operator-list.component';
import { OperatorFormComponent } from './components/operator-form/operator-form.component';
import { OperatorItemComponent } from './components/operator-item/operator-item.component';

@NgModule({
  declarations: [
    OperatorListComponent,
    OperatorFormComponent,
    OperatorItemComponent,
  ],
  imports: [CommonModule, OperatorRoutingModule, SharedModule],
})
export class OperatorModule {}
