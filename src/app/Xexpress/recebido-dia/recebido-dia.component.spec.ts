import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebidoDiaComponent } from './recebido-dia.component';

describe('RecebidoDiaComponent', () => {
  let component: RecebidoDiaComponent;
  let fixture: ComponentFixture<RecebidoDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebidoDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebidoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
