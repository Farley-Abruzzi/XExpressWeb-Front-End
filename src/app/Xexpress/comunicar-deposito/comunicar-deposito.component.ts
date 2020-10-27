import { Component, OnInit } from '@angular/core';
import { ApiDbService } from 'src/app/api/api-db.service';
import { DatePipe } from '@angular/common';
import { Depositos } from 'src/app/Xexpress/classe/depositos';

@Component({
  selector: 'app-comunicar-deposito',
  templateUrl: './comunicar-deposito.component.html',
  styleUrls: ['./comunicar-deposito.component.css']
})
export class ComunicarDepositoComponent implements OnInit {

  deposito: Depositos = new Depositos();
  dtDeposito: Date = new Date();
  dtDepFim = new Date(this.dtDeposito.getFullYear(), this.dtDeposito.getMonth() + 1, 0);
  dtFech: string = " ";
  entity: string = " ";
  codValid: number;
  valorDesp: number;
  detailDesp: string;

  isVisible: Boolean = false;

  constructor( private apiDb: ApiDbService, private datePipe: DatePipe ) { 

  }

  ngOnInit() {
    this.isVisible = true;
  }

  selectDtDeposito(dtDeposito) {
    this.dtFech = dtDeposito;
    console.log("Data de fechamento: ", this.datePipe.transform(this.dtFech, "yyyy-MM-dd"));
  }

  selectByEntity(entidade) {
    this.entity = entidade;
    console.log("Entidade: ", this.entity);
  }

  selectByCodValidacao(codvalidacao) {
    this.codValid = codvalidacao;
    console.log("Código de validação: ", this.codValid);
  }

  selectByValorDespesa(valorDespesa) {
    this.valorDesp = valorDespesa;
  }

  selectByDetailDespesa(detalhamentoDespesa) {
    this.detailDesp = detalhamentoDespesa;
  }

  setObjDeposito() {
    this.deposito = new Depositos();

    let newDate = this.dtFech;
    let dataFechamento = new Date(newDate);

    this.deposito.dtfechamento = dataFechamento;
    this.deposito.codvalidacao = this.codValid;
    this.deposito.valordeposito = 1746;
    this.deposito.entidade = this.entity;
    this.deposito.codusuario = 70026;
    this.deposito.codmensageiro = 345;
    this.deposito.totalarrecadado = 1745;
    this.deposito.qtdrecibos = null;
    this.deposito.valordespesa = this.valorDesp;
    this.deposito.descricaodespesa = this.detailDesp;

    if (this.deposito.valordespesa !== null) {
      this.deposito.valordeposito =  this.deposito.valordeposito - this.deposito.valordespesa;
      console.log('VALOR DEPOSITO: ', this.deposito.valordeposito); 
    }

  }

  getApiDbPostDepositos(){
    this.apiDb.getApiDbPostDepositos(this.deposito)
    .subscribe(resp=>{
      alert('Deposito inserido com sucesso!')

    },error=>{
      alert('VALOR DO DEPOSITO INCORRETO')
      console.log(error)
    });
  }

  salvar(){
    this.setObjDeposito();

    if (confirm('Deseja comunicar esse deposito? ')) {
      console.log("Obj Deposito: ",this.deposito);
      this.getApiDbPostDepositos();
    }
  }

  // onSubmit(){

  //   if (confirm('Deseja comunicar esse deposito? ')) {
  //     console.log("Obj Deposito: ",this.deposito);
  //   }
  // }
}
