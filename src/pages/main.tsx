import type { FC } from "react";
import Header from "../components/Header";
import PriceDisplay from "../components/PriceDisplay";

const Main: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <PriceDisplay />
      </main>
      <footer className="text-center text-gray-500 p-3 border-t border-t-gray-200">
        <p>All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Main;
