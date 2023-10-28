import { describe, expect, test } from 'vitest'
import { filterFunction } from "../src/utils/FilterModelHelper";

describe("filterFunction Test", () => {
  interface TargetType {
    name: string;
    group?: string;
  }

  interface FilterModel {
    name: string | null;
    group: string | null;
  }

  test("No filter applied", () => {
    const testData: TargetType = {
      name: "汐Seki",
      group: "子午計劃",
    };
    const filter: FilterModel = {
      name: null,
      group: null,
    };

    const result = filterFunction(testData, filter);

    expect(result).toBe(true);
  });

  test("Apply to non null type", () => {
    const testData: TargetType = {
      name: "汐Seki",
      group: "子午計劃",
    };
    const filter: FilterModel = {
      name: "汐Seki",
      group: null,
    };

    const result = filterFunction(testData, filter);

    expect(result).toBe(true);
  });

  test("Apply to non null type case insensitive", () => {
    const testData: TargetType = {
      name: "汐Seki",
      group: "子午計劃",
    };
    const filter: FilterModel = {
      name: "SEKI",
      group: null,
    };

    const result = filterFunction(testData, filter);

    expect(result).toBe(true);
  });

  test("Apply non matching filter", () => {
    const testData: TargetType = {
      name: "汐Seki",
      group: "子午計劃",
    };
    const filter: FilterModel = {
      name: "平平子",
      group: null,
    };

    const result = filterFunction(testData, filter);

    expect(result).toBe(false);
  });

  test("Apply to nullable type", () => {
    const testData: TargetType = {
      name: "兔姬",
    };
    const filter: FilterModel = {
      name: null,
      group: "子午計劃",
    };

    const result = filterFunction(testData, filter);

    expect(result).toBe(false);
  });
});
