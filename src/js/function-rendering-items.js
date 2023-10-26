export default function createRenderingItems(arr) {
  return arr
    .map(({ link, nameLink, textLink }, index) => {
      return `
    <div class="wrapper-hero">
            <li
              class="hero-header__item hero-header__item--numbers"
            >${index + 1}</li>
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
