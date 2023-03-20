import { jsItems } from './items/js-items';

const UlEl = document.getElementById('hero-list');

function creatyElHtmlCss(jsItems) {
  return jsItems
    .map(({ link, nameLink, textLink, number }) => {
      return `
    <div class="wrapper-hero">
            <li
              class="hero-header__item hero-header__item--numbers"
            >${number}</li>
            <li class="hero-header__item hero-header__item--links">
              <a
                href="${link}"
                target="_blank" 
                rel="noopener norefferer nofollow"
                class="hero-header__link"
                >${nameLink}</a
              >
            </li>
            <li class="hero-header__item hero-header__item--texts">
              ${textLink}
            </li>
    </div>
          `;
    })
    .join('');
}

UlEl.insertAdjacentHTML('beforeend', creatyElHtmlCss(jsItems));
