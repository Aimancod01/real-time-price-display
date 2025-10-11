import type { ReactNode } from "react";

type ChildrenType = {
  children: ReactNode;
};

interface Ticker {
  symbol: string;
  lastPrice: string;
}

interface WebSocketTicker {
  s: string;
  c: string;
}

export type { ChildrenType, Ticker, WebSocketTicker };
