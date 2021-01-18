import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminformationComponent } from './adminformation.component';

describe('AdminformationComponent', () => {
  let component: AdminformationComponent;
  let fixture: ComponentFixture<AdminformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
