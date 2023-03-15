import { comandsItems } from './items/comands-github-items';

const UlEl = document.getElementById('hero-list');

function creatyElHtmlCss(comandsItems) {
  return comandsItems
    .map(({ nameLink, textLink, number }) => {
      return `
    <div class="wrapper-hero">
            <li
              class="hero-header__item hero-header__item--numbers"
            >${number}</li>
            <li class="hero-header__item hero-header__item--links">
            ${nameLink}
            </li>
            <li class="hero-header__item hero-header__item--texts">
              ${textLink}
            </li>
    </div>
          `;
    })
    .join('');
}

UlEl.insertAdjacentHTML('beforeend', creatyElHtmlCss(comandsItems));
