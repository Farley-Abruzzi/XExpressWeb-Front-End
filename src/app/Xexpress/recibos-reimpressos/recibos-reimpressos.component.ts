import { Component, OnInit } from '@angular/core';
import { Recibo } from '../classe/recibo';
import { ApiDbService } from 'src/app/api/api-db.service';
import { DatePipe } from '@angular/common';
import { ListFuncionarios } from '../classe/list-funcionarios';

@Component({
  selector: 'app-recibos-reimpressos',
  templateUrl: './recibos-reimpressos.component.html',
  styleUrls: ['./recibos-reimpressos.component.css']
})
export class RecibosReimpressosComponent implements OnInit {

  listRecibosReimpressos: Recibo[] = new Array<Recibo>();
  objFuncionario: ListFuncionarios[] = new Array<ListFuncionarios>();
  objRecibos: Recibo = new Recibo();

  dtInicio: Date = new Date();
  dtFim = new Date(this.dtInicio.getFullYear(), this.dtInicio.getMonth() + 1, 0);
  startDate: string = " ";
  endDate: string = " ";

  mensageidoId: Number = 315;

  isVisible: Boolean = false;

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


  getRecibosReimpressos() {
    this.apiDb.getListaRecibosReimpressos(this.startDate, this.endDate)
      .subscribe(resp => {
        this.listRecibosReimpressos = resp;
        console.log("Lista Recibos Reimpressos: ", this.listRecibosReimpressos);
      }, error =>{
        console.log(error);
      });
  }

  buscar() {
    this.getRecibosReimpressos();
    this.isVisible = true;
  }
}
