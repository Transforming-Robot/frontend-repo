import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface CounterState {
  count: number;
  increase: () => void;
}

export const useCounterStore = create<CounterState>()(
  devtools(
    (set) => ({
      count: 0,
      increase: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: 'counter-storage',
    },
  ),
);
