/**
 * Now we will attach the schema for the Halls collection.
 * Orion will automatically create the corresponding form.
 */
 Halls.attachSchema(new SimpleSchema({
   name: {
     type: String,
     label: orion.helpers.getTranslation('halls.schema.name'),
     optional: false
   },
   image: orion.attribute('image',{
     label: orion.helpers.getTranslation('halls.schema.image'),
     optional: true
   }),
   rows: {
     type: Number,
     label: orion.helpers.getTranslation('halls.schema.rows'),
     optional: false
   },
   cols: {
     type: Number,
     label: orion.helpers.getTranslation('halls.schema.cols'),
     optional: false
   },
   phyAddress: {
     type: String,
     label: orion.helpers.getTranslation('halls.schema.phyAddress'),
     optional: false
   },
   mapLat: {
     type: String,
     label: orion.helpers.getTranslation('halls.schema.mapLat'),
     optional: false
   },
   mapLong: {
     type: String,
     label: orion.helpers.getTranslation('halls.schema.mapLong'),
     optional: false
   },
   /**
   * This attribute sets the user id of the user that created
   * this post automatically.
   */
   createdBy: orion.attribute('createdBy'),
   createdAt: orion.attribute('createdAt')
 }));
