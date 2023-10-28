import { describe, expect, test } from 'vitest'
import { LanguageOptions } from "../src/types/LanguageOptions";

describe("LanguageOptions Test", () => {
  test("Expected language options to be 2", () => {
    expect(LanguageOptions.length).toBe(2);
  });
});
