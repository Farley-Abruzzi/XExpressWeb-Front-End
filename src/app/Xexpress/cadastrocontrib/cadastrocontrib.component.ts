import { Component ,OnInit } from '@angular/core';
import { Contribuintes } from '../classe/contribuintes';
import { ListFuncionarios } from '../classe/list-funcionarios';
import { ApiDbService } from 'src/app/api/api-db.service';
import { FormGroup ,FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UltimoContribuinte } from '../classe/ultimocontribuinte';


@Component({
  selector: 'app-cadastrocontrib',
  templateUrl: './cadastrocontrib.component.html',
  styleUrls: ['./cadastrocontrib.component.css']
})
export class CadastrocontribComponent implements OnInit {

  constructor(private apiDb: ApiDbService, private formBuilder: FormBuilder, private datePipe: DatePipe) { }

  objFuncionario: ListFuncionarios[] = new Array<ListFuncionarios>();
  contribuinte: Contribuintes = new Contribuintes();
  isVisible: Boolean = false;
  formContribuinte: FormGroup //agrupador de controles
  ultContrib: UltimoContribuinte;


  ngOnInit() {

    this.createForm(new Contribuintes());
    this.getMensageiro();
  }



  createForm(contribuinte: Contribuintes){

    this.formContribuinte = this.formBuilder.group({
      tipofj:[contribuinte.tipofj],
      nomenorecibo:[contribuinte.nomenorecibo],
      contribemail:[contribuinte.contribemail],
      sexo:[contribuinte.sexo],
      cpfcontrib:[contribuinte.cpfcontrib],
      dtnasc:[contribuinte.dtnasc],
      codstatus:[contribuinte.codstatus],
      codcategoria:[contribuinte.codcategoria],
      codmensageiro:[contribuinte.codmensageiro],
      enderecoprincipal:[contribuinte.enderecoprincipal],
      numeroprincipal:[contribuinte.numeroprincipal],
      compleprincipal:[contribuinte.compleprincipal],
      bairroprincipal:[contribuinte.bairroprincipal],
      cidadeprincipal:[contribuinte.cidadeprincipal],
      ufprincipal:[contribuinte.ufprincipal],
      cepprincipal:[contribuinte.cepprincipal],
      telefoneprincipal:[contribuinte.telefoneprincipal],
      telefonesecundario:[contribuinte.telefonesecundario],
      observacoes:[contribuinte.observacoes]
    });

  }

  setObj(){

    this.contribuinte = new Contribuintes();

    let newDate = this.formContribuinte.value.dtnasc;
    let dataNasc = new Date(newDate);

    this.contribuinte.tipofj = this.formContribuinte.value.tipofj;
    this.contribuinte.nomenorecibo = this.formContribuinte.value.nomenorecibo;
    this.contribuinte.contribemail = this.formContribuinte.value.contribemail;
    this.contribuinte.sexo = this.formContribuinte.value.sexo;
    this.contribuinte.cpfcontrib = this.formContribuinte.value.cpfcontrib;
    this.contribuinte.dtnasc = dataNasc;
    this.contribuinte.codstatus = this.formContribuinte.value.codstatus;
    this.contribuinte.codcategoria = this.formContribuinte.value.codcategoria;
    this.contribuinte.codmensageiro = this.formContribuinte.value.codmensageiro;
    this.contribuinte.enderecoprincipal = this.formContribuinte.value.enderecoprincipal;
    this.contribuinte.numeroprincipal = this.formContribuinte.value.numeroprincipal;
    this.contribuinte.compleprincipal = this.formContribuinte.value.compleprincipal;
    this.contribuinte.bairroprincipal = this.formContribuinte.value.bairroprincipal;
    this.contribuinte.cidadeprincipal = this.formContribuinte.value.cidadeprincipal;
    this.contribuinte.ufprincipal = this.formContribuinte.value.ufprincipal;
    this.contribuinte.cepprincipal = this.formContribuinte.value.cepprincipal;
    this.contribuinte.telefoneprincipal = this.formContribuinte.value.telefoneprincipal;
    this.contribuinte.telefonesecundario = this.formContribuinte.value.telefonesecundario;
    this.contribuinte.observacoes = this.formContribuinte.value.observacoes;
    this.contribuinte.stsistema = 2;
    this.contribuinte.codfunc = 73;

    this.contribuinte.enderecosecundario = this.contribuinte.enderecoprincipal;
    this.contribuinte.numeroprincipal = this.contribuinte.numeroprincipal;
    this.contribuinte.complesecundario = this.contribuinte.compleprincipal;
    this.contribuinte.bairrosecundario = this.contribuinte.bairroprincipal;
    this.contribuinte.cidadesecundario = this.contribuinte.cidadeprincipal;
    this.contribuinte.ufsecundario = this.contribuinte.ufprincipal;
    this.contribuinte.cepsecundario = this.contribuinte.cepprincipal;
    this.contribuinte.telefonesecundario = this.contribuinte.telefoneprincipal;
    this.contribuinte.nome = this.contribuinte.nomenorecibo;
    this.contribuinte.dtcadastro = new Date();
    this.contribuinte.horacadastro = this.datePipe.transform(new Date(), 'HH:mm:ss');
    this.contribuinte.dataultligacao = new Date();
    this.contribuinte.bckpbairrocobranca = this.contribuinte.bairroprincipal;


  }
  
  

  getMensageiro() {
    this.apiDb.getApiDbMensageiros().subscribe(
      resp => {
        this.objFuncionario = resp;
      }
    )
  }

  getApiDbPostContribuinte(){
    this.apiDb.getApiDbPostContribuinte(this.contribuinte)
    .subscribe(resp=>{
      alert('Contribuinte inserido com sucesso!')
      this.getApiDbUltContrib();
      this.isVisible = true;

    },error=>{
      console.log(error)
    })
  }

  getApiDbUltContrib(){
    this.apiDb.getApiDbUltContrib().subscribe(resp=>{
      this.ultContrib = resp;
    },error=>{
      console.log(error);
    });
  }

  salvar(){

    this.setObj()

    if (confirm('Deseja cadastrar o contribuinte? ')) {
      console.log(this.contribuinte);
      this.getApiDbPostContribuinte();
    }
  }

    // Funções acessórias
    limparCampos() {

      if (confirm('Deseja limpar os dados do formulario? ')) {
        this.formContribuinte.reset()
      }  
    }

    onSubmit(){

      if (confirm('Deseja cadastrar esse contribuinte? ')) {
        console.log(this.formContribuinte.value)
      }
    }
}
