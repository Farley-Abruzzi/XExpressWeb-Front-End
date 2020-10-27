import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContribuintesComponent } from './Xexpress/contribuintes/contribuintes.component';
import { PesquisaContribComponent } from './Xexpress/pesquisa-contrib/pesquisa-contrib.component';
import { LoginComponent } from './Xexpress/login/login.component';
import { FeriadosComponent } from './Xexpress/feriados/feriados.component';
import { ReprocessamentoComponent } from './Xexpress/reprocessamento/reprocessamento.component';
import { StartComponent } from './Xexpress/start/start.component';
import { OthersComponent } from './Xexpress/others/others.component';
import { ResumomensageiroComponent } from './Xexpress/resumomensageiro/resumomensageiro.component';
import { CadastrocontribComponent } from './Xexpress/cadastrocontrib/cadastrocontrib.component';
import { GerarreciboComponent } from './Xexpress/gerarrecibo/gerarrecibo.component';
import { RecibosPorMensageiroComponent } from './Xexpress/recibos-por-mensageiro/recibos-por-mensageiro.component';
import { RecibosReimpressosComponent } from './Xexpress/recibos-reimpressos/recibos-reimpressos.component';
import { RelacaoDeDepositosComponent } from './Xexpress/relacao-de-depositos/relacao-de-depositos.component';
import { RecebidoMensageiroComponent } from './Xexpress/recebido-mensageiro/recebido-mensageiro.component';
import { RecebidoDiaComponent } from './Xexpress/recebido-dia/recebido-dia.component';
import { RelatorioDiarioComponent } from './Xexpress/relatorio-diario/relatorio-diario.component';
import { ComunicarDepositoComponent } from './Xexpress/comunicar-deposito/comunicar-deposito.component';
import { FuncionariosComponent } from './Xexpress/funcionarios/funcionarios.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'contribuintes', component: ContribuintesComponent},
  {path: 'pesquisarContrib', component: PesquisaContribComponent},
  {path: 'pesquisarContrib/editar/:id', component: PesquisaContribComponent},
  {path: 'resumoMensageiro', component: ResumomensageiroComponent},
  {path: 'home', component: StartComponent},
  {path: 'other', component: OthersComponent},
  {path: 'feriados', component: FeriadosComponent},
  {path: 'funcionarios', component: FuncionariosComponent},
  {path: 'reprocessamento', component: ReprocessamentoComponent},
  {path: 'cadastrocontrib', component: CadastrocontribComponent},
  {path: 'gerarrecibo/:id/:codmens', component: GerarreciboComponent},
  {path: 'recibos-por-mensageiro', component: RecibosPorMensageiroComponent},
  {path: 'recibos-reimpressos', component: RecibosReimpressosComponent},
  {path: 'relacao-de-depositos', component: RelacaoDeDepositosComponent},
  {path: 'recebido-mensageiro', component: RecebidoMensageiroComponent},
  {path: 'recebido-dia', component: RecebidoDiaComponent},
  {path: 'relatorio-diario', component: RelatorioDiarioComponent},
  {path: 'comunicar-deposito', component: ComunicarDepositoComponent}
  /*
  {path: 'produtos/editar/:id', component: ProdutoFormComponent},
  {path: '', redirectTo: '/produtos', pathMatch: 'full'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}