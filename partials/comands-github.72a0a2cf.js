!function(t,e){const i=t.map((({nameText:t,text:e},i)=>`\n    <div class="wrapper-hero">\n            <li\n              class="hero-header__item hero-header__item--numbers"\n            >${i+1}</li>\n            <li class="hero-header__item hero-header__item--links color-text">${t}</li>\n            <li class="hero-header__item hero-header__item--texts">${e}</li>\n    </div>\n          `)).join("");e.insertAdjacentHTML("beforeend",i)}([{nameText:'git config --global user.name "Your Name"',text:'Встанови ім`я користувача наступною командою: Замість "Your Name" введи своє реальне ім`я або псевдонім, під яким хочеш з`являтися в історії комітів'},{nameText:'git config --global user.email "Your email"',text:'Встанови електронну пошту командою:: Замість "Your email" введи свою реальну електронну адресу'},{nameText:"git config --list",text:"Ти маєш побачити своє ім`я користувача та електронну пошту у списку налаштувань"},{nameText:"git clone https://посилання_на_репозиторій",text:"Клонуєте репозиторій"},{nameText:"git branch",text:"Знати на який гільці ти знаходишся"},{nameText:'git branch "назва-нової-гілки"',text:"Створює нову гілку і залишається на main"},{nameText:'git checkout -b "назва-нової-гілки" або git switch -c "назва-нової-гілки"',text:"Створює нову гілку і переходить на неї"},{nameText:'git checkout "назва-гілки" або git switch "назва-гілки"',text:"Перехід на гілку яку створив"},{nameText:"git add . потім git commit -m“назва-коміта”",text:"Записує зміни до локальної гілки"},{nameText:'git push origin -u "назва-вашої-гілки"',text:"Створює гілку на git hub і публікує зміни"},{nameText:"git push",text:"Публікує ваші зміни на гілку якщо гілка створена на git hub"},{nameText:"git stash",text:"Коли ви ще не робили git add, git commit i git push, ця команда ховає наш код по типу Ctrl X"},{nameText:'git stash save "назва коміту"',text:'Оскільки ти можеш мати декілька стешів, щоб уникнути плутанини, рекомендується додавати коментар при створенні нового стеша. Це можна зробити за допомогою опції save, наприклад, ось так: git stash save "my-comment"'},{nameText:"git stash list",text:"Кожен стек (збережені незавершені зміни) зберігається з унікальним ідентифікатором та описом, що дозволяє легко ідентифікувати відкладені зміни"},{nameText:"git stash pop",text:"Щоб застосувати найостанніші відкладені зміни і видалити їх із стеку"},{nameText:"git stash apply stash@{<number_stash>}",text:"Якщо ти хочеш застосувати певний stash без його видалення із стеку git stash apply stash@{56f4530}"},{nameText:"git stash drop stash@{<number_stash>}",text:"Щоб видалити конкретний stash із списку git stash drop stash@{56f4530}"},{nameText:"git stash clear",text:"Для видалення усіх збережених стеків змін, використовуй"},{nameText:"git stash apply",text:"Повернути ваш незакомічений код"},{nameText:"git pull",text:"Стягуємо на ту гілку на якій ви знаходитесь всі зміни"},{nameText:'git pull origin "назва-вашої-гілки"',text:'Це оновить вашу локальну копію "назва-вашої-гілки" гілки із віддаленого репозиторію і якщо була прийнята гілка її не трабо окремо видаляти локально вона оновиться як на github тобто сама видалится'},{nameText:"git fetch",text:'Так, виправдано. Команда git fetch оновлює локальну копію гілки main інколи вона називається "remote-tracking branch"), а також інші гілки, які ви стежите за ними, але не оновлює вашу поточну робочу гілку, таку як header. Вона завантажує всі зміни з віддаленого репозиторію, дозволяючи вам переглянути їх, але не зливає їх автоматично. Після цього ви можете вирішити, як обробити ці зміни, наприклад, злити їх у вашу поточну робочу гілку за допомогою git merge або git rebase.'},{nameText:'git merge "назва-гілки"',text:" Це робить тім лід - після того як перевірили код і одобрили в гильці (header) в який ми робили треба перейти на main і вести команду git merge header тоді все підтянется в main і після цього робимо git push з main і оновлюємо гілочку main на github"},{nameText:"git branch -d ‘назва-гілки’ або git branch -D ‘назва-гілки’",text:"Видалення у себе VScode гілки ‘назва-гілки’ але ми немаємо в ній знаходитись"},{nameText:'git push origin --delete "назва-гілки"',text:"Це робить тім лід - видалення гілки з github робимо в тому випадку тім лід не налаштував автомотичне видалення"},{nameText:"git merge --abort",text:'Відміняє злиття гілок в тому випадко якщо ти вже зробив git merge "назва-гілки" і в тебе вийшли конфлікти але ти не можеш сам їх виправити'},{nameText:"git diff",text:"Зміни які ви внесли в свій код після останнього коміта"},{nameText:"git log",text:"переглянути всю історію комітів"},{nameText:"git remote add origin SSH-URL",text:"Для прив`язки твого локального репозиторію до GitHub, де SSH-URL — це той шлях, що було скопійовано в попередньому кроці, наприклад:git remote add origin git@github.com:Nataliia-goit/remote_repository.git"},{nameText:"git remote set-url",text:"наприклад:git remote set-url origin git@github.com:Nataliia-goit/remote_repository.git Ця команда змінить SSH-URL на новий."},{nameText:"git rm --cached <file>",text:"Якщо ти хочеш, щоб зміни файлу my-passwords.txt ніколи не потрапляли до комітів і вилучити його з індексу назавжди, то це можна зробити за допомогою команди git rm --cached my-passwords.txt"},{nameText:"git reset <file>",text:"Однак, якщо ти хочеш зберегти зміни у файлі my-passwords.txt локально і просто вилучити його з поточного індексу, щоб він не потрапив до наступного коміту, ти можеш скористатися командою git reset my-passwords.txt"},{nameText:"git reset",text:"Якщо ж ти хочеш скинути стан індексу для всіх файлів до останнього коміту і скасувати всі зміни, які були додані до індексу (staging area), використовуй команду git reset без вказання файлу"},{nameText:"git commit --amend",text:'Це відкриє текстовий редактор з останнім повідомленням коміту, яке ти можеш відредагувати. Якщо ти хочеш залишити повідомлення без змін, просто збережи та закрий редактор. Якщо ж ти хочеш змінити повідомлення коміту, додай опцію -**m** з новим текстом повідомлення: git commit --amend -m "add a new task and item to shopping list" Опція --amend змінює історію комітів, створюючи новий коміт із новим хешем (ідентифікатором). Це може створити проблеми для спільної роботи, якщо змінений коміт уже був відправлений на віддалений репозиторій і ці зміни витягнув хтось інший. Тому опцію --amend варто використовувати тільки для локальних комітів, які ще не були відправлені до віддаленого репозиторію.'},{nameText:"git log -n <quantity>",text:"Кількість комітів Наприклад, ця команда покаже два останні коміти git log -n 2"},{nameText:"git log --since=<times_period>",text:"Наприклад ця команда покаже коміти, які були створені протягом останніх двох тижнів: git log --since=2.weeks"},{nameText:'git log --author="author name"',text:'Фільтрація за автором Наприклад ця команда покаже коміти, які було створені автором nataliia git log --author="nataliia"'}],{UlEl:document.getElementById("hero-list")}.UlEl);
//# sourceMappingURL=comands-github.72a0a2cf.js.map
