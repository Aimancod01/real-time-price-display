import { ErrorBoundary } from "react-error-boundary";
import type { ChildrenType } from "../types";
import { Suspense, type FC } from "react";
import { MainErrorFallback } from "../components/errors/main";
import Spinner from "../components/ui/loader/spinner";

export const AppProvider: FC<ChildrenType> = ({ children }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        {children}
      </ErrorBoundary>
    </Suspense>
  );
};
