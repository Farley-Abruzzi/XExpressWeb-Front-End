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
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  //{path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'contribuintes', component: ContribuintesComponent, canActivate: [AuthGuard]},
  {path: 'pesquisarContrib', component: PesquisaContribComponent, canActivate: [AuthGuard]},
  {path: 'pesquisarContrib/editar/:id', component: PesquisaContribComponent, canActivate: [AuthGuard]},
  {path: 'resumoMensageiro', component: ResumomensageiroComponent, canActivate: [AuthGuard]},
  {path: 'home', component: StartComponent, canActivate: [AuthGuard]},
  {path: 'other', component: OthersComponent, canActivate: [AuthGuard]},
  {path: 'feriados', component: FeriadosComponent, canActivate: [AuthGuard]},
  {path: 'funcionarios', component: FuncionariosComponent, canActivate: [AuthGuard]},
  {path: 'reprocessamento', component: ReprocessamentoComponent, canActivate: [AuthGuard]},
  {path: 'cadastrocontrib', component: CadastrocontribComponent, canActivate: [AuthGuard]},
  {path: 'gerarrecibo/:id/:codmens', component: GerarreciboComponent, canActivate: [AuthGuard]},
  {path: 'recibos-por-mensageiro', component: RecibosPorMensageiroComponent, canActivate: [AuthGuard]},
  {path: 'recibos-reimpressos', component: RecibosReimpressosComponent, canActivate: [AuthGuard]},
  {path: 'relacao-de-depositos', component: RelacaoDeDepositosComponent, canActivate: [AuthGuard]},
  {path: 'recebido-mensageiro', component: RecebidoMensageiroComponent, canActivate: [AuthGuard]},
  {path: 'recebido-dia', component: RecebidoDiaComponent, canActivate: [AuthGuard]},
  {path: 'relatorio-diario', component: RelatorioDiarioComponent, canActivate: [AuthGuard]},
  {path: 'comunicar-deposito', component: ComunicarDepositoComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  //{ path: '**', redirectTo: '' },
];
  /*
  {path: 'produtos/editar/:id', component: ProdutoFormComponent},
  {path: '', redirectTo: '/produtos', pathMatch: 'full'}*/

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}