import { htmlCssItems } from './items/html-css-items';
import createRenderingItems from './function-rendering-items';

const UlEl = document.getElementById('hero-list');

UlEl.insertAdjacentHTML('beforeend', createRenderingItems(htmlCssItems));
