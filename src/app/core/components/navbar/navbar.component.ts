import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'src/app/app-routes.enum';
import { NavElement } from 'src/app/shared/interfaces/nav-element.interface';

@Component({
  selector: 'lab-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private defaultClass: string = 'nav-element';
  private activeClass: string = 'nav-active';

  public navElements: NavElement[]= [
    { 
      id: 'nav-home', 
      route: '',  
      displayName: 'Home', 
      icon: 'home', 
      activeClass: this.activeClass, 
      defaultClass: this.defaultClass
    },
    { 
      id: 'nav-genericForm', 
      route: `/${AppRoutes.GenericForm}`,  
      displayName: 'Generic Form', 
      icon: 'edit_note', 
      activeClass: this.activeClass, 
      defaultClass: this.defaultClass
    },
  ];

  constructor() { }  
}
