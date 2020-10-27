import { Component, OnInit } from '@angular/core';
import { ApiDbService } from 'src/app/api/api-db.service';
import { Contribuintes } from '../classe/contribuintes';
import { ActivatedRoute } from '@angular/router';
import { UltimoContribuinte } from '../classe/ultimocontribuinte';

@Component({
  selector: 'app-pesquisa-contrib',
  templateUrl: './pesquisa-contrib.component.html',
  styleUrls: ['./pesquisa-contrib.component.css']
})
export class PesquisaContribComponent implements OnInit {

  public idContrib: any;
  public contribuinte: Contribuintes = new Contribuintes();
  public isVisible: Boolean = false;
  public btMaisParcelas: Boolean = true;
  public recibos: any[] = new Array<any>();
  public n = 7;

  codcontrib: any;
  codMens: any;
  ultContrib: UltimoContribuinte;


  constructor(private apiDb: ApiDbService, private route: ActivatedRoute) {
    console.log(this.route);
   }

  ngOnInit() {

    this.idContrib = this.route.snapshot.paramMap.get('id');
    this.codMens = this.route.snapshot.paramMap.get('codmens');
    this.getApiDbID();
    
   
  }

  getApiDbID() {

    //definição da tabela de parcelas
    this.n = 7;

    if (this.idContrib != null) {
      this.getApiRecibosContrib();
      return this.apiDb.getApiDbContribByID(this.idContrib)
        .subscribe(resp => {
          this.isVisible = false;
          this.btMaisParcelas = true;
          this.contribuinte = resp;
          this.getApiRecibosContrib();
          //this.getApiDbUltContrib();
          console.log(this.contribuinte);
        }, error => {
          console.log(error);
          this.clear();
          this.isVisible = true;
          this.btMaisParcelas = false;
      });
    } 
  }

  public getApiRecibosContrib() {
    
    if (this.idContrib != null) {
      return this.apiDb.getApiRecibosContrib(this.idContrib)  
        .subscribe(resp => {
          this.recibos = resp;
          console.log(this.recibos);
        }, error => {
          this.clear();
          this.isVisible = true;
      });
    }
  }

  getApiDbUltContrib() {
    this.apiDb.getApiDbUltContrib().subscribe(resp => {
      this.ultContrib = resp;
      if(this.ultContrib != null) {
        this.isVisible = true;
      }
    },error=>{
      console.log(error);
    });
  }


  public clear() {
    
    this.contribuinte.nomenorecibo = null;
    this.contribuinte.sexo = null;
    this.contribuinte.contribemail = null;
    this.contribuinte.enderecoprincipal=null;
    this.contribuinte.compleprincipal = null;
    this.contribuinte.numeroprincipal=null;
    this.contribuinte.bairroprincipal = null;
    this.contribuinte.cidadeprincipal = null;
    this.contribuinte.ufprincipal = null;
    this.contribuinte.cepprincipal=null;
    this.contribuinte.observacoes=null;
    this.contribuinte.bairroprincipal = null;
  }

  public carregarParcelas() {

    this.n = 12;

  }
}
