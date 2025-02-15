import { ApiSourceOption } from '../types/ApiSourceOptions';
import { ApiSourceModifier, apiSourceModifierArray } from '../types/ApiTypes';

const API_SOURCE_IS_AUTOMATIC_KEY: string = 'apiSource.isAutomatic';
const API_SOURCE_MODIFIER_KEY: string = 'apiSource.modifier';
const DEFAULT_API_SOURCE_IS_AUTOMATIC: boolean = false;
const DEFAULT_API_SOURCE_MODIFIER: ApiSourceModifier = 'jsdelivr';

export function setApiSourceOption(apiSourceOption: ApiSourceOption) {
  switch (apiSourceOption) {
    case 'automatic':
      {
        setIsAutomatic(true);
        setApiSourceModifier(DEFAULT_API_SOURCE_MODIFIER);
      }
      break;
    case 'jsdelivr':
    case 'statically':
    case 'github':
      {
        setIsAutomatic(false);
        setApiSourceModifier(apiSourceOption);
      }
      break;
  }
}

function setIsAutomatic(tf: boolean) {
  localStorage.setItem(API_SOURCE_IS_AUTOMATIC_KEY, tf.toString());
}

export function setApiSourceModifier(apiSourceModifier: ApiSourceModifier) {
  localStorage.setItem(API_SOURCE_MODIFIER_KEY, apiSourceModifier);
}

export function getIsAutomatic(): boolean {
  const rawIsAutomatic: string | null = localStorage.getItem(
    API_SOURCE_IS_AUTOMATIC_KEY,
  );

  if (rawIsAutomatic === null) {
    return DEFAULT_API_SOURCE_IS_AUTOMATIC;
  }

  if (rawIsAutomatic === 'true') {
    return true;
  } else {
    return DEFAULT_API_SOURCE_IS_AUTOMATIC;
  }
}

export function getApiSourceModifier(): ApiSourceModifier {
  const rawApiSourceModifier: string | null = localStorage.getItem(
    API_SOURCE_MODIFIER_KEY,
  );

  if (rawApiSourceModifier === null) {
    return DEFAULT_API_SOURCE_MODIFIER;
  }

  if (
    apiSourceModifierArray.includes(rawApiSourceModifier as ApiSourceModifier)
  ) {
    return rawApiSourceModifier as ApiSourceModifier;
  } else {
    return DEFAULT_API_SOURCE_MODIFIER;
  }
}

export function getNextAvailableApiSourceModifier(
  apiSourceModifier: ApiSourceModifier,
): ApiSourceModifier {
  const arrayIndex: number = apiSourceModifierArray.findIndex(
    (e) => e === apiSourceModifier,
  );

  let nextIndex = 0;
  if (arrayIndex === -1) {
    nextIndex = 0;
  } else {
    nextIndex %= (nextIndex + 1) / apiSourceModifierArray.length;
  }

  return apiSourceModifierArray[nextIndex];
}
