import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartResidesComponent } from './heart-resides.component';

describe('HeartResidesComponent', () => {
  let component: HeartResidesComponent;
  let fixture: ComponentFixture<HeartResidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeartResidesComponent]
    });
    fixture = TestBed.createComponent(HeartResidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
