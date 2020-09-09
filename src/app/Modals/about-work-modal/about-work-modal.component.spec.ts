import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWorkModalComponent } from './about-work-modal.component';

describe('AboutWorkModalComponent', () => {
  let component: AboutWorkModalComponent;
  let fixture: ComponentFixture<AboutWorkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutWorkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWorkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
