ResourcePool = function(players) {
    Meteor.call("resourcePool", players, function(error, pool) {
        if (error) {
            throw error;
        }
       console.log("Resource pool: %o",pool);
    });
}