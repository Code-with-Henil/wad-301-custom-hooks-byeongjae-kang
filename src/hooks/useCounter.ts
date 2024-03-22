import { useState } from "react";

type CounterHook = [number, () => void];

export const useCounter = (initialValue: number = 0): CounterHook => {
  const [state, setState] = useState<number>(initialValue);

  const increase = () => {
    setState((prevState) => prevState + 1);
  };
  return [state, increase];
};
