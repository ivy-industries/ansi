# @ivyrun/ansi

___

###### shell text color and style. esModule.

___

# Index of Contents

___

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)

___

# Description

___

Yet another ansi colour for Node.js shell applications.

- default it doens't extends the String class.
  - ...btw you can do it. `extends_proto()`
  - ...btw you can redo it. `un_extends_proto()`
- ansi 8 color foreground and backgorund
  - `red()` `bg_red()`
  - `green()` `bg_green()`
  - `blue()` `bg_blue()`
  - `magenta()` `bg_magenta()`
  - `cyan()` `bg_cyan()`
  - `black()` `bg_black()`
  - `yellow()` `bg_yellow()`
  - `white()` `bg_white()`
  - `black()` `bg_black()`
- ansi 8 bright-color foreground and backgorund
  - `b_red()` `b_bg_red()`
  - `b_green()` `b_bg_green()`
  - `b_blue()` `b_bg_blue()`
  - `b_magenta()` `b_bg_magenta()`
  - `b_cyan()` `b_bg_cyan()`
  - `b_black()` `b_bg_black()`
  - `b_yellow()` `b_bg_yellow()`
  - `b_white()` `b_bg_white()`
  - `b_black()` `b_bg_black()`
- 3 styles
  - `underline()`
  - `bold()`
  - `negative()`

- 4 extra colouring methods
  - `color256(color: number)`  256 color range for foregorund [0-255].
  - `bg_color256(color:number)` 256 color range for background [0-255].
  - `rgb(color: [number, number, number])` rgb color range for foreground [[0-255], [0-255], [0-255]]
  - `bg_rgb(color: [number, number, number])` rgb color range for background [[0-255], [0-255], [0-255]]

___

# Installation

___


```shell
npm install @ivyrun/ansi
```

___

# Usage

- no overload of the String class.

```js

import { Ansi } from '@ivyrun/ansi';

console.log(Ansi.red('Hello World'));


```

- ...btw you can do it.

```js

import { extends_proto } from '@ivyrun/ansi';
// after the imports run the extends_proto() function
entends_proto();

console.log( 'Hello World'.red() );


```

- ...btw you can redo it.

```js

import { extends_proto, un_extends_proto } from '@ivyrun/ansi';
// after the imports run the extends_proto() function
entends_proto();

console.log( 'Hello World'.red() );

// after run extends_proto() function no more extends the String class.
un_extends_proto();

// it will throw TypeError
console.log( 'Hello World'.red() );


```

- using color256 method for 256 color. `[0-255]`.

```js

import { extends_proto } from '@ivyrun/ansi';
extends_proto();

console.log('Hello World'.color256(155));
console.log( 'Hello World'.bg_color256(155) );


```

- using rgb method for RGB spectrum. `[[0-255], [0-255], [0-255]]`.

```js

import { extends_proto } from '@ivyrun/ansi';
extends_proto();

console.log('Hello Wolrd'.rgb([4,64,254]));
console.log( 'Hello World'.bg_rgb([4,64,254]) );


```

___

# Consider Donating or Supporting.

___



___
