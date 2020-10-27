import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebidoMensageiroComponent } from './recebido-mensageiro.component';

describe('RecebidoMensageiroComponent', () => {
  let component: RecebidoMensageiroComponent;
  let fixture: ComponentFixture<RecebidoMensageiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebidoMensageiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebidoMensageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
