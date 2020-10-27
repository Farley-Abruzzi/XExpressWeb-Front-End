import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibosPorMensageiroComponent } from './recibos-por-mensageiro.component';

describe('RecibosPorMensageiroComponent', () => {
  let component: RecibosPorMensageiroComponent;
  let fixture: ComponentFixture<RecibosPorMensageiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecibosPorMensageiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibosPorMensageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
