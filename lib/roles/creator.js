/**
* Event Creator user role.
* Has all the rights of an attendee plus more :)
*/

CreatorRole = new Roles.Role('creator');

/**
 * Users can see events in the admin
 */
CreatorRole.allow('collections.events.index', true);

/**
 * And we will make that the users only see their events in the index
 */
CreatorRole.helper('collections.events.indexFilter', function() {
  return { createdBy: this.userId };
});

/**
 * Event Creator can create events
 */
CreatorRole.allow('collections.events.insert', true);

/**
 * Users can update events
 */
CreatorRole.allow('collections.events.update', function(userId, doc, fields, modifier) {
  return doc.createdBy === userId; // Will be allowed to edit his own events
});

/**
 * Users can't change the createdBy attribute
 */
CreatorRole.deny('collections.events.update', function(userId, doc, fields, modifier) {
  return _.contains(fields, 'userId');
});

/**
 * Users can remove events
 */
CreatorRole.allow('collections.events.remove', function(userId, doc) {
  return doc.createdBy === userId; // Will be allowed to edit his own events
});

/**
 * Users can see the create events button
 */
CreatorRole.allow('collections.events.showCreate', true);

/**
 * Users can see the update events button if they created the doc
 */
CreatorRole.allow('collections.events.showUpdate', function(doc) {
  return doc.createdBy == this.userId;
});

/**
 * Users can see the delete events button if they created the doc
 */
CreatorRole.allow('collections.events.showRemove', function(doc) {
  return doc.createdBy == this.userId;
});
