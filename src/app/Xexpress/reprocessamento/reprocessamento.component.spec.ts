import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprocessamentoComponent } from './reprocessamento.component';

describe('ReprocessamentoComponent', () => {
  let component: ReprocessamentoComponent;
  let fixture: ComponentFixture<ReprocessamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprocessamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprocessamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
