import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderGrowingComponent } from './wonder-growing.component';

describe('WonderGrowingComponent', () => {
  let component: WonderGrowingComponent;
  let fixture: ComponentFixture<WonderGrowingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WonderGrowingComponent]
    });
    fixture = TestBed.createComponent(WonderGrowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
