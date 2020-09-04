import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeModalComponent } from './about-me-modal.component';

describe('AboutMeModalComponent', () => {
  let component: AboutMeModalComponent;
  let fixture: ComponentFixture<AboutMeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
