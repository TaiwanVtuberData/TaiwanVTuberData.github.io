import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import baseroute from '../../baseroute';
import SearchBar from '../../components/SearchBar';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import '../../style/index.css';
import tableStyle from '../../style/DataTableStyle.module.css';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import { VTuberDebutDisplayData } from '../../types/TableDisplayData/VTuberDebutDisplayData';
import { getISODateString } from '../../utils/DateTimeUtils';
import IsTodayRowStyle from '../../style/IsTodayRowStyles';
import { VTuberDebutToDisplay } from '../../types/ApiToDisplayData/DebutTransform';
import QuestionMarkToolTip from '../../components/QuestionMarkToolTip';
import { openModal } from '../../global/modalState';
import { VideoInfo } from '../../types/Common/VideoInfo';
import YouTubeTwitchCount from '../../components/YouTubeTwitchCount';
import ProfileImageLink from '../../components/ProfileImageLink';
import { VTuberFullData } from '../../types/ApiData/VTuberFullData';
import { VTuberFullToDisplay } from '../../types/ApiToDisplayData/FullTransform';
import Profile from '../../components/Profile';
import VTuberInformation from '../../components/VTuberInformation';
import { VTuberDisplayFullData } from '../../types/TableDisplayData/VTuberDisplayFullData';

export interface VTuberPageProps {
  id: string;
  dictionary: Dictionary;
}

const VTuberPage: FunctionalComponent<VTuberPageProps> = (
  props: VTuberPageProps
) => {
  const [data, setData] = useState<VTuberDisplayFullData>();
  document.title = `${data?.name ?? ''} | ${props.dictionary.header.title}`;

  const getVTuber = async (): Promise<void> => {
    await Api.getVTuber(props.id).then((res) => {
      setData(VTuberFullToDisplay(res.data.VTuber));
    });
  };

  useEffect(() => {
    getVTuber();
  }, []);

  return (
    <>
      <h1>
        <span> {data?.name ?? ''} </span>
      </h1>
      <VTuberInformation VTuber={data} dictionary={props.dictionary} />
    </>
  );
};

export default VTuberPage;
