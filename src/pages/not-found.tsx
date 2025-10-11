import type { FC } from "react";

const NotFound: FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-2xl text-red-600">404 Page Not Found</h1>
    </div>
  );
};

export default NotFound;
