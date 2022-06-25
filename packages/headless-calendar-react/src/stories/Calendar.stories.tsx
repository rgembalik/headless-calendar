import moment, { Moment } from "moment";
import "moment/dist/locale/pl";

import { useEffect, useState } from "react";
import { Calendar, CalendarMode, CalendarWeek } from "../lib";
export default {
  title: "Example calendar",
  component: Calendar,
};

const renderers = {
  month: (weekStarts: Moment[]) => (
    <div
      style={{
        borderRight: "1px solid lightgray",
        borderBottom: "1px solid lightgray",
      }}
    >
      {weekStarts.map(renderers.monthWeek)}
    </div>
  ),
  monthWeek: (weekStart: Moment) => (
    <CalendarWeek currentDate={weekStart}>
      {(days: Moment[]) => (
        <div
          key={weekStart.unix()}
          style={{
            display: "grid",
            gridTemplateColumns: ".25fr repeat(7, 1fr)",
            height: "150px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              borderLeft: "1px solid lightgray",
              borderTop: "1px solid lightgray",
            }}
          >
            {weekStart.week()}.
          </div>
          {days.map(renderers.monthDay)}
        </div>
      )}
    </CalendarWeek>
  ),
  monthDay: (date: Moment) => (
    <div
      style={{
        height: "100%",
        borderLeft: "1px solid lightgray",
        borderTop: "1px solid lightgray",
        textAlign: "right",
        color: "gray",
        padding: "5px",
        boxSizing: "border-box",
      }}
      key={date.unix()}
    >
      {date.format("ll")}
    </div>
  ),
  week: (days: Moment[]) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      {days.map(renderers.weekDay)}
    </div>
  ),
  weekDay: (date: Moment) => (
    <div
      style={{
        height: "100%",
        borderLeft: "1px solid lightgray",
        textAlign: "center",
      }}
      key={date.unix()}
    >
      <div style={{ position: "sticky", top: "20px" }}>{date.format("ll")}</div>
    </div>
  ),
};

export const Basic = () => {
  const [mode, setMode] = useState(CalendarMode.MONTH);
  useEffect(() => {
    moment.locale("pl");
  }, []);
  return (
    <Calendar mode={mode}>
      {({ prev, next, currentDate, setCurrentDate }) => (
        <>
          <p>
            <button onClick={() => setMode(CalendarMode.MONTH)}>
              Set to month
            </button>
            <button onClick={() => setMode(CalendarMode.WEEK)}>
              Set to week
            </button>
          </p>
          <p>
            <button onClick={prev}>previous</button>
            <button onClick={next}>next</button>
          </p>

          <input
            type="date"
            value={currentDate.toISOString().split("T")[0]}
            onChange={(e) => setCurrentDate(new Date(e.target.value))}
          />

          <Calendar.WeekMode>{renderers.week}</Calendar.WeekMode>
          <Calendar.MonthMode>{renderers.month}</Calendar.MonthMode>
        </>
      )}
    </Calendar>
  );
};
