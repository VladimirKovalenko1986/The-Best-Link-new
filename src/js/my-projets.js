import { createRenderingItems } from './helpers/function-rendering-items';
import { refs } from './common/const';
import projectsItem from './items/my-projects-items.json';

createRenderingItems(projectsItem, refs.UlEl);
