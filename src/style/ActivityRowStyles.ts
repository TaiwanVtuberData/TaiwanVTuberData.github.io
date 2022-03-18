import { Activity } from '../types/Activity';

const ActivityRowStyles = [
  {
    when: (row: { activity: Activity }): boolean =>
      row.activity === 'preparing',
    style: {
      backgroundColor: 'rgba(248, 148, 6, 0.9)',
      color: 'white',
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
