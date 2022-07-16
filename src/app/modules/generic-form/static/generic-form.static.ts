import { FormControl, FormGroup } from "@angular/forms";
import { FormObjectType } from "../interfaces/form-object-type.enum";
import { FormObject } from "../interfaces/form-object.interface";

export class GenericForm {

    public static generateForm(formObjects: FormObject[]) : FormGroup {
        const genericForm = new FormGroup({});

      
        for(let i = 0; i < formObjects.length; i++){
            const currentObj = formObjects[i];            
            switch(currentObj.objectType){
            
            case FormObjectType.Group:                
                if(currentObj.children !== undefined){
                    const theChildren: FormObject[] = currentObj.children ?? []; //todo: ... find better solution.  
                    const group = this.generateForm(theChildren);
                    genericForm.setControl(currentObj.controlName, group);
                }                
                break;

            case FormObjectType.FormArray:
                // ??? same as group? -> research
                break;


            default:
                genericForm.addControl(
                                currentObj.controlName, 
                                new FormControl(
                                    currentObj.defaultValue, 
                                    currentObj.validators
                                    )
                                );
                break;
            
            
            
            }
        }


        return genericForm;
    }
}
