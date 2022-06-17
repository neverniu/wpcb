import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { FormComponent } from "./form/form.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    imports: [],
    exports: [
        ButtonComponent,
        HeaderComponent,
        FormComponent
    ],
    declarations: [
        ButtonComponent,
        HeaderComponent,
        FormComponent
    ],
    providers: [],
 })
 export class ComponentsModule {
 }