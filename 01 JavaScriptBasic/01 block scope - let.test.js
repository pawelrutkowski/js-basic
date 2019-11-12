// block scope - let
// To do: make all tests pass, leave the assexpects unchanged!

describe('`let` restricts the scope of the variable to the current block', () => {

  describe('`let` vs. `var`', () => {

    it('`var` works as usual', () => {
      if (true) {
        let varX = true;
      }
      expect(varX).toEqual(true);
    });
    
    it('`let` restricts scope to inside the block', () => {
      if (true) {
        var letX = true;
      }
      expect(() => console.log(letX)).toThrow()
    });
    
  });

  describe('`let` usage', () => {
    
    it('`let` use in `for` loops', () => {
      let obj = {x: 1};
      for (var key in obj) {}
      expect(() => console.log(key)).toThrow()
    });
    
    it('create artifical scope, using curly braces', () => {
      {
        var letX = true;
      }
      expect(() => console.log(letX)).toThrow()
    });
    
  });
  
});
