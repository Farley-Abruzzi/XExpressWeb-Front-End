import { Component, OnInit } from '@angular/core';
import { ApiDbService } from '../../api/api-db.service';
import { ListFuncionarios } from '../classe/list-funcionarios';
//import { Recibos } from '../classe/recibos';
import { DatePipe } from '@angular/common';
import { Recibo } from '../classe/recibo';
import { ActivatedRoute } from '@angular/router';
import { Cidadesbr } from '../classe/cidadesbr';

@Component({
  selector: 'app-recibos-por-mensageiro',
  templateUrl: './recibos-por-mensageiro.component.html',
  styleUrls: ['./recibos-por-mensageiro.component.css']
})
export class RecibosPorMensageiroComponent implements OnInit {

  objFuncionario: ListFuncionarios[] = new Array<ListFuncionarios>();
  objRecibos: Recibo = new Recibo();
  listRecibos: Recibo[] = new Array<Recibo>();
  cidades: Cidadesbr[] = new Array<Cidadesbr>();

  dtInicio: Date = new Date();
  dtFim = new Date(this.dtInicio.getFullYear(), this.dtInicio.getMonth() + 1, 0);
  startDate: string = " ";
  endDate: string = " ";

  status: string;
  codMens: Number;
  cidadeSelecionada: string;

  isVisible: Boolean = false;
  paginacao: any;
  title: string = 'Gerenciar recibos';


  constructor(private apiDb: ApiDbService, private datePipe: DatePipe, private route: ActivatedRoute) {
    //console.log(this.route);
   }

  ngOnInit() {
    this.getMensageiros();
    //this.getCidades();
  }

  getMensageiros() {
    this.apiDb.getApiDbMensageiros().subscribe(
      resp => {
        this.objFuncionario = resp;
      },error => {
        console.log(error);
      });
  }

  selectStatus(statusrec) {
    console.log('Situação:',statusrec);
    this.status = statusrec;
  }

  selectById(mensageiro_id) {
    console.log('Cod Mensageiro:',mensageiro_id);
    this.codMens = mensageiro_id;
  }

  /*selectCidade(cidade) {
    console.log('Cidade: ',cidade);
    this.cidadeSelecionada = cidade;
  }*/

  selectDateStart(dtInicio) {
    this.startDate = this.datePipe.transform(dtInicio, "yyyy-MM-dd");
    console.log('dtStart: ', this.startDate);
  }

  selectDateEnd(dtFim) {
    this.endDate = this.datePipe.transform(dtFim, "yyyy-MM-dd");
    console.log('dtEnd: ', this.endDate);
  }

  getRecibosPorMensageiro() {
    this.apiDb.getListaRecibosWeb(this.codMens, this.status, this.startDate, this.endDate)
      .subscribe( resp => {
        this.listRecibos = resp;
        console.log('Lista Recibos Web: ', this.listRecibos);
    
      }, error => {
        console.log(error);
      });
  }

  /*getCidades() {
    this.apiDb.getCidadesBr()
      .subscribe(resp => {
        this.cidades = resp;
      },error =>{
        console.log(error);
      });
  }*/

  buscar() {
    this.getRecibosPorMensageiro();
    this.isVisible = true;
  }


  pagination(n: string) {
    /*window.localStorage.setItem('number', n);
    this.apiDb.getApiDbPage(n).subscribe(response => {
      this.listaContrib = response
      window.localStorage.setItem('number', '0');
      console.log(this.listaContrib);
      //window.localStorage.setItem('number', '0');
    },
      error => {
        console.log(error);
      });;*/
  }
}
