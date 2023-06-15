import type { User } from "firebase/auth";
import { atom } from "jotai";

export const userAtom = atom<User | null>(null);
export const getUserAtom = atom<User | null>((get) => get(userAtom));
export const getUserEmailAtom = atom<string | null | undefined>(
  (get) => get(userAtom)?.email
);
export const setUserAtom = atom<null, User>(null, (_get, set, update) => {
  set(userAtom, update);
  set(themeAtom, "aquamarine");
});

export const themeAtom = atom<"red" | "aquamarine">("red");
export const getThemeAtom = atom<"red" | "aquamarine">((get) => get(themeAtom));
export const setThemeAtom = atom<null, "red" | "aquamarine">(
  null,
  (_get, set, update) => {
    set(themeAtom, update);
  }
);
