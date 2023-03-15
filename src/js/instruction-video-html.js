import { instructionVideoHtml } from './items/instruction-video-HTML-items';

const UlEl = document.getElementById('hero-list');

function creatyElHtmlCss(instructionVideoHtml) {
  return instructionVideoHtml
    .map(({ link, nameLink, textLink, number }) => {
      return `
    <div class="wrapper-hero">
            <li
              class="hero-header__item hero-header__item--numbers"
            >${number}</li>
            <li class="hero-header__item hero-header__item--links">
              <a
                href="${link}"
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

UlEl.insertAdjacentHTML('beforeend', creatyElHtmlCss(instructionVideoHtml));
