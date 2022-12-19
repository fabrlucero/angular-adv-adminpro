import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: {titulo: 'ProgressBar'} },
      { path: 'grafica1', component: GraficalComponent, data: {titulo: 'Grafica'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajuste de cuenta'}},
      { path: 'promesa', component: PromesaComponent, data: {titulo: 'Promesas'}},
      { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rjxs'}},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
