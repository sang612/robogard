import { PreLoaderProps } from "@/type";
import { CSSProperties } from "react";
import BounceLoader from "react-spinners/BounceLoader";

export const PreLoader = ({ loading }: PreLoaderProps) => {
  const override: CSSProperties = {
    opacity: "60%",
  };

  return (
    <div className="sweet-loading flex items-center justify-center h-screen">
      <BounceLoader
        color="#000"
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
