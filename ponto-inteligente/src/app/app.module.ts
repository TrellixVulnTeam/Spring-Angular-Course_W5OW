import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule, LoginRoutingModule } from './autenticacao';
import { CadastrarPjComponent } from './autenticacao/cadastro-pj/components/cadastrar-pj/cadastrar-pj.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarPjComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LoginModule,
    LoginRoutingModule,

    AppRoutingModule //deve ser o último pois é o pai
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
