import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "src/app/core/components/components.module";
import { AuthComponent } from "./auth/auth.component";
import { NoAuthRoutingModule } from "./noauth-routing.module";
import { RegisterComponent } from "./register/register.component";
import { NoAuthGuard } from "src/app/core/services/guards/noauth-guard.service";

@NgModule({
    declarations: [
        RegisterComponent,
        AuthComponent
    ],
    imports:[
        NoAuthRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
    providers: [NoAuthGuard],
    bootstrap: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
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