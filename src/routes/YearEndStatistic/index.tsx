import YearEndTwitchGrowthTable from '../../components/YearEndStatisticTables/YearEndTwitchGrowthTable';
import YearEndYouTubeGrowthTable from '../../components/YearEndStatisticTables/YearEndYouTubeGrowthTable';
import YearEndYouTubeViewCountGrowthTable from '../../components/YearEndStatisticTables/YearEndYouTubeViewCountGrowthTable';
import { Dictionary } from '../../i18n/Dictionary';
import '../../style/index.css';
import { GetCurrentNationalitySpan } from '../../utils/NationalityUtils';
import style from './style.module.css';
import { FunctionalComponent } from 'preact';
import { Text } from 'preact-i18n';

export interface YearEndStatisticProps {
  dictionary: Dictionary;
}

const YearEndStatistic: FunctionalComponent<YearEndStatisticProps> = (
  props: YearEndStatisticProps,
) => {
  document.title = `${props.dictionary.header.yearEndStatistic} | ${props.dictionary.header.title}`;

  return (
    <>
      <h1>
        <Text id="header.yearEndStatistic">Year End Statistic</Text>
        {GetCurrentNationalitySpan()}
      </h1>
      <h3>
        <b>
          <Text id="detail.yearEndDetail">Placeholder</Text>
        </b>
      </h3>
      <div class={style.tableGrid}>
        <div class={style.tableItem}>
          <YearEndYouTubeGrowthTable
            dictionary={props.dictionary}
            establishTypeModifier="new"
          />
        </div>
        <div class={style.tableItem}>
          <YearEndYouTubeGrowthTable
            dictionary={props.dictionary}
            establishTypeModifier="established"
          />
        </div>
        <div class={style.tableItem}>
          <YearEndTwitchGrowthTable
            dictionary={props.dictionary}
            establishTypeModifier="new"
          />
        </div>
        <div class={style.tableItem}>
          <YearEndTwitchGrowthTable
            dictionary={props.dictionary}
            establishTypeModifier="established"
          />
        </div>
        <div class={style.tableItem}>
          <YearEndYouTubeViewCountGrowthTable
            dictionary={props.dictionary}
            establishTypeModifier="new"
          />
        </div>
        <div class={style.tableItem}>
          <YearEndYouTubeViewCountGrowthTable
            dictionary={props.dictionary}
            establishTypeModifier="established"
          />
        </div>
      </div>
    </>
  );
};

export default YearEndStatistic;
