import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { GoogleMaps } from 'meteor/dburles:google-maps';

import './map.html';

Template.map.created(function() {
  GoogleMaps.ready('map', function(map) {
     console.log("I'm ready!");
  });
});
Template.map.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(Meteor.settings.public.default_lat, Meteor.settings.public.default_long),
        zoom: Meteor.settings.public.default_zoom
      };
    }
  }
});
