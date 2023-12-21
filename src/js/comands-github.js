import { comandsItems } from './items/comands-github-items';
import createRenderingItems from './helpers/function-rendering-items';
import { refs } from './common/const';

createRenderingItems(comandsItems, refs.UlEl);
