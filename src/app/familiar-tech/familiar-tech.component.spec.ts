import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliarTechComponent } from './familiar-tech.component';

describe('FamiliarTechComponent', () => {
  let component: FamiliarTechComponent;
  let fixture: ComponentFixture<FamiliarTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliarTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliarTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
