import { Fragment, FunctionalComponent, h } from 'preact';
import { Dictionary } from '../../i18n/Dictionary';
import { MarkupText, Text } from 'preact-i18n';
import style from './style.module.css';

export interface EventCalendarPageProps {
  dictionary: Dictionary;
}

const EventCalendarPage: FunctionalComponent<EventCalendarPageProps> = (
  props: EventCalendarPageProps
) => {
  document.title = `${props.dictionary.header.eventCalendar} | ${props.dictionary.header.title}`;

  return (
    <Fragment>
      <h1>
        <Text id="header.eventCalendar">Event Calendar</Text>
        <MarkupText id="header.eventCalendarDetail">
          {'(Provided By Discord Server <b>DD Refuge</b>)'}
        </MarkupText>
      </h1>
      <iframe
        class={style.calendar}
        src="https://calendar.google.com/calendar/embed?src=a4tve6el13u84ntjtvb1kvob10%40group.calendar.google.com&ctz=Asia%2FTaipei"
      />
    </Fragment>
  );
};

export default EventCalendarPage;
