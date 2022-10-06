import { Observable } from 'rxjs';
import { ExchangeRateData } from 'src/app/interfaces';

export abstract class DataSource {
  public abstract getData(): Observable<ExchangeRateData[]>;
}
