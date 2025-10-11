import { useEffect, useState, type FC } from "react";
import Spinner from "./ui/loader/spinner";
import type { Ticker, WebSocketTicker } from "../types";
import { io } from "socket.io-client";

const PriceDisplay: FC = () => {
  const [price, setPrice] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState<string | null>(null);
  async function fetchInitial() {
    try {
      const res = await fetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT"]`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = (await res.json()) as Ticker[];
      setPrice(data[0].lastPrice);
    } catch (error) {
      setError(`Data Load Failed ${error}`);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchInitial();
  }, []);

  useEffect(() => {
    const socket = io("wss://stream.binance.com:9443/ws/btcusdt@ticker.", {
      transports: ["websocket"],
      reconnection: true,
    });
    socket.on("connect", () => {
      console.log("Socket Connected");
    });
    socket.on("onmessage", (data: WebSocketTicker) => {
      if (data && data.c) {
        setPrice(data.c);
      }
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center  ">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Initial Last Price
      </h2>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p className="text-md md:text-xl font-bold text-orange-500">
          BTC/USDT: ${price}
        </p>
      )}
    </div>
  );
};

export default PriceDisplay;
