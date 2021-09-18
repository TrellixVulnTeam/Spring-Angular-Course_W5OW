import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent, LogarComponent } from "./components";

export const LoginRoutes: Routes = [ //criando array de rotas
    {
        path: 'login', //Vai ser acessado quando acessarmos /login
        component: LogarComponent,
        children: [{path: '', component: LoginComponent}] //Filhos do LogarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(LoginRoutes)],
    exports: [RouterModule]
})

export class LoginRoutingModule {
}
