export const YouTubeIdToLink = (id?: string): string => {
  return id !== null ? `https://www.youtube.com/channel/${id}` : "";
};

export const TwitchIdToLink = (id?: string): string => {
  return id !== null ? `https://www.twitch.tv/${id}` : "";
};
