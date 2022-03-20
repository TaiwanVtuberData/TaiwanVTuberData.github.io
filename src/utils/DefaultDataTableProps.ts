import { TableProps } from 'react-data-table-component';
import ActivityRowStyles from '../style/ActivityRowStyles';
import { Activity } from '../types/Common/Activity';

// columns and data are empty, user should fill them when using DefaultDataTableProps
const DefaultDataTableProps = <
  T extends { activity: Activity }
>(): TableProps<T> => ({
  columns: [],
  data: [],
  conditionalRowStyles: ActivityRowStyles,
});

export default DefaultDataTableProps;
