export function filterFunction<
  TargetType extends object,
  FilterModel extends object
>(targetModel: TargetType, filterModel: FilterModel): boolean {
  const result = Object.entries(filterModel).map((entry) => {
    const keyTyped = entry[0] as keyof typeof targetModel;
    const target = targetModel[keyTyped] as string | undefined | null;

    const filter = entry[1] as string | null;

    // if there is no filter applied
    if (filter === null) {
      return true;
    }

    // if target doesn't exist
    if (target === null || target === undefined || target === '') {
      return false;
    }

    return filter.includes(target);
  });

  const someFilterNotMatch = result.some((e) => e === false);

  return !someFilterNotMatch;
}
