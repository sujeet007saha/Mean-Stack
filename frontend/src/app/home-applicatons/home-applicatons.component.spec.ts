import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeApplicatonsComponent } from './home-applicatons.component';

describe('HomeApplicatonsComponent', () => {
  let component: HomeApplicatonsComponent;
  let fixture: ComponentFixture<HomeApplicatonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeApplicatonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeApplicatonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
