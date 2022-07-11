import { FormGroup } from "@angular/forms";
import { FormObjectType } from "../interfaces/form-object-type.enum";
import { FormObject } from "../interfaces/form-object.interface";

export class GenericForm {

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
