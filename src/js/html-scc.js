import { htmlCssItems } from './items/html-css-items';
import createRenderingItems from './helpers/function-rendering-items';
import { refs } from './common/const';

refs.UlEl.insertAdjacentHTML('beforeend', createRenderingItems(htmlCssItems));
