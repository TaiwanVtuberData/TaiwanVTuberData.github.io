import { FunctionalComponent, JSX } from "preact";
import { LivestreamDisplayData } from "../../types/TableDisplayData/LivestreamDisplayData";
import LivestreamComponent from "../LivestreamComponent";

export interface HorizontalLivestreamsBoxProps {
  divPrefix: string;
  data: Array<LivestreamDisplayData>;
  now: Date;
}

const HorizontalLivestreamsBox: FunctionalComponent<
  HorizontalLivestreamsBoxProps
> = (props: HorizontalLivestreamsBoxProps): JSX.Element => {
  return (
    <>
      {props.data.map((e, index) => (
        <LivestreamComponent
          divPrefix={props.divPrefix}
          id={index}
          key={index}
          VTuberId={e.VTuberId}
          imgUrl={e.imgUrl}
          name={e.name}
          thumbnailUrl={e.thumbnailUrl}
          videoUrl={e.videoUrl}
          startTime={e.startTime}
          now={props.now}
        />
      ))}
    </>
  );
};

export default HorizontalLivestreamsBox;
