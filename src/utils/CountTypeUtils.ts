/* eslint-disable no-fallthrough */
import { CountType } from "../types/Common/CountType";

export const GetCount = (countType?: CountType): number | null => {
  if (countType === undefined) return null;

  switch (countType.tag) {
    case "has":
      return countType.count;
    case "hidden":
    case "no":
      return null;
  }
};

// Sort order: no < hidden < 100 < 300
export const CountTypeCompare = (a: CountType, b: CountType): number => {
  switch (a.tag) {
    case "has": {
      switch (b.tag) {
        case "has":
          return a.count - b.count;
        case "hidden":
          return 1;
        case "no":
          return 1;
      }
    }

    case "hidden": {
      switch (b.tag) {
        case "has":
          return -1;
        case "hidden":
          return 0;
        case "no":
          return 1;
      }
    }

    case "no": {
      switch (b.tag) {
        case "has":
          return -1;
        case "hidden":
          return -1;
        case "no":
          return 0;
      }
    }
  }
};
