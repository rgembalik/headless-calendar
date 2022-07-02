import{h as a,C as m,a as p,b as C}from"./index.2db294f1.js";import{r as u}from"./index.3284556e.js";import{j as e,a as o,F as N}from"./jsx-runtime.b03f6d4f.js";import"./iframe.c4c4fa94.js";const n=[{background:"hsl(0deg 60% 80%)",foreground:"hsl(0deg 85% 35%)"},{background:"hsl(34deg 80% 80%)",foreground:"hsl(34deg 100% 35%)"},{background:"hsl(153deg 60% 70%)",foreground:"hsl(153deg 74% 25%)"}],E=[{start:a().hour(9).startOf("hour"),end:a().hour(10).startOf("hour"),title:"Event now",backgroundColor:n[0].background,color:n[0].foreground},{start:a().hour(9).startOf("hour").minutes(30),end:a().hour(10).startOf("hour").minutes(45),title:"Event overlapping now",backgroundColor:n[1].background,color:n[1].foreground},{start:a().hour(10).startOf("hour"),end:a().hour(10).startOf("hour").minutes(45),title:"Event overlapping now2",backgroundColor:n[1].background,color:n[1].foreground},{start:a().hour(13).startOf("hour"),end:a().hour(15).startOf("hour"),title:"Event now2",backgroundColor:n[1].background,color:n[1].foreground},{start:a().subtract(1,"days").hour(9).minute(30),end:a().subtract(1,"days").hour(10).endOf("hour"),title:"Event yesterday",backgroundColor:n[2].background,color:n[2].foreground}],H=O=>{const[g,$]=u.exports.useState(m.WEEK),{startHour:w=0,endHour:b=24}=O,[k,I]=u.exports.useState(a()),j=u.exports.useMemo(()=>[m.MONTH,m.WEEK].filter(h=>h!=g),[g]);return u.exports.useEffect(()=>{const h=setInterval(()=>{I(a())},6e4);return()=>clearInterval(h)},[]),e(p,{mode:g,events:E,children:({prev:h,next:z,currentDate:M,setCurrentDate:S})=>o("div",{className:"calendar-view",children:[e("p",{children:j.map(d=>o("button",{onClick:()=>$(d),children:["Switch to ",d," view"]},d))}),o("p",{children:[e("button",{onClick:h,children:"\u2190"}),e("input",{type:"date",value:M.toISOString().split("T")[0],onChange:d=>S(new Date(d.target.value))}),e("button",{onClick:z,children:"\u2192"})]}),e(p.WeekMode,{startHour:w,endHour:b,children:(d,i,l,s)=>o("div",{className:"week-container",children:[o("div",{className:"week-day-lines",children:[e("div",{className:"week-day-header"}),i.map(t=>e("div",{className:"week-hour-marker",style:{height:`calc( ( 100% - 3em ) / ${b-w})`},children:a().hour(t).format("ha")},t))]}),d.map((t,c)=>{var v;return o("div",{className:["week-day",...t.dayTypes.map(r=>`week-day--${r}`)].join(" "),style:{gridColumn:`${c+2}`},children:[o("div",{className:"week-day-header",children:[e("div",{children:t.date.format("dddd")}),e("div",{children:t.date.format("ll")})]}),o("div",{className:"week-day-event-container",children:[(v=t.events)==null?void 0:v.map(r=>{var f,y,x;return o("div",{className:"week-day-event",style:{backgroundColor:r.backgroundColor,color:r.color,top:`${l(r.start)*100}%`,left:`${r.layoutInfo?((f=r.layoutInfo)==null?void 0:f.position)*25/(((y=r.layoutInfo)==null?void 0:y.overlappingEventsCount)+1):"0"}%`,width:`${r.layoutInfo?75+25/(((x=r.layoutInfo)==null?void 0:x.overlappingEventsCount)+1):100}%`,height:`${r.end?s(r.end.diff(r.start))*100+"%":"auto"}`},children:[e("div",{children:r.title}),e("div",{children:a(r.start).format("LT")})]},r.start.unix())}),k.isSame(t.date,"day")&&e("div",{className:"week-day-now",style:{top:`${l(k)*100}%`}})]})]},t.date.unix())})]})}),e(p.MonthMode,{children:d=>o("div",{className:"month-container",children:[e(C,{currentDate:d[0].start,children:i=>o(N,{children:[e("div",{className:"month-week-day--header"}),i.map(l=>e("div",{className:"month-week-day month-week-day--header",children:l.date.format("dd")},l.date.unix()))]})},`header-${d[0].start.unix()}`),d.map(i=>e(C,{currentDate:i.start,events:E,children:l=>o(N,{children:[o("div",{className:"month-week-number",children:[i.start.week(),"."]}),l.map(s=>{var t;return o("div",{className:["month-week-day",...s.dayTypes.map(c=>`month-week-day--${c}`)].join(" "),children:[s.date.format("ll"),(t=s.events)==null?void 0:t.map(c=>e("div",{className:"month-week-day-event",style:{backgroundColor:c.color},children:e("div",{children:c.title})},c.start.unix()))]},s.date.unix())})]})},i.start.unix()))]})})]})})},T=H.bind({});T.args={startHour:8,endHour:20};const K=["CalendarView"];export{T as CalendarView,K as __namedExportsOrder};
//# sourceMappingURL=CalendarView.stories.99ad4646.js.map
