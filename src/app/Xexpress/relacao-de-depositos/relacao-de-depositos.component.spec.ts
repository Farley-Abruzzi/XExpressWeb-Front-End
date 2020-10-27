import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacaoDeDepositosComponent } from './relacao-de-depositos.component';

describe('RelacaoDeDepositosComponent', () => {
  let component: RelacaoDeDepositosComponent;
  let fixture: ComponentFixture<RelacaoDeDepositosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacaoDeDepositosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacaoDeDepositosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
