import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //acesso à API externa de modo assíncrono (A requisição não irá bloquear a aplicação)
import { HttpClient } from '@angular/common/http'; //Módulo responsável pelo acesso Http à API externa
import { environment as env } from 'src/environments/environment';

import { Login } from '../';

@Injectable()
export class LoginService {
  private readonly PATH: string = 'auth';

  constructor(private http: HttpClient) { }

  logar(login: Login): Observable<any>{ 
    //Método que recebe um Login e retorna um Observable, pois no controller devemos executar um subscribe (Que seria ficar em modo de escuta)
    return this.http.post(env.baseUrl + this.PATH, login);
  }
}
