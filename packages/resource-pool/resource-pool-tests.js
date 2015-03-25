var red = "red",
    green = "green",
    gold = "gold";

var limit2 = 4,
    limit3 = 5;

var config = {
    "resourceLimit": {
        "2": limit2,
        "3": limit3,
        "gold": 5
    },
    "concreteResources": [red, green],
    "wildResources": [gold]
}


Tinytest.add('resource numbering - 2/3 players', function (test) {
    for (var i = 2; i <= 3; i++) {
        var pool = ResourcePool(config, i);
        test.equal(pool.available[red], config.resourceLimit["" + i]);
        test.equal(pool.available[green], config.resourceLimit["" + i]);
        test.equal(pool.available[gold], config.resourceLimit[gold]);
    }
});

Tinytest.add('resource selection and assignment - single', function (test) {
    var pool = ResourcePool(config, 2);

    pool.startSelection("player1");
    test.equal(pool.sale.length, 0);
    test.equal(Object.keys(pool.assigned).length, 0);

    pool.select(red);
    test.equal(Object.keys(pool.assigned).length, 0, "assigned resources on selection");
    test.equal(pool.sale.length, 1);
    test.equal(pool.available[red], 3);

    pool.assign();
    test.equal(pool.assigned["player1"], [red]);
});
