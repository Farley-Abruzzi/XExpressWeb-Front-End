import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicarDepositoComponent } from './comunicar-deposito.component';

describe('ComunicarDepositoComponent', () => {
  let component: ComunicarDepositoComponent;
  let fixture: ComponentFixture<ComunicarDepositoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicarDepositoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicarDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
