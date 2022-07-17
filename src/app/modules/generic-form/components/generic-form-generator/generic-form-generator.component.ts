import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormObjectType } from '../../interfaces/form-object-type.enum';
import { FormObject } from '../../interfaces/form-object.interface';
import { GenericForm } from '../../static/generic-form.static';

@Component({
  selector: 'lab-generic-form-generator',
  templateUrl: './generic-form-generator.component.html',
  styleUrls: ['./generic-form-generator.component.scss']
})
export class GenericFormGeneratorComponent implements OnInit {

  private defaultClass: string = 'form-item'

  genericForm!: FormGroup;

  @Input() formData: FormObject[] = [];
  @Input() formChildren: FormObject[][] = [[]];


  theChildren : FormObject[] = [
    {
      objectType: FormObjectType.Input, 
      controlName: 'theChild',
      displayName: 'The Child',
      defaultClass: this.defaultClass,
      defaultValue: 'Milhouse',
      validators: [Validators.required],
    },
    {
      objectType: FormObjectType.Input, 
      controlName: 'theCoolerChild',
      displayName: 'The cooler Child',
      defaultClass: this.defaultClass,
      defaultValue: 'Thrillhouse',
      validators: [Validators.required],
    },
    // {
    //   objectType: FormObjectType.Group, 
    //   controlName: 'kidsClub',
    //   displayName: 'kidsClub',
    //   defaultClass: this.defaultClass,
    //   //children: this.kidsClub

    // },
    
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
      objectType: FormObjectType.Input, 
      controlName: 'lastName',
      displayName: 'Last Name',
      defaultValue: 'Snippington',
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
      controlName: 'childGroup',
      displayName: 'The Kindergardeners',
      defaultClass: this.defaultClass,
      children: this.theChildren,
    },
  ];


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialzeForm();
  }

  public boolConvert(input: any): boolean {
    return Boolean(input);
  }

  private initialzeForm(){
    this.genericForm = GenericForm.generateForm(this.formObjects);
    // this.genericForm = this.fb.group({
    //   corn: this.fb.group({
    //     theSpeaker: ['isaak', Validators.required],
    //     theOtherGuy: ['Malachai'],
    //   })
    // }) 
  }

  public submit() : void {
    console.log(this.genericForm);
  }

}
