import { ExchangeRateData, SourceParser } from 'src/app/interfaces';

export class XmlParser implements SourceParser<ExchangeRateData[]> {
  public parse(source: string): ExchangeRateData[] {
    const parser = new DOMParser();
    const xmlDocument = parser.parseFromString(source, 'text/xml');
    const nodes = xmlDocument.evaluate(
      '/ValCurs/Valute',
      xmlDocument,
      null,
      XPathResult.ANY_TYPE,
      null
    );

    const valutes = [];
    let node = nodes.iterateNext();
    while (node) {
      const valute: any = {};
      node.childNodes.forEach(
        (item) => (valute[item.nodeName] = item.textContent)
      );
      valutes.push(valute);
      node = nodes.iterateNext();
    }

    return valutes.map(({ CharCode, Name, Value }) => ({
      CharCode,
      Name,
      Value: Number.parseFloat(Value.replace(',', '.')),
    }));
  }
}
