import React from "react";
import { MoonLoader } from "react-spinners";

const LoadingPage = () => (
  <div className="w-[100%] h-full flex items-center justify-center"  >
    <MoonLoader color="#650178" loading={true} size={30}  />
  </div>
);

export default LoadingPage;