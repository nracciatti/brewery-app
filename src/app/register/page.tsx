"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setIsLoading(true);

    try {
      const result = await register(email, password, name);
      if (result.success) {
        router.push("/");
      } else {
        setError(result.error || "Error al registrarse");
      }
    } catch (err) {
      setError("Ocurrió un error al registrarse");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center p-4 min-h-[calc(100vh-132px)]">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Crear Cuenta
          </h1>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirmar Contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-primary text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity disabled:opacity-70"
            >
              {isLoading ? "Registrando..." : "Registrarse"}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}


