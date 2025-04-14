import React from "react";
import Header from "./Header";
import BottomNavigation from "./BottomNavigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-blue text-white">
      <Header />
      <main className="flex-grow">{children}</main>
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
