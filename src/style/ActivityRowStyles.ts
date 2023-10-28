import { Activity } from "../types/Common/Activity";
import { DebutInfo } from "../types/DebutInfo";

const ActivityRowStyles = [
  {
    when: (row: { activity: Activity }): boolean =>
      row.activity === "preparing",
    style: {
      backgroundColor: "rgba(141, 209, 157, 0.9)",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  {
    when: (row: { activity: Activity; debutInfo?: DebutInfo }): boolean =>
      row.activity === "active" &&
      row.debutInfo !== undefined &&
      row.debutInfo.hasDebutInfo === true &&
      row.debutInfo.isRecentlyDebut === true,
    style: {
      backgroundColor: "rgba(156, 205, 196, 0.5)",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  {
    when: (row: { activity: Activity }): boolean => row.activity === "graduate",
    style: {
      backgroundColor: "rgba(123, 123, 123, 0.9)",
      color: "white",
      "&:hover": {
        cursor: "not-allowed",
      },
    },
  },
];

export default ActivityRowStyles;
