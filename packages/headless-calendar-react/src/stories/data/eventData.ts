import moment from "moment";
import { CalendarEvent } from "../../lib/components/CalendarContext";

const colorPalette = [
  {
    background: "#ff6464",
    foreground: "hsl(0deg 85% 35%)",
  },
  {
    background: "#ffbd67",
    foreground: "hsl(34deg 100% 35%)",
  },
  {
    background: "#5be7a9",
    foreground: "hsl(153deg 74% 25%)",
  },
  {
    background: "#f8fe85",
    foreground: "hsl(63deg 98% 30%)",
  },
];

const eventMockData: CalendarEvent[] = [
  {
    start: moment().hour(9).startOf("hour"),
    end: moment().hour(10).startOf("hour"),
    title: "Event now",
    backgroundColor: colorPalette[0].background,
    color: colorPalette[0].foreground,
  },
  {
    start: moment().hour(13).startOf("hour"),
    end: moment().hour(15).startOf("hour"),
    title: "Event now2",
    backgroundColor: colorPalette[1].background,
    color: colorPalette[1].foreground,
  },
  {
    start: moment().subtract(1, "days").hour(9).minute(30),
    end: moment().subtract(1, "days").hour(10).endOf("hour"),
    title: "Event yesterday",
    backgroundColor: colorPalette[2].background,
    color: colorPalette[2].foreground,
  },
];

export { eventMockData, colorPalette };
