import { atom } from "jotai";

export const countAtom = atom<number>(0);
export const getAtom = atom<number>((get) => get(countAtom));
export const setAtom = atom<null, number>(null, (_get, set, update) => {
  set(countAtom, update);
});
