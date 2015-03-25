ResourcePool = function(config, players) {
    config = config || resourceConfig;
    var limit = config.resourceLimit[players] || 7;

    var pool = (function(){
        var pool = {};
        (config.concreteResources || []).forEach(function(e) {
            pool[e] = limit;
        });
        (config.wildResources || []).forEach(function(e) {
            pool[e] = ( config.resourceLimit[e] || 7);
        });
        return pool;
    }());

    var ownership = {},
        sale = [];

    var selector;

    var self = {
        available: pool,
        startSelection: function(player) {
            self.release(sale);
            sale = [];
            selector = player;
        },
        select: function(resource) {
            if (!selector) {
                throw "No active selector";
            }
            var count = pool[resource];
            if (count > 0) {
                pool[resource] = count - 1;
                sale.push(resource);
            }
            self.sale = sale;
        },
        deselect: function(resource) {

        },
        assign: function() {
            if (!selector) {
                throw "No active selector";
            }

            var assigned = ownership[selector] || [];
            sale.forEach(function(resource) {
                assigned.push(resource);
            });
            sale = [];
            ownership[selector] = assigned;
        },
        release: function(resources) {

        },
        assigned: ownership,
        sale: sale
    }

    return self;
}