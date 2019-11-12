// class - creation
// To do: make all tests pass, leave the expects unchanged!

describe('class creation', () => {

  it('is as simple as `class XXX {}`', function() {
    let TestClass;
    
    const instance = new TestClass();
    expect(typeof instance).toEqual('object');
  });

  it('class is block scoped', () => {
    class Inside {}
    {class Inside {}}
    expect(typeof Inside).toEqual('undefined');
  });
  
  it('special method is `constructor`', function() {
    class User {
      constructor(id) {}
    }
    
    const user = new User(42);
    expect(user.id).toEqual(42);
  });

  it('defining a method is simple', function() {
    class User {
    }
    
    const notATester = new User();
    expect(notATester.writesTests()).toEqual(false);
  });

  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      wroteATest() { this.everWroteATest = true; }
      isLazy() {  }
    }
    
    const tester = new User();
    expect(tester.isLazy()).toEqual(true);
    tester.wroteATest();
    expect(tester.isLazy()).toEqual(false);
  });

  it('anonymous class', () => {
    const classType = typeof {};
    expect(classType).toEqual('function');
  });

});

