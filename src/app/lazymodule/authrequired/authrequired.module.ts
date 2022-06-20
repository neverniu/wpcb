import { NgModule } from "@angular/core";
import { ComponentsModule } from "src/app/core/components/components.module";
import { HotelService } from "src/app/core/services/hotel.service";
import { AddHotelComponent } from "./add-hotel/add-hotel.component";
import { AuthRequiredRoutingModule } from "./authrequired-routing.module";
import { HotelComponent } from "./hotel/hotel.component";
import { ProfileComponent } from "./profile/profile.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
    declarations: [
        ProfileComponent,
        SearchComponent,
        HotelComponent,
        AddHotelComponent
    ],
    imports:[
        AuthRequiredRoutingModule,
        ComponentsModule
    ],
    providers: [HotelService],
    bootstrap: []
}
)
export class AuthRequiredModule {
    constructor(){
        let baseStyles = [
            "color: #fff",
            "background-color: #444",
            "padding: 2px 4px",
            "border-radius: 2px"
          ].join(";");
        console.log("%cAuthRequired Module successfuly loaded.", baseStyles);
    }
}