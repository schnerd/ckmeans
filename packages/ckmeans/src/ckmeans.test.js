const ckmeans = require('./ckmeans');

test('single value', function () {
  expect(ckmeans([1], 1)).toEqual([1]);
});

test('same values', function () {
  expect(ckmeans([1, 1, 1, 1], 1)).toEqual([1]);
});

test('case 1', function () {
  expect(ckmeans([-1, 2, -1, 2, 4, 5, 6, -1, 2, -1], 3)).toEqual([-1, 2, 4]);
});

test('case 2', function () {
  expect(ckmeans([-1, 2, -1, 2, 4, 5, 6, -1, 2, -1], 3)).toEqual([-1, 2, 4]);
});

test('case 3', function () {
  expect(ckmeans([1, 2, 3], 3)).toEqual([1, 2, 3]);
});

test('case 4', function () {
  expect(ckmeans([0, 3, 4], 2)).toEqual([0, 3]);
});

test('case 5', function () {
  expect(ckmeans([-3, 0, 4], 2)).toEqual([-3, 4]);
});

test('case 6', function () {
  expect(ckmeans([1, 2, 2, 3], 3)).toEqual([1, 2, 3]);
});

test('case 7', function () {
  expect(ckmeans([1, 2, 2, 3, 3], 3)).toEqual([1, 2, 3]);
});

test('case 8', function () {
  expect(ckmeans([1, 2, 3, 2, 3], 3)).toEqual([1, 2, 3]);
});

test('case 9', function () {
  expect(ckmeans([3, 2, 3, 2, 1], 3)).toEqual([1, 2, 3]);
});

test('case 10', function () {
  expect(ckmeans([3, 2, 3, 5, 2, 1], 3)).toEqual([1, 3, 5]);
});

test('case 11', function () {
  expect(ckmeans([0, 1, 2, 100, 101, 103], 2)).toEqual([0, 100]);
});

test('case 12', function () {
  expect(ckmeans([0, 1, 2, 50, 100, 101, 103], 3)).toEqual([0, 50, 100]);
});

test('floating point impercision edge case', function () {
  expect(ckmeans([64.64249127327881, 64.64249127328245, 57.79216426169771], 2)).toEqual([
    57.79216426169771,
    64.64249127327881,
  ]);
});
