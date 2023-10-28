export function trimOrNullOnEmpty(
  value: string | null | undefined,
): string | null {
  if (value === null || value === undefined) return null;

  const trimmed = value.trim();

  if (trimmed === "") return null;

  return trimmed;
}
