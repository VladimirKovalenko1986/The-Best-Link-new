import { codePenItems } from './items/code-pen-items';
import createRenderingItems from './helpers/function-rendering-items';
import { refs } from './common/const';

refs.UlEl.insertAdjacentHTML('beforeend', createRenderingItems(codePenItems));
