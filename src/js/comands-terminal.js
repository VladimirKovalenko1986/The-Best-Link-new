import { comandsTerminalItems } from './items/comands-terminal-items';
import { createRenderingItemsGitComands } from './helpers/function-rendering-items';
import { refs } from './common/const';

createRenderingItemsGitComands(comandsTerminalItems, refs.UlEl);
