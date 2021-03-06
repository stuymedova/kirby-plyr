# Kirby Plyr

Kirby CMS + [Plyr](https://github.com/sampotts/plyr) video player (HTML5/YouTube/Vimeo). Uses the [kirby-embed](https://github.com/sylvainjule/kirby-embed) plugin.

## Overview

```
.
├── site
│   ├── blueprints
│   │   └── pages
│   │       └── home.yml
│   ├── plugins
│   │   └── embed
│   └── templates
│       └── home.php
├── src
│   ├── js
│   │   └── main.js
│   └── scss
│       ├── main.scss
│       └── plyr
│           └── plyr-custom.scss
└── rollup.config.js
```

## Prerequisites

- [PHP](https://www.php.net) and [Composer](https://getcomposer.org)
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)

## Setup

1. Run in terminal:
```shell
composer install
valet link # for valet users, otherwise an alternative

npm install
npm run watch # or npm run build
```
2. Go to `{url}/panel` and create a new Panel user
3. Then go to `{url}/panel/pages/home`, enter video URL and hit "Save"

## Result

Site:
<img width="1552" alt="kirby-plyr" src="https://user-images.githubusercontent.com/53351370/122305771-0679bd00-cf10-11eb-963d-fb9bc6a59047.png">

Panel:
<img width="1552" alt="kirby-plyr-panel" src="https://user-images.githubusercontent.com/53351370/122542846-d1668b00-d033-11eb-8e7b-a0dd24d634e9.png">
