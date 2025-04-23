"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Crear el cliente de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Definir tipos para el contexto
interface User {
  email: string;
  user_metadata?: {
    name?: string;
  };
}

interface AuthContextType {
  user: User | null;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  register: (
    email: string,
    password: string,
    name: string
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => ({ success: false }),
  register: async () => ({ success: false }),
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  // Verificar sesión actual al cargar
  useEffect(() => {
    const { subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          setUser({
            email: session.user.email || "",
            user_metadata: session.user.user_metadata,
          });
        } else {
          setUser(null);
        }
      }
    ).data;

    // Verificar si hay una sesión activa
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        setUser({
          email: session.user.email || "",
          user_metadata: session.user.user_metadata,
        });
      }
    };

    checkUser();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Limpiar el email (eliminar espacios en blanco)
      const cleanEmail = email.trim();

      // Reemplazar la validación de email actual con esta más estricta
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(cleanEmail)) {
        return {
          success: false,
          error: "Por favor, introduce un correo electrónico válido",
        };
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password,
      });

      if (error) {
        console.error("Error de inicio de sesión:", error.message);
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error("Error inesperado:", error);
      return { success: false, error: "Error al iniciar sesión" };
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      // eliminamos espacios en blanco para evitar errores
      const cleanEmail = email.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(cleanEmail)) {
        return {
          success: false,
          error: "Por favor, introduce un correo electrónico válido",
        };
      }

      console.log("Intentando registrar con:", { email: cleanEmail, name });

      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (error) {
        console.error("Error de registro:", error.message);
        return { success: false, error: error.message };
      }

      if (!data?.user) {
        return {
          success: false,
          error: "No se pudo crear el usuario. Verifica tu email y contraseña.",
        };
      }

      return { success: true };
    } catch (error) {
      console.error("Error inesperado:", error);
      return { success: false, error: "Error al registrarse" };
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
