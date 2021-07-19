import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/stock-details', pathMatch: 'full' },
  {
    path: 'stock-details',
    loadChildren: () =>
      import('./stock/stock.module').then((m) => m.StockModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
