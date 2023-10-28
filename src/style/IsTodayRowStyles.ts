import { DebutInfo } from "../types/DebutInfo";

const IsTodayRowStyle = [
  {
    when: (row: { debutInfo: DebutInfo }): boolean =>
      row.debutInfo.hasDebutInfo === true && row.debutInfo.isToday,
    style: {
      color: "mediumblue",
    },
  },
];

export default IsTodayRowStyle;
