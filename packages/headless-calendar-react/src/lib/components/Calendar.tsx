import { isFunction } from "lodash";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { CalendarContext, CalendarMode } from "./CalendarContext";

import { CalendarMonthMode } from "./CalendarMonthMode";
import { CalendarWeekMode } from "./CalendarWeekMode";

interface CalendarProps {
  children: React.ReactNode | ((calendarState: any) => React.ReactNode);
  mode?: CalendarMode;
}

function Calendar({ children, mode }: CalendarProps) {
  const [calendarState, setCalendarState] = useState({
    currentDate: new Date(),
    mode: mode ?? CalendarMode.MONTH,
  });

  useEffect(() => {
    setCalendarState({
      ...calendarState,
      mode: mode ?? CalendarMode.MONTH,
    });
  }, [mode ?? CalendarMode.MONTH]);

  const context = useMemo(
    () => ({
      ...calendarState,
      setCurrentDate: (date: Date) => {
        setCalendarState({ ...calendarState, currentDate: date });
      },
      next: () => {
        setCalendarState({
          ...calendarState,
          currentDate: moment(calendarState.currentDate)
            .add(
              1,
              calendarState.mode === CalendarMode.MONTH ? "month" : "week"
            )
            .toDate(),
        });
      },
      prev: () => {
        setCalendarState({
          ...calendarState,
          currentDate: moment(calendarState.currentDate)
            .add(
              -1,
              calendarState.mode === CalendarMode.MONTH ? "month" : "week"
            )
            .toDate(),
        });
      },
    }),
    [calendarState]
  );

  return (
    <CalendarContext.Provider value={context}>
      {isFunction(children) ? children(context) : children}
    </CalendarContext.Provider>
  );
}

Calendar.Context = CalendarContext;
Calendar.WeekMode = CalendarWeekMode;
Calendar.MonthMode = CalendarMonthMode;

export { Calendar };
export type { CalendarProps };
