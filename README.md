### Package is no longer maintaned.

# @ox2/select
![NPM version](https://img.shields.io/badge/npm-private-orange.svg?style=flat)
<!-- ![NPM version](https://img.shields.io/npm/v/@ox2/select.svg?style=flat) -->

Wrapper components of `react-select` package.

## Features

* **Premade types** Have premade styled types for quick usage.
* **Images and Icons** Premade `type` to support image and icon select items.
* **Colors** Premade `type` to support colored text or label `select items

## Installation
Install using [npm](http://npmjs.com):
```sh
npm install @ox2/select --save
```
Install using [yarn](http://yarnpkg.com):
```sh
yarn add @ox2/select
```

## Usage
```js
import Select from '@ox2/select/Select';

const handleUpdate = (value) => console.log('👾👾', value);

<Select
  options={myItems}
  onUpdate={handleUpdate}
/>

```

## Change Log
Changes are tracked in the [CHANGELOG.md](https://github.com/ox2/select/blob/master/CHANGELOG.md)

## License
[MIT](https://github.com/ox2/select/blob/master/LICENSE)


