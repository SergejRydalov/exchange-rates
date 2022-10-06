import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { JsonDataSource } from 'src/app/data-sources';
import { XmlDataSource } from 'src/app/data-sources';

import { DATA_SOURCE } from 'src/app/tokens/data-source.token';
import { VALUTE_FILTER } from 'src/app/tokens/valute-filter.token';

import { AppComponent } from './app.component';
import { ExchangeRateBoardComponent } from './exchange-rate-board/exchange-rate-board.component';

const dataSources = [JsonDataSource, XmlDataSource].map((source) => ({
  provide: DATA_SOURCE,
  useClass: source,
  multi: true,
}));

@NgModule({
  declarations: [AppComponent, ExchangeRateBoardComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [...dataSources, { provide: VALUTE_FILTER, useValue: 'EUR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
