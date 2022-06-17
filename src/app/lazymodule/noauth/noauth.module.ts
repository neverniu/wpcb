import { NgModule } from "@angular/core";
import { ButtonComponent } from "src/app/core/components/button/button.component";
import { ComponentsModule } from "src/app/core/components/components.module";
import { AboutComponent } from "./about/about.component";
import { AuthComponent } from "./auth/auth.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { NoAuthRoutingModule } from "./noauth-routing.module";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        ContactComponent,
        RegisterComponent,
        AuthComponent
    ],
    imports:[
        NoAuthRoutingModule,
        ComponentsModule
    ],
    providers: [],
    bootstrap: [],
}
)
export class NoAuthModule {
    constructor(){
        let baseStyles = [
            "color: #fff",
            "background-color: #444",
            "padding: 2px 4px",
            "border-radius: 2px"
          ].join(";");
        console.log("%cNoAuth Module successfuly loaded.", baseStyles);
    }
}