import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeallButtonComponent } from './seeall-button.component';

describe('SeeallButtonComponent', () => {
  let component: SeeallButtonComponent;
  let fixture: ComponentFixture<SeeallButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SeeallButtonComponent]
    });
    fixture = TestBed.createComponent(SeeallButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
