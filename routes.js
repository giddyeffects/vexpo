/**
 * We add routes here
 */

RouterLayer.route('/', {
	name: 'home',
	template: 'Home',
	layout: 'layout'
});

RouterLayer.route('/events/:_id', {
	name: 'event',
	template: 'Event',
	layout: 'layout'
});
