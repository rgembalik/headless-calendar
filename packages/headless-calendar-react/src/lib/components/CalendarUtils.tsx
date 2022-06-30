import moment, { Moment } from "moment";
import { CalendarEvent } from "./CalendarContext";

export function isEventOverlapping(
  event: CalendarEvent,
  start: Moment,
  end: Moment
) {
  return (
    moment(event.start).isBetween(start, end, "day", "[]") ||
    moment(event.end).isBetween(start, end, "day", "[]") ||
    (moment(event.start).isBefore(start, "day") &&
      moment(event.end).isAfter(end, "day"))
  );
}
