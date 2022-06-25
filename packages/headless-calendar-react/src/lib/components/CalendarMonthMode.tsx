import { Moment } from "moment";
import { useContext } from "react";
import { CalendarMonth } from "..";
import { CalendarMode, CalendarContext } from "./CalendarContext";

export interface CalendarMonthModeProps {
  children: (weekStarts: Moment[]) => React.ReactNode;
}

function CalendarMonthMode({ children }: CalendarMonthModeProps) {
  const { mode, currentDate } = useContext(CalendarContext);
  return (
    <>
      {mode === CalendarMode.MONTH ? (
        <CalendarMonth currentDate={currentDate}>{children}</CalendarMonth>
      ) : null}
    </>
  );
}

export { CalendarMonthMode };
