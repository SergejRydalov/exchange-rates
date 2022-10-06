import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, filter, map } from 'rxjs/operators';

import { ExchangeRateData, SourceParser } from 'src/app/interfaces';

export abstract class PollingDataSource {
  protected abstract url: string;

  protected abstract parser: SourceParser<ExchangeRateData[]>;

  protected constructor(private readonly http: HttpClient) {}

  public getData(): Observable<ExchangeRateData[]> {
    return this.http.get(this.url, { responseType: 'text' }).pipe(
      catchError((e) => of(e)),
      filter((response) => !(response instanceof HttpErrorResponse)),
      map((response) => this.parser.parse(response))
    );
  }
}
