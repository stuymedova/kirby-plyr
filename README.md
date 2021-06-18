# Kirby Plyr

Kirby CMS + [Plyr](https://github.com/sampotts/plyr) video player (HTML5/YouTube/Vimeo). Uses [kirby-embed](https://github.com/sylvainjule/kirby-embed) plugin.

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

npm install
npm run watch/build

valet link # for valet users, otherwise an alternative
```
2. Go to Panel `{url}/panel/pages/home` and enter video URL

## Result

Site:
<img width="1552" alt="kirby-plyr" src="https://user-images.githubusercontent.com/53351370/122305771-0679bd00-cf10-11eb-963d-fb9bc6a59047.png">

Panel:
<img width="1552" alt="kirby-plyr-panel" src="https://user-images.githubusercontent.com/53351370/122542846-d1668b00-d033-11eb-8e7b-a0dd24d634e9.png">
