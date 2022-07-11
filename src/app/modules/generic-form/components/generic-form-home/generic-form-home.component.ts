import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormObjectType } from '../../interfaces/form-object-type.enum';
import { FormObject } from '../../interfaces/form-object.interface';

@Component({
  selector: 'lab-generic-form-home',
  templateUrl: './generic-form-home.component.html',
  styleUrls: ['./generic-form-home.component.scss']
})
export class GenericFormHomeComponent implements OnInit {

  private defaultClass: string = 'form-item'

  genericForm!: FormGroup;

  formObjects: FormObject[] = [
    {
      objectType: FormObjectType.Input, 
      controlName: 'firstName',
      displayName: 'Vorname',
      defaultClass: this.defaultClass,
      hasChildren: false,
      validators: [Validators.required],
    },
    {
      objectType: FormObjectType.Select, 
      controlName: 'gender',
      displayName: 'Geschlecht',
      defaultClass: this.defaultClass,
      hasChildren: false,
      validators: [Validators.required],
      specialValues: [
        'male',
        'female',
        'neutral'
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.initialzeForm();
  }

  private initialzeForm(){
    this.genericForm = new FormGroup({});

    for(let i = 0; i < this.formObjects.length; i++){
      let currentObj = this.formObjects[i];
      
      //todo: create recursive version for generic groups
      switch(this.formObjects[i].objectType){
        
        case FormObjectType.Select:
        case FormObjectType.Input:
          this.genericForm.addControl(
                            currentObj.controlName, 
                            new FormControl(
                                currentObj.defaultValue, 
                                currentObj.validators
                              )
                            );
          break;
       
         
      
        }
    }

  }

}
