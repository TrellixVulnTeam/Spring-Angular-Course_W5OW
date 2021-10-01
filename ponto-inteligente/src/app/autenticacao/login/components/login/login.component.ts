import { Component, OnInit } from '@angular/core';

//FormBuilder - Ajuda a criar o mapeamento do formulário
//FormGroup - Agrupar os componentes (no caso email e senha)
//Validators - Validações
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

//MatSnackBar - Exibir mensagens de erro e sucesso na tela
import { MatSnackBar } from '@angular/material/snack-bar';

import { Login } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form!: FormGroup;
  
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) { 
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
      this.snackBar.open("Dados inválidos", "Erro", {duration: 5000});
      return;
    }
    const login : Login = this.form.value; //Adicionando os dados do formulário na classe login
    //alert(JSON.stringify(this.form.value));
    alert(JSON.stringify(login));

  }
}
