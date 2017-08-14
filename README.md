## Tick Tick Tac Toe ##

## Wireframe ##
Here is my vision when the whole game is completed.



![img_5450](https://user-images.githubusercontent.com/29930126/29295517-d0602c16-8122-11e7-8128-473d5ead4bc8.jpeg)



## Installation

1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory.
1.  Empty [`README.md`](README.md) and fill with your own content.
1.  Replace all instances of `ga-wdi-boston.browser-template` with the name of your project.
1.  Move into the new project and `git init`.
1.  Install dependencies with `npm install`.

## Structure

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/index.js`](assets/scripts/index.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

Developers should set `config.apiOrigins.production` (and
`config.apiOrigins.development` if it differs from the default).  With
`apiOrigins` set, developers may rely on `config.apiOrigin` as the base for API
URLs.

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss).

Developers should use [getFormFields](forms.md) to retrieve form data to send to
an API.

To deploy a browser-template based SPA, run `grunt deploy`.



## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
