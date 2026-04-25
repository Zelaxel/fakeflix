import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageGuest } from './homepage-guest';

describe('HomepageGuest', () => {
  let component: HomepageGuest;
  let fixture: ComponentFixture<HomepageGuest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageGuest],
    }).compileComponents();

    fixture = TestBed.createComponent(HomepageGuest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
