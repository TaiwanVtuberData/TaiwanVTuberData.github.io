import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import * as Api from '../../../services/ApiService';
import { VTuberDisplayData } from '../../../types/TableDisplayData/VTuberDisplayData';
import DefaultDataTableProps from '../../../utils/DefaultDataTableProps';
import '../../../style/index.css';
import ActivityRowStyles from '../../../style/ActivityRowStyles';
import { VTuberBasicToDisplay } from '../../../types/ApiToDisplayData/BasicTransform';
import { CompactTableStyle } from '../../../style/CompactTableStyle';
import { openModal } from '../../../global/modalState';
import { VideoInfo } from '../../../types/Common/VideoInfo';
import { Dictionary } from '../../../i18n/Dictionary';
import YouTubeTwitchCount from '../../YouTubeTwitchCount';
import ProfileImageLink from '../../ProfileImageLink';

export interface TopVTubersTableProps {
  dictionary: Dictionary;
}

const TopVTubersTable: FunctionalComponent<TopVTubersTableProps> = (
  props: TopVTubersTableProps
) => {
  const columns: Array<TableColumn<VTuberDisplayData>> = [
    {
      name: <Text id="table.displayName">Name</Text>,
      cell: (row: {
        id: string;
        imgUrl?: string;
        name: string;
        YouTubeId?: string;
        TwitchId?: string;
      }): h.JSX.Element => (
        <ProfileImageLink
          VTuberId={row.id}
          imgUrl={row.imgUrl}
          name={row.name}
          YouTubeId={row.YouTubeId}
          TwitchId={row.TwitchId}
        />
      ),
    },
    {
      name: (
        <Text id="table.YouTubeTwitchCount">
          YouTube Subscribers + Twitch Followers
        </Text>
      ),
      cell: (row: {
        hasYouTube: boolean;
        YouTubeSubscriberCount?: number;
        hasTwitch: boolean;
        TwitchFollowerCount: number;
      }): h.JSX.Element => <YouTubeTwitchCount {...row} />,
      maxWidth: '250px',
    },
    {
      name: <Text id="table.popularVideo">Popular Video</Text>,
      cell: (row: { popularVideo?: VideoInfo }): h.JSX.Element | null =>
        row.popularVideo !== undefined ? (
          <input
            type="button"
            value={props.dictionary.text.showVideo}
            // TypeScript, I'm pretty sure row.popularVideo is defined here
            onClick={(): void => openModal(row.popularVideo as VideoInfo)}
          />
        ) : null,
      width: '100px',
    },
  ];

  const [data, setData] = useState<Array<VTuberDisplayData>>([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getVTubers('10').then((res) => {
      setData(res.data.VTubers.map((e) => VTuberBasicToDisplay(e)));
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <Fragment>
      <h3>
        <Text id="header.YouTubeSubPlusTwitchFollowers">
          YouTube Subscribers + Twitch Followers
        </Text>
        <Fragment> </Fragment>
        <Text id="header.top10">Top 10</Text>
      </h3>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={data}
        conditionalRowStyles={ActivityRowStyles}
        customStyles={CompactTableStyle}
        progressComponent={<Text id="table.loading">Loading...</Text>}
        progressPending={pending}
      />
    </Fragment>
  );
};

export default TopVTubersTable;
