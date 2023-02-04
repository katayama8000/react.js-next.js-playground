import type { User } from "firebase/auth";
import { atom } from "jotai";

export const userAtom = atom<User | null>(null);
export const getUserAtom = atom<User | null>((get) => get(userAtom));
export const setUserAtom = atom<null, User>(null, (_get, set, update) => {
  set(userAtom, update);
});
export const getUserEmailAtom = atom<string | null | undefined>(
  (get) => get(userAtom)?.email
);
