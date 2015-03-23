resourceConfig = {};

Meteor.startup(function() {
   getConfig(function(err, config) {
     if (err) {
         throw err;
     }
       resourceConfig = config;
   });
});

getConfig = function(cb) {
    Meteor.call('resourceConfig',cb);
};
