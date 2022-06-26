import{C as i,a as k,h as d,b as s}from"./index.c4ffdaaf.js";import{r as y}from"./index.bdb7572e.js";import{j as e,a}from"./jsx-runtime.c2ccc11e.js";import"./iframe.fa8c4e91.js";var f={parameters:{storySource:{source:`import moment, { Moment } from "moment";\r
import "moment/dist/locale/en-gb";\r
import "./DatePicker.stories.css";\r
\r
import { useState } from "react";\r
import { Calendar, CalendarMode, CalendarWeek } from "../lib";\r
export default {\r
  title: "Example Date Picker",\r
  component: Calendar,\r
};\r
\r
export const Basic = () => {\r
  const [date, setDate] = useState<Date>(new Date());\r
  return (\r
    <Calendar mode={CalendarMode.MONTH}>\r
      {({ prev, next, currentDate }) => (\r
        <div className="datepicker">\r
          <p>\r
            Selected date:\r
            <time>{moment(date).format("ll")}</time>\r
          </p>\r
          <Calendar.MonthMode>\r
            {(weekStarts: Moment[]) => (\r
              <div className="month-container">\r
                <div className="month-header">\r
                  <button onClick={prev}>\u2190</button>\r
                  <span>{moment(currentDate).format("MMMM, YYYY")}</span>\r
                  <button onClick={next}>\u2192</button>\r
                </div>\r
                <CalendarWeek\r
                  key={weekStarts[0].unix()}\r
                  currentDate={weekStarts[0]}\r
                >\r
                  {(days) =>\r
                    days.map((day: Moment) => (\r
                      <div\r
                        className="month-week-day month-week-day--header"\r
                        key={day.unix()}\r
                      >\r
                        {day.format("dd")}\r
                      </div>\r
                    ))\r
                  }\r
                </CalendarWeek>\r
                {weekStarts.map((weekStart: Moment) => (\r
                  <CalendarWeek key={weekStart.unix()} currentDate={weekStart}>\r
                    {(days) =>\r
                      days.map((day: Moment) => (\r
                        <button\r
                          className={[\r
                            "month-week-day",\r
                            day.isSame(date, "day") &&\r
                              "month-week-day--selected",\r
                            !day.isSame(currentDate, "month") &&\r
                              "month-week-day--other-month",\r
                            day.isSame(moment(), "day") &&\r
                              "month-week-day--current-day",\r
                          ].join(" ")}\r
                          key={day.unix()}\r
                          onClick={() => setDate(day.toDate())}\r
                        >\r
                          {day.format("D")}\r
                        </button>\r
                      ))\r
                    }\r
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
`,locationsMap:{basic:{startLoc:{col:21,line:12},endLoc:{col:1,line:75},startBody:{col:21,line:12},endBody:{col:1,line:75}}}}},title:"Example Date Picker",component:i};const w=()=>{const[m,l]=y.exports.useState(new Date);return e(i,{mode:k.MONTH,children:({prev:h,next:p,currentDate:c})=>a("div",{className:"datepicker",children:[a("p",{children:["Selected date:",e("time",{children:d(m).format("ll")})]}),e(i.MonthMode,{children:o=>a("div",{className:"month-container",children:[a("div",{className:"month-header",children:[e("button",{onClick:h,children:"\u2190"}),e("span",{children:d(c).format("MMMM, YYYY")}),e("button",{onClick:p,children:"\u2192"})]}),e(s,{currentDate:o[0],children:n=>n.map(t=>e("div",{className:"month-week-day month-week-day--header",children:t.format("dd")},t.unix()))},o[0].unix()),o.map(n=>e(s,{currentDate:n,children:t=>t.map(r=>e("button",{className:["month-week-day",r.isSame(m,"day")&&"month-week-day--selected",!r.isSame(c,"month")&&"month-week-day--other-month",r.isSame(d(),"day")&&"month-week-day--current-day"].join(" "),onClick:()=>l(r.toDate()),children:r.format("D")},r.unix()))},n.unix()))]})})]})})},M=["Basic"];export{w as Basic,M as __namedExportsOrder,f as default};
//# sourceMappingURL=DatePicker.stories.5378c9e7.js.map
