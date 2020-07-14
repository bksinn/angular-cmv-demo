import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotUsernameComponent } from './forgot-username/forgot-username.component';
import { AuthGuardService as AuthGuard} from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'phones', component: PhonesComponent, canActivate: [AuthGuard]  },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AuthGuard]  },
  { path: 'forgot-username', component: ForgotUsernameComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
