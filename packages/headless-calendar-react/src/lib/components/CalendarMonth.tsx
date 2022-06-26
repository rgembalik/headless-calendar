import moment, { Moment } from "moment";
import React, { useMemo } from "react";

export interface WeekData {
  start: Moment;
  end: Moment;
}

export interface WeekPropsType {
  currentDate: Moment | Date;
  children?: (dates: WeekData[]) => React.ReactNode;
}

function CalendarMonth({ currentDate, children }: WeekPropsType) {
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
      _days.push({
        start: date.clone(),
        end: date.clone().add(6, "day"),
      });
    }
    return _days;
  }, [startDay, endDay]);

  return <>{children ? children(weeks) : ""}</>;
}

export { CalendarMonth };
