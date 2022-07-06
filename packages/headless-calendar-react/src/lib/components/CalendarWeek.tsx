import moment, { Moment } from "moment";
import React, { useCallback, useMemo } from "react";
import { CalendarEvent } from "./CalendarContext";

enum DayType {
  Today = "today",
  OtherMonth = "other-month",
  Weekend = "weekend",
}

export interface DayData {
  date: Moment;
  dayTypes: DayType[];
  events?: CalendarEvent[];
}

export interface WeekPropsType {
  currentDate: Moment | Date;
  children?: (
    days: DayData[],
    hours: number[],
    timeToPosition: (time: string | Date | Moment) => number,
    diffToLength: (diff: number) => number
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

  const diffTolength = useCallback(
    (miliseconds: number): number => {
      return miliseconds / 1000 / 60 / 60 / (endHour - startHour);
    },
    [endHour, startHour]
  );

  const hours = useMemo(
    () =>
      Array(Math.max(0, endHour - startHour))
        .fill(0)
        .map((_, idx) => idx + startHour),
    [startHour, endHour]
  );

  const days: DayData[] = useMemo(() => {
    const _days = [];
    const date = startDay.clone().subtract(1, "day");

    while (date.isBefore(endDay, "day")) {
      const dayTypes: DayType[] = [];
      date.add(1, "day");

      if (!date.isSame(currentDate, "month")) {
        dayTypes.push(DayType.OtherMonth);
      }
      if (date.isSame(moment(), "day")) {
        dayTypes.push(DayType.Today);
      }
      if ([0, 6].indexOf(date.day()) >= 0) {
        dayTypes.push(DayType.Weekend);
      }
      let eventStack: (CalendarEvent | null)[] = [];
      _days.push({
        date: date.clone(),
        events: events
          ?.filter(
            (event) =>
              date.isSame(event.start, "day") ||
              (event.end &&
                (date.isSame(event.end, "day") ||
                  date.isBetween(event.start, event.end, "day", "[]")))
          )
          .map((e) => ({ ...e }))
          .map((e) => {
            let eventPosition = -1;
            eventStack = eventStack.map((event, posIdx) => {
              const slotEvent = event?.end?.isAfter(e.start) ? event : null;
              if (!slotEvent && eventPosition === -1) {
                eventPosition = posIdx;
                e.layoutInfo = {
                  overlappingEventsCount: eventStack.length - 1,
                  position: eventPosition,
                };
              }
              return slotEvent;
            });

            if (eventPosition === -1) {
              // if no slot was found, push to the end
              eventStack.forEach((event) => {
                if (event?.layoutInfo) {
                  event.layoutInfo.overlappingEventsCount++;
                }
              });
              eventPosition = eventStack.length;
              eventStack.push(e);
            }
            let lastNonNull = eventStack.reduce((acc, event, idx) => {
              if (event) return idx;
              else return acc;
            }, -1);

            eventStack.length = lastNonNull + 1;

            e.layoutInfo = {
              overlappingEventsCount: eventStack.length - 1,
              position: eventPosition,
            };

            return e;
          }),
        dayTypes,
      });
    }
    return _days;
  }, [startDay, endDay, events]);

  return (
    <>{children ? children(days, hours, timeToPosition, diffTolength) : ""}</>
  );
}

export { CalendarWeek };
