import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaContribComponent } from './pesquisa-contrib.component';

describe('PesquisaContribComponent', () => {
  let component: PesquisaContribComponent;
  let fixture: ComponentFixture<PesquisaContribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaContribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaContribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
