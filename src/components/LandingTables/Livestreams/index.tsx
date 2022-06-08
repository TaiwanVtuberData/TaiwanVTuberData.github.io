import * as Api from '../../../services/ApiService';
import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useEffect } from 'preact/hooks';
import { LivestreamDisplayData } from '../../../types/TableDisplayData/LivestreamDisplayData';
import { findClosestSortedDateIndex } from '../../../utils/DateTimeUtils';
import { LivestreamToDisplayData } from '../../../utils/transform/LivestreamTransform';
import HorizontalLivestreamsBox from '../../HorizontalLivestreamsBox';

const LivestreamsTable: FunctionalComponent = () => {
  // search filter
  const [data, setData] = useState<Array<LivestreamDisplayData>>([]);
  useState<boolean>(false);

  const [pending, setPending] = useState(true);

  const getLivestreams = async (): Promise<void> => {
    await Api.getLivestreams('all').then((res) => {
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
        const closestToNow = findClosestSortedDateIndex(arrayData, new Date());

        document
          .getElementById(
            `comp-${Math.min(arrayData.length - 1, closestToNow)}`
          )
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
          });
      }, 500);
    });
  };

  useEffect(() => {
    getLivestreams();
  }, []);

  return (
    <>
      <h3>
        <Text id="header.livestreaming">Streaming Now</Text>
      </h3>
      {pending ? (
        <div style={{ textAlign: 'center' }}>
          <span>
            <Text id="text.loading">Loading...</Text>
          </span>
        </div>
      ) : (
        <HorizontalLivestreamsBox data={data} />
      )}
    </>
  );
};

export default LivestreamsTable;
