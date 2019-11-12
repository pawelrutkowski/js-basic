// template strings - basics
// To do: make all tests pass, leave the expects unchanged!

describe('a template string, is wrapped in ` (backticks) instead of \' or "', function() {

  describe('by default, behaves like a normal string', function() {
    
    it('just surrounded by backticks', function() {
      var str = ``;
      expect(str).toEqual('like a string');
    });
    
  });

  var x = 42;
  var y = 23;
  
  describe('can evaluate variables, which are wrapped in "${" and "}"', function() {
    
    it('e.g. a simple variable "${x}" just gets evaluated', function() {
      var evaluated = `x=#x`;
      expect(evaluated).toEqual('x=' + x);
    });
    
    it('multiple variables get evaluated too', function() {
      var evaluated = '${ x } + $ { y }';
      expect(evaluated).toEqual(x + '+' + y);
    });
    
  });

  describe('can evaluate any expression, wrapped inside "${...}"', function() {
    
    it('all inside "${...}" gets evaluated', function() {
      var evaluated = `${ x } + ${ y }`;
      expect(evaluated).toEqual(x+y);
    });
    
    it('inside "${...}" can also be a function call', function() {
      function getDomain(){ 
        return document.domain; 
      }
      var evaluated = `${ getDomain }`;
      expect(evaluated).toEqual('tddbin.com');
    });
    
  });
  
});