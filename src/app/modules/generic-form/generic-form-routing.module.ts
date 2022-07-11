import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericFormHomeComponent } from './components/generic-form-home/generic-form-home.component';

const routes: Routes = [
  {path: '', component: GenericFormHomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericFormRoutingModule { }
