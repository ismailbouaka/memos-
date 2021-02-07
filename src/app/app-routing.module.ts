import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersoPageComponent } from './perso-page/perso-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'memos', pathMatch: 'full' },
  { path: 'users', component: AdminPageComponent },
  { path: 'memos', component: PersoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
