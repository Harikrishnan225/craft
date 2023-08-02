import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicesSectionComponent } from './choices-section.component';

describe('ChoicesSectionComponent', () => {
  let component: ChoicesSectionComponent;
  let fixture: ComponentFixture<ChoicesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChoicesSectionComponent]
    });
    fixture = TestBed.createComponent(ChoicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
