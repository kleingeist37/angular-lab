import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app-routes.enum';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {path: AppRoutes.Home, component: HomeComponent, pathMatch: 'full'},
  {path: AppRoutes.GenericForm, loadChildren: () => import('./modules/generic-form/generic-form.module').then(m => m.GenericFormModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
