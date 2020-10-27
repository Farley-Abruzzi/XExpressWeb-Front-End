import { Component, OnInit } from '@angular/core';
import { ListFuncionarios } from '../classe/list-funcionarios';
import { ApiDbService } from 'src/app/api/api-db.service';
import { Reprocessamento } from '../classe/reprocessamento';
import { HttpEventType, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-reprocessamento',
  templateUrl: './reprocessamento.component.html',
  styleUrls: ['./reprocessamento.component.css']
})


export class ReprocessamentoComponent implements OnInit {

  constructor(private apiDb: ApiDbService) { }

  objFuncionario: ListFuncionarios[] = new Array<ListFuncionarios>();
  objReprocessamento: Reprocessamento[] = new Array<Reprocessamento>();
  startDate = "2019-07-01";
  endDate = "2019-07-31";


  totalQuantRecibos: any = 0;
  totalValorRecibos: any = 0;

  ngOnInit() {

    this.getApiDbRecibosReprocessar('asdf', 'asdf');
  }

  getApiDbRecibosReprocessar(startDate, endDate) {
    this.apiDb.getApiDbRecibosReprocessar(this.startDate, this.endDate).subscribe(
      recibos => {
        this.objReprocessamento = recibos;
        this.totalReprocesso();
        console.log(this.objReprocessamento);
      }
    )
  }

  getApiDbPutRecibosReprocessar(id: Number, nome: string, startDate: String, endDate: String) {

    if (confirm('Deseja reprocessar os recibos do mensageiro \n' + nome + '? ')) {
      this.apiDb.getApiDbPutRecibosReprocessar(id, startDate, endDate)
        .subscribe(
          response=> {
            alert('Recibo reprocessado com sucesso');
            this.getApiDbRecibosReprocessar('asdf', 'asdf');
          },
          error => {
            console.log(error);
          }
        );
    }
  }

  totalReprocesso() {
    this.objReprocessamento.forEach(reprocesso => {
      this.totalQuantRecibos = this.totalQuantRecibos + reprocesso.quantidadeRecibos
      this.totalValorRecibos = this.totalValorRecibos + reprocesso.valorRecibos;
    });
  }


}
