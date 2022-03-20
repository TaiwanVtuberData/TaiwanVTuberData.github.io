export const PrependSign = (value: number): string => {
  if (value > 0) return `+${value}`;
  if (value < 0) return `${value}`;

  return '0';
};
