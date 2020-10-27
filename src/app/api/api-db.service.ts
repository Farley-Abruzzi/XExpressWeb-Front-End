import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from './api.config';
import { Observable} from 'rxjs';
import { Contribuintes } from '../Xexpress/classe/contribuintes';
import { ListFuncionarios } from '../Xexpress/classe/list-funcionarios';
import { Recibos } from '../xexpress/classe/recibos';
import { Recibosporcidade } from '../Xexpress/classe/recibosporcidade';
import { Feriado } from '../Xexpress/classe/feriado';
import { Estadosbr } from '../Xexpress/classe/estadosbr';
import { Cidadesbr } from '../Xexpress/classe/cidadesbr';
import { Reprocessamento } from '../Xexpress/classe/reprocessamento';
import { Recibo } from '../Xexpress/classe/recibo';
import { RecebidoMensageiro } from '../Xexpress/classe/recebidomensageiro';
import { Funcionarios } from '../Xexpress/classe/funcionarios';
import { Depositos } from '../Xexpress/classe/depositos';
import { Login } from '../Xexpress/classe/login';




@Injectable({
  providedIn: 'root'
})
export class ApiDbService {

  constructor(public http: HttpClient) { }

  // ===================== Apis contribuintes =====================================

  getApiDb(): Observable<any[]> { // api base
    return this.http.get<any[]>(`${API_CONFIG.baseURL}/contribuintes/page?`);
  }

  getApiDbPage(page: string): Observable<Contribuintes[]> { // api base
    //console.log(page);
    return this.http.get<Contribuintes[]>(`${API_CONFIG.baseURL}/contribuintes/page?&page=${page}`);
  }

  // busca por Nome
  getApiDbNome(nome: string): Observable<any[]> { // api base
    return this.http.get<any[]>(`${API_CONFIG.baseURL}/contribuintes/bucarpornome?&nome=${nome}`);
  }

  // busca por Endereço
  getApiDbEndereco(endereco: string): Observable<any[]> { // api base
    return this.http.get<any[]>(`${API_CONFIG.baseURL}/contribuintes/bucarporendereco?endereco=${endereco}`);
  }

  getApiDbContribByIDList(id: string): Observable<any[]> { // api base
    //console.log(id);
    return this.http.get<any[]>(`${API_CONFIG.baseURL}/contribuintes/porid?id=${id}`);
  }

  //busca por ID
  getApiDbContribByID(id: string): Observable<Contribuintes> { // api base
    //console.log(id);
    return this.http.get<Contribuintes>(`${API_CONFIG.baseURL}/contribuintes/${id}`);
  }

  //busca por ID
  getApiDbUltContrib(): Observable<any> { // api base
    //console.log(id);
    return this.http.get<Contribuintes>(`${API_CONFIG.baseURL}/contribuintes/ultcontrib`);
  }

  //Inserir novo contribuinte
  getApiDbPostContribuinte(contribuinte: Contribuintes): Observable<Contribuintes> { // api base
    return this.http.post<Contribuintes>(`${API_CONFIG.baseURL}/contribuintes`, contribuinte, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // ===================== Apis Funcionarios =======================================

  getApiDbMensageiros(): Observable<ListFuncionarios[]> {
    return this.http.get<ListFuncionarios[]>(`${API_CONFIG.baseURL}/funcionarios`);
  }

  getApiDbOperadores(): Observable<ListFuncionarios[]> {
    return this.http.get<ListFuncionarios[]>(`${API_CONFIG.baseURL}/funcionarios/operadores`);
  }

  getApiDbFuncionarioPorNome(nome: string): Observable<Funcionarios> {
    return this.http.get<Funcionarios>(`${API_CONFIG.baseURL}/funcionarios/funcionariopornome?&nome=${ nome }`);
  }

  // ===================== Apis Feriados ==========================================

  getApiDbFeriados(): Observable<Feriado[]> {
    return this.http.get<Feriado[]>(`${API_CONFIG.baseURL}/feriado/list`);
  }

  getApiDbPostFeriado(feriado: Feriado): Observable<Feriado> { // api base
    return this.http.post<Feriado>(`${API_CONFIG.baseURL}/feriado`, feriado, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getApiDbPutFeriadoID(feriado: Feriado): Observable<Feriado> { // api base
    return this.http.put<any>(`${API_CONFIG.baseURL}/feriado/${feriado.getCodFeriado()}`, feriado, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getApiDeleteFeriadoID(id: Number): Observable<Feriado> {
    return this.http.delete<Feriado>(`${API_CONFIG.baseURL}/feriado/${id}`);
  }

  // =============================== Get API JSON =====================================

  getEstadosBr(): Observable<Estadosbr[]> {
    // vou passar o caminho do JSON no get, a chamada retorna um response
    return this.http.get<Estadosbr[]>('assets/dados/estadosbr.json');
    // a resposta que vai vim do servidor e vou transformar em um json
  }

  getCidadesBr(): Observable<Cidadesbr[]> {
    // vou passar o caminho do JSON no get, a chamada retorna um response
    return this.http.get<Cidadesbr[]>('assets/dados/cidadesbr.json');
    // a resposta que vai vim do servidor e vou transformar em um json
  }


  getApiDbPutCidadesBr(cidade: Cidadesbr): Observable<Cidadesbr> { // api base
    return this.http.put<any>(`'assets/dados/cidadesbr.json'/${cidade.id}`, cidade, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }



  // ===================== Apis recibos ==========================================

  getApiDbRelatorioDiario(id: Number, mes: Number, ano: Number): Observable<Recibo[]> {
    return this.http.get<Recibo[]>(`${API_CONFIG.baseURL}/recibos/relatoriodiario?cod=${id}&mes=${mes}&ano=${ano}`);
  }

  getListaRecibosReimpressos(startDate: string, endDate: string): Observable<Recibo[]> {
    return this.http.get<Recibo[]>(`${API_CONFIG.baseURL}/recibos/listarecibosreimpressos?&startDate=${startDate}&endDate=${endDate}`);
  }

  getListaRecibosWeb(id: Number, statuscod: String, startDate: String, endDate: String): Observable<Recibo[]> {
    return this.http.get<Recibo[]>(`${API_CONFIG.baseURL}/recibos/listarecibosweb?cod=${id}&status=${statuscod}&startDate=${startDate}&endDate=${endDate}`);
  }

  getApiResumoRecibos(id: Number, startDate: String, endDate: String): Observable<Recibos> {
    return this.http.get<Recibos>(`${API_CONFIG.baseURL}/recibos/resumomensageiro?cod=${id}&startDate=${startDate}&endDate=${endDate}`);
  }

  getApiResumosRecibosCidade(id: Number, startDate: String, endDate: String): Observable<Recibosporcidade[]> {
    return this.http.get<Recibosporcidade[]>(`${API_CONFIG.baseURL}/recibos/mensageiroporcidade1?cod=${id}&startDate=${startDate}&endDate=${endDate}`);
  }

  getApiDbRecibosList(id:Number, startDate: String, endDate: String): Observable<any[]> {
    return this.http.get<any[]>(`${API_CONFIG.baseURL}/recibos/findrecibosrecebidos?cod=${id}&startDate=${startDate}&endDate=${endDate}`);
  }

  getApiDbRecibosDevolvidos(id:Number, startDate: String, endDate: String): Observable<any[]> {
    return this.http.get<any[]>(`${API_CONFIG.baseURL}/recibos/findrecibosdevolvidos?cod=${id}&startDate=${startDate}&endDate=${endDate}`);
  }

  getApiDbRecibosCancelados(id:Number, startDate: String, endDate: String): Observable<any[]> {
    return this.http.get<any[]>(`${API_CONFIG.baseURL}/recibos/findreciboscancelados?cod=${id}&startDate=${startDate}&endDate=${endDate}`);
  }

  getApiDbRecibosAbertosList(id:Number, startDate: String, endDate: String): Observable<any[]> {
    return this.http.get<any[]>(`${API_CONFIG.baseURL}/recibos/findrecibosaberto?cod=${id}&startDate=${startDate}&endDate=${endDate}`);
  }


  getApiRecibosContrib(id: Number): Observable<any[]> {
    return this.http.get<any[]>(`${API_CONFIG.baseURL}/recibos/reciboscontrib?cod=${id}`);
  }

  getApiDbPostRecibo(recibo: Recibo): Observable<Recibo> { // api base
    return this.http.post<Recibo>(`${API_CONFIG.baseURL}/recibos`, recibo, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // =============================== Lista recebido por mensageiro entre datas ========================
  getApiDbRecebidoMensageiro(startDate: String, endDate: String): Observable<RecebidoMensageiro[]> {
    return this.http.get<RecebidoMensageiro[]>(`${API_CONFIG.baseURL}/recibos/recebidomensageiro?&startDate=${ startDate }&endDate=${ endDate }`);
  }


  // =============================== Lista de recibos entre datas a reprocessar ====================
  getApiDbRecibosReprocessar(startDate: String, endDate: String): Observable<Reprocessamento[]> {
    return this.http.get<Reprocessamento[]>(`${API_CONFIG.baseURL}/recibos/recibosreprocessar?&startDate=2019-07-01&endDate=2019-07-31`);
  }

  getApiDbPutRecibosReprocessar(id:Number ,startDate: String, endDate: String): Observable<any> { // api base
    return this.http.put<any>(`${API_CONFIG.baseURL}/recibos/updateRecibosapp?cod=${id}&startDate=2019-07-01&endDate=2019-07-31`,{
    });
  }

  // =============================== Inserindo deposito com POST ===================================
  getApiDbPostDepositos(deposito: Depositos): Observable<Depositos> { // api base
    return this.http.post<Depositos>(`${API_CONFIG.baseURL}/deposito`, deposito, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // ============================== Autenticando Login com POST =====================================
  getApiLogin(login: Login): Observable<Login> { // api base
    return this.http.post<Login>(`${API_CONFIG.baseURL}/login`, login, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}
