describe('Pizza', function() {

  it('it creates a pizza with property quantity from the constructor', function() {
    var myPizza = new Pizza(1, 'large', 'sausage');
    expect(myPizza.quantity).to.equal(1);
  });

  it('it creates a pizza with property size from the constructor', function() {
    var myPizza = new Pizza(1, 'large', 'sausage');
    expect(myPizza.size).to.equal('large');
  });

  it('it creates a pizza with property toppings from the constructor', function() {
    var myPizza = new Pizza(1, 'large', 'sausage', 'olives');
    expect(myPizza.toppings).to.eql('sausage');
  });

  it('it creates a pizza with user input and calculates a price', function() {
    var myPizza = new Pizza(1, 'large', 'sausage');
    expect(myPizza.pizzaPrice).to.equal(18.00);
  });
});
