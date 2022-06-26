import moment, { Moment } from "moment";
import "moment/dist/locale/en-gb";
import "./CalendarView.stories.css";

import { useState } from "react";
import { Calendar, CalendarMode, CalendarWeek } from "../lib";
export default {
  title: "Example calendar view",
  component: Calendar,
};

export const Basic = () => {
  const [mode, setMode] = useState(CalendarMode.MONTH);
  return (
    <Calendar mode={mode}>
      {({ prev, next, currentDate, setCurrentDate }) => (
        <div className="calendar-view">
          <p>
            {[CalendarMode.MONTH, CalendarMode.WEEK]
              .filter((newMode) => newMode != mode)
              .map((newMode) => (
                <button onClick={() => setMode(newMode)}>
                  Switch to {mode} view
                </button>
              ))}
          </p>
          <p>
            <button onClick={prev}>←</button>
            <input
              type="date"
              value={currentDate.toISOString().split("T")[0]}
              onChange={(e) => setCurrentDate(new Date(e.target.value))}
            />
            <button onClick={next}>→</button>
          </p>

          <Calendar.WeekMode>
            {(days: Moment[]) => (
              <div className="week-container">
                {days.map((date: Moment) => (
                  <div className="week-day" key={date.unix()}>
                    <div className="week-day-header">
                      <div>{date.format("dddd")}</div>
                      <div>{date.format("ll")}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Calendar.WeekMode>
          <Calendar.MonthMode>
            {(weekStarts: Moment[]) => (
              <div className="month-container">
                <CalendarWeek
                  key={weekStarts[0].unix()}
                  currentDate={weekStarts[0]}
                >
                  {(days) => (
                    <>
                      <div className="month-week-day--header"></div>
                      {days.map((date: Moment) => (
                        <div
                          className="month-week-day month-week-day--header"
                          key={date.unix()}
                        >
                          {date.format("dd")}
                        </div>
                      ))}
                    </>
                  )}
                </CalendarWeek>
                {weekStarts.map((weekStart: Moment) => (
                  <CalendarWeek key={weekStart.unix()} currentDate={weekStart}>
                    {(days) => (
                      <>
                        <div className="month-week-number">
                          {weekStart.week()}.
                        </div>
                        {days.map((date: Moment) => (
                          <div
                            className={[
                              "month-week-day",
                              !date.isSame(currentDate, "month") &&
                                "month-week-day--other-month",
                              date.isSame(moment(), "day") &&
                                "month-week-day--current-day",
                              [0, 6].indexOf(date.day()) >= 0 &&
                                "month-week-day--weekend-day",
                            ].join(" ")}
                            key={date.unix()}
                          >
                            {date.format("ll")}
                          </div>
                        ))}
                      </>
                    )}
                  </CalendarWeek>
                ))}
              </div>
            )}
          </Calendar.MonthMode>
        </div>
      )}
    </Calendar>
  );
};
