import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from 'src/app/core/services/guards/noauth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {path: 'auth', canActivate:[NoAuthGuard], component: AuthComponent},
    {path: 'register', canActivate:[NoAuthGuard], component: RegisterComponent},
    {path: '**', redirectTo: '404'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoAuthRoutingModule { }
