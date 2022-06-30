import moment from "moment";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useMemo, useState } from "react";
import {
  Calendar,
  CalendarContextData,
  CalendarMode,
  CalendarWeek,
  WeekData,
} from "../../lib";
import { CalendarEvent } from "../../lib/components/CalendarContext";
import { DayData } from "../../lib/components/CalendarWeek";
import "./CalendarView.css";
import { CalendarWeekMode } from "../../lib/components/CalendarWeekMode";

const events: CalendarEvent[] = [
  {
    start: moment().hour(9).startOf("hour"),
    end: moment().hour(10).startOf("hour"),
    title: "Event now",
  },
  {
    start: moment().hour(13).startOf("hour"),
    end: moment().hour(15).startOf("hour"),
    title: "Event now2",
    color: "darkgreen",
  },
  {
    start: moment().subtract(1, "days").hour(9).minute(30),
    end: moment().subtract(1, "days").hour(10).endOf("hour"),
    title: "Event yesterday",
  },
];

const CalendarViewTemplate: ComponentStory<typeof CalendarWeekMode> = (
  args
) => {
  const [mode, setMode] = useState(CalendarMode.WEEK);
  const { startHour = 0, endHour = 24 } = args;
  const availableModes = useMemo(
    () =>
      [CalendarMode.MONTH, CalendarMode.WEEK].filter(
        (newMode) => newMode != mode
      ),
    [mode]
  );
  return (
    <Calendar mode={mode} events={events}>
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
          <Calendar.WeekMode startHour={startHour} endHour={endHour}>
            {(days: DayData[], timeToPosition) => (
              <div className="week-container">
                <div
                  className="week-day-lines"
                  style={{
                    gridColumn: `1 / 9`,
                    gridRow: `1`,
                  }}
                >
                  <div className="week-day-header"></div>
                  {Array(Math.max(0, endHour - startHour))
                    .fill(0)
                    .map((_, idx) => (
                      <div
                        key={startHour + idx}
                        className="week-hour-marker"
                        style={{
                          height: `calc( ( 100% - 3em ) / ${
                            endHour - startHour
                          })`,
                        }}
                      >
                        {moment()
                          .hour(startHour + idx)
                          .format("ha")}
                      </div>
                    ))}
                </div>

                {days.map((day: DayData, idx) => (
                  <div
                    className="week-day"
                    key={day.date.unix()}
                    style={{ gridColumn: `${idx + 2}` }}
                  >
                    <div className="week-day-header">
                      <div>{day.date.format("dddd")}</div>
                      <div>{day.date.format("ll")}</div>
                    </div>
                    <div className="week-day-event-container">
                      {day.events?.map((event) => (
                        <div
                          className="week-day-event"
                          style={{
                            backgroundColor: event.color,
                            top: `${timeToPosition(event.start) * 100}%`,
                            height: `${
                              !event.end
                                ? "auto"
                                : (timeToPosition(event.end) -
                                    timeToPosition(event.start)) *
                                    100 +
                                  "%"
                            }`,
                          }}
                          key={event.start.unix()}
                        >
                          <div>{event.title}</div>
                          <div>{moment(event.start).format("LT")}</div>
                        </div>
                      ))}
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
                      {days.map((day: DayData) => (
                        <div
                          className="month-week-day month-week-day--header"
                          key={day.date.unix()}
                        >
                          {day.date.format("dd")}
                        </div>
                      ))}
                    </>
                  )}
                </CalendarWeek>
                {weeks.map((week: WeekData) => (
                  <CalendarWeek
                    key={week.start.unix()}
                    currentDate={week.start}
                    events={events}
                  >
                    {(days) => (
                      <>
                        <div className="month-week-number">
                          {week.start.week()}.
                        </div>
                        {days.map((day: DayData) => (
                          <div
                            className={[
                              "month-week-day",
                              !day.date.isSame(currentDate, "month") &&
                                "month-week-day--other-month",
                              day.date.isSame(moment(), "day") &&
                                "month-week-day--current-day",
                              [0, 6].indexOf(day.date.day()) >= 0 &&
                                "month-week-day--weekend-day",
                            ].join(" ")}
                            key={day.date.unix()}
                          >
                            {day.date.format("ll")}
                            {day.events?.map((event) => (
                              <div
                                className="month-week-day-event"
                                style={{ backgroundColor: event.color }}
                                key={event.start.unix()}
                              >
                                <div>{event.title}</div>
                              </div>
                            ))}
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

export const CalendarView = CalendarViewTemplate.bind({});

CalendarView.args = {
  startHour: 8,
  endHour: 20,
};
