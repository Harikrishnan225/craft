import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCraftComponent } from './explore-craft.component';

describe('ExploreCraftComponent', () => {
  let component: ExploreCraftComponent;
  let fixture: ComponentFixture<ExploreCraftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExploreCraftComponent]
    });
    fixture = TestBed.createComponent(ExploreCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
