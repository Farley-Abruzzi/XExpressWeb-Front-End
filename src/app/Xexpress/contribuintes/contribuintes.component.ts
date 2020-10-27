import { Component, OnInit } from '@angular/core';
import { ApiDbService } from 'src/app/api/api-db.service';
import { Contribuintes } from '../classe/contribuintes';

@Component({
  selector: 'app-contribuintes',
  templateUrl: './contribuintes.component.html',
  styleUrls: ['./contribuintes.component.css'],
})
export class ContribuintesComponent implements OnInit {

  constructor(private apiDb: ApiDbService) { }

  public title: string = 'Gerenciar contribuintes';
  public listaContrib: any[] = new Array<any>();
  public paginacao: any;
  public statusHolder: String;
  public txtSearch: String;

  public enableSearch: Boolean = false; 
  public isVisible: Boolean = false;
  status:String;
  




  ngOnInit() {

    this.getApiDbNome('');
    
    //usa o subscribe para se inscrever numa chamada assincrona  
    /*
    if (window.localStorage.getItem('number') == null) {
      this.pagination('0');
    }
    else {
      this.pagination(window.localStorage.getItem('number'));
    }*/
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

  public getApiDb() {
    this.apiDb.getApiDb()
      .subscribe(response => {
        this.listaContrib = response;
        //console.log(this.listaContrib);
        this.listaContrib
      },
        error => {
          console.log(error);
        });;
  }

  

  public getApiDbNome(nome) {
    this.apiDb.getApiDbNome(nome)
      .subscribe(response => {  
        this.listaContrib = response
      },
        error => {
          console.log(error); 
        });
  }

  public getApiDbEndereco(endereco) {
    this.apiDb.getApiDbEndereco(endereco)
      .subscribe(response => {
        this.listaContrib = response
      },
        error => {
          console.log(error);
        });;
  }

  public getApiDbContribByID(n) {
    this.apiDb.getApiDbContribByIDList(n)
      .subscribe(response => {
        this.listaContrib = response
      },
        error => {
          console.log(error);
        });;
  }

  public selectByStatus(n) {

    this.listaContrib = new Array<any>();
    this.isVisible = false;
    this.enableSearch = true;

    switch (n) {
      case "nome": {

        this.txtSearch = "";
        this.statusHolder = "Insira o nome do contribuinte";

        break;
      }
      case "endereco": {

        this.txtSearch = "";
        this.statusHolder = "Insira o endereço do contribuinte"; 

        break;
      }
      case "controle": {

        this.txtSearch = "";
        this.statusHolder = "Insira o numero de controle do contribuinte";
        break;
      }
      case "codigo": {

        this.txtSearch = "";
        this.statusHolder = "Insira o código do contribuinte";

        break;
      }

    }
  }

  public getApiDbOption(n) {

    //console.log('\nStatus contribuintes: ' + n);
    
    this.isVisible = true;
    
    switch (n) {
      case "nome": {

        //console.log(this.txtSearch);
        this.getApiDbNome(this.txtSearch);

        break;
      }
      case "endereco": {
        //statements; 
        this.getApiDbEndereco(this.txtSearch);

        break;
      }
      case "controle": {
        //statements; 

        break;
      }
      case "codigo": {
        //statements; 
        this.getApiDbContribByID(this.txtSearch)

        break;
      }
      default: {
        //statements; 
        this.statusHolder = ""
        break;
      }
    }
  }



  /*public getApiById() {
    this.apiDb.getApiById().subscribe(response => {
      this.contrib = response
      console.log(this.contrib);

    },
      error => {
        console.log(error);
      });;
  }
  /*
    public getPage() {
      this.apiDb.getPagination().subscribe(
        data => {
          this.contribuintes = data;
  
        }
  
      );
    }
    */

}


