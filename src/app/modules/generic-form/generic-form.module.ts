import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericFormRoutingModule } from './generic-form-routing.module';
import { GenericFormHomeComponent } from './components/generic-form-home/generic-form-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    GenericFormHomeComponent
  ],
  imports: [
    CommonModule,
    GenericFormRoutingModule,
    ReactiveFormsModule,

    MaterialModule
  ]
})
export class GenericFormModule { }
