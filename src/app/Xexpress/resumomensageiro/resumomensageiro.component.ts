import { Component, OnInit } from '@angular/core';
import { ApiDbService } from 'src/app/api/api-db.service';
import { ListFuncionarios } from '../classe/list-funcionarios';
import { Recibos } from '../classe/recibos';
import { Recibosporcidade } from '../classe/recibosporcidade';
import { DatePipe } from '@angular/common';
//import { Listrecibos } from '../classe/listrecibos';
@Component({
  selector: 'app-resumomensageiro',
  templateUrl: './resumomensageiro.component.html',
  styleUrls: ['./resumomensageiro.component.css']
})
export class ResumomensageiroComponent implements OnInit {

  constructor(private apiDb: ApiDbService, private datePipe: DatePipe) { }

  objFuncionario: ListFuncionarios[] = new Array<ListFuncionarios>();
  objRecibos: Recibos = new Recibos();
  objRecibosPorCidade: Recibosporcidade[] = new Array<Recibosporcidade>();
  cidade: String;
  listRecibos: any[] = new Array<any>();
  listRecibosDevolvidos: any[] = new Array<any>();
  listRecibosCancelados: any[] = new Array<any>();
  listRecibosAbertos: any[] = new Array<any>();
  status:string;
  dtInicio: Date = new Date();
  dtFim = new Date(this.dtInicio.getFullYear(), this.dtInicio.getMonth() + 1, 0);
  listaStatus: string = '';
  

  isVisible: Boolean = false;



  ngOnInit() {

    this.getMensageiro();

  }


  


  //recibos recebido
  getRecibosList(n: Number, startDate: String, endDate: String) {
    this.apiDb.getApiDbRecibosList(n, startDate, endDate).subscribe(
      resp => {
        this.listRecibos = resp;
        //console.log(this.listRecibos)
      },
      error => {
        console.log(error);
      }
    )
  }

  getRecibosDevolvidosList(n: Number, startDate: String, endDate: String) {
    this.apiDb.getApiDbRecibosDevolvidos(n, startDate, endDate).subscribe(
      resp => {
        this.listRecibosDevolvidos = resp;
        //console.log(this.listRecibosCancelados)
      },
      error => {
        console.log(error);
      }
    )
  }

  getRecibosCanceladosList(n: Number, startDate: String, endDate: String) {
    this.apiDb.getApiDbRecibosCancelados(n, startDate, endDate).subscribe(
      resp => {
        this.listRecibosCancelados = resp;
        //console.log(this.listRecibosCancelados)
      },
      error => {
        console.log(error);
      }
    )
  }

  //recibos em aberto
  getRecibosAbertosList(n: Number, startDate: String, endDate: String) {
    this.apiDb.getApiDbRecibosAbertosList(n, startDate, endDate).subscribe(
      resp => {
        this.listRecibosAbertos = resp;
        //console.log(this.listRecibosAbertos)
      },
      error => {
        console.log(error);
      }
    )
  }


  getMensageiro() {
    this.apiDb.getApiDbMensageiros().subscribe(
      resp => {
        this.objFuncionario = resp;
      }
    )
  }

  getRecibos(n, startDate, endDate) {
    this.apiDb.getApiResumoRecibos(n, startDate, endDate).subscribe(
      recibos => {
        this.objRecibos = recibos;
      }
    )
  }

  getRecibosPorCidade(n: Number, startDate: String, endDate: String) {

    this.apiDb.getApiResumosRecibosCidade(n, startDate, endDate).subscribe(
      listaRecibos => {
        this.objRecibosPorCidade = listaRecibos;
        //chamei a função aqui por questão de performance
        this.getRecibosList(n, startDate, endDate);
        this.getRecibosAbertosList(n, startDate, endDate);
        this.getRecibosCanceladosList(n, startDate, endDate);
        this.getRecibosDevolvidosList(n, startDate, endDate);
      }
    )
  }

  selectById(id: Number) {


    console.log(id);

    const startDate = this.datePipe.transform(this.dtInicio, "yyyy-MM-dd");
    const endDate = this.datePipe.transform(this.dtFim, "yyyy-MM-dd");
    console.log('DT: ', startDate +' '+ endDate);

    this.getRecibos(id, startDate, endDate);
    this.getRecibosPorCidade(id, startDate, endDate);

    this.isVisible = true;
  }

  //para carregar o modal de acordo com o status
  listarRecibos(n: string) {
    this.listaStatus = n;

    switch (n) {
      case "B": {
        this.status = "(Recebidos)";
        break;
      }
      case "C": {
        this.status = "(Cancelados)";
        break;
      }
      case "D": {
        this.status = "(Devolvidos)";
        break;
      }
      case "G": {
        this.status = "(Em aberto)";
        break;
      }
      default: {
        this.status = "";
        break;
      }
    }
  }
  
}


