import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { Dictionary } from '../../i18n/Dictionary';
import '../../style/index.css';

export interface HomeProps {
  dictionary: Dictionary;
}

const Home: FunctionalComponent<HomeProps> = (props: HomeProps) => {
  document.title = `${props.dictionary.header.title}`;

  return (
    <Fragment>
      <h1>
        <Text id="header.title">Taiwan VTuber Data</Text>
      </h1>
      <span style={{ marginTop: '50px', display: 'flex' }}>
        目前已完成功能:
      </span>
      <ul>
        <li>
          中英切換
          (https://github.com/TaiwanVtuberData/TaiwanVtuberData.github.io/issues/2)
        </li>
        <li>
          側邊欄
          (https://github.com/TaiwanVtuberData/TaiwanVtuberData.github.io/issues/104)
        </li>
        <li>所有 VTuber</li>
        <li>團體列表</li>
        <li>熱門 VTuber</li>
        <li>近期出道 VTuber</li>
        <li>近期畢業 VTuber</li>
        <li>各團體成員頁面</li>
      </ul>
      <span style={{ marginTop: '50px', display: 'flex' }}>尚未完成功能:</span>
      <ul>
        <li>首頁</li>
        <li>熱門影片</li>
        <li>成長中 VTuber</li>
        <li>資料登載/錯誤回報</li>
        <li>關於</li>
      </ul>
      <span style={{ marginTop: '50px', display: 'flex' }}>
        尚未完成功能(僅需移植頁面):
      </span>
      <ul>
        <li>重大活動月曆</li>
        <li>資料登載/錯誤回報</li>
        <li>關於</li>
      </ul>
      <span style={{ marginTop: '50px', display: 'flex' }}>
        預計加入額外功能:
      </span>
      <ul>
        <li>
          捲動至頁首/頁尾
          (https://github.com/TaiwanVtuberData/TaiwanVtuberData.github.io/issues/103)
        </li>
        <li>
          新增頻道觀看次數變化
          (https://github.com/TaiwanVtuberData/TaiwanVtuberData.github.io/issues/105)
        </li>
      </ul>
      <span style={{ marginTop: '50px', display: 'flex' }}>放棄加入功能:</span>
      <ul>
        <li>
          使用 sql.js-httpvfs 提供搜尋功能
          (https://github.com/TaiwanVtuberData/TaiwanVtuberData.github.io/issues/61)
        </li>
      </ul>
    </Fragment>
  );
};

export default Home;
