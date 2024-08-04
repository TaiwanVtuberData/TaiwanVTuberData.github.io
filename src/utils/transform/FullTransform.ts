import { VTuberFullData } from "../../types/ApiData/VTuberFullData";
import { VTuberDisplayFullData } from "../../types/TableDisplayData/VTuberDisplayFullData";

export const VTuberFullToDisplay = (
  e: VTuberFullData,
): VTuberDisplayFullData => ({
  id: e.id,
  activity: e.activity,
  name: e.name,
  imgUrl: e.imgUrl,
  YouTube: e.YouTube,
  Twitch: e.Twitch,
  popularVideo: e.popularVideo,
  group: e.group,
  nationality: e.nationality,
  debutDate: e.debutDate || null,
  graduateDate: e.graduateDate || null,
  livestreams: e.livestreams.map((stream) => ({
    ...stream,
    startTime: new Date(stream.startTime),
  })),
});
