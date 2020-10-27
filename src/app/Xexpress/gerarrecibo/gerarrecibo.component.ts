import { Component, OnInit } from '@angular/core';
import { ApiDbService } from 'src/app/api/api-db.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Recibo } from '../classe/recibo';
import { ListFuncionarios } from '../classe/list-funcionarios';
import { Contribuintes } from '../classe/contribuintes';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UltimoContribuinte } from '../classe/ultimocontribuinte';

@Component({
  selector: 'app-gerarrecibo',
  templateUrl: './gerarrecibo.component.html',
  styleUrls: ['./gerarrecibo.component.css']
})
export class GerarreciboComponent implements OnInit {

  objFuncionario: ListFuncionarios[] = new Array<ListFuncionarios>();
  contribuinte: Contribuintes = new Contribuintes();
  recibo: Recibo = new Recibo();
  isVisible: Boolean = false;
  formRecibo: FormGroup;
  ultContrib: UltimoContribuinte;

  idContrib: any;
  codMens: any;


  constructor( private apiDb: ApiDbService, private formBuilder: FormBuilder, private datePipe: DatePipe, private route: ActivatedRoute ) { 
    console.log(this.route);
  }

  ngOnInit() {
    this.createForm(new Recibo());
    this.idContrib = this.route.snapshot.paramMap.get('id');
    this.codMens = this.route.snapshot.paramMap.get('codmens');
    this.getOperador();
    //console.log('Código contribuinte: ',this.idContrib);
    //console.log('Código mensageiro: ',this.codMens);

  }

  createForm( recibo: Recibo ) {
    this.formRecibo = this.formBuilder.group({
      dtcobranca:[recibo.dtcobranca],
      valorgerado:[recibo.valorgerado],
      statusrec:[recibo.statusrec],
      codoperador:[recibo.codoperador],
      parcela:[recibo.parcela],
      codcategoria:[recibo.codcategoria],
      observacoes:[this.contribuinte.observacoes],
      via:[recibo.via],
    });
 
  }

  setObjRecibo() {

    this.recibo = new Recibo();

    let newDt = this.formRecibo.value.dtcobranca;
    let dtVenc = new Date(newDt);

    let newCodContrib = parseInt(this.idContrib);
    let newCodMens = parseInt(this.codMens);
    

    this.recibo.nrorecibo = this.recibo.nrorecibo;
    this.recibo.impresso = 'N';
    this.recibo.dtoperacao = new Date();
    this.recibo.statusrec = 'G';
    this.recibo.entrega = this.recibo.entrega;
    this.recibo.formulario = this.recibo.formulario;
    this.recibo.dtcobranca = dtVenc;
    this.recibo.dtrecebimento = this.recibo.dtrecebimento;
    this.recibo.dtbaixa = this.recibo.dtbaixa;
    this.recibo.parcela = this.formRecibo.value.parcela; 
    this.recibo.via = 1;
    this.recibo.valordinheiro = this.recibo.valordinheiro;
    this.recibo.valorcheque = this.recibo.valorcheque;
    this.recibo.valorgerado = this.formRecibo.value.valorgerado;
    this.recibo.doacaoespecial = this.recibo.doacaoespecial;
    this.recibo.parceladoacaoespecial = this.recibo.parceladoacaoespecial;
    this.recibo.aumentodefinitivo = this.recibo.aumentodefinitivo;
    this.recibo.dtoperacaobaixa = this.recibo.dtoperacaobaixa;
    this.recibo.periodicidade = this.recibo.periodicidade;
    this.recibo.codusuario = this.recibo.codusuario;
    this.recibo.codcampanha = this.recibo.codcategoria;
    this.recibo.valoralterado = this.recibo.valoralterado;
    this.recibo.valornaoaltera = this.recibo.valornaoaltera;
    this.recibo.entregaweb = this.recibo.entregaweb;
    this.recibo.dtvaloralteradobaixa = this.recibo.dtvaloralteradobaixa;
    this.recibo.valorbakp = this.recibo.valorbakp;
    this.recibo.valorhorabkp = this.recibo.valorhorabkp;
    this.recibo.valordatabkp = this.recibo.valordatabkp;
    this.recibo.codusuarioqld = this.recibo.codusuarioqld
    this.recibo.dataqld = this.recibo.dataqld;
    this.recibo.codatendimento = this.recibo.codatendimento;
    this.recibo.naorecebido = this.recibo.naorecebido;
    this.recibo.nrosorte = this.recibo.nrosorte;
    this.recibo.motivodevol = this.recibo.motivodevol;
    this.recibo.dtremarc = this.recibo.dtremarc;
    this.recibo.operadoraboleto = this.recibo.operadoraboleto;
    this.recibo.parcelaremarcada = this.recibo.parcelaremarcada;
    this.recibo.valorremarcado = this.recibo.valorremarcado;
    this.recibo.mesanoref = this.recibo.mesanoref;
    this.recibo.operadoraremarc = this.recibo.operadoraremarc;
    this.recibo.usuarioremarc = this.recibo.usuarioremarc
    this.recibo.operadoradeposito = this.recibo.operadoradeposito;
    this.recibo.inseriucofrinho = this.recibo.inseriucofrinho;
    this.recibo.reagendado = this.recibo.reagendado;
    this.recibo.dtreagendamento = this.recibo.dtreagendamento;
    this.recibo.codoperador = this.formRecibo.value.codoperador;
    this.recibo.codmensageiro = newCodMens;
    this.recibo.codcategoria = this.formRecibo.value.codcategoria;
    this.recibo.codcontrib = newCodContrib;


  }

  getOperador() {
    this.apiDb.getApiDbOperadores().subscribe(
      resp => {
        this.objFuncionario = resp;
      },error=>{
        console.log(error);
      });
  }

  getApiDbUltContrib(){
    this.apiDb.getApiDbUltContrib().subscribe( resp=> {
      this.ultContrib = resp;
    },error=>{
      console.log(error);
    });
  }

  getApiDbPostRecibo(){
    this.apiDb.getApiDbPostRecibo(this.recibo)
    .subscribe(()=>{
      alert('Recibo inserido com sucesso!');
      // this.isVisible = true;

    },error=>{
      console.log(error)
    });
  }

  salvar(){

    this.setObjRecibo();

    if (confirm('Deseja cadastrar o recibo? ')) {
      console.log(this.recibo);
      this.getApiDbPostRecibo();
    }
  }

    // Funções acessórias
    limparCampos() {

      if (confirm('Deseja limpar os dados do formulario? ')) {
        this.formRecibo.reset();
      }
    }

    onSubmit(){

      if (confirm('Deseja cadastrar esse contribuinte? ')) {
        console.log(this.formRecibo.value);
      }
    }

}
