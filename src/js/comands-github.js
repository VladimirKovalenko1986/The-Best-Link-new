import { comandsItems } from './items/comands-github-items';
import createRenderingItems from './function-rendering-Items';

const UlEl = document.getElementById('hero-list');

UlEl.insertAdjacentHTML('beforeend', createRenderingItems(comandsItems));
