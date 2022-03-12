import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header: FunctionalComponent = () => {
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
          { text: '首頁', linkTo: '/' },
          { text: '重大活動月曆', linkTo: '/event-calendar' },
          { text: '所有 VTuber', linkTo: '/all-vtubers' },
          { text: '團體列表', linkTo: '/group-calendar' },
          { text: '熱門 VTuber', linkTo: '/trending-vtubers' },
          { text: '熱門影片', linkTo: '/trending-videos' },
          { text: '成長中 VTuber', linkTo: '/growing-vtubers' },
          { text: '近期出道', linkTo: '/debut-vtubers' },
          { text: '近期畢業', linkTo: '/graduate-vtubers' },
          { text: '資料登載/錯誤回報', linkTo: '/report-issue' },
          { text: '關於', linkTo: '/about' },
        ].map((e) => LinkElement(e.text, e.linkTo))}
      </nav>
    </header>
  );
};

export default Header;
