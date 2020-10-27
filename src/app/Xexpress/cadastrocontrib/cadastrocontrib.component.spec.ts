import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrocontribComponent } from './cadastrocontrib.component';

describe('CadastrocontribComponent', () => {
  let component: CadastrocontribComponent;
  let fixture: ComponentFixture<CadastrocontribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrocontribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrocontribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
