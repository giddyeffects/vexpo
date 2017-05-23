/**
* The Halls Collection
*/
Halls = new orion.collection('halls',{
  singularName: orion.helpers.getTranslation('halls.singularName'),
  pluralName: orion.helpers.getTranslation('halls.pluralName'),
  title: orion.helpers.getTranslation('halls.title'),
  link: {
    title: 'Halls',
  },
  tabular: {
    columns: [
      { data: 'name', title: orion.helpers.getTranslation('halls.schema.name') },
      { data: 'phyAddress', title: orion.helpers.getTranslation('halls.schema.phyAddress') },
      orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('halls.schema.createdAt')),
    ]
  }
});
