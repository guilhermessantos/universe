# Universe

Display and organize the design system of your project, providing consultation for the frontend and design.

## Table of contents

- [Quick start](#quick-start)
- [Example configuration](#example-configuration)
- [Information](#information)
- [Configuration](#configuration)
  - [fontFamily](#fontFamily)
  - [fontSize](#fontSize)
  - [themes](#themes)
  - [colors](#colors)
  - [grid](#grid)
  - [spacings](#spacings)
  - [layers](#layers)
  - [responsive](#responsive)
  - [utils](#utils)
- [Thanks](#thanks)
- [License](#license)

## Quick start

### Install

#### Using npm

```bash
npm install universe
```

#### Usign yarn

```
yarn add universe
```

### Create configuration file

You need to create the `universe.config.js` file in project root usign the follow configuration as an example

#### Example configuration

```js
module.exports = {
  name: "Project X",
  fontFamily: {
    primary: "Arial"
  },
  fontSize: {
    small: "15px";
  },
  themes: [
    {
      name: "cerise",
      colors: {
        base: "#d93f87",
        medium: "#af2867",
        dark: "#84194b"
      }
    },
  ]
}
```

# Information

| Key        | Type     | Default | Description                                                           |
| ---------- | -------- | ------- | --------------------------------------------------------------------- |
| name       | `string` |         | show project name                                                     |
| hero       | `bool`   | `true`  | shows highlighted section                                             |
| fontFamily | `object` | `{}`    | displays font families                                                |
| fontSize   | `object` | `{}`    | displays font sizes                                                   |
| themes     | `array`  | `[]`    | displays themes                                                       |
| colors     | `object` | `{}`    | displays colors                                                       |
| grid       | `object` | `{}`    | displays the settings of a grid, such as `columns`,` margin`, `width` |
| spacings   | `object` | `{}`    | displays spacing such as `padding`,` margin`                          |
| layers     | `object` | `{}`    | specifies the stack order of an element                               |
| responsive | `object` | `{}`    | displays breakpoints                                                  |
| utils      | `object` | `{}`    | displays customized data, using key value                             |

## Configuration

### fontFamily

- Only `string` is accepted in value.

```js
fontFamily: {
  title: 'Arial',
  subTitle: 'Roboto',
  text: 'Tahoma'
}
```

### fontSize

- Only `string` is accepted in value.
- Use one of measurement unit, ex: `px`, `rem`, `em`.

```js
fontSize: {
  small: '10px',
  medium: '16px'
}
```

### themes

- Theme `name` is required.
- Only valid `hexadecimal` colors are accepted.

```js
themes: [
  {
    name: 'cerise',
    colors: {
      base: '#d93f87',
      medium: '#af2867',
      dark: '#84194b'
    }
  }
]
```

### Colors

- Only valid `hexadecimal` colors are accepted.

```js
colors: {
  background: "#ffffff",
  line: "#D9D9D9",
  link: "#D93F87",
}
```

### grid

- Only `string` is accepted in value

```js
grid: {
  size: "1200px",
  gutter: "32px",
  columns: "12"
}
```

### spacings

- Only `string` is accepted in value

```js
spacings: {
  small: "8px",
  medium: "16px",
}
```

### layers

- Only `string` is accepted in value

```js
layers: {
  base: "10",
  menu: "20",
}
```

### responsive

- Only `string` is accepted in value

```js
responsive: {
  small: "320px",
  medium: "768px",
  large: "1200px"
}
```

### utils

- If there is no `title` the object `key` will be used
- `text` is optional
- `data` is a required object and need to be `key`: `value`

```js
utils: {
  example: {
    title: 'example title',
    text: 'example description'
    data: {
      small: 'example1'
      medium: 'example2'
    }
  }
}
```

## Commands

- `yarn universe` - create server
- `yarn universe build` - create project build

## Thanks

Special thanks to [@guilouro](http://github.com/guilouro) for feedbacks and contributions

## Licence

[License](https://github.com/guilhermessantos/universe/blob/master/LICENSE)
