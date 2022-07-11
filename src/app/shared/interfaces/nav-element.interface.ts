import { Params } from "@angular/router";
import { Base } from "./base.interface";

export interface NavElement extends Base {
    displayName: string;
    route: string;
    params?: Params;
    icon?: string;
    activeClass?: string;
}
