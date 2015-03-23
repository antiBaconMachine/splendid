var red = "red",
    green = "green",
    gold = "gold";

var limit2 = 4,
    limit3 = 5;

var config = {
  "resourceLimit" : {
    "2" : limit2,
    "3" : limit3,
    "gold" : 5
},
  "concreteResources" : [red,green],
  "wildResources" : [gold]
}


Tinytest.add('resource numbering - 2/3 players', function (test) {
  for (var i=2; i<=3; i++) {
    var pool = ResourcePool(config, i);
    test.equal(pool[red], config.resourceLimit["" + i]);
    test.equal(pool[green], config.resourceLimit["" + i]);
    test.equal(pool[gold], config.resourceLimit[gold]);
  }
});

Tinytest.add('resource assignment - single', function(test) {
  var pool = ResourcePool(config, 2);
  test.equal(Object.keys(pool.assigned).length, 0);
  pool.assign("player1", red);
  test.equal(Object.keys(pool.assigned).length, 1);
  test.equal(pool[red], 3);
});
