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

export type DebutInfo = NoDebutInfo | HasDebutInfo;
