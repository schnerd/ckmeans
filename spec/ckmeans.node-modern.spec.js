/* globals describe, it, expect */
const nativeCkMeans = require('../src/ckmeans-native');
const jsCkMeans = require('../src/ckmeans');

describe('Ckmeans Native', function () {
  it('should find clusters', function () {
    const result = nativeCkMeans.ckmeans(
      [1, 2, 4, 5, 12, 43, 52, 123, 234, 1244],
      6
    );
    expect(Array.from(result)).toEqual([1, 12, 43, 123, 234, 1244]);
  });

  it('should return same as non-native for a bunch of random tests', function () {
    for (let i = 0; i < 30; i++) {
      const length = parseInt(Math.random() * 10 + 300);
      const data = [];
      for (let j = 0; j < length; j++) {
        data[j] = parseInt(Math.random() * 100);
      }
      const nClusters = parseInt(Math.random() * 10) + 2;
      const native = nativeCkMeans.ckmeans([...data], nClusters);
      const js = jsCkMeans([...data], nClusters);
      expect(js).toEqual(Array.from(native), data, nClusters);
    }
  });
});
