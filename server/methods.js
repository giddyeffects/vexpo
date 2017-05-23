Meteor.methods({
  insertEvent: function(data) {
    //make sure user is logged in and can insert before inserting an event
    if(!this.userId){
      throw new Meteor.Error('please log in');
    }
    if(!Roles.userHasRole(this.userId,'creator') || !Roles.userHasRole(this.userId,'admin')){
      throw new Meteor.Error('not authorized');
    }
    //check the data
    check(data,{
      name: String,
      active: Boolean,
      startDate: Date,
      endDate: Date
    });
    //insert the Event
    Events.insert(data);
  },

  insertHall: function(data){
    //make sure user is logged in and can insert before inserting an event
    if(!this.userId){
      throw new Meteor.Error('please log in');
    }
    if(!Roles.userHasRole(this.userId,'creator') || !Roles.userHasRole(this.userId,'admin')){
      throw new Meteor.Error('not authorized');
    }
    check(data,{
      name: String,
      rows: Number,
      cols: Number,
      phyAddress: String,
      mapLat: String,
      mapLong: String,
    });
    Halls.insert(data);
  },
});
