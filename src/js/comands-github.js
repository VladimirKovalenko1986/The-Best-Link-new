import { comandsItems } from './items/comands-github-items';
import createRenderingItems from './function-rendering-Items';

UlEl.insertAdjacentHTML('beforeend', createRenderingItems(comandsItems));
