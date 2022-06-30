import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = create((set) => ({
  user: {
    name: "",
    email: "",
    role: "",
  },
  setUser: (token, data) => {
    localStorage.setItem("qr-waiter", token);
    set((state) => ({
      user: {
        name: data.username,
        email: data.email,
        role: "",
      },
    }));
  },
  removeUser: () => {
    localStorage.removeItem("qr-waiter");
    set((state) => ({
      user: {
        name: "",
        email: "",
        role: "",
      },
    }));
  },
}));

export const useUserStore = useStore;
