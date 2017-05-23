/**
 * In this file are defined the definitions of the
 * category basic.
 * It's a good practice to create a file for
 * each dictionary category
 */

orion.dictionary.addDefinition('title', 'public', {
    type: String,
    label: orion.helpers.getTranslation('dictionary.public.title'),
    defaultValue: function() {
      return 'Virtual Exposition';
    }
});
orion.dictionary.addDefinition('metaDescription', 'public', {
    type: String,
    label: orion.helpers.getTranslation('dictionary.public.metaDescription'),
    defaultValue: function() {
      return 'A Virtual Exposition App done in Meteor Fullstack JS framework, OrionJS CMS, MongoDB and Blaze templates';
    }
});
orion.dictionary.addDefinition('termsAndConditions', 'public',
  orion.attribute('summernote', {
    label: orion.helpers.getTranslation('dictionary.public.termsAndConditions'),
    optional: true
  })
);
