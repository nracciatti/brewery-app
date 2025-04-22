"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dark-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Brewery App
        </Link>

        <div className="flex items-center space-x-4">
          {/* Icono de campana (notificaciones) - ahora transparente */}
          <button
            className="p-2 flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Notificaciones"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v0.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          {/* Icono de usuario - ahora transparente */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Menu de usuario"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Menú desplegable */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {user ? (
                  <>
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                      <p className="font-medium">
                        {user.user_metadata?.name || "Usuario"}
                      </p>
                      <p className="text-gray-500 text-xs">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Iniciar sesión
                    </Link>
                    <Link
                      href="/register"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Registrarse
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
