import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DATA_SOURCE } from 'src/app/tokens/data-source.token';
import { PollingDataService } from 'src/app/service/polling-data.service';
import { ExchangeRateBoardComponent } from './exchange-rate-board.component';

describe('ExchangeRateBoardComponent', () => {
  let component: ExchangeRateBoardComponent;
  let fixture: ComponentFixture<ExchangeRateBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExchangeRateBoardComponent],
      providers: [
        { provide: DATA_SOURCE, useValue: [{ getData: () => [] }] },
        PollingDataService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
