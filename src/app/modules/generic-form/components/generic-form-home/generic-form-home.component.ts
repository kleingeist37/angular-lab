import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormObjectType } from '../../interfaces/form-object-type.enum';
import { FormObject } from '../../interfaces/form-object.interface';
import { GenericForm } from '../../static/generic-form.static';

@Component({
  selector: 'lab-generic-form-home',
  templateUrl: './generic-form-home.component.html',
  styleUrls: ['./generic-form-home.component.scss']
})
export class GenericFormHomeComponent implements OnInit {

  private defaultClass: string = 'form-item'

  genericForm!: FormGroup;

  //region #children of corn
  childrenOfCorn : FormObject[] = [
    {
      objectType: FormObjectType.Input, 
      controlName: 'theSpeaker',
      displayName: 'The Speaker',
      defaultClass: this.defaultClass,
      defaultValue: 'Isaak',
      validators: [Validators.required],
    },
    {
      objectType: FormObjectType.Input, 
      controlName: 'theOtherGuy',
      displayName: 'The other Guy',
      defaultClass: this.defaultClass,
      defaultValue: 'Malachai',
      validators: [Validators.required],
    },
    
  ];
  //#endregion
  
  //TODO Create Delegates for CallBack Functions (Buttons, eventListener etc.)
  formObjects: FormObject[] = [
    {
      objectType: FormObjectType.Input, 
      controlName: 'firstName',
      displayName: 'First Name',
      defaultValue: 'Snippy',
      defaultClass: this.defaultClass,
      validators: [Validators.required],
    },
    {
      objectType: FormObjectType.Select, 
      controlName: 'gender',
      displayName: 'Gender',
      defaultClass: this.defaultClass,
      validators: [Validators.required],
      objectValues: [
        'male',
        'female',
        'neutral'
      ]
    },
    {
      objectType: FormObjectType.CheckBox, 
      controlName: 'confirm',
      displayName: 'I confirm this confirmation',
      defaultClass: this.defaultClass,
      defaultValue: false,
      validators: [Validators.requiredTrue],
    },
    {
      objectType: FormObjectType.Group, 
      controlName: 'cornfield',
      displayName: 'The Cornfield',
      defaultClass: this.defaultClass,
      children: this.childrenOfCorn,
    },
  ];



  constructor() { }

  ngOnInit(): void {
    this.initialzeForm();
  }

  public boolConvert(input : any): boolean {
    return Boolean(input);
  }

  private initialzeForm(){
    this.genericForm = GenericForm.generateForm(this.formObjects); //new FormGroup({});
    // console.log(this.genericForm);

  }

}
