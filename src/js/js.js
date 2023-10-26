import { jsItems } from './items/js-items';
import createRenderingItems from './function-rendering-items';

UlEl.insertAdjacentHTML('beforeend', createRenderingItems(jsItems));
