import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PollingDataSource } from 'src/app/data-sources/polling-data-source';

import { XmlParser } from 'src/app/parcers';

@Injectable()
export class XmlDataSource extends PollingDataSource {
  constructor(http: HttpClient) {
    super(http);
  }

  protected url = 'https://www.cbr-xml-daily.ru/daily_utf8.xml';

  protected parser = new XmlParser();
}
