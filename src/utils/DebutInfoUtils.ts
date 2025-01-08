import { DebutInfo } from '../types/DebutInfo';

export const getDebutDate = (debutInfo: DebutInfo): string | null => {
  if (debutInfo.hasDebutInfo) {
    return debutInfo.debutDate;
  } else {
    return null;
  }
};

export const debutDateExist = (debutInfo: DebutInfo): boolean =>
  debutInfo.hasDebutInfo;
