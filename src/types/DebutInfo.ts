interface BaseDebutInfo {
  hasDebutInfo: boolean;
}

interface NoDebutInfo extends BaseDebutInfo {
  hasDebutInfo: false;
}

export interface HasDebutInfo extends BaseDebutInfo {
  hasDebutInfo: true;
  debutDate: string;
  isToday: boolean;
  isRecentlyDebut: boolean;
}

export interface AnniversaryDebutInfo {
  hasDebutInfo: true;
  debutDate: string;
  isToday: boolean;
  isRecentlyDebut: boolean;
  debutDateOfTheYear: string;
}

export type DebutInfo = NoDebutInfo | HasDebutInfo | AnniversaryDebutInfo;
