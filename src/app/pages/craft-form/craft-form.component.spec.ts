import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftFormComponent } from './craft-form.component';

describe('CraftFormComponent', () => {
  let component: CraftFormComponent;
  let fixture: ComponentFixture<CraftFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CraftFormComponent]
    });
    fixture = TestBed.createComponent(CraftFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
