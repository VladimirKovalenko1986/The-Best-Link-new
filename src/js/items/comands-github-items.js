export const comandsItems = [
  {
    nameText: 'git config --global user.name "Your Name"',
    text: 'Встанови ім`я користувача наступною командою: Замість "Your Name" введи своє реальне ім`я або псевдонім, під яким хочеш з`являтися в історії комітів.',
  },

  {
    nameText: 'git config --global user.name "Your Name"',
    text: 'Встанови ім`я користувача наступною командою: Замість "Your Name" введи своє реальне ім`я або псевдонім, під яким хочеш з`являтися в історії комітів.',
  },

  {
    nameText: 'git clone https://посилання_на_репозиторій',
    text: 'Клонуєте репозиторій',
  },
  {
    nameText: 'git branch',
    text: 'Знати на який гільці ти знаходишся',
  },

  {
    nameText: 'git branch "назва-нової-гілки"',
    text: 'Створює нову гілку і залишається на main',
  },

  {
    nameText:
      'git checkout -b "назва-нової-гілки" або git switch -c "назва-нової-гілки"',
    text: 'Створює нову гілку і переходить на неї',
  },

  {
    nameText: 'git checkout "назва-гілки" або git switch "назва-гілки"',
    text: 'Перехід на гілку ‘назва-гілки',
  },

  {
    nameText: 'git add . та git commit -m“назва-коміта”',
    text: 'Записує зміни до локальної гілки',
  },

  {
    nameText: 'git push origin -u ‘назва-вашої-гілки’',
    text: 'Створює гілку на git hub і публікує зміни',
  },

  {
    nameText: 'git push',
    text: 'Публікує ваші зміни на гілку яка створена якщо гілка створена на git hub',
  },

  {
    nameText: 'git stash',
    text: 'Коли ви ще не робили git add, git commit i git push, ця команда ховає наш код по типу Ctrl X',
  },

  {
    nameText: 'git stash apply',
    text: 'Повернути ваш незакомічений код',
  },

  {
    nameText: 'git pull',
    text: 'Стягуємо на ту гылку на якій ви знаходитесь всі зміни і  гілки наприклад з github в нас була гілка header а на github ще гілку футер то в нас зявится гілка footer на яку ми зможемо пеерйти і ця команда стягує всі зміни',
  },

  {
    nameText: 'git pull origin main',
    text: 'Це оновить вашу локальну копію main гілки із віддаленого репозиторію. і якщо була прийнята гілка її не трабо оремо видаляти локально вона оновиться як на github',
  },

  {
    nameText: 'git merge "назва-гілки"',
    text: 'Після того як перевірили код і одобрили в гильці (header) в який ми робили треба перейти на main і вести команду git merge header тоді все підтянется в main і після цього робимо git push з main і оновлюємо гілочку main на github',
  },

  {
    nameText: 'git branch -d ‘назва-гілки’ або git branch -D ‘назва-гілки’',
    text: 'Видалення у себе VScode гілки ‘назва-гілки’ але ми немаємо в ній знаходитись',
  },
  {
    nameText: 'git push origin --delete "назва-гілки"',
    text: 'Видалення гілки з github робимо в тому випадку тім лід не налаштував автомотичне видалення',
  },

  {
    nameText: 'git merge --abort',
    text: 'Відміняє злиття гілок в тому випадко якщо ти вже зробив git merge "назва-гілки" і в тебе вийшли конфлікти але ти не можеш сам їх виправити',
  },

  {
    nameText: 'git diff',
    text: 'Зміни які ви внесли в свій код після останнього коміта',
  },

  {
    nameText: 'git log',
    text: 'переглянути всю історію комітів',
  },
];
