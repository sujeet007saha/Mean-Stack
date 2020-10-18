import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffortsdataComponent } from './effortsdata.component';

describe('EffortsdataComponent', () => {
  let component: EffortsdataComponent;
  let fixture: ComponentFixture<EffortsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffortsdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffortsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
