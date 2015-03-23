ResourcePool = function(config, players) {
    var limit = config.resourceLimit[players] || 7,
        pool = {};

    (config.resources || []).forEach(function(e) {
        pool[e] = limit;
    });

    return pool;
}