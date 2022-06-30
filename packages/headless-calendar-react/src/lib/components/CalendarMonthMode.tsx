import { useContext } from "react";
import { CalendarMode, CalendarContext } from "./CalendarContext";
import { WeekData, CalendarMonth } from "./CalendarMonth";

export interface CalendarMonthModeProps {
  children: (weeks: WeekData[]) => React.ReactNode;
}

function CalendarMonthMode({ children }: CalendarMonthModeProps) {
  const { mode, currentDate, events } = useContext(CalendarContext);
  return (
    <>
      {mode === CalendarMode.MONTH ? (
        <CalendarMonth currentDate={currentDate} events={events}>
          {children}
        </CalendarMonth>
      ) : null}
    </>
  );
}

export { CalendarMonthMode };
