'use client';
import { Asteroid } from '@/src/types/types';
import { createContext, useContext, useState } from 'react';

type initValue = {
  state: Asteroid[];
  setState: React.Dispatch<React.SetStateAction<Asteroid[]>>;
  unit: string;
  setUnit: React.Dispatch<React.SetStateAction<string>>;
  send: boolean;
  setSend: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BinContext = createContext<initValue | null>(null);

export function BinProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<Asteroid[]>([]);
  const [unit, setUnit] = useState<string>('km');

  const [send, setSend] = useState(false);

  return (
    <BinContext.Provider value={{ state, setState, unit, setUnit, send, setSend }}>{children}</BinContext.Provider>
  );
}

export function useBin() {
  return useContext(BinContext);
}
