import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleGrid } from './title-grid';

describe('TitleGrid', () => {
  let component: TitleGrid;
  let fixture: ComponentFixture<TitleGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
