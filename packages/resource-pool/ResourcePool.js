ResourcePool = function(config, players) {
    config = config || resourceConfig;
    var limit = config.resourceLimit[players] || 7,
        pool = {
            assigned : {},
            assign: function(player, resources) {
                resources = Array.isArray(resources) ? resources : [resources];
                var assigned = pool.assigned[player] || [];
                resources.forEach(function(resource) {
                    var count = pool[resource];
                     if (count > 0) {
                         pool[resource] = count - 1;
                         assigned.push(resource);
                     }
                });
                pool.assigned[player] = assigned;
            }
        };

    (config.concreteResources || []).forEach(function(e) {
        pool[e] = limit;
    });
    (config.wildResources || []).forEach(function(e) {
        pool[e] = ( config.resourceLimit[e] || 7);
    });

    return pool;
}