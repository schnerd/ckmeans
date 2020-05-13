const ckmeans = require('./ckmeans');

test('should find clusters', function () {
  const result = ckmeans([1, 2, 4, 5, 12, 43, 52, 123, 234, 1244], 6);
  expect(Array.from(result)).toEqual([1, 12, 43, 123, 234, 1244]);
});
