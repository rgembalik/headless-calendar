import moment from "moment";
import { CalendarEvent } from "../../lib/components/CalendarContext";

const colorPalette = [
  {
    background: "hsl(0deg 60% 80%)",
    foreground: "hsl(0deg 85% 35%)",
  },
  {
    background: "hsl(34deg 80% 80%)",
    foreground: "hsl(34deg 100% 35%)",
  },
  {
    background: "hsl(153deg 60% 70%)",
    foreground: "hsl(153deg 74% 25%)",
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
    start: moment().hour(9).startOf("hour").minutes(30),
    end: moment().hour(10).startOf("hour").minutes(45),
    title: "Event overlapping now",
    backgroundColor: colorPalette[1].background,
    color: colorPalette[1].foreground,
  },
  {
    start: moment().hour(10).startOf("hour"),
    end: moment().hour(10).startOf("hour").minutes(45),
    title: "Event overlapping now2",
    backgroundColor: colorPalette[1].background,
    color: colorPalette[1].foreground,
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
  {
    start: moment().subtract(1, "days").hour(9).minute(45),
    end: moment().subtract(1, "days").hour(11).minute(15),
    title: "Event yesterday 2",
    backgroundColor: colorPalette[1].background,
    color: colorPalette[1].foreground,
  },
  {
    start: moment().subtract(1, "days").hour(10).minute(45),
    end: moment().subtract(1, "days").hour(11).endOf("hour"),
    title: "Event yesterday 3",
    backgroundColor: colorPalette[0].background,
    color: colorPalette[0].foreground,
  },
  {
    start: moment().subtract(1, "days").hour(11).minute(30),
    end: moment().subtract(1, "days").hour(12).endOf("hour"),
    title: "Event yesterday 4",
    backgroundColor: colorPalette[2].background,
    color: colorPalette[2].foreground,
  },
];

export { eventMockData, colorPalette };
