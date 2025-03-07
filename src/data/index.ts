export const linksData = {
  authClear: '',
  authSubSeason: '',
  authSubMounthly: '',
  mapLink: '',
};

export const navData = [
  {
    id: 1,
    name: 'О проекте',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Подписка',
    url: '/#subs',
  },
  {
    id: 3,
    name: 'Карта сервера',
    url: '/#map',
  },
  {
    id: 4,
    name: 'Ответы на вопросы',
    url: '/#faq',
  },
];

export const subData = [
  {
    id: 1,
    period: 'сезон',
    price: 'Бесплатновое',
    fetureList: [
      'Подписка действительна до конца  сезона',
      'Уникальная роль в дискорде',
      'Доступ к закртым тестовым серверам',
    ],
    url: linksData.authSubSeason,
    image: '/images/sniffer.webp',
    bg: 'var(--bg-gradient-season)',
  },
  {
    id: 2,
    period: 'месяц',
    price: 'Бесплатновое',
    fetureList: [
      'Подписка действительна до конца месяца',
      'Уникальная роль в дискорде',
      'Доступ к общим серверам',
    ],
    url: linksData.authSubMounthly,
    image: '/images/cow.webp',
    bg: 'var(--bg-gradient-mounth)',
  },
];

export const socialsData = [
  {
    id: 1,
    name: 'Discord',
    icon: '/icons/ds.svg',
    url: 'link_here',
  },
  {
    id: 2,
    name: 'Telegram',
    icon: '/icons/tg.svg',
    url: 'link_here',
  },
  {
    id: 3,
    name: 'ВКонтакте',
    icon: '/icons/vk.svg',
    url: 'link_here',
  },
  {
    id: 4,
    name: 'YouTube',
    icon: '/icons/yt.svg',
    url: 'link_here',
  },
];

export const sliderData = [
  {
    id: 1,
    icon: '/icons/icon_advantages.svg',
    title: 'Мы - один из первых приватных Minecraft серверов',
    description:
      'На нашем счету 5 прекраснейших сезонов, где каждый последующий лучше предыдущего как с технической части, так и с креативной, благодаря нашим любимым игрокам!',
    images: [
      '/images/a1.webp',
      '/images/a2.webp',
      '/images/a3.webp',
      '/images/a4.webp',
      '/images/a5.webp',
      '/images/a6.webp',
    ],
  },
  {
    id: 2,
    icon: '/icons/icon_comunity.svg',
    title: 'Мы - не просто сервер, мы - больше чем сообщество',
    description:
      'Наш дружный сервер позволит вам познакомиться с уникальными людьми и всегда быть в центре событий. Наши первые игроки по сей день продолжают вместе общаться, играть и создавать.',
    images: [
      '/images/c1.webp',
      '/images/c2.webp',
      '/images/c3.webp',
      '/images/c4.webp',
      '/images/c5.webp',
      '/images/c6.webp',
      '/images/c7.webp',
      '/images/c8.webp',
    ],
  },
];

export const infoData = [
  {
    id: 1,
    icon: '/icons/icon_quest.svg',
    title: 'Система квестов ',
    subtitle:
      'Цепочка сюжетных квестов, которая не даст заскучать',
    text: [
      'На острове вас встретят <strong>персонажи</strong>, которые помогут познакомиться с <strong>особенностями сервера</strong>. Вы <strong>узнаете тайны острова</strong> и узнаете его интересных жителей и их истории. ',
      'За выполнение квестов вы получите <strong>уникальные предметы</strong>, которые сможете использовать в дальнейшей игре.Один из таких предметов: <strong>Книга рецептов алкоголя</strong>.',
      'В будущем вас ждут <strong>новые сюжетные ивенты</strong>, в которых вы с другими игроками сможете принять участие, выполняя различные <strong>квесты</strong>, за которые вы будете награждены <strong>уникальными предметами</strong>. ',
    ],
    image: '/images/quests.webp',
  },
  {
    id: 2,
    icon: '/icons/icon_portals.svg',
    title: 'Разделение миров',
    subtitle: 'Мы разделили миры для распределения нагрузки',
    text: [
      'Существует три основных мира: <strong>хаб, мир построек</strong> и <strong>мир ферм</strong> которые соединены между собой особыми порталами.',
      '<strong>Центральным</strong>, как можно понять, является <strong>хаб</strong>, откуда вы начинаете свое путешествие и используете для перемещения между двумя другими.',
      '<strong>Ад у миров разделён</strong>, а <strong>энд является общим</strong>. Для того, чтобы попасть в ад - <strong>просто постройте портал</strong> в мире, в ад которого хотите попасть. А <strong>вот как попасть в энд...</strong> Это вы узнаете чуть позже :3',
    ],
    image: '/images/quests.webp',
  },
];

export const faqData = [
  {
    id: 1,
    question: 'Я могу поиграть с пиратки?',
    answer:
      'У нас существует 2 вида подписки: <strong>на месяц</strong> и <strong>на сезон</strong>. Во время оплаты вы вводите ник вашего Minecraft аккаунта и дискорд, на который придет тикет. После выполнения всех вышеперечисленных действий вы получите доступ на сервер.',
  },
  {
    id: 2,
    question: 'Как работает подписка?',
    answer:
      'У нас существует 2 вида подписки: <strong>на месяц</strong> и <strong>на сезон</strong>. Во время оплаты вы вводите ник вашего Minecraft аккаунта и дискорд, на который придет тикет. После выполнения всех вышеперечисленных действий вы получите доступ на сервер.',
  },
  {
    id: 3,
    question: 'Могу ли я приобрести подписку пока сезон идет?',
    answer:
      'У нас существует 2 вида подписки: <strong>на месяц</strong> и <strong>на сезон</strong>. Во время оплаты вы вводите ник вашего Minecraft аккаунта и дискорд, на который придет тикет. После выполнения всех вышеперечисленных действий вы получите доступ на сервер.',
  },
  {
    id: 4,
    question: 'Правда что TvoyYoy гей?',
    answer:
      'Нет. Кирилл является базированным слоненком, умничкой и вообще, если вы сюда нажали, то знайте, что ваш ip-адресс был передан в резиденцию Чечни.',
  },
  {
    id: 5,
    question: 'Можно сломать спавн?',
    answer:
      'У нас существует 2 вида подписки: <strong>на месяц</strong> и <strong>на сезон</strong>. Во время оплаты вы вводите ник вашего Minecraft аккаунта и дискорд, на который придет тикет. После выполнения всех вышеперечисленных действий вы получите доступ на сервер.',
  },
  {
    id: 6,
    question: 'Я устал придумывать вопросы, можно отдохну?',
    answer:
      'У нас существует 2 вида подписки: <strong>на месяц</strong> и <strong>на сезон</strong>. Во время оплаты вы вводите ник вашего Minecraft аккаунта и дискорд, на который придет тикет. После выполнения всех вышеперечисленных действий вы получите доступ на сервер.',
  },
  {
    id: 7,
    question:
      'Если я хочу стать самым главным на сервере, можно ли мне подкупать своих апонентов за реальную валюту?',
    answer:
      '<strong>Конечно!</strong> Но для начала напишите <a href="https://twitch.tv/tvoyyoy">админу</a> свой ник :^) ',
  },
];
