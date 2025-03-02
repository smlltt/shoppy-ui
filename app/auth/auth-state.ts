import { create } from "zustand";
import { useEffect } from "react";

interface AuthStoreState {
  authenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  authenticated: false,
  setAuthenticated: (authenticated: boolean) => set(() => ({ authenticated })),
}));

export const useAuthenticate = (authenticated: boolean) => {
  const { setAuthenticated } = useAuthStore();
  useEffect(() => {
    setAuthenticated(authenticated);
  }, [authenticated]);
};
