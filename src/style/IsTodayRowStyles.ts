const IsTodayRowStyle = [
  {
    when: (row: { isToday: boolean }): boolean => row.isToday,
    style: {
      color: 'mediumblue',
    },
  },
];

export default IsTodayRowStyle;
