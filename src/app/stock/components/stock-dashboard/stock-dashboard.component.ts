import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../../model/stock.model';
import { StockService } from '../../service/stock.service';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockDashboardComponent implements OnInit {
  stockData$: Observable<Stock[]>;

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stockData$ = this.stockService.stockData$;
  }

  updateStockState(id: string): void {
    this.stockService.updateStock(id);
  }
}
