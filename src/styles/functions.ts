/* eslint-disable no-bitwise */
export function textEllipsis(line: string){
  return (
    `display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;`
  );
}

export function circle(size: string){
  return (`
    display: inline-flex;
    width: ${size};
    height: ${size};
    border-radius: 50%;
  `);
}

export function percentage(size: string, col: number){
  return (`
    width: calc((${size} * 12) / ${col});
  `);
}

export function scrollbarVertical(width: string, color: string, bg: string){
  return (`
    &::-webkit-scrollbar-track{
      border-radius: calc(${width} / 2);
      background-color: ${bg};
    }

    &::-webkit-scrollbar{
      width: ${width};
      background-color: ${bg};
    }

    &::-webkit-scrollbar-thumb{
      border-radius: calc(${width} / 2);
      background-color: ${color};
    }
  `);
}

export function colorLighten(color: string, amount: number){
  console.log('color', color);
  let usePound = false;
  let inputColot = color;
  if (inputColot[0] === '#'){
    inputColot = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);

  let r = (num >> 16) + amount;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amount;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000FF) + amount;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}
