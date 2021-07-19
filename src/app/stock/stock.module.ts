import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockDashboardComponent } from './components/stock-dashboard/stock-dashboard.component';
import { StockRoutingModule } from './stock-routing.module';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';

@NgModule({
  declarations: [StockDashboardComponent, ToggleButtonComponent],
  imports: [CommonModule, StockRoutingModule],
})
export class StockModule {}
