import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './core/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./lazymodule/noauth/noauth.module').then(m => m.NoAuthModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./lazymodule/authrequired/authrequired.module').then(m => m.AuthRequiredModule)
  },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
