import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Checklist, User } from '@/app/types';

interface AppState {
  checklists: Checklist[];
  users: User[];
  currentUser: User | null;
  theme: {
    primary: string;
    radius: string;
    font: string;
  };
  addChecklist: (checklist: Checklist) => void;
  updateChecklist: (id: string, checklist: Partial<Checklist>) => void;
  deleteChecklist: (id: string) => void;
  addUser: (user: User) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  setCurrentUser: (user: User | null) => void;
  updateTheme: (theme: Partial<AppState['theme']>) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      checklists: [],
      users: [],
      currentUser: null,
      theme: {
        primary: 'neutral',
        radius: '0.5rem',
        font: 'inter',
      },
      addChecklist: (checklist) =>
        set((state) => ({ checklists: [...state.checklists, checklist] })),
      updateChecklist: (id, checklist) =>
        set((state) => ({
          checklists: state.checklists.map((c) =>
            c.id === id ? { ...c, ...checklist } : c
          ),
        })),
      deleteChecklist: (id) =>
        set((state) => ({
          checklists: state.checklists.filter((c) => c.id !== id),
        })),
      addUser: (user) =>
        set((state) => ({ users: [...state.users, user] })),
      updateUser: (id, user) =>
        set((state) => ({
          users: state.users.map((u) =>
            u.id === id ? { ...u, ...user } : u
          ),
        })),
      deleteUser: (id) =>
        set((state) => ({
          users: state.users.filter((u) => u.id !== id),
        })),
      setCurrentUser: (user) =>
        set({ currentUser: user }),
      updateTheme: (theme) =>
        set((state) => ({
          theme: { ...state.theme, ...theme },
        })),
    }),
    {
      name: 'app-storage',
      skipHydration: true,
    }
  )
);