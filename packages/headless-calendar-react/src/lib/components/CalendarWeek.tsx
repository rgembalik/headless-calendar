import moment, { Moment } from "moment";
import React, { useMemo } from "react";

export interface WeekPropsType {
  currentDate: Moment | Date;
  children?: (days: Moment[]) => React.ReactNode;
}

function CalendarWeek({ currentDate, children }: WeekPropsType) {
  const [startDay, endDay] = useMemo(
    () => [
      moment(currentDate).startOf("week"),
      moment(currentDate).endOf("week"),
    ],
    [currentDate]
  );

  const days = useMemo(() => {
    let _days = [];
    let date = startDay.clone().subtract(1, "day");

    while (date.isBefore(endDay, "day")) {
      _days.push(date.add(1, "day").clone());
    }
    return _days;
  }, [startDay, endDay]);

  return <>{children ? children(days) : ""}</>;
}

export { CalendarWeek };
