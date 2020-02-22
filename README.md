# GridstackAngular

This project gridstackjs[https://gridstackjs.com/] wrapper for angular applications.

# Installation

## Install Dependencies

```shell
- npm i gridstack
- npm i jquery
- npm i jquery-ui-dist
- npm i --save-dev @types/gridstack
- npm i jquery-ui-touch-punch ( Optional, if you want mobile support )
```

## Configure angular.json File
```shell
"styles": [
  ...
  "node_modules/gridstack/dist/gridstack.css",
  ...
],
"scripts": [
  ...
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/jquery-ui-dist/jquery-ui.js",
  "node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.js", ( Optional, if you want mobile support )
  "node_modules/gridstack/dist/gridstack.js",
  "node_modules/gridstack/dist/gridstack.jQueryUI.js"
  ...
]
```
