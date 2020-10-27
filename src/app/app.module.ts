import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //importar http para utilizar api
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContribuintesComponent } from './Xexpress/contribuintes/contribuintes.component';
import { ApiDbService } from './api/api-db.service';
import { PesquisaContribComponent } from './Xexpress/pesquisa-contrib/pesquisa-contrib.component';
import { LoginComponent } from './Xexpress/login/login.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DatePipe } from '@angular/common';
import { FeriadosComponent } from './Xexpress/feriados/feriados.component';
import { FuncionariosComponent } from './Xexpress/funcionarios/funcionarios.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { AuthService } from './api/auth.service';


@NgModule({
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    ContribuintesComponent,
    PesquisaContribComponent,
    LoginComponent,
    ResumomensageiroComponent,
    FeriadosComponent,
    FuncionariosComponent,
    ReprocessamentoComponent,
    StartComponent,
    OthersComponent,
    ResumomensageiroComponent,
    CadastrocontribComponent,
    GerarreciboComponent,
    RecibosPorMensageiroComponent,
    RecibosReimpressosComponent,
    RelacaoDeDepositosComponent,
    RecebidoMensageiroComponent,
    RecebidoDiaComponent,
    RelatorioDiarioComponent,
    ComunicarDepositoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,//formulários reativos 
    FormsModule, // Sem esse import o ngModel e ngForms não funcionaria no html
    DatePickerModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
  ],
  providers: [
    ApiDbService,
    DatePipe,
    ErrorInterceptorProvider,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
