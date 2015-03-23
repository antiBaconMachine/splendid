var red = "red",
    green = "green";

var limit2 = 4,
    limit3 = 5;

var config = {
  "resourceLimit" : {
    "2" : limit2,
    "3" : limit3
},
  "resources" : [red,green]
}


Tinytest.add('resource numbering - 2/3 players', function (test) {
  for (var i=2; i<=3; i++) {
    var pool = ResourcePool(config, i);
    test.equal(pool[red], config.resourceLimit["" + i]);
    test.equal(pool[green], config.resourceLimit["" + i]);
  }
});
