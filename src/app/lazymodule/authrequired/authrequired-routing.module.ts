import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { HotelComponent } from './hotel/hotel.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {path: 'search', component: SearchComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'hotel', component: HotelComponent},
    {path: 'add-hotel', component: AddHotelComponent},
    {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRequiredRoutingModule { }
