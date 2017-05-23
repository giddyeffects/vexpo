/**
 * Set the app options in /lib to be loaded before everything
 */
 /**
  * Define the siteName and the siteLink for the admin panel
  */
 Options.set('siteName','Virtual Exposition');
 //Options.set('siteLink','/');
 /**
  * To allow the creation of users
  */
 Options.set('forbidClientAccountCreation', false);

/**
 * To set the attendee role to all new users. Admin should change thereafter as necessary
 */
Options.arrayPush('defaultRoles', 'attendee');
/**
 * To set the schema of the user profile
 */
Options.set('profileSchema', {
  name: {
    type: String,
    label: orion.helpers.getTranslation('accountsNameLabel'),
  },
  company_name: {
    type: String,
    label: orion.helpers.getTranslation('accountsCompanyNameLabel'),
  },
  mobile: {
    type: String,
    label: orion.helpers.getTranslation('accountsMobileLabel'),
  },
  phone: {
    type: String,
    label: orion.helpers.getTranslation('accountsPhoneLabel'),
    optional: true,
  },
  picture: orion.attribute('image', {
    label: orion.helpers.getTranslation('accountsPictureLabel'),
    optional: true,
  }),
  company_logo: orion.attribute('image', {
    label: orion.helpers.getTranslation('accountsLogoLabel'),
    optional: true,
  }),
});

//Options.set('adminHomeRoute', 'collections.events.index');
