type DebutDateOfTheYearType = {
  readonly debutDateOfTheYear: string;
  readonly anniversaryYearCount: number;
};

export const DebutDateOfTheYearAscendingCompare = (
  a: DebutDateOfTheYearType,
  b: DebutDateOfTheYearType,
): number => {
  const debutDateOfTheYearCompareResult = a.debutDateOfTheYear.localeCompare(
    b.debutDateOfTheYear,
  );

  if (debutDateOfTheYearCompareResult !== 0) {
    return debutDateOfTheYearCompareResult;
  } else {
    // if debutDateOfTheYear are the same
    return a.anniversaryYearCount - b.anniversaryYearCount;
  }
};

export const DebutDateOfTheYearDescendingCompare = (
  a: DebutDateOfTheYearType,
  b: DebutDateOfTheYearType,
): number => {
  return DebutDateOfTheYearAscendingCompare(a, b) * -1;
};
