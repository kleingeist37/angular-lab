import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { FormObject } from 'src/app/modules/generic-form/interfaces/form-object.interface';

@Component({
  selector: 'lab-generic-group',
  templateUrl: './generic-group.component.html',
  styleUrls: ['./generic-group.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class GenericGroupComponent implements OnInit {

  form: FormGroup;
  @Input() data!: FormObject;


  constructor(parent : FormGroupDirective) { 
    this.form = parent.form;   
  }

  ngOnInit(): void {
    
  }

}
