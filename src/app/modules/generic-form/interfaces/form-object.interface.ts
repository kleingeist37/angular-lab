import { ValidatorFn } from "@angular/forms";
import { FormObjectType } from "./form-object-type.enum";

export interface FormObject {
    controlName: string,
    objectType: FormObjectType,
    children?: FormObject[],
    defaultClass?: string,
    defaultValue?: string | boolean | number,
    displayName?: string
    specialValues?: any[],
    validators?: ValidatorFn[],
}
