import { myProjectsItems } from './items/my-projects-items';
import createRenderingItems from './function-rendering-items';

const UlEl = document.getElementById('hero-list');

UlEl.insertAdjacentHTML('beforeend', createRenderingItems(myProjectsItems));
