import { Component, OnInit } from '@angular/core';
import { ApiDbService } from 'src/app/api/api-db.service';
import { Feriado } from '../classe/feriado';
import { Estadosbr } from '../classe/estadosbr';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Cidadesbr } from '../classe/cidadesbr';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.component.html',
  styleUrls: ['./feriados.component.css']
})


export class FeriadosComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private apiDb: ApiDbService, private formBuilder: FormBuilder, private datePipe:DatePipe) { }

  public formFeriado: FormGroup;
  //public form = new Feriado();

  estado: string;
  cidade: string;
  idFeriadoEditar = 0;
  idEstado: Number = 0;

  listFeriados: Feriado[] = new Array<Feriado>();
  feriado: Feriado = new Feriado();

  // Observable com async no pipe async no html para otimizar memória
  estados: Estadosbr[] = new Array<Estadosbr>();
  cidades: Cidadesbr[] = new Array<Cidadesbr>();

  ngOnInit() {
    this.createForm(new Feriado());
    this.getEstados();
    this.getApiFeriados();

  }

  createForm(feriado: Feriado) {
    this.formFeriado = this.formBuilder.group({
      estado: [feriado.estado],
      cidade: [feriado.cidade],
      dtFeriado: [this.datePipe.transform(feriado.dataferiado,'dd/MM/yyyy')],
      observacoes: [feriado.descricao],
      replicar: [feriado.replicar]
    });
  }
  // list
  getApiFeriados() {
    this.apiDb.getApiDbFeriados()
      .subscribe(response => {
        this.listFeriados = response;
        console.log(this.listFeriados);
      },
        error => {
          console.log(error);
        });
  }

  // insert
  btnSalvar() {

    if (this.idFeriadoEditar === 0) {
      if (confirm('Deseja realmente incluir feriado? ')) {

        this.feriado = new Feriado();
        this.obj();
        this.getApiDbPostFeriado();
        this.limparCampos();

      }
    } else {
      // atualiza
      if (confirm('Deseja salvar as alterações do feriado? ')) {

        this.feriado = new Feriado();
        this.feriado.setCodFeriado(this.idFeriadoEditar);
        this.obj();
        this.getApiDbPutFeriadoID();
        this.limparCampos();

      }
    }
    this.getApiFeriados();

  }

  expression() {
    alert('ok');
  }

  getApiDbPostFeriado() {
    this.apiDb.getApiDbPostFeriado(this.feriado)
      .subscribe(
        () => {
          this.getApiFeriados();
        },
        error => {
          console.log(error);
        }
      );
  }


  //Instanciar valores do formulario ao objeto feriado para inserir novo ou atualizar.
  obj() {
    this.feriado.setEstado(this.formFeriado.value.estado);
    this.feriado.setCidade(this.formFeriado.value.cidade);
    this.feriado.setDataferiado(this.formFeriado.value.dtFeriado);
    this.feriado.setDescricao(this.formFeriado.value.observacoes);
    this.feriado.setReplicar(this.formFeriado.value.replicar);
  }

  // update

  getApiDbPutFeriadoID() {
    this.apiDb.getApiDbPutFeriadoID(this.feriado)
      .subscribe(
        () => {
          this.getApiFeriados();
        },
        error => {
          console.log(error);
        }
      );
  }

  // Delete
  btnExcluir(n) {

    if (confirm('Deseja realmente excluir o feriado? ')) {
      this.getApiDeleteFeriadoID(n.codferiado);
    }
  }

  getApiDeleteFeriadoID(id: number) {

    this.apiDb.getApiDeleteFeriadoID(id)
      .subscribe(
        data => {
          this.feriado = data;
          this.getApiFeriados();
        },
        error => {
          console.log(error);
        }
      );
  }
  // Funções acessórias
  limparCampos() {
    this.formFeriado.reset()
    this.idFeriadoEditar = 0;
  }

  editar(n) {

    this.idFeriadoEditar = n.codferiado;
    this.createForm(n);
    this.estado = n.estado;
    this.selectById(this.estado);
  }

  // Buscar estados no arquivo json
  getEstados() {
    this.apiDb.getEstadosBr().subscribe(response => {
      this.estados = response;
    });
  }

  getCidades() {
    this.apiDb.getCidadesBr().subscribe(response => {
      this.cidades = response.filter(x => x.estado == this.idEstado);
    });
  }

  //Caputrar o id do estado para o filtro de cidades por estados na função 
  selectById(nomeEstado) {

    let estado: Estadosbr[] = new Array<Estadosbr>();
    //Expressão lambda
    estado = this.estados.filter(x => x.nome == nomeEstado);
    this.idEstado = estado[0].id;
    this.getCidades();

  }



}
