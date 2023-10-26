import { codePenItems } from './items/code-pen-items';
import createRenderingItems from './function-rendering-Items';

const UlEl = document.getElementById('hero-list');

UlEl.insertAdjacentHTML('beforeend', createRenderingItems(codePenItems));
