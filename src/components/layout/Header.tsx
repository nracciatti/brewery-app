import React from "react";
import Link from "next/link";
import { Bars3Icon, BellIcon, UserIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  return (
    <header className="bg-dark-blue p-4 flex justify-between items-center">
      <button className="text-white">
        <Bars3Icon className="h-6 w-6" />
      </button>
      <div className="flex space-x-4">
        <button className="text-white">
          <BellIcon className="h-6 w-6" />
        </button>
        <button className="text-white">
          <UserIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
