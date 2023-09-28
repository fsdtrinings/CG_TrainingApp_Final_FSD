import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReprtComponent } from './student-reprt.component';

describe('StudentReprtComponent', () => {
  let component: StudentReprtComponent;
  let fixture: ComponentFixture<StudentReprtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentReprtComponent]
    });
    fixture = TestBed.createComponent(StudentReprtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
