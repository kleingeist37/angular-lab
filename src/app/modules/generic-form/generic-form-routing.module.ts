import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericFormGeneratorComponent } from './components/generic-form-generator/generic-form-generator.component';

const routes: Routes = [
  {path: '', component: GenericFormGeneratorComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericFormRoutingModule { }
