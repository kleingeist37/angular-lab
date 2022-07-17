import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';
import { FormObject } from 'src/app/modules/generic-form/interfaces/form-object.interface';

@Component({
  selector: 'lab-generic-checkbox',
  templateUrl: './generic-checkbox.component.html',
  styleUrls: ['./generic-checkbox.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class GenericCheckboxComponent {

  form: FormGroup;
  @Input() data!: FormObject;
  
  constructor(parent: FormGroupDirective) { 
    this.form = parent.form;
  }

  public boolConvert(input: any): boolean {
    return Boolean(input);
  }
}
