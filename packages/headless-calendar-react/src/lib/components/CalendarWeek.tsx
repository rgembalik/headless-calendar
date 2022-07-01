import moment, { Moment } from "moment";
import React, { useCallback, useMemo } from "react";
import { CalendarEvent } from "./CalendarContext";

export interface DayData {
  date: Moment;
  events?: CalendarEvent[];
}

export interface WeekPropsType {
  currentDate: Moment | Date;
  children?: (
    days: DayData[],
    timeToPosition: (time: string | Date | Moment) => number
  ) => React.ReactNode;
  events?: CalendarEvent[];
  startHour?: number;
  endHour?: number;
}

function CalendarWeek({
  currentDate,
  children,
  events,
  startHour = 0,
  endHour = 24,
}: WeekPropsType) {
  const [startDay, endDay] = useMemo(
    () => [
      moment(currentDate).startOf("week"),
      moment(currentDate).endOf("week"),
    ],
    [currentDate]
  );

  const timeToPosition = useCallback(
    (time: string | Date | Moment): number => {
      const mTime = moment(time);
      const mStartOfDay = mTime.clone().startOf("day").add(startHour, "hours");
      const hoursFromStart = mTime.diff(mStartOfDay, "hours", true);
      return hoursFromStart / (endHour - startHour);
    },
    [endHour, startHour]
  );

  const days: DayData[] = useMemo(() => {
    let _days = [];
    let date = startDay.clone().subtract(1, "day");

    while (date.isBefore(endDay, "day")) {
      _days.push({
        date: date.add(1, "day").clone(),
        events: events?.filter(
          (event) =>
            date.isSame(event.start, "day") ||
            (event.end &&
              (date.isSame(event.end, "day") ||
                date.isBetween(event.start, event.end, "day", "[]")))
        ),
      });
    }
    return _days;
  }, [startDay, endDay, events]);

  return <>{children ? children(days, timeToPosition) : ""}</>;
}

export { CalendarWeek };
