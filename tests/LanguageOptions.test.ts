import { LanguageOptions } from '../src/types/LanguageOptions';
import { describe, expect, test } from 'vitest';

describe('LanguageOptions Test', () => {
  test('Expected language options to be 2', () => {
    expect(LanguageOptions.length).toBe(2);
  });
});
