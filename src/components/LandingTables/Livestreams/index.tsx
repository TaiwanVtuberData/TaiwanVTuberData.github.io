import * as Api from '../../../services/ApiService';
import { FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useEffect } from 'preact/hooks';
import { LivestreamDisplayData } from '../../../types/TableDisplayData/LivestreamDisplayData';
import { findClosestSortedDateIndex } from '../../../utils/DateTimeUtils';
import { LivestreamToDisplayData } from '../../../utils/transform/LivestreamTransform';
import HorizontalLivestreamsBox from '../../HorizontalLivestreamsBox';
import { LivestreamsModifier } from '../../../types/ApiTypes';

interface LivestreamsTableProps {
  divPrefix: string;
  delayMs: number;
  modifier: LivestreamsModifier;
  now: Date;
}

const LivestreamsTable: FunctionalComponent<LivestreamsTableProps> = (
  props: LivestreamsTableProps
) => {
  // search filter
  const [data, setData] = useState<Array<LivestreamDisplayData>>();
  useState<boolean>(false);

  const [pending, setPending] = useState(true);

  const getLivestreams = async (): Promise<void> => {
    await Api.getLivestreams(props.modifier).then((res) => {
      const arrayData: Array<LivestreamDisplayData> = res.data.livestreams
        .map((e) => e)
        .map((e, index) => LivestreamToDisplayData(e, index))
        // what a great Date API, thanks javascript
        .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
      // thanks to JavaScript sorting being mutable, I have to convert ReadonlyArray to Array first
      setData(arrayData);
      setPending(false);

      // TODO: this is a hack to find the closest livestream
      setTimeout(() => {
        // Note: document.getElementById('comp-{index}') only work because array data id is set to their index
        const currentTime = new Date();
        currentTime.setHours(currentTime.getHours() - 1);
        const closestToNow = findClosestSortedDateIndex(arrayData, currentTime);

        document
          .getElementById(
            `${props.divPrefix}-${Math.min(arrayData.length - 1, closestToNow)}`
          )
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
          });
      }, props.delayMs);
    });
  };

  useEffect(() => {
    getLivestreams();
  }, []);

  const GetLivestreamsBox = (): JSX.Element => {
    if (pending) {
      return (
        <div style={{ textAlign: 'center' }}>
          <span>
            <Text id="text.loading">Loading...</Text>
          </span>
        </div>
      );
    }

    if (data === undefined || data.length === 0) {
      return (
        <div style={{ textAlign: 'center' }}>
          <span>
            <Text id="text.noData">No Data</Text>
          </span>
        </div>
      );
    }

    return (
      <HorizontalLivestreamsBox
        divPrefix={props.divPrefix}
        data={data}
        now={props.now}
      />
    );
  };

  return <GetLivestreamsBox />;
};

export default LivestreamsTable;
