import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibosReimpressosComponent } from './recibos-reimpressos.component';

describe('RecibosReimpressosComponent', () => {
  let component: RecibosReimpressosComponent;
  let fixture: ComponentFixture<RecibosReimpressosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecibosReimpressosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibosReimpressosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
