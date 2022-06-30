import { Moment } from "moment";
import { createContext } from "react";

export enum CalendarMode {
  MONTH = "month",
  WEEK = "week",
  DAY = "day",
}

export enum CalendarEventType {
  POINT_IN_TIME = "point-in-time",
  HOUR_RANGE = "hour-range",
  DATE_RANGE = "date-range",
}

export interface CalendarEvent {
  start: Moment;
  end?: Moment;
  title?: string;
  color?: string;
  type?: CalendarEventType;
}

export interface CalendarContextData {
  currentDate: Date;
  mode: CalendarMode;
  events?: CalendarEvent[];
  setCurrentDate: (date: Date) => void;
  next: () => void;
  prev: () => void;
}

export const CalendarContext = createContext({} as {} as CalendarContextData);
