export function getValueByCondition<T>(
  condition: boolean,
  ifTrue: () => T,
  ifFalse: () => T,
): T {
  if (condition) {
    return ifTrue();
  } else {
    return ifFalse();
  }
}
