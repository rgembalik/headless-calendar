import{C as o,a as l,b as m,h as y}from"./index.c4ffdaaf.js";import{r as u}from"./index.bdb7572e.js";import{j as e,a,F as s}from"./jsx-runtime.c2ccc11e.js";import"./iframe.fa8c4e91.js";var f={parameters:{storySource:{source:`import moment, { Moment } from "moment";\r
import "moment/dist/locale/en-gb";\r
import "./CalendarView.stories.css";\r
\r
import { useState } from "react";\r
import { Calendar, CalendarMode, CalendarWeek } from "../lib";\r
export default {\r
  title: "Example calendar view",\r
  component: Calendar,\r
};\r
\r
export const Basic = () => {\r
  const [mode, setMode] = useState(CalendarMode.MONTH);\r
  return (\r
    <Calendar mode={mode}>\r
      {({ prev, next, currentDate, setCurrentDate }) => (\r
        <div className="calendar-view">\r
          <p>\r
            {[CalendarMode.MONTH, CalendarMode.WEEK]\r
              .filter((newMode) => newMode != mode)\r
              .map((newMode) => (\r
                <button onClick={() => setMode(newMode)}>\r
                  Switch to {mode} view\r
                </button>\r
              ))}\r
          </p>\r
          <p>\r
            <button onClick={prev}>\u2190</button>\r
            <input\r
              type="date"\r
              value={currentDate.toISOString().split("T")[0]}\r
              onChange={(e) => setCurrentDate(new Date(e.target.value))}\r
            />\r
            <button onClick={next}>\u2192</button>\r
          </p>\r
\r
          <Calendar.WeekMode>\r
            {(days: Moment[]) => (\r
              <div className="week-container">\r
                {days.map((date: Moment) => (\r
                  <div className="week-day" key={date.unix()}>\r
                    <div className="week-day-header">\r
                      <div>{date.format("dddd")}</div>\r
                      <div>{date.format("ll")}</div>\r
                    </div>\r
                  </div>\r
                ))}\r
              </div>\r
            )}\r
          </Calendar.WeekMode>\r
          <Calendar.MonthMode>\r
            {(weekStarts: Moment[]) => (\r
              <div className="month-container">\r
                <CalendarWeek\r
                  key={weekStarts[0].unix()}\r
                  currentDate={weekStarts[0]}\r
                >\r
                  {(days) => (\r
                    <>\r
                      <div className="month-week-day--header"></div>\r
                      {days.map((date: Moment) => (\r
                        <div\r
                          className="month-week-day month-week-day--header"\r
                          key={date.unix()}\r
                        >\r
                          {date.format("dd")}\r
                        </div>\r
                      ))}\r
                    </>\r
                  )}\r
                </CalendarWeek>\r
                {weekStarts.map((weekStart: Moment) => (\r
                  <CalendarWeek key={weekStart.unix()} currentDate={weekStart}>\r
                    {(days) => (\r
                      <>\r
                        <div className="month-week-number">\r
                          {weekStart.week()}.\r
                        </div>\r
                        {days.map((date: Moment) => (\r
                          <div\r
                            className={[\r
                              "month-week-day",\r
                              !date.isSame(currentDate, "month") &&\r
                                "month-week-day--other-month",\r
                              date.isSame(moment(), "day") &&\r
                                "month-week-day--current-day",\r
                              [0, 6].indexOf(date.day()) >= 0 &&\r
                                "month-week-day--weekend-day",\r
                            ].join(" ")}\r
                            key={date.unix()}\r
                          >\r
                            {date.format("ll")}\r
                          </div>\r
                        ))}\r
                      </>\r
                    )}\r
                  </CalendarWeek>\r
                ))}\r
              </div>\r
            )}\r
          </Calendar.MonthMode>\r
        </div>\r
      )}\r
    </Calendar>\r
  );\r
};\r
`,locationsMap:{basic:{startLoc:{col:21,line:12},endLoc:{col:1,line:106},startBody:{col:21,line:12},endBody:{col:1,line:106}}}}},title:"Example calendar view",component:o};const C=()=>{const[i,h]=u.exports.useState(l.MONTH);return e(o,{mode:i,children:({prev:p,next:w,currentDate:c,setCurrentDate:k})=>a("div",{className:"calendar-view",children:[e("p",{children:[l.MONTH,l.WEEK].filter(n=>n!=i).map(n=>a("button",{onClick:()=>h(n),children:["Switch to ",i," view"]}))}),a("p",{children:[e("button",{onClick:p,children:"\u2190"}),e("input",{type:"date",value:c.toISOString().split("T")[0],onChange:n=>k(new Date(n.target.value))}),e("button",{onClick:w,children:"\u2192"})]}),e(o.WeekMode,{children:n=>e("div",{className:"week-container",children:n.map(r=>e("div",{className:"week-day",children:a("div",{className:"week-day-header",children:[e("div",{children:r.format("dddd")}),e("div",{children:r.format("ll")})]})},r.unix()))})}),e(o.MonthMode,{children:n=>a("div",{className:"month-container",children:[e(m,{currentDate:n[0],children:r=>a(s,{children:[e("div",{className:"month-week-day--header"}),r.map(d=>e("div",{className:"month-week-day month-week-day--header",children:d.format("dd")},d.unix()))]})},n[0].unix()),n.map(r=>e(m,{currentDate:r,children:d=>a(s,{children:[a("div",{className:"month-week-number",children:[r.week(),"."]}),d.map(t=>e("div",{className:["month-week-day",!t.isSame(c,"month")&&"month-week-day--other-month",t.isSame(y(),"day")&&"month-week-day--current-day",[0,6].indexOf(t.day())>=0&&"month-week-day--weekend-day"].join(" "),children:t.format("ll")},t.unix()))]})},r.unix()))]})})]})})},M=["Basic"];export{C as Basic,M as __namedExportsOrder,f as default};
//# sourceMappingURL=CalendarView.stories.19049072.js.map
