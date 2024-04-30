import type { IAnsi, RGB, color, color256, variant } from './type.js';

import { code } from './code.js';

let color: color;
let variant: variant;
let color_code: RGB | number;

export const Ansi: IAnsi = {

  b_bg_black( chars?: string ): string{

    color = 'black';
    variant = 'brightBackground';

    return render.call( this, chars );
  },

  b_bg_blue( chars?: string ): string{

    color = 'blue';
    variant = 'brightBackground';

    return render.call( this, chars );
  },

  b_bg_cyan( chars?: string ): string{

    color = 'cyan';
    variant = 'brightBackground';

    return render.call( this, chars );
  },

  b_bg_green( chars?: string ): string{

    color = 'green';
    variant = 'brightBackground';

    return render.call( this, chars );
  },

  b_bg_magenta( chars?: string ): string{

    color = 'magenta';
    variant = 'brightBackground';

    return render.call( this, chars );
  },

  b_bg_red( chars?: string ): string{

    color = 'red';
    variant = 'brightBackground';

    return render.call( this, chars );
  },

  b_bg_white( chars?: string ): string{

    color = 'white';
    variant = 'brightBackground';

    return render.call( this, chars );
  },

  b_bg_yellow( chars?: string ): string{

    color = 'yellow';
    variant = 'brightBackground';

    return render.call( this, chars );
  },

  b_black( chars?: string ): string{

    color = 'black';
    variant = 'brightForeground';

    return render.call( this, chars );
  },

  b_blue( chars?: string ): string{

    color = 'blue';
    variant = 'brightForeground';

    return render.call( this, chars );
  },

  b_cyan( chars?: string ): string{

    color = 'cyan';
    variant = 'brightForeground';

    return render.call( this, chars );
  },

  b_green( chars?: string ): string{

    color = 'green';
    variant = 'brightForeground';

    return render.call( this, chars );
  },

  b_magenta( chars?: string ): string{

    color = 'magenta';
    variant = 'brightForeground';

    return render.call( this, chars );
  },

  b_red( chars?: string ): string{

    color = 'red';
    variant = 'brightForeground';

    return render.call( this, chars );
  },

  b_white( chars?: string ): string{

    color = 'white';
    variant = 'brightForeground';

    return render.call( this, chars );
  },

  b_yellow( chars?: string ): string{

    color = 'yellow';
    variant = 'brightForeground';

    return render.call( this, chars );
  },

  bg_black( chars?: string ): string{

    color = 'black';
    variant = 'background';

    return render.call( this, chars );
  },

  bg_blue( chars?: string ): string{

    color = 'blue';
    variant = 'background';

    return render.call( this, chars );
  },

  bg_color256( code?: color256, chars?: string ){

    color = '256';
    variant = 'background';
    color_code = code || 0;

    return render.call( this, chars, 'color', 'background', code, '256' );
  },

  bg_cyan( chars?: string ): string{

    color = 'cyan';
    variant = 'background';

    return render.call( this, chars );
  },

  bg_green( chars?: string ): string{

    color = 'green';
    variant = 'background';

    return render.call( this, chars );
  },

  bg_magenta( chars?: string ): string{

    color = 'magenta';
    variant = 'background';

    return render.call( this, chars );
  },

  bg_red( chars?: string ): string{

    color = 'red';
    variant = 'background';

    return render.call( this, chars );
  },

  bg_rgb( code?: RGB, chars?: string ): string{

    color = 'rgb';
    variant = 'background';
    color_code = code || [ 0, 0, 0 ];

    return render.call( this, chars, 'rgb', 'background', code, 'RGB' );
  },

  bg_white( chars?: string ): string{

    color = 'white';
    variant = 'background';

    return render.call( this, chars );
  },

  bg_yellow( chars?: string ): string{

    color = 'yellow';
    variant = 'background';

    return render.call( this, chars );
  },

  black( chars?: string ): string{

    color = 'black';
    variant = 'foreground';

    return render.call( this, chars );
  },

  blue( chars?: string ): string{

    color = 'blue';
    variant = 'foreground';

    return render.call( this, chars );
  },

  color256( code?: color256, chars?: string ): string{

    color = '256';
    variant = 'foreground';
    color_code = code || 0;

    return render.call( this, chars );
  },

  cyan( chars?: string ): string{

    color = 'cyan';
    variant = 'foreground';

    return render.call( this, chars );
  },

  green( chars?: string ): string{

    color = 'green';
    variant = 'foreground';

    return render.call( this, chars );
  },

  magenta( chars?: string ): string{

    color = 'magenta';
    variant = 'foreground';

    return render.call( this, chars );
  },

  negative( chars?: string ): string{

    color = 'negative';
    variant = 'format';

    return render.call( this, chars, 'negative', 'code' );
  },

  red( chars?: string ): string{

    color = 'red';
    variant = 'foreground';

    return render.call( this, chars );
  },

  rgb( code?: RGB, chars?: string ): string{

    color = 'rgb';
    variant = 'foreground';
    color_code = code || [ 0, 0, 0 ];

    return render.call( this, chars, 'rgb', 'foreground', code, 'RGB' );
  },

  strong( chars?: string ): string{

    color = 'strong';
    variant = 'format';

    return render.call( this, chars, 'strong', 'code' );
  },

  underline( chars?: string ): string{

    color = 'underline';
    variant = 'format';

    return render.call( this, chars, 'underline', 'code' );
  },

  white( chars?: string ): string{

    color = 'white';
    variant = 'foreground';

    return render.call( this, chars );
  },

  yellow( chars?: string ): string{

    color = 'yellow';
    variant = 'foreground';

    return render.call( this, chars );
  }
};

function render( string: string ): string{

  let rendered = string || '';
  if( this.constructor.name === 'String' ){

    rendered = ! string ? this : `${this}${string}`;
  }

  let render_color: string;
  if( color_code ){

    if( Array.isArray( color_code ) ){

      const [ r, g, b ] = color_code;
      render_color = `${code.get( color ).get( variant )}${r};${g};${b}m`;
      color_code = undefined;
    }
    if( typeof color_code === 'number' ){

      render_color = `${code.get( color ).get( variant )}${color_code}m`;
      color_code = undefined;
    }
  }
  else{

    render_color = `${code.get( color ).get( variant )}`;
  }

  return `\x1b[${render_color}${ rendered }\x1b[0m`;
}
