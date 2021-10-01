import { Component, OnInit } from '@angular/core';

//FormBuilder - Ajuda a criar o mapeamento do formulário
//FormGroup - Agrupar os componentes (no caso email e senha)
//Validators - Validações
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

//MatSnackBar - Exibir mensagens de erro e sucesso na tela
import { MatSnackBar } from '@angular/material/snack-bar';

import { Login } from '../../models';
import { LoginService } from 'src/app/autenticacao';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form!: FormGroup;
  
  constructor(private fb: FormBuilder, 
    private snackBar: MatSnackBar, 
    private router: Router, 
    private loginService: LoginService) { 
  }

  ngOnInit(){
    this.gerarForm();
  }

  gerarForm(){
    this.form = this.fb.group({
      //O primeiro parâmetro é o valor padrão do campo, no nosso caso deve começar vazio
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar(){
    if(this.form.invalid){
      //this.snackBar.open("Dados inválidos", "Erro", {duration: 5000});
      return;
    }
    //const login : Login = this.form.value; //Adicionando os dados do formulário na classe login
    //alert(JSON.stringify(this.form.value));
    //alert(JSON.stringify(login));
    //alert('Email: ' + login.email + ', Senha: ' + login.senha);
    const login: Login = this.form.value;
    this.loginService.logar(login)
      .subscribe(//é o método que lida com o observable (é o método de escuta, ele que aguarda o retorno do servidor)
        data => { //Caso dê sucesso: recebemos data, que é o que o servidor retorna
          console.log(JSON.stringify(data));//Imprimindo o que o servidor retorna (que basicamente é o token da aplicação com + algumas infos)
          localStorage['token'] = data['data']['token']; //armazenando o token
          const usuarioData = JSON.parse(atob(data['data']['token'].split('.')[1])); //extraindo o perfil do usuário //atob -> decoder de base64
          console.log(JSON.stringify(usuarioData));
          if (usuarioData['role'] == 'ROLE_ADMIN') {
          	alert('Deve redirecionar para a página de admin');
            //this.router.navigate(['/admin']);
          } else {
          	alert('Deve redirecionar para a página de funcionário');
            //this.router.navigate(['/funcionario']);
          }
        },
        err => {//Caso dê erro: recebemos 
          console.log(JSON.stringify(err));
          let msg: string = "Tente novamente em instantes.";
          if (err['status'] == 401) {
            msg = "Email/senha inválido(s)."
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );

  }
}
