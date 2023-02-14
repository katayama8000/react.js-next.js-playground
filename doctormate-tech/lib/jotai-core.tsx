import { useState, useEffect } from 'react';

type TUser = {
  name: string;
  age: number;
};

export const atom = (initialValue: TUser): { init: TUser } => ({
  init: initialValue,
});

const atomStateMap = new WeakMap<
  { init: TUser },
  { value: TUser; listeners: Set<() => void> }
>();

export const getAtomState = (atom: {
  init: TUser;
}): { value: TUser; listeners: Set<() => void> } => {
  let atomState = atomStateMap.get(atom);
  console.log('atomStateMap', atomState);
  if (!atomState) {
    console.log('atomStateMap', !!atomState);
    atomState = { value: atom.init, listeners: new Set<() => void>() };
    atomStateMap.set(atom, atomState);
  }
  console.log('atomState', atomState);
  return atomState;
};

export const useAtom = (atom: { init: TUser }) => {
  const atomState = getAtomState(atom);
  console.log('atomStateMap', atomState);
  const [value, setValue] = useState<TUser>(atomState.value);
  useEffect(() => {
    const callback = () => setValue(atomState.value);
    atomState.listeners.add(callback);
    callback();
    console.log(atomState);
    return () => {
      atomState.listeners.delete(callback);
    };
  }, [atomState]);
  const setAtom = (nextValue: TUser) => {
    atomState.value = nextValue;
    atomState.listeners.forEach((l: () => void) => {
      l();
      console.log('llllll', l);
    });
  };
  return [value, setAtom] as const;
};
