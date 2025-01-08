export type GrowthRecordType = 'none' | 'partial' | 'full';

export interface GrowthData {
  diff: number;
  recordType: GrowthRecordType;
}
