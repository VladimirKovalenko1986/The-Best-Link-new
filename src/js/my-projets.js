import { myProjectsItems } from './items/my-projects-items';
import createRenderingItems from './helpers/function-rendering-items';
import { refs } from './common/const';

refs.UlEl.insertAdjacentHTML(
  'beforeend',
  createRenderingItems(myProjectsItems)
);
