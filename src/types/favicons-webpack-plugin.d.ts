import { Plugin } from 'webpack';

declare class FaviconsWebpackPlugin extends Plugin {
  constructor(options: string | FaviconsWebpackPlugin.FaviconOptions);
}

declare namespace FaviconsWebpackPlugin {
  interface FaviconOptions {
    logo: string;
    prefix?: string;
    emitStats?: boolean;
    statsFilename?: string;
    persistentCache?: boolean;
    inject?: boolean;
    background?: string;
    icon?: IconOptions;
  }

  interface IconOptions {
    android?: boolean;
    appleIcon?: boolean;
    appleStartup?: boolean;
    coast?: boolean;
    favicons?: boolean;
    firefox?: boolean;
    opengraph?: boolean;
    twitter?: boolean;
    yandex?: boolean;
    windows?: boolean;
  }
}

export = FaviconsWebpackPlugin;
