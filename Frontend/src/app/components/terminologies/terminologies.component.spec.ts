import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminologiesComponent } from './terminologies.component';

describe('TerminologiesComponent', () => {
  let component: TerminologiesComponent;
  let fixture: ComponentFixture<TerminologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
