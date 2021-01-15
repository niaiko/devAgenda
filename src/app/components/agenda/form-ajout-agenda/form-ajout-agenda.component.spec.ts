import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutAgendaComponent } from './form-ajout-agenda.component';

describe('FormAjoutAgendaComponent', () => {
  let component: FormAjoutAgendaComponent;
  let fixture: ComponentFixture<FormAjoutAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAjoutAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAjoutAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
