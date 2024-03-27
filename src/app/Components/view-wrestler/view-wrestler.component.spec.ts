import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWrestlerComponent } from './view-wrestler.component';

describe('ViewWrestlerComponent', () => {
  let component: ViewWrestlerComponent;
  let fixture: ComponentFixture<ViewWrestlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewWrestlerComponent]
    });
    fixture = TestBed.createComponent(ViewWrestlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
