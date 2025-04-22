import { AuthProvider } from "../contexts/AuthContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brewery App",
  description: "Encuentra las mejores cervecerías",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-dark-blue text-white">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
