import { CountType } from '../types/Common/CountType';

export const GetCount = (countType?: CountType): number | null => {
  if (countType === undefined) return null;

  switch (countType.tag) {
    case 'has':
      return countType.count;
    case 'hidden':
    case 'no':
      return null;
  }
};
