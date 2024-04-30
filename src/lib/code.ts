import type { ansi_codes, ansi_variant } from './type.js';

export const code: ansi_codes = new Map();

const black_properties: ansi_variant = new Map();
const blue_properties: ansi_variant = new Map();
const cyan_properties: ansi_variant = new Map();
const green_properties: ansi_variant = new Map();
const magenta_properties: ansi_variant = new Map();
const red_properties: ansi_variant = new Map();
const white_properties: ansi_variant = new Map();
const yellow_properties: ansi_variant = new Map();
// special colors and styles
const color256_properties: ansi_variant = new Map();
const rgb_properties: ansi_variant = new Map();
const negative_properties: ansi_variant = new Map();
const strong_properties: ansi_variant = new Map();
const underline_properties: ansi_variant = new Map();

black_properties.set( 'foreground', '30m' );
black_properties.set( 'brightForeground', '30;1m' );
black_properties.set( 'background', '40m' );
black_properties.set( 'brightBackground', '40;1m' );

blue_properties.set( 'foreground', '34m' );
blue_properties.set( 'brightForeground', '34;1m' );
blue_properties.set( 'background', '44m' );
blue_properties.set( 'brightBackground', '44;1m' );

cyan_properties.set( 'foreground', '36m' );
cyan_properties.set( 'brightForeground', '36;1m' );
cyan_properties.set( 'background', '46m' );
cyan_properties.set( 'brightBackground', '46;1m' );

green_properties.set( 'foreground', '32m' );
green_properties.set( 'brightForeground', '32;1m' );
green_properties.set( 'background', '42m' );
green_properties.set( 'brightBackground', '42;1m' );

magenta_properties.set( 'foreground', '35m' );
magenta_properties.set( 'brightForeground', '35;1m' );
magenta_properties.set( 'background', '45m' );
magenta_properties.set( 'brightBackground', '45;1m' );

red_properties.set( 'foreground', '31m' );
red_properties.set( 'brightForeground', '31;1m' );
red_properties.set( 'background', '41m' );
red_properties.set( 'brightBackground', '41;1m' );

white_properties.set( 'foreground', '37m' );
white_properties.set( 'brightForeground', '37;1m' );
white_properties.set( 'background', '47m' );
white_properties.set( 'brightBackground', '47;1m' );

yellow_properties.set( 'foreground', '33m' );
yellow_properties.set( 'brightForeground', '33;1m' );
yellow_properties.set( 'background', '43m' );
yellow_properties.set( 'brightBackground', '43;1m' );

// special colors and styles

color256_properties.set( 'foreground', '38;5;' );
color256_properties.set( 'background', '48;5;' );

rgb_properties.set( 'foreground', '38;2;' );
rgb_properties.set( 'background', '48;2;' );

negative_properties.set( 'format', '7m' );
strong_properties.set( 'format', '1m' );
underline_properties.set( 'format', '4m' );

code.set( 'black', black_properties );
code.set( 'blue', blue_properties );
code.set( 'cyan', cyan_properties );
code.set( 'green', green_properties );
code.set( 'magenta', magenta_properties );
code.set( 'red', red_properties );
code.set( 'white', white_properties );
code.set( 'yellow', yellow_properties );

// 256 | RGB colors

code.set( '256', color256_properties );
code.set( 'rgb', rgb_properties );

// formatting
code.set( 'negative', negative_properties );
code.set( 'strong', strong_properties );
code.set( 'underline', underline_properties );
