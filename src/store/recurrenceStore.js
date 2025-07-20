import { create } from 'zustand';

export const useRecurrenceStore = create((set) => ({
  frequency: 'daily',
  interval: 1,
  weekdays: ['Monday', 'Wednesday'],  // default weekdays selected
  pattern: null,
  startDate: new Date().toISOString().slice(0, 10),  // today's date in 'yyyy-mm-dd' format
  endDate: null,
  setFrequency: (freq) => set({ frequency: freq }),
  setInterval: (val) => set({ interval: val }),
  setWeekdays: (days) => set({ weekdays: days }),
  setPattern: (pattern) => set({ pattern }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),

}));
