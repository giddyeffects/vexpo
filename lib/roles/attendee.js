/**
* Event Attendee user role.
* Default role
*/

AttendeeRole = new Roles.Role('attendee');
/**
 * We will allow users to edit the dictionary
 */
AttendeeRole.allow('dictionary.update', true);

/**
 * This will make users only can edit this fields in the dictionary
 */
AttendeeRole.helper('dictionary.allowedCategories', ['public']);
