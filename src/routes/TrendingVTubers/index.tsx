import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import baseroute from '../../baseroute';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import { GroupDisplayData } from '../../types/GroupDisplayData';
import SearchBar from '../../components/SearchBar';
import { GroupData } from '../../types/GroupData';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import '../../style/index.css';
import style from './style.module.css';
import tableStyle from '../../style/DataTableStyle.module.css';
import { VTuberData } from '../../types/VTuberData';
import Profile from '../../components/Profile';
import { NameSort } from '../../utils/NameSort';

export interface TrendingVTubersPageProps {
  dictionary: Dictionary;
}

const TrendingVTubersPage: FunctionalComponent<TrendingVTubersPageProps> = (
  props: TrendingVTubersPageProps
) => {
  document.title = `${props.dictionary.header.trendingVTubers} | ${props.dictionary.header.title}`;

  return <Fragment />;
};

export default TrendingVTubersPage;
