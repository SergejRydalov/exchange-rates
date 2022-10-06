import { Inject, Injectable } from '@angular/core';
import { from, iif, interval, Observable } from 'rxjs';
import { ExchangeRateData } from 'src/app/interfaces';
import { DATA_SOURCE } from 'src/app/tokens/data-source.token';
import { concatMap, map, startWith, switchMap, tap } from 'rxjs/operators';
import { DataSource } from 'src/app/data-sources';
import { VALUTE_FILTER } from 'src/app/tokens/valute-filter.token';

const DURATION_INTERVAL = 10000;

@Injectable({
  providedIn: 'root',
})
export class PollingDataService {
  private readonly pollingData$: Observable<ExchangeRateData[]>;

  constructor(
    @Inject(DATA_SOURCE) sources: DataSource[],
    @Inject(VALUTE_FILTER) filterKey: string
  ) {
    let hasData: boolean;
    this.pollingData$ = interval(DURATION_INTERVAL).pipe(
      startWith(0),
      tap(() => {
        hasData = false;
      }),
      switchMap(() => from(sources)),
      concatMap((source) =>
        iif(
          () => !hasData,
          source
            .getData()
            .pipe(tap((response) => (hasData = Boolean(response))))
        )
      ),
      map((rateList) => rateList.filter((item) => item.CharCode === filterKey))
    );
  }

  getPollingData(): Observable<ExchangeRateData[]> {
    return this.pollingData$;
  }
}
