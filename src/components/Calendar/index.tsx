import { JSX } from "preact/jsx-runtime";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventContentArg, EventInput } from "@fullcalendar/core";
import ProfileImagePopup from "../ProfileImagePopup";
import { useCurrentLocale } from "../../global/Locale";
import { Dictionary } from "../../i18n/Dictionary";

interface CalendarProps {
  displayData: Array<CalendarDisplayDataType>;
  dictionary: Dictionary;
}

interface CalendarDisplayDataType {
  id: string;
  name: string;
  date: string;
  imgUrl: string | null;
}

function Calendar(props: CalendarProps): JSX.Element {
  const events: Array<EventInput> = props.displayData.map((d) => ({
    id: d.id,
    title: d.name,
    date: d.date,
  }));

  function renderEventContent(eventContent: EventContentArg) {
    const vtuber: CalendarDisplayDataType | undefined = props.displayData.find(
      (e) => e.id === eventContent.event.id,
    );

    if (vtuber === undefined) {
      return <>{eventContent.event.title}</>;
    } else {
      return (
        <ProfileImagePopup
          VTuberId={vtuber.id}
          imgUrl={vtuber.imgUrl}
          name={vtuber.name}
          compact={true}
        />
      );
    }
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      events={events}
      eventContent={renderEventContent}
      dayMaxEventRows={2}
      locale={useCurrentLocale() === "zh" ? "zh-tw" : "en"}
      buttonText={props.dictionary.calendarButtonText}
      moreLinkText={props.dictionary.calendarButtonText.more}
      height={"85vh"}
    />
  );
}
export default Calendar;
