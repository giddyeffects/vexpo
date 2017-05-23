Virtual Expo/Events

[GiddyEffects](http://www.giddyeffects.com)

## <a name="installation"></a> Installation

1. Clone this repo to `<yourapp>`

  `git clone https://github.com/giddyeffects/vexpo.git <yourapp>`

2. Remove `.git`

  `cd <yourapp> && rm -rf .git`

3. Configure your Settings in your Meteor app:
  1. Create a `settings.json` file that **won't be in source control** with the following contents:

  ```js
  {
    
  }
  ```
  2. Edit keys as required.

4. Now you can run or deploy your copy of Virtual Expo/Events with the `--settings path/to/settings.json` option.