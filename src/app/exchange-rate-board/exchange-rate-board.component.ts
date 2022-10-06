import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRateData } from 'src/app/interfaces';
import { PollingDataService } from 'src/app/service/polling-data.service';

@Component({
  selector: 'exchange-rate-board',
  templateUrl: './exchange-rate-board.component.html',
  styleUrls: ['./exchange-rate-board.component.css'],
})
export class ExchangeRateBoardComponent {
  public pollingData$: Observable<ExchangeRateData[]>;

  constructor(public pollingDataService: PollingDataService) {
    this.pollingData$ = pollingDataService.getPollingData();
  }
}
