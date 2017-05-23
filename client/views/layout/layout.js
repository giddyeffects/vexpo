Template.layout.helpers({
  isAdmin: function(){
    return Router.current();
  }
});
Meteor.startup(function() {
  GoogleMaps.load();
});
