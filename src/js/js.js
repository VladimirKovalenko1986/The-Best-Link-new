import { jsItems } from './items/js-items';
import createRenderingItems from './helpers/function-rendering-items';
import { refs } from './common/const';

createRenderingItems(jsItems, refs.UlEl);
