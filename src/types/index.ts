import type { ReactNode } from "react";

type ChildrenType = {
  children: ReactNode;
};

interface Ticker {
  symbol: string;
  lastPrice: string;
}

export type { ChildrenType, Ticker };
