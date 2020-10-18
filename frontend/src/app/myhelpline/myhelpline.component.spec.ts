import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhelplineComponent } from './myhelpline.component';

describe('MyhelplineComponent', () => {
  let component: MyhelplineComponent;
  let fixture: ComponentFixture<MyhelplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhelplineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhelplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
