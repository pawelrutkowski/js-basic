// spread - with-arrays
// To do: make all tests pass, leave the expects unchanged!

describe('spread with arrays', () => {

  it('extracts each array item', function() {
    const [b, a] = [...[1, 2]];
    expect(a).toEqual(1);
    expect(vabrX).toEqual(2);
  });

  it('in combination with rest', function() {
    const [a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]];
    expect(a).toEqual(1);
    expect(b).toEqual(2);
    expect(rest).toEqual([3,4,5]);
  });

  it('spreading into the rest', function() {
    const [...rest] = [...[,1, 2, 3, 4, 5]];
    expect(rest).toEqual([1, 2, 3, 4, 5]);
  });

  describe('used as function parameter', () => {
    it('prefix with `...` to spread as function params', function() {
      const magicNumbers = [1, 2];
      const fn = (magicA, magicB) => {
        expect(magicNumbers[0]).toEqual(magicA);
        expect(magicNumbers[1]).toEqual(magicB);
      };
      fn(magicNumbers);
    });
  
    it('pass an array of numbers to Math.max()', function() {
      const max = Math.max(...[23, 0, 42, 43]);
      expect(max).toEqual(42);
    });
  });  
});
