import { Component, OnInit } from '@angular/core';
import { ApiDbService } from 'src/app/api/api-db.service';
import { ListFuncionarios } from '../classe/list-funcionarios';
import { Recibo } from '../classe/recibo';

@Component({
  selector: 'app-relatorio-diario',
  templateUrl: './relatorio-diario.component.html',
  styleUrls: ['./relatorio-diario.component.css']
})
export class RelatorioDiarioComponent implements OnInit {

  objFuncionario: ListFuncionarios[] = new Array<ListFuncionarios>();
  listRelatorio: Recibo[] = new Array<Recibo>();
  isVisible: Boolean = false;
  codMens: Number;
  month: Number;
  year: Number;

  constructor(private apiDb: ApiDbService) { }

  ngOnInit() {
    this.getMensageiro();
  }

  selectById(mensageiro_id) {
    console.log('Cod Mensageiro: ',mensageiro_id);
    this.codMens = mensageiro_id;
  }

  selectMes(mes) {
    console.log('MES: ', mes);
    this.month = mes;
  }

  selectAno(ano) {
    console.log('ANO: ', ano);
    this.year = ano;
  }


  getMensageiro() {
    this.apiDb.getApiDbMensageiros()
      .subscribe(resp => {
        this.objFuncionario = resp;
      },error =>{
        console.log(error);
      });
  }

  getRelatorioDiario() {
    this.apiDb.getApiDbRelatorioDiario(this.codMens, this.month, this.year)
      .subscribe(resp => {
        this.listRelatorio = resp;
        console.log('RELATORIO: ', this.listRelatorio);
      },error =>{
        console.log(error);
      });
  }

  buscar() {
    this.getRelatorioDiario();
    this.isVisible = true;
  }

}
