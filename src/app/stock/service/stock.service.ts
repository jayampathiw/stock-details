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
  //Mock data for stock
  allStockData$: Observable<Stock[]> = of([
    apple_stock,
    alphabet_stock,
    microsoft_stock,
    tesla_stock,
  ]);

  //Handles the toggle button functionality
  updateStockState = new BehaviorSubject<string>('-1');
  updateStockState$ = this.updateStockState.asObservable();

  //combines the stock and user action streams and display the filtered data.
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

  /**
   * Updates the stock information from the emitted stock id.
   *
   * @param id stock id
   */
  updateStock(id: string) {
    this.updateStockState.next(id);
  }
}
