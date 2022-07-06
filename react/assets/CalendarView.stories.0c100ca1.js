import{h as r,C as f,a as k,b as O}from"./index.dc1035cb.js";import{r as h}from"./index.3284556e.js";import{j as o,a as t,F as $}from"./jsx-runtime.b03f6d4f.js";import{y as H}from"./iframe.a01dd474.js";const a=[{background:"hsl(0deg 60% 80%)",foreground:"hsl(0deg 85% 35%)"},{background:"hsl(34deg 80% 80%)",foreground:"hsl(34deg 100% 35%)"},{background:"hsl(153deg 60% 70%)",foreground:"hsl(153deg 74% 25%)"}],M=[{start:r().hour(9).startOf("hour"),end:r().hour(10).startOf("hour"),title:"Event now",backgroundColor:a[0].background,color:a[0].foreground},{start:r().hour(9).startOf("hour").minutes(30),end:r().hour(10).startOf("hour").minutes(45),title:"Event overlapping now",backgroundColor:a[1].background,color:a[1].foreground},{start:r().hour(10).startOf("hour"),end:r().hour(10).startOf("hour").minutes(45),title:"Event overlapping now2",backgroundColor:a[1].background,color:a[1].foreground},{start:r().hour(13).startOf("hour"),end:r().hour(15).startOf("hour"),title:"Event now2",backgroundColor:a[1].background,color:a[1].foreground},{start:r().subtract(1,"days").hour(9).minute(30),end:r().subtract(1,"days").hour(10).endOf("hour"),title:"Event yesterday",backgroundColor:a[2].background,color:a[2].foreground},{start:r().subtract(1,"days").hour(9).minute(45),end:r().subtract(1,"days").hour(11).minute(15),title:"Event yesterday 2",backgroundColor:a[1].background,color:a[1].foreground},{start:r().subtract(1,"days").hour(10).minute(45),end:r().subtract(1,"days").hour(11).endOf("hour"),title:"Event yesterday 3",backgroundColor:a[0].background,color:a[0].foreground},{start:r().subtract(1,"days").hour(11).minute(30),end:r().subtract(1,"days").hour(12).endOf("hour"),title:"Event yesterday 4",backgroundColor:a[2].background,color:a[2].foreground}],V=z=>{const[y,I]=h.exports.useState(f.WEEK),{startHour:x=0,endHour:C=24}=z,[E,S]=h.exports.useState(r()),[p,u]=h.exports.useState(null),j=h.exports.useMemo(()=>[f.MONTH,f.WEEK].filter(l=>l!=y),[y]);h.exports.useEffect(()=>{const l=setInterval(()=>{S(r())},6e4);return()=>clearInterval(l)},[]);const b=H(l=>{l.target.classList.contains("week-day-event")||l.target.classList.contains("month-day-event")||u(null)});return h.exports.useEffect(()=>(document.body.addEventListener("click",b),function(){window.removeEventListener("click",b)}),[b]),o(k,{mode:y,events:M,children:({prev:l,next:L,currentDate:T,setCurrentDate:D})=>t("div",{className:"calendar-view",children:[o("p",{children:j.map(d=>t("button",{onClick:()=>I(d),children:["Switch to ",d," view"]},d))}),t("p",{children:[o("button",{onClick:l,children:"\u2190"}),o("input",{type:"date",value:T.toISOString().split("T")[0],onChange:d=>D(new Date(d.target.value))}),o("button",{onClick:L,children:"\u2192"})]}),o(k.WeekMode,{startHour:x,endHour:C,children:(d,c,s,i)=>t("div",{className:"week-container",children:[t("div",{className:"week-day-lines",children:[o("div",{className:"week-day-header"}),c.map(n=>o("div",{className:"week-hour-marker",style:{height:`calc( ( 100% - 3em ) / ${C-x})`},children:r().hour(n).format("ha")},n))]}),d.map((n,v)=>{var m;return t("div",{className:["week-day",...n.dayTypes.map(e=>`week-day--${e}`)].join(" "),style:{gridColumn:`${v+2}`},children:[t("div",{className:"week-day-header",children:[o("div",{children:n.date.format("dd")}),o("strong",{children:n.date.format("D, MMM")})]}),t("div",{className:"week-day-event-container",children:[(m=n.events)==null?void 0:m.map(e=>{var w,g,N;return t("div",{className:`week-day-event ${p===e?"week-day-event--selected":""}`,onClick:()=>u(e===p?null:e),style:{backgroundColor:e.backgroundColor,color:e.color,top:`${s(e.start)*100}%`,left:`calc(5px + ${e.layoutInfo?((w=e.layoutInfo)==null?void 0:w.position)*25/(((g=e.layoutInfo)==null?void 0:g.overlappingEventsCount)+1):"0"}%)`,width:`calc(${e.layoutInfo?75+25/(((N=e.layoutInfo)==null?void 0:N.overlappingEventsCount)+1):100}% - 10px)`,height:`calc(${e.end?i(e.end.diff(e.start))*100+"%":"auto"} - 3px)`},children:[o("div",{children:e.title}),t("div",{className:"week-day-event-hours",children:[r(e.start).format("LT")," -"," ",r(e.end).format("LT")]})]},e.start.unix())}),E.isSame(n.date,"day")&&o("div",{className:"week-day-now",style:{top:`${s(E)*100}%`}})]})]},n.date.unix())})]})}),o(k.MonthMode,{children:d=>t("div",{className:"month-container",children:[o(O,{currentDate:d[0].start,children:c=>t($,{children:[o("div",{className:"month-day--header"}),c.map(s=>o("div",{className:"month-day month-day--header",children:s.date.format("dd")},s.date.unix()))]})},`header-${d[0].start.unix()}`),d.map(c=>o(O,{currentDate:c.start,events:M,children:s=>t($,{children:[t("div",{className:"month-week-number",children:[c.start.week(),"."]}),s.map(i=>{var n,v,m;return t("div",{className:["month-day",...i.dayTypes.map(e=>`month-day--${e}`)].join(" "),children:[i.date.format("ll"),(n=i.events)==null?void 0:n.filter((e,w)=>{var g;return w<2||i.events&&((g=i.events)==null?void 0:g.length)<=3}).map(e=>o("div",{className:`month-day-event ${p===e?"month-day-event--selected":""}`,style:{backgroundColor:e.backgroundColor,color:e.color},onClick:()=>u(e===p?null:e),children:e.title},e.start.unix())),i.events&&((v=i.events)==null?void 0:v.length)>3?t("div",{className:"month-day-more-events",children:[((m=i.events)==null?void 0:m.length)-2," more"]}):""]},i.date.unix())})]})},c.start.unix()))]})})]})})},W=V.bind({});W.args={startHour:8,endHour:20};const q=["CalendarView"];export{W as CalendarView,q as __namedExportsOrder};
//# sourceMappingURL=CalendarView.stories.0c100ca1.js.map