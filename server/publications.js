/**
 * Publish all active events...for now
 */
Meteor.publish('events', function () {
  //var ip = this.connection.clientAddress;
  return Events.find({ active: { $ne: true } }, { sort: { startDate: -1 }, limit: 30 });
});
