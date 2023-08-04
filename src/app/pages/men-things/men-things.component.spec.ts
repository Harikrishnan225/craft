import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenThingsComponent } from './men-things.component';

describe('MenThingsComponent', () => {
  let component: MenThingsComponent;
  let fixture: ComponentFixture<MenThingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MenThingsComponent]
    });
    fixture = TestBed.createComponent(MenThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
