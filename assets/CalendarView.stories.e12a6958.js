import{C as l,a as c,b as s,h as u}from"./index.3e79587a.js";import{r as m}from"./index.bdb7572e.js";import{j as e,a as n,F as p}from"./jsx-runtime.c2ccc11e.js";import"./iframe.15662ce2.js";const C=()=>{const[d,g]=m.exports.useState(l.MONTH),w=m.exports.useMemo(()=>[l.MONTH,l.WEEK].filter(o=>o!=d),[d]);return e(c,{mode:d,children:({prev:o,next:y,currentDate:h,setCurrentDate:k})=>n("div",{className:"calendar-view",children:[e("p",{children:w.map(a=>n("button",{onClick:()=>g(a),children:["Switch to ",a," view"]},a))}),n("p",{children:[e("button",{onClick:o,children:"\u2190"}),e("input",{type:"date",value:h.toISOString().split("T")[0],onChange:a=>k(new Date(a.target.value))}),e("button",{onClick:y,children:"\u2192"})]}),e(c.WeekMode,{children:a=>e("div",{className:"week-container",children:a.map(r=>e("div",{className:"week-day",children:n("div",{className:"week-day-header",children:[e("div",{children:r.format("dddd")}),e("div",{children:r.format("ll")})]})},r.unix()))})}),e(c.MonthMode,{children:a=>n("div",{className:"month-container",children:[e(s,{currentDate:a[0].start,children:r=>n(p,{children:[e("div",{className:"month-week-day--header"}),r.map(i=>e("div",{className:"month-week-day month-week-day--header",children:i.format("dd")},i.unix()))]})},`header-${a[0].start.unix()}`),a.map(r=>e(s,{currentDate:r.start,children:i=>n(p,{children:[n("div",{className:"month-week-number",children:[r.start.week(),"."]}),i.map(t=>e("div",{className:["month-week-day",!t.isSame(h,"month")&&"month-week-day--other-month",t.isSame(u(),"day")&&"month-week-day--current-day",[0,6].indexOf(t.day())>=0&&"month-week-day--weekend-day"].join(" "),children:t.format("ll")},t.unix()))]})},r.start.unix()))]})})]})})},N=["CalendarView"];export{C as CalendarView,N as __namedExportsOrder};
//# sourceMappingURL=CalendarView.stories.e12a6958.js.map
