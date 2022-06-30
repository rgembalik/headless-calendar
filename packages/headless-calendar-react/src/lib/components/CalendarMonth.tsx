import moment, { Moment } from "moment";
import React, { useMemo } from "react";
import { CalendarEvent } from "./CalendarContext";
import { isEventOverlapping } from "./CalendarUtils";

export interface WeekData {
  start: Moment;
  end: Moment;
  events?: CalendarEvent[];
}

export interface WeekPropsType {
  currentDate: Moment | Date;
  children?: (dates: WeekData[]) => React.ReactNode;
  events?: CalendarEvent[];
}

function CalendarMonth({ currentDate, children, events }: WeekPropsType) {
  const [startDay, endDay] = useMemo(
    () => [
      moment(currentDate).startOf("month"),
      moment(currentDate).endOf("month"),
    ],
    [currentDate]
  );

  const weeks: WeekData[] = useMemo(() => {
    let _days = [];
    let date = startDay.clone().subtract(1, "week");

    while (date.add(7, "day").isBefore(endDay, "day")) {
      const weekStart = date.clone().startOf("day");
      const weekEnd = date.clone().add(6, "day").endOf("day");
      _days.push({
        start: weekStart,
        end: weekStart,
        events: events?.filter((event) =>
          isEventOverlapping(event, weekStart, weekEnd)
        ),
      });
    }
    return _days;
  }, [startDay, endDay]);

  return <>{children ? children(weeks) : ""}</>;
}

export { CalendarMonth };
