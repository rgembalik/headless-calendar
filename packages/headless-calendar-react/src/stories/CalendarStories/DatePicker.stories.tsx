import moment from "moment";
import { useState } from "react";
import {
  Calendar,
  CalendarContextData,
  CalendarMode,
  CalendarWeek,
  WeekData,
} from "../../lib";
import { DayData } from "../../lib/components/CalendarWeek";
import "./DatePicker.css";

export const DatePicker = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <Calendar mode={CalendarMode.MONTH}>
      {({ prev, next, currentDate }: CalendarContextData) => (
        <div className="datepicker">
          <p>
            Selected date:
            <time>{moment(date).format("ll")}</time>
          </p>
          <Calendar.MonthMode>
            {(weeks: WeekData[]) => (
              <div className="month-container">
                <div className="month-header">
                  <button onClick={prev}>←</button>
                  <span>{moment(currentDate).format("MMMM, YYYY")}</span>
                  <button onClick={next}>→</button>
                </div>
                <CalendarWeek
                  key={weeks[0].start.unix()}
                  currentDate={weeks[0].start}
                >
                  {(days) =>
                    days.map((day: DayData) => (
                      <div
                        className="month-week-day month-week-day--header"
                        key={day.date.unix()}
                      >
                        {day.date.format("dd")}
                      </div>
                    ))
                  }
                </CalendarWeek>
                {weeks.map((week: WeekData) => (
                  <CalendarWeek
                    key={week.start.unix()}
                    currentDate={week.start}
                  >
                    {(days) =>
                      days.map((day: DayData) => (
                        <button
                          className={[
                            "month-week-day",
                            ...day.dayTypes.map((t) => `month-week-day--${t}`),
                            day.date.isSame(date, "day")
                              ? "month-week-day--selected"
                              : "",
                          ].join(" ")}
                          key={day.date.unix()}
                          onClick={() => setDate(day.date.toDate())}
                        >
                          {day.date.format("D")}
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
