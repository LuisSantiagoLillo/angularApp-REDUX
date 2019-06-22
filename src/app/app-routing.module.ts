import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// PAGES COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'settings', component: SettingsComponent},

  // Default routes
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: '**', pathMatch: 'full', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
