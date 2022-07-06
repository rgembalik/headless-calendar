import moment from "moment";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect, useMemo, useState } from "react";
import {
  Calendar,
  CalendarContextData,
  CalendarMode,
  CalendarWeek,
  WeekData,
} from "../../lib";
import { DayData } from "../../lib/components/CalendarWeek";
import "./CalendarView.css";
import { CalendarWeekMode } from "../../lib/components/CalendarWeekMode";
import { eventMockData } from "../data/eventData";
import { CalendarEvent } from "../../lib/components/CalendarContext";
import { useCallback } from "@storybook/addons";

const CalendarViewTemplate: ComponentStory<typeof CalendarWeekMode> = (
  args
) => {
  const [mode, setMode] = useState(CalendarMode.WEEK);
  const { startHour = 0, endHour = 24 } = args;
  const [now, setNow] = useState(moment());
  const [selectedEvent, setSelectedEvent] =
    useState<CalendarEvent | null>(null);
  const availableModes = useMemo(
    () =>
      [CalendarMode.MONTH, CalendarMode.WEEK].filter(
        (newMode) => newMode != mode
      ),
    [mode]
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(moment());
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const onBodyClick = useCallback((e: any) => {
    if (
      e.target.classList.contains("week-day-event") ||
      e.target.classList.contains("month-day-event")
    ) {
      return;
    }
    setSelectedEvent(null);
  });
  useEffect(() => {
    document.body.addEventListener("click", onBodyClick);

    return function cleanup() {
      window.removeEventListener("click", onBodyClick);
    };
  }, [onBodyClick]);

  return (
    <Calendar mode={mode} events={eventMockData}>
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
            {(days: DayData[], hours, timeToPosition, diffToLength) => (
              <div className="week-container">
                <div className="week-day-lines">
                  <div className="week-day-header"></div>
                  {hours.map((hour) => (
                    <div
                      key={hour}
                      className="week-hour-marker"
                      style={{
                        height: `calc( ( 100% - 3em ) / ${
                          endHour - startHour
                        })`,
                      }}
                    >
                      {moment().hour(hour).format("ha")}
                    </div>
                  ))}
                </div>

                {days.map((day: DayData, idx) => (
                  <div
                    className={[
                      "week-day",
                      ...day.dayTypes.map((t) => `week-day--${t}`),
                    ].join(" ")}
                    key={day.date.unix()}
                    style={{ gridColumn: `${idx + 2}` }}
                  >
                    <div className="week-day-header">
                      <div>{day.date.format("dd")}</div>
                      <strong>{day.date.format("D, MMM")}</strong>
                    </div>
                    <div className="week-day-event-container">
                      {day.events?.map((event) => (
                        <div
                          className={`week-day-event ${
                            selectedEvent === event
                              ? "week-day-event--selected"
                              : ""
                          }`}
                          onClick={() =>
                            event === selectedEvent
                              ? setSelectedEvent(null)
                              : setSelectedEvent(event)
                          }
                          style={{
                            backgroundColor: event.backgroundColor,
                            color: event.color,
                            top: `${timeToPosition(event.start) * 100}%`,
                            left: `calc(5px + ${
                              event.layoutInfo
                                ? (event.layoutInfo?.position * 25) /
                                  (event.layoutInfo?.overlappingEventsCount + 1)
                                : "0"
                            }%)`,
                            width: `calc(${
                              event.layoutInfo
                                ? 75 +
                                  25 /
                                    (event.layoutInfo?.overlappingEventsCount +
                                      1)
                                : 100
                            }% - 10px)`,
                            height: `calc(${
                              !event.end
                                ? "auto"
                                : diffToLength(event.end.diff(event.start)) *
                                    100 +
                                  "%"
                            } - 3px)`,
                          }}
                          key={event.start.unix()}
                        >
                          <div>{event.title}</div>
                          <div className="week-day-event-hours">
                            {moment(event.start).format("LT")} -{" "}
                            {moment(event.end).format("LT")}
                          </div>
                        </div>
                      ))}
                      {now.isSame(day.date, "day") && (
                        <div
                          className="week-day-now"
                          style={{
                            top: `${timeToPosition(now) * 100}%`,
                          }}
                        ></div>
                      )}
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
                      <div className="month-day--header"></div>
                      {days.map((day: DayData) => (
                        <div
                          className="month-day month-day--header"
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
                    events={eventMockData}
                  >
                    {(days) => (
                      <>
                        <div className="month-week-number">
                          {week.start.week()}.
                        </div>
                        {days.map((day: DayData) => (
                          <div
                            className={[
                              "month-day",
                              ...day.dayTypes.map((t) => `month-day--${t}`),
                            ].join(" ")}
                            key={day.date.unix()}
                          >
                            {day.date.format("ll")}
                            {day.events
                              ?.filter(
                                (_, idx) =>
                                  idx < 2 ||
                                  (day.events && day.events?.length <= 3)
                              )
                              .map((event) => (
                                <div
                                  className={`month-day-event ${
                                    selectedEvent === event
                                      ? "month-day-event--selected"
                                      : ""
                                  }`}
                                  style={{
                                    backgroundColor: event.backgroundColor,
                                    color: event.color,
                                  }}
                                  onClick={() =>
                                    event === selectedEvent
                                      ? setSelectedEvent(null)
                                      : setSelectedEvent(event)
                                  }
                                  key={event.start.unix()}
                                >
                                  {event.title}
                                </div>
                              ))}
                            {day.events && day.events?.length > 3 ? (
                              <div className="month-day-more-events">
                                {day.events?.length - 2} more
                              </div>
                            ) : (
                              ""
                            )}
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
