import type { FC } from "react";

const Spinner: FC = () => {
  return (
    <div className="h-10 w-10 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
  );
};

export default Spinner;
