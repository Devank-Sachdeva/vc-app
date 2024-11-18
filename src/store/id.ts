import { create } from "zustand";

interface UserState {
    id: string | null;
    user: "startup" | "investor" | null;
    setId: (id: string) => void;
    setUser: (user: "startup" | "investor" | null) => void;
    clearId: () => void;
    clearUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
    id: null,
    user: null,
    setId: (id) => set({ id }),
    setUser: (user) => set({ user }),
    clearId: () => set({ id: null }),
    clearUser: () => set({ user: null }),
}));

export default useUserStore;
