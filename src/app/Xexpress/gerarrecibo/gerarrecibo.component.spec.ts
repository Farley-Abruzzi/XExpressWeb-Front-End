import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarreciboComponent } from './gerarrecibo.component';

describe('GerarreciboComponent', () => {
  let component: GerarreciboComponent;
  let fixture: ComponentFixture<GerarreciboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerarreciboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerarreciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
