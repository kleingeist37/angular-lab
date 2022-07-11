import { FnParam } from '@angular/compiler/src/output/output_ast';
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

  //TODO Create Delegates for CallBack Functions (Buttons, eventListener etc.)
  formObjects: FormObject[] = [
    {
      objectType: FormObjectType.Input, 
      controlName: 'firstName',
      displayName: 'Vorname',
      defaultValue: 'Mario',
      defaultClass: this.defaultClass,
      validators: [Validators.required],
    },
    {
      objectType: FormObjectType.Select, 
      controlName: 'gender',
      displayName: 'Geschlecht',
      defaultClass: this.defaultClass,
      validators: [Validators.required],
      specialValues: [
        'male',
        'female',
        'neutral'
      ]
    },
    {
      objectType: FormObjectType.CheckBox, 
      controlName: 'stinky',
      displayName: 'Ich bestätige hiermit, dass ich nicht stinke',
      defaultClass: this.defaultClass,
      defaultValue: false,
      validators: [Validators.requiredTrue],
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.initialzeForm();
  }

  public boolConvert(input : any): boolean {
    return Boolean(input);
  }

  private initialzeForm(){
    this.genericForm = new FormGroup({});

    //todo: create recursive version for generic groups
    for(let i = 0; i < this.formObjects.length; i++){
      let currentObj = this.formObjects[i];
      

      switch(currentObj.objectType){
        
        case FormObjectType.CheckBox:
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
