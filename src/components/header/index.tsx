import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

export interface HeaderProps {
  siteUrlPrefix: string;
}

const Header: FunctionalComponent<HeaderProps> = (props: HeaderProps) => {
  // use default URL prefix (no prefix) if in development
  const SITE_URL_PREFIX: string = props.siteUrlPrefix;

  const LinkElement = (text: string, linkTo: string): h.JSX.Element => {
    return (
      <div class={style.gridItem}>
        <Link href={linkTo}>{text}</Link>
      </div>
    );
  };

  return (
    <header>
      <h1 class={style.title}>臺灣 VTuber 列表 (目前無內容)</h1>
      <nav class={style.navGrid}>
        {[
          { text: '首頁', linkTo: `${SITE_URL_PREFIX}/` },
          { text: '重大活動月曆', linkTo: `${SITE_URL_PREFIX}/event-calendar` },
          { text: '所有 VTuber', linkTo: `${SITE_URL_PREFIX}/all-vtubers` },
          { text: '團體列表', linkTo: `${SITE_URL_PREFIX}/group-calendar` },
          {
            text: '熱門 VTuber',
            linkTo: `${SITE_URL_PREFIX}/trending-vtubers`,
          },
          { text: '熱門影片', linkTo: `${SITE_URL_PREFIX}/trending-videos` },
          {
            text: '成長中 VTuber',
            linkTo: `${SITE_URL_PREFIX}/growing-vtubers`,
          },
          { text: '近期出道', linkTo: `${SITE_URL_PREFIX}/debut-vtubers` },
          { text: '近期畢業', linkTo: `${SITE_URL_PREFIX}/graduate-vtubers` },
          {
            text: '資料登載/錯誤回報',
            linkTo: `${SITE_URL_PREFIX}/report-issue`,
          },
          { text: '關於', linkTo: `${SITE_URL_PREFIX}/about` },
        ].map((e) => LinkElement(e.text, e.linkTo))}
      </nav>
    </header>
  );
};

export default Header;
