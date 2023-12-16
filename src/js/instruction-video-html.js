import { instructionVideoHtml } from './items/instruction-video-HTML-items';
import createRenderingItems from './helpers/function-rendering-items';
import { refs } from './common/const';

refs.UlEl.insertAdjacentHTML(
  'beforeend',
  createRenderingItems(instructionVideoHtml)
);
