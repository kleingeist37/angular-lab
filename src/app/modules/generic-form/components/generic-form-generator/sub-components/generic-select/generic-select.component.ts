import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';
import { FormObject } from 'src/app/modules/generic-form/interfaces/form-object.interface';

@Component({
  selector: 'lab-generic-select',
  templateUrl: './generic-select.component.html',
  styleUrls: ['./generic-select.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class GenericSelectComponent {
  form: FormGroup;
  @Input() data!: FormObject;

  constructor(parent: FormGroupDirective) { 
    this.form = parent.form;
  }

}
