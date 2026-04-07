import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleItem } from './title-item';

describe('TitleItem', () => {
  let component: TitleItem;
  let fixture: ComponentFixture<TitleItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleItem],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
