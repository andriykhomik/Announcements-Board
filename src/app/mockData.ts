export interface Announcement {
  id?: number;
  title: string;
  description: string;
  date: Date;
  isEdited: boolean;
  isOpen: boolean;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title:
      'Volodymyr Zelenskyy spoke with Ukrainian journalists creating the United News TV marathon',
    description:
      '"Now, during the war - terrible, tragic, but for Ukraine definitely victorious - you really are an army.' +
      ' A large, powerful army," the President said.',
    date: new Date(),
    isEdited: false,
    isOpen: false,
  },
  {
    id: 2,
    title: 'Zelensky: There are several ways to close sky over Ukraine',
    description:
      '"As for closing the sky, the answer is very simple. Sometimes it seems to me that some ' +
      'representatives of the Western world, when they sit in a cafe, will not believe that this ' +
      'will happen to them until a bomb lands in the very same cafe. Until then, no one will close the sky. ' +
      'I have this feeling, I do not want this for anyone, and we do not want it. We do not want the whole world, ' +
      'the whole of Europe to feel how it hurts us," President Volodymyr Zelensky said in an ' +
      'interview with foreign media, Ukrinform reports.',
    date: new Date(),
    isEdited: false,
    isOpen: false,
  },
  {
    id: 3,
    title: 'Ukraine war in maps: Tracking the Russian invasion',
    description:
      'Russia has continued to strike targets across Ukraine, despite saying it has shifted its ' +
      'focus to the east of the country.\n' +
      'Here are the latest developments on day 33 of the invasion:\n' +
      'Ukrainian President Volodymyr Zelensky says he is prepared to discuss adopting a neutral ' +
      'status as part of a peace deal\n' +
      'Ukrainian forces reclaimed some ground around Bovary to the east of the capital Kyiv\n' +
      'Northern city of Chernihiv has now been encircled by Russian forces, its mayor says\n' +
      'The besieged port city of Mariupol is "on the verge of a humanitarian catastrophe" according to the city\'s mayor',
    date: new Date(),
    isEdited: false,
    isOpen: false,
  },
  {
    id: 4,
    title: 'Ukrainians fight back around Kyiv ',
    description:
      'In Kyiv, Russia continues its unsuccessful attempts to encircle Kyiv, despite stating it was to refocus efforts in the east of the country.\n' +
      'The largest concentration of Russian ground forces remains around the capital, according to the Institute for the Study of War (ISW), but Ukrainian forces remain in control of large areas around the city, especially in the south.\n' +
      'In recent days, Ukraine has launched counter-attacks to the east and west of Kyiv and regained some territory that had been occupied by Russian troops.\n' +
      'The nearest Russian troops have advanced to the west of Kyiv is about 25km (15 miles) from the city centre, around the suburbs of Irpin and Bucha.\n' +
      'This means Russian artillery remains out of range of central Kyiv, but shelling of the outskirts continues to cause casualties and destroy homes and infrastructure - and the city is still vulnerable to Russian warplanes.',
    date: new Date(),
    isEdited: false,
    isOpen: false,
  },
  {
    id: 5,
    title: 'What is a war crime and could Putin be prosecuted over Ukraine?',
    description:
      'A former judge at the International Criminal Court has been asked by the UK to help Ukraine investigate potential war crimes by Russia.\n' +
      "Sir Howard Morrison's appointment comes as Russia stands accused of violating international law in its invasion of Ukraine.",
    date: new Date(),
    isEdited: false,
    isOpen: false,
  },
  {
    id: 6,
    title: 'War in Ukraine: Graphic protest by Russian artist Yevgenia Isayeva',
    description:
      'A Russian artist covered herself in fake blood and repeated the phrase “my heart bleeds” in a protest in St. Petersburg on Sunday.\n' +
      'Yevgenia Isayeva stood on the steps of the municipal assembly for the anti-war demonstration before police came and took her away.\n' +
      'She also put a canvas at her feet with an appeal to passers-by not to support the bloodshed in Ukraine.',
    date: new Date(),
    isEdited: false,
    isOpen: false,
  },
  {
    id: 7,
    title: 'Ukraine war: The drone pilots monitoring Russian troops',
    description:
      'Ukrainian volunteers have formed territorial defence groups to help their armed forces stop the Russian invasion.\n' +
      'Some of them work close to the front line.\n' +
      'The BBC’s Abdujalil Abdurasulov joined an aerial reconnaissance team during their field operation.',
    date: new Date(),
    isEdited: false,
    isOpen: false,
  },
  {
    id: 8,
    title: 'War in Ukraine: Vladimir Putin cannot remain in power - Biden',
    description:
      'A White House official has said the US president was not calling for a regime change, after ' +
      'his remarks at a speech in Poland. Joe Biden closed his speech by saying that Vladimir Putin ' +
      'could not "remain in power", which the White House says was making the point that Putin cannot ' +
      'be allowed to exercise power over his neighbours or the region.',
    date: new Date(),
    isEdited: false,
    isOpen: false,
  },
  {
    id: 9,
    title: 'Ukraine war is our war, say Brit ex-squaddies heading to Lviv',
    description:
      'The road to war for CJ, Elliott and Kieran ran through Facebook, a cheap flight to Poland, ' +
      'and a cold night sleeping outside a railway station.We meet the former British soldiers in Ukraine ' +
      'just outside a school, a couple of kilometres from the border with Poland. They are waiting for a minibus ' +
      "to transport them, along with other recruits, to Lviv.\"I just can't sit at home and watch what's " +
      'going on and carry on as usual," says CJ Darton, who served for seven years with the Royal Anglian Regiment.' +
      'When Russia invaded Ukraine in February, he almost immediately began making plans to volunteer.\n' +
      "\"If you're not fighting in someone else's street, does it end up in yours? Do my kids become a target? " +
      'Do my mates\' kids?"\n Between them, the three men have 19 years of experience in the British ' +
      'military, and all did tours in Afghanistan.',
    date: new Date(),
    isEdited: false,
    isOpen: false,
  },
  {
    id: 10,
    title:
      'Lviv, western Ukrainian city until now spared from Russian assault, rocked by powerful explosions',
    description:
      '(CNN)At least five people were reportedly injured Saturday after at least two missiles ' +
      "struck Lviv, a city in western Ukraine that had been previously spared the worst of Russia's brutal " +
      'onslaught, local officials said. One of the strikes hit a fuel storage facility, causing it to ' +
      'catch fire, and a later strike caused "significant damage" to the city\'s infrastructure facilities, ' +
      "according to the city's mayor, Andriy Sadovyi. Three powerful blasts were heard in the center of the " +
      'city earlier, and plumes of thick black smoke could be seen rising in the distance. Air raid sirens rang ' +
      'out prior to the explosions. Maksym Kozytsky, the head of the Lviv regional military administration, ' +
      'later on his Telegram account reported three more explosions following the strike on the fuel depot, ' +
      'saying, "The air alarm remains."',
    date: new Date(),
    isEdited: false,
    isOpen: false,
  },
];
