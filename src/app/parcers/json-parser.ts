import { ExchangeRateData, SourceParser } from 'src/app/interfaces';

interface ParsedDataFormat {
  Valute: {
    [key: string]: {
      CharCode: string;
      Name: string;
      Value: number;
    };
  };
}

export class JsonParser implements SourceParser<ExchangeRateData[]> {
  public parse(source: string): ExchangeRateData[] {
    const json: ParsedDataFormat = JSON.parse(source);
    return Object.values(json.Valute).map(({ CharCode, Name, Value }) => ({
      CharCode,
      Name,
      Value,
    }));
  }
}
