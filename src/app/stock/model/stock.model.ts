export interface Stock {
  id: string;
  title: string;
  closePrice: number;
  openPrice: number;
  lastTradeTime: string;
  volume: number;
  isActive: boolean;
  highPrice: number;
  lowPrice: number;
}
