import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumomensageiroComponent } from './resumomensageiro.component';

describe('ResumomensageiroComponent', () => {
  let component: ResumomensageiroComponent;
  let fixture: ComponentFixture<ResumomensageiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumomensageiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumomensageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
