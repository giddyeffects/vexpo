import { Meteor } from 'meteor/meteor';
import { GoogleMaps } from 'meteor/dburles:google-maps';
Meteor.startup(function() {
  GoogleMaps.load();
});
