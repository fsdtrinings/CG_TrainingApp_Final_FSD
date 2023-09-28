import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherReprtComponent } from './teacher-reprt.component';

describe('TeacherReprtComponent', () => {
  let component: TeacherReprtComponent;
  let fixture: ComponentFixture<TeacherReprtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherReprtComponent]
    });
    fixture = TestBed.createComponent(TeacherReprtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
