import { first } from 'rxjs/operators';
import { of } from 'rxjs';

import { ExchangeRateData } from 'src/app/interfaces';
import { DataSource } from 'src/app/data-sources';

import { PollingDataService } from './polling-data.service';

describe('PollingDataService', () => {
  it('should give first value', () => {
    const service = new PollingDataService(
      [new MockData1(), new MockData2()],
      'EUR'
    );
    service
      .getPollingData()
      .pipe(first())
      .subscribe((response: ExchangeRateData[]) =>
        expect(response[0].Value).toEqual(11.1111)
      );
  });
  it('should give next value on error', () => {
    const service = new PollingDataService(
      [new MockData1(), new MockData2()],
      'EUR'
    );
    service
      .getPollingData()
      .pipe(first())
      .subscribe((response: ExchangeRateData[]) =>
        expect(response[0].Value).toEqual(22.2222)
      );
  });
});

class MockData1 extends DataSource {
  getData() {
    return of([
      {
        CharCode: 'EUR',
        Name: 'Евро',
        Value: 11.1111,
      },
    ]);
  }
}

class MockData2 extends DataSource {
  getData() {
    return of([
      {
        CharCode: 'EUR',
        Name: 'Евро',
        Value: 22.2222,
      },
    ]);
  }
}
