ResourcePool = function(config, players) {
    config = config || resourceConfig;
    var limit = config.resourceLimit[players] || 7,
        pool = {};

    (config.concreteResources || []).forEach(function(e) {
        pool[e] = limit;
    });

    (config.wildResources || []).forEach(function(e) {
        pool[e] = ( config.resourceLimit[e] || 7);
    });

    return pool;
}