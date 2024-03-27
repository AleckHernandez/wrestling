import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWrestlerComponent } from './create-wrestler.component';

describe('CreateWrestlerComponent', () => {
  let component: CreateWrestlerComponent;
  let fixture: ComponentFixture<CreateWrestlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateWrestlerComponent]
    });
    fixture = TestBed.createComponent(CreateWrestlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
