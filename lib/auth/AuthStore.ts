import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type AuthStore = {
  accessToken: string | null;
};

type AuthAction = {
  setAcessToken: (token: string | null) => void;
};

export const useAuthStore = create(
  persist<AuthStore & AuthAction>(
    (set, get) => ({
      accessToken: null,
      setAcessToken: (accessToken) => {
        set({ accessToken });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
