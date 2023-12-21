import { myProjectsItems } from './items/my-projects-items';
import createRenderingItems from './helpers/function-rendering-items';
import { refs } from './common/const';

createRenderingItems(myProjectsItems, refs.UlEl);
