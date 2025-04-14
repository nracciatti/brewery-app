import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const HappyHourBanner: React.FC = () => {
  return (
    <div className="bg-warning/20 p-4 flex items-center">
      <ExclamationCircleIcon className="h-6 w-6 text-warning mr-2" />
      <div>
        <h2 className="font-bold text-lg">Happy Hour</h2>
        <p className="text-sm">16:00 - 17:00 hs MEX</p>
      </div>
    </div>
  );
};

export default HappyHourBanner;
