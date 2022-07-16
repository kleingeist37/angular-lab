import { FormControl, FormGroup } from "@angular/forms";
import { FormObjectType } from "../interfaces/form-object-type.enum";
import { FormObject } from "../interfaces/form-object.interface";

export class GenericForm {


    public static generateForm(formObjects: FormObject[]) : FormGroup {
        const genericForm = new FormGroup({});
        //todo: create recursive version for generic groups
        for(let i = 0; i < formObjects.length; i++){
            let currentObj = formObjects[i];
            

            switch(currentObj.objectType){
            
            case FormObjectType.Group:
                //Call Function again -> recursive magic
                break;

            case FormObjectType.FormArray:
                // ??? same as group? -> Recherche
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
    //schrott für den moment
    // public static buildForm(formObjects : FormObject[]){
    //     let myChildren: number = 0;
    //     for(let i = 0; i < formObjects.length; i++){
    //         if(i === 0 || formObjects[i].isChild){
    //             let formGroup = new FormGroup({});
    //             let children = [];
    //             let j = 0;
    //             while(formObjects[i].isChild){
    //                 children.push(formObjects[i]);
    //                 children[j].isChild = false;
    //                 j++;
    //                 i++;
    //             }

    //         }
    //     }

    // }
}
