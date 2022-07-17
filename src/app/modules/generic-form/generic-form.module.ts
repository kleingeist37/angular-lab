import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericFormRoutingModule } from './generic-form-routing.module';
import { GenericFormGeneratorComponent } from './components/generic-form-generator/generic-form-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { GenericInputComponent } from './components/generic-form-generator/sub-components/generic-input/generic-input.component';
import { GenericSelectComponent } from './components/generic-form-generator/sub-components/generic-select/generic-select.component';
import { GenericCheckboxComponent } from './components/generic-form-generator/sub-components/generic-checkbox/generic-checkbox.component';
import { GenericGroupComponent } from './components/generic-form-generator/sub-components/generic-group/generic-group.component';


@NgModule({
  declarations: [
    GenericFormGeneratorComponent,
    GenericInputComponent,
    GenericSelectComponent,
    GenericCheckboxComponent,
    GenericGroupComponent
  ],
  imports: [
    CommonModule,
    GenericFormRoutingModule,
    ReactiveFormsModule,

    MaterialModule
  ],
  exports: [
    GenericFormGeneratorComponent
  ]
})
export class GenericFormModule { }
