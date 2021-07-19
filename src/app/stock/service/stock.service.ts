import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  apple_stock,
  alphabet_stock,
  microsoft_stock,
  tesla_stock,
} from '../mock/data';
import { Stock } from '../model/stock.model';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  allStockData$: Observable<Stock[]> = of([
    apple_stock,
    alphabet_stock,
    microsoft_stock,
    tesla_stock,
  ]);

  updateStockState = new BehaviorSubject<string>('-1');

  updateStockState$ = this.updateStockState.asObservable();

  stockData$ = combineLatest([this.allStockData$, this.updateStockState$]).pipe(
    map(([allStockData, updatedStockId]) => {
      return allStockData.map((data) => {
        if (data.id === updatedStockId) data.isActive = !data.isActive;
        return data;
      });
    }),
    tap((data) => console.log(data))
  );

  constructor() {}

  updateStock(data: string) {
    this.updateStockState.next(data);
  }
}
