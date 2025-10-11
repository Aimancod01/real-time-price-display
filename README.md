# Real-Time Price Display

Stack

- React (Typescript)
- Tailwind CSS
- Binance REST + WebSocket API

How to Run
1- npm install
2- npm run dev

Features

- Fetches BTC price on load
- Type-safe with Typescript
- Real-time price updates via WebSocket

APIs Used

- Rest: https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT"]
- WebSocket: wss://stream.binance.com:9443/ws/btcusdt@ticker.

Code Explanation

1 Type Definitions- src/types/index.ts
2 PriceDisplay Component - src/components/PriceDisplay .tsx
This is the main functional component. it perform three tasks:
1- Fetch initial data
2- Display dynamic price
3 Handles loading and error states
