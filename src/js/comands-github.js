import { comandsItems } from './items/comands-github-items';
import { createRenderingItemsGitComands } from './helpers/function-rendering-items';
import { refs } from './common/const';

createRenderingItemsGitComands(comandsItems, refs.UlEl);
