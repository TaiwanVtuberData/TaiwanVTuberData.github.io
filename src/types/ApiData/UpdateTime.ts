export interface UpdateTime {
  // returned strings are in ISO 8601 format (2022-03-28T05:55:00+08:00)
  readonly statisticUpdateTime: string;
  readonly VTuberDataUpdateTime: string;
}

export interface UpdateTimeResponse {
  readonly time: UpdateTime;
}
