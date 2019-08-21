var homePage = require('../pages/HomePage.po.js');
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    var angularHomepage = new homePage();
    angularHomepage.get();
    angularHomepage.setName('Dan');
    expect(angularHomepage.getGreeting()).toEqual('Hello Dan!');
  });
});