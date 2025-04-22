import { User as SupabaseUser } from "@supabase/supabase-js";

export type User = SupabaseUser;

export interface AuthState {
  user: User | null;
  loading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export interface AuthResponse {
  success: boolean;
  error?: string;
}

