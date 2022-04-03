import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import * as Api from '../../../services/ApiService';
import DefaultDataTableProps from '../../../utils/DefaultDataTableProps';
import '../../../style/index.css';
import ActivityRowStyles from '../../../style/ActivityRowStyles';
import { VTuberDebutDisplayData } from '../../../types/TableDisplayData/VTuberDebutDisplayData';
import { getISODateString } from '../../../utils/DateTimeUtils';
import IsTodayRowStyle from '../../../style/IsTodayRowStyles';
import { VTuberDebutToDisplay } from '../../../types/ApiToDisplayData/DebutTransform';
import { CompactTableStyle } from '../../../style/CompactTableStyle';
import { VideoInfo } from '../../../types/Common/VideoInfo';
import { openModal } from '../../../global/modalState';
import { Dictionary } from '../../../i18n/Dictionary';
import ProfileImageLink from '../../ProfileImageLink';
import YouTubeTwitchCount from '../../YouTubeTwitchCount';

export interface DebutVTubersTableProps {
  dictionary: Dictionary;
}

const DebutVTubersTable: FunctionalComponent<DebutVTubersTableProps> = (
  props: DebutVTubersTableProps
) => {
  const columns: Array<TableColumn<VTuberDebutDisplayData>> = [
    {
      name: <Text id="table.debutDate">Debut Date</Text>,
      width: '100px',
      selector: (row: { debutDate: string }): string => row.debutDate,
      sortable: true,
    },
    {
      name: <Text id="table.displayName">Name</Text>,
      cell: (row: {
        imgUrl?: string;
        name: string;
        YouTubeId?: string;
        TwitchId?: string;
      }): h.JSX.Element => <ProfileImageLink {...row} />,
    },
    {
      name: (
        <Text id="table.YouTubeTwitchCount">
          YouTube Subscribers + Twitch Followers
        </Text>
      ),
      maxWidth: '250px',
      cell: (row: {
        hasYouTube: boolean;
        YouTubeSubscriberCount?: number;
        hasTwitch: boolean;
        TwitchFollowerCount: number;
      }): h.JSX.Element => <YouTubeTwitchCount {...row} />,
    },
    {
      name: <Text id="table.popularVideo">Popular Video</Text>,
      width: '100px',
      cell: (row: { popularVideo?: VideoInfo }): h.JSX.Element | null =>
        row.popularVideo !== undefined ? (
          <input
            type="button"
            value={props.dictionary.text.showVideo}
            // TypeScript, I'm pretty sure row.popularVideo is defined here
            onClick={(): void => openModal(row.popularVideo as VideoInfo)}
          />
        ) : null,
    },
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberDebutDisplayData>>([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    const todayDate: string = getISODateString(new Date(), 8);
    await Api.getDebutVTubers('next-7-days').then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .sort((a, b) => a.debutDate.localeCompare(b.debutDate))
          .map((e) => VTuberDebutToDisplay(e, todayDate))
      );
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <Fragment>
      <h3>
        <Text id="header.debutVTubersIn7Days">VTubers Debut in 7 days</Text>
      </h3>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={data}
        // Typescript does not accept concat two array of different types
        conditionalRowStyles={ActivityRowStyles.concat(
          IsTodayRowStyle as Array<any>
        )}
        customStyles={CompactTableStyle}
        progressPending={pending}
        progressComponent={<Text id="table.loading">Loading...</Text>}
      />
    </Fragment>
  );
};

export default DebutVTubersTable;
