Meteor.methods({
   resourceConfig : function() {
       return JSON.parse(Assets.getText('resourceConfig.json'));
   }
});