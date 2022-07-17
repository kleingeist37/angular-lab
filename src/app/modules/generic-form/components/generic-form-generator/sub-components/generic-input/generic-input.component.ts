import { Component, forwardRef, Input, OnInit, Self } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormGroup, FormGroupDirective, NgControl, NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormObjectType } from 'src/app/modules/generic-form/interfaces/form-object-type.enum';
import { FormObject } from 'src/app/modules/generic-form/interfaces/form-object.interface';

@Component({
  selector: 'lab-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss'],
  // providers: [
  //   { 
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => GenericInputComponent),
  //     multi: true
  //   },
  // ]
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class GenericInputComponent {

  form: FormGroup;
  @Input() data!: FormObject;

  constructor(parent : FormGroupDirective) { 
    this.form = parent.form;
  }
  



}
