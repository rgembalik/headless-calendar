import moment, { Moment } from "moment";
import "moment/dist/locale/en-gb";
import "./DatePicker.stories.css";

import { useState } from "react";
import { Calendar, CalendarMode, CalendarWeek } from "../lib";
export default {
  title: "Example Date Picker",
  component: Calendar,
};

export const Basic = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <Calendar mode={CalendarMode.MONTH}>
      {({ prev, next, currentDate }) => (
        <div className="datepicker">
          <p>
            Selected date:
            <time>{moment(date).format("ll")}</time>
          </p>
          <Calendar.MonthMode>
            {(weekStarts: Moment[]) => (
              <div className="month-container">
                <div className="month-header">
                  <button onClick={prev}>←</button>
                  <span>{moment(currentDate).format("MMMM, YYYY")}</span>
                  <button onClick={next}>→</button>
                </div>
                <CalendarWeek
                  key={weekStarts[0].unix()}
                  currentDate={weekStarts[0]}
                >
                  {(days) =>
                    days.map((day: Moment) => (
                      <div
                        className="month-week-day month-week-day--header"
                        key={day.unix()}
                      >
                        {day.format("dd")}
                      </div>
                    ))
                  }
                </CalendarWeek>
                {weekStarts.map((weekStart: Moment) => (
                  <CalendarWeek key={weekStart.unix()} currentDate={weekStart}>
                    {(days) =>
                      days.map((day: Moment) => (
                        <button
                          className={[
                            "month-week-day",
                            day.isSame(date, "day") &&
                              "month-week-day--selected",
                            !day.isSame(currentDate, "month") &&
                              "month-week-day--other-month",
                            day.isSame(moment(), "day") &&
                              "month-week-day--current-day",
                          ].join(" ")}
                          key={day.unix()}
                          onClick={() => setDate(day.toDate())}
                        >
                          {day.format("D")}
                        </button>
                      ))
                    }
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
