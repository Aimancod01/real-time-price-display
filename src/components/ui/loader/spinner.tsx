import type { FC } from "react";

const Spinner: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-10 w-10 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
