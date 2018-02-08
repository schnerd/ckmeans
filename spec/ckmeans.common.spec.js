/* globals describe, it, expect */
var ckmeans = require('../src/ckmeans');

describe('Ckmeans', function () {
  it('should find clusters', function () {
    const result = ckmeans([1, 2, 4, 5, 12, 43, 52, 123, 234, 1244], 6);
    expect(result).toEqual([1, 12, 43, 123, 234, 1244]);
  });
});
