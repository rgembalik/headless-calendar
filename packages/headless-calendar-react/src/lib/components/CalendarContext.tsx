import { createContext } from "react";

export enum CalendarMode {
  MONTH = "month",
  WEEK = "week",
  DAY = "day",
}

export interface ContextState {
  currentDate: Date;
  mode: CalendarMode;
  setCurrentDate: (date: Date) => void;
  next: () => void;
  prev: () => void;
}

export const CalendarContext = createContext({} as {} as ContextState);
