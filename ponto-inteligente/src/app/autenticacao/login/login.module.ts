import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, LogarComponent } from './components';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; //Permite a conexão com a API

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FlexLayoutModule } from '@angular/flex-layout'; //Vai nos ajudar a centralizar alguns elementos

import { LoginService } from './services';

@NgModule({
  declarations: [
    LoginComponent, 
    LogarComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
