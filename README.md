# Kirby Plyr

Kirby CMS + [Plyr](https://github.com/sampotts/plyr) video player (HTML5/YouTube/Vimeo)

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

Run in terminal:
```shell
composer install

npm install
npm run watch/build

valet link # for valet users, otherwise an alternative
```

## Result

<img width="1552" alt="kirby-plyr" src="https://user-images.githubusercontent.com/53351370/122305771-0679bd00-cf10-11eb-963d-fb9bc6a59047.png">
