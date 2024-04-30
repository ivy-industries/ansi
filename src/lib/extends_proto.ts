import type { RGB, color256 } from './type.js';

import { Ansi } from './ansi.js';

declare global {
  interface String {
    b_bg_black( chars?: string ): string;
    b_bg_blue( chars?: string ): string;
    b_bg_cyan( chars?: string ): string;
    b_bg_green( chars?: string ): string;
    b_bg_magenta( chars?: string ): string;
    b_bg_red( chars?: string ): string;
    b_bg_white( chars?: string ): string;
    b_bg_yellow( chars?: string ): string;
    b_black( chars?: string ): string;
    b_blue( chars?: string ): string;
    b_cyan( chars?: string ): string;
    b_green( chars?: string ): string;
    b_magenta( chars?: string ): string;
    b_red( chars?: string ): string;
    b_white( chars?: string ): string;
    b_yellow( chars?: string ): string;
    bg_black( chars?: string ): string;
    bg_blue( chars?: string ): string;
    bg_color256( code?: color256, chars?: string ): string;
    bg_cyan( chars?: string ): string;
    bg_green( chars?: string ): string;
    bg_magenta( chars?: string ): string;
    bg_red( chars?: string ): string;
    bg_rgb( code?: RGB, chars?: string ): string;
    bg_white( chars?: string ): string;
    bg_yellow( chars?: string ): string;
    black( chars?: string ): string;
    blue( chars?: string ): string;
    color256( code?: color256, chars?: string ): string;
    cyan( chars?: string ): string;
    green( chars?: string ): string;
    magenta( chars?: string ): string;
    negative( chars?: string ): string;
    red( chars?: string ): string;
    rgb( code?: RGB, chars?: string ): string;
    strong( chars?: string ): string;
    underline( chars?: string ): string;
    white( chars?: string ): string;
    yellow( chars?: string ): string;
  }
}

/**
 * <u>Extends the String prototype by adding ANSI formatting methods.</u>
 *
 * - ⚠️ It is bad practice to extend the prototype of native objects, btw.
 */
export function extends_proto(): void{

  for ( const [ name, func ] of Object.entries( Ansi ) ) {
    String.prototype[ name ] = func;
  }
}

/**
 * **Removes the ANSI formatting methods from the String prototype.**
 * - ⚠️ It is bad practice to extend the prototype of native objects, btw.
 * - you can use this method to remove the extended methods from the String prototype after using them.
 */
export function un_extends_proto(): void{

  for ( const [ name, _func ] of Object.entries( Ansi ) ) {
    delete String.prototype[ name ];
  }
}

extends_proto();
