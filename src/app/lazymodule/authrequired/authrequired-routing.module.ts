import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/services/auth-guard.service';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { HotelComponent } from './hotel/hotel.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {path: 'search', canActivate: [AuthGuard], component: SearchComponent},
    {path: 'profile', canActivate: [AuthGuard], component: ProfileComponent},
    {path: 'hotel', canActivate: [AuthGuard], component: HotelComponent},
    {path: 'add-hotel', canActivate: [AuthGuard], component: AddHotelComponent},
    {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRequiredRoutingModule { }
