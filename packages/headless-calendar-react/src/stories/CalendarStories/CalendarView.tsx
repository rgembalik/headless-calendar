import moment, { Moment } from "moment";
import { useMemo, useState } from "react";
import {
  Calendar,
  CalendarContextData,
  CalendarMode,
  CalendarWeek,
  WeekData,
} from "../../lib";
import "./CalendarView.css";

export const CalendarView = () => {
  const [mode, setMode] = useState(CalendarMode.MONTH);
  const availableModes = useMemo(
    () =>
      [CalendarMode.MONTH, CalendarMode.WEEK].filter(
        (newMode) => newMode != mode
      ),
    [mode]
  );
  return (
    <Calendar mode={mode}>
      {({ prev, next, currentDate, setCurrentDate }: CalendarContextData) => (
        <div className="calendar-view">
          <p>
            {availableModes.map((newMode) => (
              <button key={newMode} onClick={() => setMode(newMode)}>
                Switch to {newMode} view
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
            {(weeks: WeekData[]) => (
              <div className="month-container">
                <CalendarWeek
                  key={`header-${weeks[0].start.unix()}`}
                  currentDate={weeks[0].start}
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
                {weeks.map((week: WeekData) => (
                  <CalendarWeek
                    key={week.start.unix()}
                    currentDate={week.start}
                  >
                    {(days) => (
                      <>
                        <div className="month-week-number">
                          {week.start.week()}.
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
