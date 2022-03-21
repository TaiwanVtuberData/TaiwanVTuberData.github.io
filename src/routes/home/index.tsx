import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import DebutVTubersTable from '../../components/LandingTables/DebutVTubers';
import GrowingVTubersTable from '../../components/LandingTables/GrowingVTubers';
import TopVTubersTable from '../../components/LandingTables/TopVTubers';
import TrendingVTubersTable from '../../components/LandingTables/TrendingVTubers';
import { Dictionary } from '../../i18n/Dictionary';
import '../../style/index.css';
import style from './style.module.css';

export interface HomePageProps {
  dictionary: Dictionary;
}

const HomePage: FunctionalComponent<HomePageProps> = (props: HomePageProps) => {
  document.title = `${props.dictionary.header.title}`;

  return (
    <Fragment>
      <h1>
        <Text id="header.title">Taiwan VTuber Data</Text>
      </h1>
      <div class={style.tableGrid}>
        <div class={style.tableItem}>
          <TrendingVTubersTable />
        </div>
        <div class={style.tableItem}>
          <DebutVTubersTable />
        </div>
        <div class={style.tableItem}>
          <GrowingVTubersTable dictionary={props.dictionary} />
        </div>
        <div class={style.tableItem}>
          <TopVTubersTable />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
