import { useContext } from "react";
import { CalendarMode, CalendarContext } from "./CalendarContext";
import { Moment } from "moment";
import { CalendarWeek } from "./CalendarWeek";

export interface CalendarWeekModeProps {
  children?: (days: Moment[]) => React.ReactNode;
}

function CalendarWeekMode({ children }: CalendarWeekModeProps) {
  const { mode, currentDate } = useContext(CalendarContext);

  return (
    <>
      {mode === CalendarMode.WEEK ? (
        <CalendarWeek currentDate={currentDate}>{children}</CalendarWeek>
      ) : null}
    </>
  );
}

export { CalendarWeekMode };
