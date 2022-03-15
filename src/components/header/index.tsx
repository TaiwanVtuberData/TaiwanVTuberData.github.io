import { FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { Link } from 'preact-router/match';
import style from './style.css';

export interface HeaderProps {
  siteUrlPrefix?: string;
}

const Header: FunctionalComponent<HeaderProps> = (props: HeaderProps) => {
  // use default URL prefix (no prefix) if in development
  const SITE_URL_PREFIX: string = props.siteUrlPrefix ?? '';

  const LinkElement = (textID: string, linkTo: string): h.JSX.Element => {
    return (
      <div class={style.gridItem}>
        <Link href={linkTo}>
          <Text id={textID}>empty</Text>
        </Link>
      </div>
    );
  };

  return (
    <header>
      <h1 class={style.title}>
        <Text id="header.title">Taiwan VTuber Data</Text>
      </h1>
      <nav class={style.navGrid}>
        {[
          { textID: 'header.home', linkTo: `${SITE_URL_PREFIX}/` },
          {
            textID: 'header.eventCalendar',
            linkTo: `${SITE_URL_PREFIX}/event-calendar`,
          },
          {
            textID: 'header.allVTubers',
            linkTo: `${SITE_URL_PREFIX}/all-vtubers`,
          },
          {
            textID: 'header.groupList',
            linkTo: `${SITE_URL_PREFIX}/group-calendar`,
          },
          {
            textID: 'header.trendingVTubers',
            linkTo: `${SITE_URL_PREFIX}/trending-vtubers`,
          },
          {
            textID: 'header.trendingVideos',
            linkTo: `${SITE_URL_PREFIX}/trending-videos`,
          },
          {
            textID: 'header.growingVTubers',
            linkTo: `${SITE_URL_PREFIX}/growing-vtubers`,
          },
          {
            textID: 'header.debutVTubers',
            linkTo: `${SITE_URL_PREFIX}/debut-vtubers`,
          },
          {
            textID: 'header.graduateVTubers',
            linkTo: `${SITE_URL_PREFIX}/graduate-vtubers`,
          },
          {
            textID: 'header.reportIssue',
            linkTo: `${SITE_URL_PREFIX}/report-issue`,
          },
          { textID: 'header.about', linkTo: `${SITE_URL_PREFIX}/about` },
        ].map((e) => LinkElement(e.textID, e.linkTo))}
      </nav>
    </header>
  );
};

export default Header;
