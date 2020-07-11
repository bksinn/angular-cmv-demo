import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'phones', component: PhonesComponent },
  { path: 'support', component: SupportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
