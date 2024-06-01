import { DebutInfo } from "../types/DebutInfo";

export const getDebutDate = (debutInfo: DebutInfo): string | null => {
  if (debutInfo.hasDebutInfo) {
    return debutInfo.debutDate;
  } else {
    return null;
  }
};
