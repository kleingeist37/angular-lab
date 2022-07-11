import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericFormRoutingModule } from './generic-form-routing.module';
import { GenericFormHomeComponent } from './components/generic-form-home/generic-form-home.component';


@NgModule({
  declarations: [
    GenericFormHomeComponent
  ],
  imports: [
    CommonModule,
    GenericFormRoutingModule
  ]
})
export class GenericFormModule { }
