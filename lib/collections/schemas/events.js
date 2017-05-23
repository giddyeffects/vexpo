/**
 * Now we will attach the schema for the Events collection.
 * Orion will automatically create the corresponding form.
 */
 Events.attachSchema(new SimpleSchema({
   name: {
     type: String,
     label: orion.helpers.getTranslation('events.schema.name'),
     optional: false
   },
   // here is where we define `an event has one hall`
   // Each document in Events has a hallId
   hallId: orion.attribute('hasOne', {
     // the label is the text that will show up on the Update form's label
     label: 'Hall'
   }, {
     // specify the collection you're making the relationship with
     collection: Halls,
     // the key whose value you want to show for each Post document on the Update form
     titleField: 'name',
     publicationName: 'anythingWillDo',
   }),
   image: orion.attribute('image',{
     label: orion.helpers.getTranslation('events.schema.image'),
     optional: true
   }),
   startDate: {
     type: Date,
     label: orion.helpers.getTranslation('events.schema.startDate'),
     optional: false
   },
   endDate: {
     type: Date,
     label: orion.helpers.getTranslation('events.schema.endDate'),
     optional: false
   },
   active: {
     type: Boolean,
     label: orion.helpers.getTranslation('events.schema.active')
   },
   /**
   * This attribute sets the user id of the user that created
   * this post automatically.
   */
   createdBy: orion.attribute('createdBy'),
   createdAt: orion.attribute('createdAt')
 }));
