import { Activity } from '../types/Common/Activity';

const ActivityRowStyles = [
  {
    when: (row: { activity: Activity }): boolean =>
      row.activity === 'preparing',
    style: {
      backgroundColor: 'rgba(141, 209, 157, 0.9)',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  {
    when: (row: { activity: Activity }): boolean => row.activity === 'graduate',
    style: {
      backgroundColor: 'rgba(123, 123, 123, 0.9)',
      color: 'white',
      '&:hover': {
        cursor: 'not-allowed',
      },
    },
  },
];

export default ActivityRowStyles;
