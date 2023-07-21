import { h } from 'preact';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';
import { HasCountType } from '../types/Common/CountType';

export interface YouTubeSubscriberColumnRowData {
  YouTubeSubscriber: HasCountType;
}

export const YouTubeSubscriberColumn = <
  RowData extends YouTubeSubscriberColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.YouTubeSubscriberCount">YouTube Subscribers</Text>,
    selector: (row: RowData): number => row.YouTubeSubscriber.count,
  };
};
