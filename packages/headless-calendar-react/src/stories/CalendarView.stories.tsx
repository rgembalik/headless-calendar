import "moment/dist/locale/en-gb";

import { Calendar, CalendarWeek } from "../lib";
import { DatePicker } from "./CalendarStories/DatePicker.stories";
import { CalendarView } from "./CalendarStories/CalendarView.stories";
export default {
  title: "Calendar components",
  components: { Calendar, CalendarWeek },
};

export { CalendarView, DatePicker };
