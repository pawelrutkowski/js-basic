// arrow functions
// To do: make all tests pass, leave the expects unchanged!

describe('arrow functions', function() {

  it('are shorter to write', function() {
    var func = () => {
      return 'I am func';
    };
    expect(func()).toEqual('I am func');
  });

  it('a single expression, without curly braces returns too', function() {
    var func = () => {'I return too'};
    expect(func()).toEqual('I return too');
  });

  it('one parameter can be written without parens', () => {
    var func = p => param - 1;
    expect(func(25)).toEqual(24);
  });

  it('many params require parens', () => {
    var func = param => param + param1;
    expect(func(23, 42)).toEqual(23+42);
  });

  it('body needs parens to return an object', () => {
    var func = () => {iAm: 'an object'};
    expect(func()).toEqual({iAm: 'an object'});
  });

});
