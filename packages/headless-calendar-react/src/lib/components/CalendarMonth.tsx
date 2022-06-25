import moment, { Moment } from "moment";
import React, { useMemo } from "react";

export interface WeekPropsType {
  currentDate: Moment | Date;
  children?: (dates: Moment[]) => React.ReactNode;
}

function CalendarMonth({ currentDate, children }: WeekPropsType) {
  const [startDay, endDay] = useMemo(
    () => [
      moment(currentDate).startOf("month"),
      moment(currentDate).endOf("month"),
    ],
    [currentDate]
  );

  const weekStarts = useMemo(() => {
    let _days = [];
    let date = startDay.clone().subtract(1, "week");

    while (date.add(7, "day").isBefore(endDay, "day")) {
      _days.push(date.clone());
    }
    return _days;
  }, [startDay, endDay]);

  return <>{children ? children(weekStarts) : ""}</>;
}

export { CalendarMonth };
