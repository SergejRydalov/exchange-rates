export interface SourceParser<T> {
  parse(source: string): T;
}
