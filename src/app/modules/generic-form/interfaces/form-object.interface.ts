import { ValidatorFn } from "@angular/forms";
import { FormObjectType } from "./form-object-type.enum";

export interface FormObject {
    objectType: FormObjectType,
    controlName: string,
    hasChildren: boolean,
    children?: [],
    defaultClass?: string,
    defaultValue?: string | boolean | number,
    displayName?: string
    specialValues?: any[],
    validators?: ValidatorFn[],


}
