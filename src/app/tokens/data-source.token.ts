import { InjectionToken } from '@angular/core';
import { DataSource } from 'src/app/data-sources';

export const DATA_SOURCE = new InjectionToken<DataSource[]>('data-source');
