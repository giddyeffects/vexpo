/**
* The Events Collection
*/
Events = new orion.collection('events',{
  singularName: orion.helpers.getTranslation('events.singularName'),
  pluralName: orion.helpers.getTranslation('events.pluralName'),
  title: orion.helpers.getTranslation('events.title'),
  link: {
    title: 'Events',
  },
  tabular: {
    columns: [
      { data: 'name', title: orion.helpers.getTranslation('events.schema.name') },
      orion.attributeColumn('createdAt', 'startDate', orion.helpers.getTranslation('events.schema.startDate')),
      orion.attributeColumn('createdAt', 'endDate', orion.helpers.getTranslation('events.schema.endDate')),
      orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('events.schema.createdAt')),
    ]
  }
});
