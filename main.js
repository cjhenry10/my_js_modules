import { responsive } from './modules/top_nav_s.mjs';

responsive();

import sheet from './modules/top_nav_s.css' assert { type: 'css' };

document.adoptedStyleSheets = [sheet];