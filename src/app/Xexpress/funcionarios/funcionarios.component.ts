import { Component, OnInit } from '@angular/core';
import { ApiDbService } from 'src/app/api/api-db.service';
import { Funcionarios } from '../classe/funcionarios';
// import { HttpErrorResponse } from '@angular/common/http';
// import { element } from 'protractor';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  public objFuncionario: Funcionarios = new Funcionarios();
  nome: string;
  isVisible: Boolean = false;

  constructor(private apiDb: ApiDbService) { }

  ngOnInit() {

  }


  getFuncionarioPorNome() {
      this.apiDb.getApiDbFuncionarioPorNome(this.nome)
        .subscribe(resp => {
          this.objFuncionario = resp;
          this.isVisible = false;
          console.log("Usuário: ", this.objFuncionario);
        },error => {
          this.isVisible = true;   
          console.log(error);
          alert("POR FAVOR DIGITE O NOME COMPLETO!");  
      });
          
  }

  buscarFuncionario() {
    this.getFuncionarioPorNome();
  }


  public clear() {
    
    this.objFuncionario.nome = null;
    this.objFuncionario.bairro = null;
    this.objFuncionario.cep = null;
    this.objFuncionario.cidade = null;
    this.objFuncionario.complemento = null;
    this.objFuncionario.endereco = null;
    this.objFuncionario.numero = null;
    this.objFuncionario.observacoes = null;
    this.objFuncionario.telefone = null;
    this.objFuncionario.uf = null;
  }


}
