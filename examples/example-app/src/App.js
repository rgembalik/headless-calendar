import "./App.css";
import { useState, useEffect } from "react";
import { Calendar, CalendarMode, CalendarWeek } from "@headless-calendar/react";
import moment from "moment";
const renderers = {
  month: (weekStarts) => (
    <div className="month-container">{weekStarts.map(renderers.monthWeek)}</div>
  ),
  monthWeek: (weekStart) => (
    <CalendarWeek currentDate={weekStart}>
      {(days) => (
        <div key={weekStart.unix()} className="month-week">
          <div className="month-week-number">{weekStart.week()}.</div>
          {days.map(renderers.monthDay)}
        </div>
      )}
    </CalendarWeek>
  ),
  monthDay: (date) => (
    <div className="month-week-day" key={date.unix()}>
      {date.format("ll")}
    </div>
  ),
  week: (days) => (
    <div className="week-container">{days.map(renderers.weekDay)}</div>
  ),
  weekDay: (date) => (
    <div className="week-day" key={date.unix()}>
      <div style={{ position: "sticky", top: "20px" }}>{date.format("ll")}</div>
    </div>
  ),
};

function App() {
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
            <button onClick={prev}>previous {mode}</button>
            <input
              type="date"
              value={currentDate.toISOString().split("T")[0]}
              onChange={(e) => setCurrentDate(new Date(e.target.value))}
            />
            <button onClick={next}>next {mode}</button>
          </p>

          <Calendar.WeekMode>{renderers.week}</Calendar.WeekMode>
          <Calendar.MonthMode>{renderers.month}</Calendar.MonthMode>
        </>
      )}
    </Calendar>
  );
}

export default App;
