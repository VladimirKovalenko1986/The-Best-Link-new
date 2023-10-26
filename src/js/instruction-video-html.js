import { instructionVideoHtml } from './items/instruction-video-HTML-items';
import createRenderingItems from './function-rendering-items';

UlEl.insertAdjacentHTML(
  'beforeend',
  createRenderingItems(instructionVideoHtml)
);
