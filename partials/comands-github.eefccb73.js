!function(e,n){const i=e.map((({link:e,nameLink:n,textLink:i},t)=>`\n    <div class="wrapper-hero">\n            <li\n              class="hero-header__item hero-header__item--numbers"\n            >${t+1}</li>\n            <li class="hero-header__item hero-header__item--links">\n              <a\n                href="${e}"\n                target="_blank" \n                rel="noopener norefferer nofollow"\n                class="hero-header__link"\n                >${n}</a\n              >\n            </li>\n            <li class="hero-header__item hero-header__item--texts">\n              ${i}\n            </li>\n    </div>\n          `)).join("");n.insertAdjacentHTML("beforeend",i)}([{nameLink:"git stash",textLink:"Flex conteinerКоли ви ще не робили git add, git commit i git push, ця команда ховає наш код по типу Ctrl X"},{nameLink:"git checkout main",textLink:"Войти в main"},{nameLink:"git pull —rebase",textLink:"Войти в mainВзяти актуальний стан main собі в main"},{nameLink:"git checkout (назва вашої гілки)",textLink:"Забрати актуальальний стан мейну до себе на гілку"},{nameLink:"git stash apply",textLink:"Повернути ваш незакомічений код"},{nameLink:"git rebase main",textLink:"Забрати актуальальний стан мейну до себе на гілку"},{nameLink:"git clone https://посилання_на_репозиторій",textLink:"Клонуєте репозиторій"},{nameLink:"git checkout ‘назва-гілки",textLink:"Перехід на гілку ‘назва-гілки"},{nameLink:"git pull origin ‘назва-гілки",textLink:"Стягує останні зміни гілки ‘назва-гілки"},{nameLink:"git checkout -b ‘назва-нової-гілки",textLink:"Створює нову гілку"},{nameLink:"git add . та git commit -m “назва-коміта”",textLink:"Записує зміни до локальної гілки"},{nameLink:"git push origin ‘назва-вашої-гілки’",textLink:"Публікує ваші зміни на гілці"},{nameLink:"git merge ‘назва-гілки’",textLink:"Залиття коду з гілки ‘назва-гілки’ на поточну гілку"},{nameLink:"git branch -D ‘назва-гілки’",textLink:"Видалення гілки ‘назва-гілки’"},{nameLink:"git fetch",textLink:"Стягує всі зміни з віддаленого репозиторію"},{nameLink:'git push origin --delet "назва-гілки"',textLink:"Видалення гілки з github"}],{UlEl:document.getElementById("hero-list")}.UlEl);
//# sourceMappingURL=comands-github.eefccb73.js.map