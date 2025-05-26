// tailwind.config.mjs

import presetViivue from './dist_tail/index.js';
import config from './theme.config.json' assert { type: 'json' };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [
    presetViivue(config),
  ],
};
