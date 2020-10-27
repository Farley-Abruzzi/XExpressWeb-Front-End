import { Component, OnInit } from '@angular/core';
import { RecebidoMensageiro } from '../classe/recebidomensageiro';
import { ApiDbService } from '../../api/api-db.service';
import { DatePipe } from '@angular/common';
import { ListFuncionarios } from '../classe/list-funcionarios';

@Component({
  selector: 'app-recebido-mensageiro',
  templateUrl: './recebido-mensageiro.component.html',
  styleUrls: ['./recebido-mensageiro.component.css']
})
export class RecebidoMensageiroComponent implements OnInit {

  objRecebidos: RecebidoMensageiro[] = new Array<RecebidoMensageiro>();
  objFuncionario: ListFuncionarios[] = new Array<ListFuncionarios>();

  dtInicio: Date = new Date();
  dtFim = new Date(this.dtInicio.getFullYear(), this.dtInicio.getMonth() + 1, 0);
  startDate: string = " ";
  endDate: string = " ";

  isVisible: Boolean = false;

  totalQuantRecibos: any = 0;
  totalValorRecibos: any = 0;

  constructor(private apiDb: ApiDbService, private datePipe: DatePipe) { }

  ngOnInit() {

  }


  selectDateStart(dtInicio) {
    this.startDate = this.datePipe.transform(dtInicio, "yyyy-MM-dd");
    console.log('dtStart: ', this.startDate);
  }

  selectDateEnd(dtFim) {
    this.endDate = this.datePipe.transform(dtFim, "yyyy-MM-dd");
    console.log('dtEnd: ', this.endDate);
  }

  getRecebidoMensageiro() {
    this.apiDb.getApiDbRecebidoMensageiro(this.startDate, this.endDate)
      .subscribe(resp => {
        this.objRecebidos = resp;
        this.totalRecebido();
        console.log("Recebidos: ", this.objRecebidos);
      }, error =>{
        console.log(error);
      });
  }

  buscar() {
    this.getRecebidoMensageiro();
    this.isVisible = true;
  }

  totalRecebido() {
    this.objRecebidos.forEach(recebido => {
      this.totalQuantRecibos = this.totalQuantRecibos + recebido.qtdRecebido
      this.totalValorRecibos = this.totalValorRecibos + recebido.valorRecebido;
    });
  }

}
