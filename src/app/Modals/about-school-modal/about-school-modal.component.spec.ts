import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSchoolModalComponent } from './about-school-modal.component';

describe('AboutSchoolModalComponent', () => {
  let component: AboutSchoolModalComponent;
  let fixture: ComponentFixture<AboutSchoolModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSchoolModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSchoolModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
