// destructuring - object
// To do: make all tests pass, leave the expects unchanged!

describe('destructuring objects', () => {

  it('is simple', () => {
    const x = {x: 1};
    expect(x).toEqual(1);
  });

  describe('nested', () => {
    it('multiple objects', () => {
      const magic = {first: 23, second: 42};
      const {magic: [second]} = {magic};
      expect(second).toEqual(42);
    });
    it('object and array', () => {
      const {z:[x]} = {z: [23, 42]};
      expect(x).toEqual(42);
    });
    it('array and object', () => {
      const [,{lang}] = [null, [{env: 'browser', lang: 'ES6'}]];
      expect(lang).toEqual('ES6');
    });
  });
  
  describe('interesting', () => {
    it('missing refs become undefined', () => {
      const {z} = {x: 1, z: 2};
      expect(z).toEqual(void 0);
    });
  
    it('destructure from builtins (string)', () => {
      const {substr} = 1;
      expect(substr).toEqual(String.prototype.substr);
    });
  });

});
