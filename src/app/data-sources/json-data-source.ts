import { Injectable } from '@angular/core';
import { PollingDataSource } from 'src/app/data-sources/polling-data-source';
import { HttpClient } from '@angular/common/http';

import { JsonParser } from 'src/app/parcers';

@Injectable()
export class JsonDataSource extends PollingDataSource {
  constructor(http: HttpClient) {
    super(http);
  }

  protected url = 'https://www.cbr-xml-daily.ru/daily_json.js';

  protected parser = new JsonParser();
}
