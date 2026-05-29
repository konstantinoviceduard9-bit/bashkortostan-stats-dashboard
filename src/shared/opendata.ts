export function getOperationalYearFromGroupId(groupId: string): number | null {
  const match = groupId.match(/^opendata_.+_(\d{4})$/);
  return match ? Number(match[1]) : null;
}

export function indicatorIdsWithNonZeroValues(
  values: Array<{ indicatorId: string; year: number; value: number }>,
  year: number
): string[] {
  const nonZeroIds = new Set<string>();

  for (const value of values) {
    if (value.year === year && value.value > 0) {
      nonZeroIds.add(value.indicatorId);
    }
  }

  return [...nonZeroIds];
}
