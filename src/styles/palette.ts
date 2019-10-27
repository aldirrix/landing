import { Palette } from '../types/info';

enum PalletteOption {
  blue = 'green',
  green = 'green',
  pink = 'pink',
  purple = 'purple',
}

const palettes = {
  blue: {
    strong: '#293462',
    light: '#d7e3ec',
    deep: '#2f416d',
    contrast: '#757575',
  },
  pink: {
    strong: '#e91e63',
    light: '#f8bbd0',
    deep: '#c2185b',
    contrast: '#767676',
  },
  green: {
    strong: '#14868c',
    light: '#d3ebd5',
    deep: '#57a99a',
    contrast: '#747474',
  },
  purple: {
    strong: '#6d0c74',
    light: '#d2d0fe',
    deep: '#7f78d2',
    contrast: '#727272',
  },
  default: {
    strong: '#293462',
    light: '#d7e3ec',
    deep: '#2f416d',
    contrast: '#757575',
  },
};

export const getPalette = (palette: PalletteOption | undefined): Palette => {
  const paletteChoice = palette || 'default';

  return palettes[paletteChoice];
};
