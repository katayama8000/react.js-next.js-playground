import { useState, useEffect } from 'react';

type TUser = {
  name: string;
  age: number;
};

export const atom = (initialValue: TUser) => ({
  init: initialValue,
});

const atomStateMap = new WeakMap<
  { init: TUser },
  { value: TUser; listeners: Set<() => void> }
>();
export const getAtomState = (atom: { init: TUser }) => {
  let atomState = atomStateMap.get(atom);
  if (!atomState) {
    atomState = { value: atom.init, listeners: new Set<() => void>() };
    atomStateMap.set(atom, atomState);
  }
  return atomState;
};

export const useAtom = (atom: { init: TUser }) => {
  const atomState = getAtomState(atom);
  const [value, setValue] = useState<TUser>(atomState.value);
  useEffect(() => {
    const callback = () => setValue(atomState.value);
    atomState.listeners.add(callback);
    callback();
    return () => {
      atomState.listeners.delete(callback);
    };
  }, [atomState]);
  const setAtom = (nextValue: TUser) => {
    atomState.value = nextValue;
    atomState.listeners.forEach((l: () => void) => l());
  };
  return [value, setAtom] as const;
};
