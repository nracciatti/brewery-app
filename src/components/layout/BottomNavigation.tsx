import React from "react";
import Link from "next/link";
import {
  CalendarIcon,
  HomeIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";

const BottomNavigation: React.FC = () => {
  return (
    <div className="bg-dark-blue border-t border-gray-800 fixed bottom-0 w-full">
      <div className="container mx-auto">
        {" "}
        <div className="flex justify-around py-3">
          <Link
            href="/calendar"
            className="flex flex-col items-center text-gray-400"
          >
            <CalendarIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Calendario</span>
          </Link>
          <Link href="/" className="flex flex-col items-center text-blue-500">
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Inicio</span>
          </Link>
          <Link
            href="/chat"
            className="flex flex-col items-center text-gray-400"
          >
            <ChatBubbleOvalLeftIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Chat</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
