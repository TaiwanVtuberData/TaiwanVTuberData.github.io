import { TableProps } from 'react-data-table-component';
import { Dictionary } from '../i18n/Dictionary';
import ActivityRowStyles from '../style/ActivityRowStyles';
import { Activity } from '../types/Activity';

// columns and data are empty, user should fill them when using DefaultDataTableProps
const DefaultDataTableProps = <T extends { activity: Activity }>(
  dictionary: Dictionary
): TableProps<T> => ({
  columns: [],
  data: [],
  conditionalRowStyles: ActivityRowStyles,
  fixedHeader: true,
  progressComponent: dictionary.table.loading,
});

export default DefaultDataTableProps;
