var u = Meteor.users.findOne({username: 'giddy'});
Roles.addUserToRoles( u._id ,  ["admin"] );
