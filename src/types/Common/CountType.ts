export type CountTag = "has" | "hidden" | "no";

interface BaseCountType {
  readonly tag: CountTag;
}

export interface HasCountType extends BaseCountType {
  readonly tag: "has";
  readonly count: number;
}

interface HiddenCountType extends BaseCountType {
  readonly tag: "hidden";
}

interface NoCountType extends BaseCountType {
  readonly tag: "no";
}

export type CountType = HasCountType | HiddenCountType | NoCountType;
