import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockDashboardComponent } from './components/stock-dashboard/stock-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: StockDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
