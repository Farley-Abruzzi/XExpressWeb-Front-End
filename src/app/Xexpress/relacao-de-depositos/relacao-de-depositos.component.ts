import { Component, OnInit } from '@angular/core';
import { ListFuncionarios } from '../classe/list-funcionarios';
import { ApiDbService } from 'src/app/api/api-db.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-relacao-de-depositos',
  templateUrl: './relacao-de-depositos.component.html',
  styleUrls: ['./relacao-de-depositos.component.css']
})
export class RelacaoDeDepositosComponent implements OnInit {

  ObjMensageiros: ListFuncionarios[] = new Array<ListFuncionarios>();

  codMens: Number;
  dtInicio: Date = new Date();
  dtFim = new Date(this.dtInicio.getFullYear(), this.dtInicio.getMonth() + 1, 0);
  startDate: string = " ";
  endDate: string = " ";
  cidadeSelecionada: String;

  isVisible: Boolean = true;

  constructor(private ApiDb: ApiDbService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.getMensageiros();
  }

  getMensageiros() {
    this.ApiDb.getApiDbMensageiros()
      .subscribe(resp => {
        this.ObjMensageiros = resp;
        console.log("Lista Mensageiros: ", this.ObjMensageiros);
      },  error => {
        console.log(error);
      });
  }

  selectById(mensageiro_id) {
    console.log('Cod Mensageiro:',mensageiro_id);
    this.codMens = mensageiro_id;
  }

  selectCidade(cidade) {
    console.log('Cidade: ',cidade);
    this.cidadeSelecionada = cidade;
  }

  selectDateStart(dtInicio) {
    this.startDate = this.datePipe.transform(dtInicio, "yyyy-MM-dd");
    console.log('dtStart: ', this.startDate);
  }

  selectDateEnd(dtFim) {
    this.endDate = this.datePipe.transform(dtFim, "yyyy-MM-dd");
    console.log('dtEnd: ', this.endDate);
  }

}
