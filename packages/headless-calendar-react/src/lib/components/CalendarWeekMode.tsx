import { Moment } from "moment";
import { useContext } from "react";
import { CalendarMode, CalendarContext } from "./CalendarContext";
import { CalendarWeek, DayData } from "./CalendarWeek";

export interface CalendarWeekModeProps {
  children?: (
    days: DayData[],
    timeToPosition: (time: string | Date | Moment) => number
  ) => React.ReactNode;
  startHour?: number;
  endHour?: number;
}

function CalendarWeekMode({
  children,
  startHour = 0,
  endHour = 24,
}: CalendarWeekModeProps) {
  const { mode, currentDate, events } = useContext(CalendarContext);

  return (
    <>
      {mode === CalendarMode.WEEK ? (
        <CalendarWeek
          currentDate={currentDate}
          events={events}
          startHour={startHour}
          endHour={endHour}
        >
          {children}
        </CalendarWeek>
      ) : null}
    </>
  );
}

export { CalendarWeekMode };
