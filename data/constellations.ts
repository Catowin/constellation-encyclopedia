import { generatedStars } from "./generated-stars";

export interface Star {
  name: string;
  top: string;
  left: string;
  size: number;
}

export type Lang = "uk" | "en";

export interface LocalizedText {
  uk: string;
  en?: string;
}

export interface ConstellationData {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  name: LocalizedText | string | any;
  skyX: number;
  skyY: number;
  stars: Star[];
  lines?: [number, number][];
  viewBox?: [number, number, number, number];
  description: LocalizedText;
  legend: LocalizedText;
  howToFind: LocalizedText;
  image: string;
}

// Хелпер: повертає текст для поточної мови, fallback на uk
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function t(field: LocalizedText | string | any, lang: Lang): string {
  if (typeof field === "string") return field;
  if (!field) return "";
  return field[lang] ?? field.uk ?? "";
}

export const constellations: ConstellationData[] = [

{
  id: "ursa-major",
  name: {
    uk: "Велика Ведмедиця",
    en: "Great Bear",
  },
  skyX: 0,
  skyY: 0,
  description: {
    uk: "Велика Ведмедиця — третє за площею сузір'я серед 88 сучасних і одне з найвідоміших на нічному небі. Сім її найяскравіших зір утворюють знаменитий Великий Ківш, що протягом тисячоліть допомагав знаходити Полярну зірку та визначати північ. Для українських чумаків Великий Ківш (або «Візок», як його ще називали) був головним нічним компасом у довгих переходах степами. У межах сузір'я розташовані галактики М81 і М82, що можна побачити в невеликий аматорський телескоп.",
    en: "Ursa Major is the third-largest constellation in the modern sky and one of the most recognizable. Its seven brightest stars form the famous Big Dipper, an asterism that has helped travelers and navigators locate the North Star for centuries. The constellation also contains numerous galaxies, including Messier 81 and Messier 82, both visible through a small telescope.",
  },
  legend: {
    uk: "У давньогрецькій міфології Велика Ведмедиця уособлює німфу Каллісто, яку покохав Зевс. Ревнива Гера перетворила Каллісто на ведмедицю, а Зевс підняв її на небо, щоб урятувати від загибелі. Поруч він розмістив і її сина Аркаса, який став сузір'ям Малої Ведмедиці.",
    en: "In Greek mythology, Ursa Major represents Callisto, a nymph transformed into a bear by the jealous Hera. Zeus later placed her among the stars, where she remains forever alongside her son, represented by Ursa Minor.",
  },
  howToFind: {
    uk: "Спочатку знайдіть Великий Ківш — сім яскравих зір, добре помітних майже цілий рік. Проведіть уявну лінію через Дубхе та Мерак і продовжте її приблизно вп'ятеро — вона приведе до Полярної зірки. Завдяки цьому Велика Ведмедиця є одним із найкращих орієнтирів на небі.",
    en: "Look for the Big Dipper, the distinctive group of seven bright stars. Draw an imaginary line through Merak and Dubhe and extend it about five times to reach Polaris. This makes Ursa Major one of the easiest constellations to use for navigation.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ursa_Major_constellation_map.svg/640px-Ursa_Major_constellation_map.svg.png",
  stars: (generatedStars["ursa-major"]?.stars ?? []),
  lines: generatedStars["ursa-major"]?.lines,
},

{
  id: "ursa-minor",
  name: {
    uk: "Мала Ведмедиця",
    en: "Little Bear",
  },
  skyX: 0,
  skyY: 0,
  description: {
    uk: "Мала Ведмедиця — 56-те за площею сузір'я, але одне з найважливіших на небі: саме тут розташована Полярна зірка (Поларіс), яка майже точно вказує на північ. Сім найяскравіших зір утворюють Малий Ківш. Поларіс є жовто-білим надгігантом і найвідомішою навігаційною зіркою в історії: завдяки її нерухомому положенню на небі моряки та мандрівники орієнтувалися протягом тисячоліть. Варто знати: Полярна зірка не найяскравіша на небі — вона лише 48-ма за яскравістю, але незамінна через своє положення строго на північ.",
    en: "Ursa Minor ranks 56th in size among the modern constellations, yet holds one of the most important stars in the sky: Polaris, the North Star. Its seven brightest stars form the Little Dipper. Polaris, a yellow-white supergiant roughly 432 light-years away, sits nearly motionless above the North Pole, making it humanity's most reliable navigational reference for thousands of years. Worth noting: Polaris is not the brightest star in the sky — it ranks only 48th — but its fixed position due north makes it irreplaceable.",
  },
  legend: {
    uk: "У грецькій міфології Мала Ведмедиця уособлює Аркаса — сина Каллісто та Зевса. Мисливець мало не вбив власну матір, не впізнавши її в образі ведмедиці (Велика Ведмедиця), але Зевс втрутився і підняв обох на небо. За іншою версією, сузір'я символізує одну з німф, яка доглядала за немовлям Зевсом на Криті.",
    en: "In Greek mythology, Ursa Minor represents Arcas, son of Callisto and Zeus, who nearly killed his own mother in her bear form before Zeus swept them both into the sky. An older tradition identifies the constellation with Ida, the nymph who nursed the infant Zeus on the island of Crete.",
  },
  howToFind: {
    uk: "Знайдіть Великий Ківш у Великій Ведмедиці та проведіть уявну лінію через дві крайні зірки його «ковша» — Дубхе та Мерак — вгору приблизно на п'ятикратну відстань між ними. Ця лінія приведе прямо до Полярної зірки, яка є кінцем руків'я Малого Ковша. Сузір'я видно цілий рік у Північній півкулі.",
    en: "Use the Big Dipper as a guide: draw an imaginary line through its outer bowl stars, Merak and Dubhe, and extend it about five times that distance to reach Polaris — the tip of the Little Dipper's handle. Once you find Polaris, the rest of Ursa Minor fans out from it. The constellation is circumpolar and visible year-round from the Northern Hemisphere.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ursa_Minor_constellation_map.svg/640px-Ursa_Minor_constellation_map.svg.png",
  stars: (generatedStars["ursa-minor"]?.stars ?? []),
  lines: generatedStars["ursa-minor"]?.lines,
},

{
  id: "orion",
  name: {
    uk: "Оріон",
    en: "Orion",
  },
  skyX: 0,
  skyY: 0,
  description: {
    uk: "Оріон — одне з найвпізнаваніших і найяскравіших сузір'їв неба. Три зірки Пояса Оріона утворюють ідеально рівний ряд, навколо якого розташовані яскравий червоний надгігант Бетельгейзе (плече мисливця) та синювато-білий Рігель (його нога). У межах сузір'я знаходиться знаменита туманність Оріона (M42) — одна з найяскравіших областей зореутворення, видима навіть неозброєним оком. Оріон домінує в зимовому небі і є відправною точкою для пошуку інших сузір'їв. В Україні Пояс Оріона здавна знали як «Три Коси» або «Три Царі».",
    en: "Orion is one of the most recognizable and spectacular constellations in the sky. Three stars of Orion's Belt form a perfectly straight line flanked by red supergiant Betelgeuse at the hunter's shoulder and blue-white Rigel at his foot. Within the constellation lies the Great Orion Nebula (M42), one of the brightest star-forming regions visible to the naked eye. Orion dominates the winter sky and serves as an anchor for navigating to neighboring constellations.",
  },
  legend: {
    uk: "У давньогрецькій міфології Оріон — велетень-мисливець, син Посейдона, наділений даром ходити по воді. Він похвалявся, що може вбити будь-яку звірину на Землі. За однією версією, ображена богиня Гея послала Скорпіона, який і вжалив Оріона — саме тому два сузір'я завжди перебувають на протилежних боках неба і ніколи не видні одночасно: щойно Скорпіон сходить, Оріон іде за горизонт.",
    en: "In Greek mythology, Orion was a giant hunter, son of Poseidon, who boasted he could kill every beast on Earth. The Earth goddess Gaia sent a scorpion to humble him, and Zeus immortalized both in the sky — but placed them on opposite sides, so when Scorpius rises, Orion sets, ensuring the hunter and his nemesis never meet again.",
  },
  howToFind: {
    uk: "Шукайте три яскраві зірки, вишикувані в рівний ряд — це Пояс Оріона (Альнітак, Альнілам, Мінтака). Вони видні неозброєним оком навіть у місті. Ліворуч і вище від пояса — червонуватий Бетельгейзе, праворуч і нижче — яскравий Рігель. Нижче пояса можна знайти Меч Оріона з туманністю M42. Оріон найкраще спостерігається у грудні та лютому.",
    en: "Look for the three evenly spaced stars of Orion's Belt — Alnitak, Alnilam, and Mintaka — which form an unmistakable straight line visible even from light-polluted skies. Above and left of the Belt glows reddish Betelgeuse; below and right shines brilliant Rigel. Below the Belt, look for the faint smudge of the Orion Nebula. Orion is best seen December through February.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Orion_constellation_map.svg/640px-Orion_constellation_map.svg.png",
  stars: (generatedStars["orion"]?.stars ?? []),
  lines: generatedStars["orion"]?.lines,
},

{
  id: "cassiopeia",
  name: {
    uk: "Кассіопея",
    en: "Cassiopeia",
  },
  skyX: 0,
  skyY: 0,
  description: {
    uk: "Кассіопея — легко впізнаване приполярне сузір'я у формі букви W або M, залежно від часу ночі й пори року. П'ять яскравих зір утворюють цей характерний зигзаг, помітний цілий рік у Північній півкулі. Сузір'я лежить просто в площині Чумацького Шляху, тому рясніє зоряними скупченнями й туманностями. У 1572 році тут спалахнула наднова, яку детально описав Тихо Браге: вона стала поворотним моментом в астрономії, довівши, що «нерухоме» небо може змінюватися. З будь-якої точки України Кассіопея ніколи не заходить за горизонт.",
    en: "Cassiopeia is an unmistakable circumpolar constellation whose five bright stars trace the shape of a W or M, rotating around Polaris throughout the year. It lies along the plane of the Milky Way and is rich in star clusters and nebulae. In 1572 a supernova blazed here, observed in detail by Tycho Brahe, and helped overturn the ancient idea of an unchanging sky.",
  },
  legend: {
    uk: "У давньогрецькій міфології Кассіопея — цариця Ефіопії, дружина царя Цефея та мати Андромеди. Вражена власною красою, вона похвалилася, що перевершує красою морських німф-нереїд. Розгніваний Посейдон покарав гордовиту царицю: умістив її на небо прикованою до трону, приреченою вічно оберталася навколо Полярної зірки — і половину часу висіти вниз головою.",
    en: "In Greek mythology, Cassiopeia was queen of Aethiopia, wife of King Cepheus and mother of Andromeda. Her fatal flaw was vanity: she boasted that she and her daughter surpassed the sea-nymphs in beauty, enraging Poseidon. As punishment, she was placed in the sky chained to her throne, doomed to spin endlessly around the North Star — spending half the year upside down.",
  },
  howToFind: {
    uk: "Знайдіть Полярну зірку, а потім огляньте небо по інший бік від Великого Ковша — там і є Кассіопея у формі W або M. Як приполярне сузір'я, вона ніколи не заходить за горизонт у помірних широтах Північної півкулі та добре видна цілий рік, особливо восени та взимку. Яскраві зірки W легко помітні навіть у місті.",
    en: "Find Polaris, then look to the opposite side from the Big Dipper — Cassiopeia's W-shape will be there. As a circumpolar constellation, it never sets below the horizon at mid-northern latitudes and is visible year-round. It is especially well-placed in autumn and early winter evenings, when it rides high in the northern sky.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Cassiopeia_constellation_map.svg/640px-Cassiopeia_constellation_map.svg.png",
  stars: (generatedStars["cassiopeia"]?.stars ?? []),
  lines: generatedStars["cassiopeia"]?.lines,
},

{
  id: "leo",
  name: {
    uk: "Лев",
    en: "Leo",
  },
  skyX: 0,
  skyY: 0,
  description: {
    uk: "Лев — одне з найвиразніших зодіакальних сузір'їв весняного неба, що справді нагадує лежачого лева. Шість зір утворюють характерний «Серп» — зворотний знак питання, що позначає голову й гриву звіра. В основі цього Серпа сяє Регул — «маленький цар», 22-га за яскравістю зірка всього неба, синювато-біла, розташована за 77 світлових років від нас. Хвіст лева позначає Денебола. У межах сузір'я розкидана ціла колонія яскравих галактик: Тріо Лева (M65, M66, NGC 3628) — популярна ціль для любителів астрономії.",
    en: "Leo is one of the most striking zodiac constellations of the spring sky, genuinely resembling a crouching lion. Six stars form the Sickle — a backward question mark outlining the lion's head and mane — anchored by Regulus, the 'little king,' a blue-white star 77 light-years away and the 22nd brightest in the sky. Denebola marks the lion's tail. The constellation also hosts the Leo Triplet (M65, M66, NGC 3628), a favourite target for amateur astronomers.",
  },
  legend: {
    uk: "У давньогрецькій міфології Лев уособлює Немейського лева — невразливого хижака, шкіра якого не піддавалася жодній зброї. Він тероризував жителів Немеї, поки Геракл не переміг його у першому зі своїх дванадцяти подвигів, задушивши голіруч. Зевс підняв звіра на небо, щоб увіковічнити і перемогу сина, і нездоланну силу самого лева.",
    en: "Leo represents the Nemean Lion of Greek mythology — a fearsome beast whose hide was impervious to all weapons. Heracles slew it with his bare hands as the first of his twelve labors, stripping its pelt with the lion's own claws and wearing it as armour. Zeus placed the lion among the stars to commemorate both the hero's triumph and the creature's extraordinary power.",
  },
  howToFind: {
    uk: "Знайдіть Великий Ківш і спрямуйте погляд вниз від дна його «ковша» (зірок Мегрец і Фекда) — ця уявна лінія приведе до Регула, найяскравішої зірки Лева. Від Регула вгору розгортається дуга зірок Серпа — зворотний знак питання. Лев найкраще видно у квітні та травні на висоті в південній частині неба.",
    en: "Use the Big Dipper: draw a line from the bowl stars Megrez and Phecda downward, and it points directly to Regulus. From Regulus, trace the arc of the Sickle upward — the backward question mark that forms the lion's head. A triangle of stars to the east completes the lion's body, ending with Denebola at the tail. Leo is best seen in April and May in the southern evening sky.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Leo_constellation_map.svg/640px-Leo_constellation_map.svg.png",
  stars: (generatedStars["leo"]?.stars ?? []),
  lines: generatedStars["leo"]?.lines,
},

{
  id: "scorpius",
  name: {
    uk: "Скорпіон",
    en: "Scorpius",
  },
  skyX: 0,
  skyY: 0,
  description: {
    uk: "Скорпіон — одне з небагатьох сузір'їв, що справді нагадують своє зображення: вигнутий ланцюжок зір відтворює тіло та жало скорпіона. Серце цього ланцюжка — Антарес, яскраво-червоний надгігант із діаметром у понад 700 разів більшим за сонячний. Назва Антарес означає «суперник Ареса (Марса)» — за колір, схожий на червону планету. Сузір'я лежить у найгустішій частині Чумацького Шляху і містить кілька яскравих скупчень: M6 та M7. З України Скорпіон видно низько над горизонтом — його краще спостерігати десь у степу або в Криму, де обрій відкритий на південь.",
    en: "Scorpius is one of the few constellations that genuinely resembles its namesake: a curving chain of stars traces the scorpion's body and upturned stinger. Its heart is Antares, a red supergiant with a diameter over 700 times that of the Sun — its name means 'rival of Ares (Mars)' for its fiery colour. The constellation lies in the richest part of the Milky Way and includes two spectacular open clusters: M6 (the Butterfly Cluster) and M7 (Ptolemy's Cluster).",
  },
  legend: {
    uk: "У давньогрецькій міфології Скорпіон — той самий, якого богиня Артеміда (або богиня Землі Гея) послала, щоб убити хвалькуватого мисливця Оріона. Після смерті обох їх підняли на небо, але розмістили на протилежних кінцях неба — тому Оріон заходить щойно Скорпіон сходить, і вони ніколи не зустрічаються.",
    en: "In Greek mythology, Scorpius is the scorpion sent by Artemis (or Gaia) to slay the boastful hunter Orion. Both were immortalised in the sky, but placed on opposite sides of the celestial sphere — when Scorpius rises in summer, Orion retreats below the horizon, ensuring the eternal enemies never share the sky.",
  },
  howToFind: {
    uk: "Скорпіон — виразне літнє сузір'я південної частини неба. Шукайте яскраво-червонувату зірку Антарес: вона добре помітна низько над південним горизонтом у липні та серпні. Від Антареса вгору і вниз простягається характерний вигнутий ланцюжок. З широт України сузір'я ніколи не піднімається високо, тому краще спостерігати його в ясну ніч з відкритим горизонтом на півдні.",
    en: "Scorpius is a summer constellation best seen in July and August low in the southern sky. Look for bright, reddish Antares — it is hard to miss once you know its ruddy colour. The curved chain of stars stretches up and down from Antares, tracing the scorpion's body. From mid-northern latitudes it never rises high, so find an unobstructed southern horizon on a clear night for the best view.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Scorpius_constellation_map.svg/640px-Scorpius_constellation_map.svg.png",
  stars: (generatedStars["scorpius"]?.stars ?? []),
  lines: generatedStars["scorpius"]?.lines,
},

{
  id: "lyra",
  name: {
    uk: "Ліра",
    en: "Lyra",
  },
  skyX: 0,
  skyY: 0,
  description: {
    uk: "Ліра — невелике, але дуже яскраве сузір'я літнього неба. Його головна зірка — Вега, п'ята за яскравістю зірка всього неба і одна з вершин знаменитого Літнього Трикутника разом із Денебом (Лебідь) і Альтаїром (Орел). У межах сузір'я знаходиться Кільцева туманність (M57) — одна з найвідоміших планетарних туманностей у вигляді кільця газу навколо вмираючої зірки, видима в невеликий телескоп. Цікавий факт: приблизно 14 000 років тому Вега, а не Поларіс, була Полярною зіркою.",
    en: "Lyra is a small but dazzling summer constellation. Its brightest star, Vega, ranks fifth in the entire sky and forms one corner of the famous Summer Triangle along with Deneb in Cygnus and Altair in Aquila. Within Lyra lies the Ring Nebula (M57), one of the sky's best-known planetary nebulae — a shell of glowing gas puffed out by a dying star, visible through a small telescope. Around 14,000 years ago Vega, not Polaris, was Earth's North Star.",
  },
  legend: {
    uk: "У давньогрецькій міфології Ліра належала Орфею — найвеличнішому з музикантів, чия гра зачаровувала людей, звірів і навіть богів підземного царства. Коли він спустився до Аїду, щоб повернути кохану Еврідіку, музика Ліри зворушила самого Аїда. Після трагічної загибелі Орфея боги підняли його Ліру на небо як вічний символ мистецтва та краси музики.",
    en: "In Greek mythology, the Lyre belonged to Orpheus, the greatest musician of antiquity, whose playing could charm animals, trees, and even the gods of the underworld. When he descended to Hades to reclaim his lost wife Eurydice, his music moved even the pitiless ruler of the dead. After Orpheus was killed, the gods placed his lyre among the stars as an eternal tribute to the power of music.",
  },
  howToFind: {
    uk: "Знайдіть Вегу — одну з найяскравіших зірок літнього неба, що горить майже в зеніті в серпні. Разом із Денебом і Альтаїром вона утворює великий Літній Трикутник. Від Веги легко знайти решту зір Ліри: невеличкий паралелограм безпосередньо «під» нею. Ліра найкраще видна з травня по листопад.",
    en: "Find Vega first — one of the brightest stars in the summer sky, blazing nearly overhead in August from mid-northern latitudes. Together with Deneb and Altair it forms the large Summer Triangle. Just below Vega look for a small parallelogram of stars: those are the main stars of Lyra. The constellation is best seen May through November.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Lyra_constellation_map.svg/640px-Lyra_constellation_map.svg.png",
  stars: (generatedStars["lyra"]?.stars ?? []),
  lines: generatedStars["lyra"]?.lines,
},

{
  id: "cygnus",
  name: {
    uk: "Лебідь",
    en: "Cygnus",
  },
  skyX: 0,
  skyY: 0,
  description: {
    uk: "Лебідь — велике і яскраве сузір'я, що ширяє прямо по Чумацькому Шляху. Його головні зірки утворюють добре помітний Північний Хрест. Найяскравіша зірка — Денеб, блакитно-білий надгігант, що сяє з відстані понад 2600 світлових років і є одним із найсвітліших зорів у галактиці. Альбірео (Beta Cygni) — улюблена подвійна зірка аматорів: у телескоп вона розпадається на золоту та синю компоненти. Сузір'я також відоме туманностями Вуаль та Північ Америка, а також місцем розташування першої підтвердженої чорної діри — Лебідь X-1.",
    en: "Cygnus is a large, brilliant constellation sweeping through the heart of the Milky Way, its main stars forming the unmistakable Northern Cross. Its brightest star, Deneb, a blue-white supergiant over 2,600 light-years away, is one of the most luminous stars in the galaxy. Albireo (Beta Cygni), the swan's beak, splits through a telescope into a stunning gold-and-blue double. The constellation also hosts the Veil and North America Nebulae, and Cygnus X-1, the first object widely confirmed to be a black hole.",
  },
  legend: {
    uk: "Із Лебедем пов'язано кілька давньогрецьких міфів. Найвідоміший: Зевс перетворився на лебедя, щоб зблизитися із спартанською царицею Ледою — від цього союзу народились близнюки Кастор і Поллукс (сузір'я Близнюків) та Єлена Троянська. За іншою легендою, Лебідь уособлює Кікна — скорботного друга Фаетона, який нирнув у річку, щоб зібрати останки загиблого товариша, і боги із жалю перетворили його на птаха.",
    en: "Cygnus carries several Greek myths. In the most famous, Zeus disguised himself as a swan to woo the Spartan queen Leda, whose offspring included the twins Castor and Pollux and the fabled Helen of Troy. Another legend identifies the Swan with Cycnus, a devoted friend of Phaethon, who dove repeatedly into a river to recover his fallen companion's body — moved by his grief, the gods transformed him into a swan and set him among the stars.",
  },
  howToFind: {
    uk: "Знайдіть яскравий Денеб — він утворює вершину Літнього Трикутника разом із Вегою (Ліра) та Альтаїром (Орел). Від Денеба вниз простягається довга лінія зір до Альбірео — це «тіло» лебедя. Перпендикулярно до неї розкидані зірки «крил». Весь цей хрест добре видно без телескопа з червня по грудень. Лебідь лежить прямо вздовж Чумацького Шляху — в темну ніч за ним видно яскраву смугу галактики.",
    en: "Find Deneb first — it forms the northeastern corner of the Summer Triangle alongside Vega and Altair. From Deneb, trace a line of stars downward to Albireo (the swan's beak): that is the body and neck of the swan. Stars branching perpendicularly to either side form the wings. The full cross-shape is easy to spot with the naked eye from June through December. Cygnus flies along the Milky Way, so on a dark night the galactic band glows behind it.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cygnus_constellation_map.svg/640px-Cygnus_constellation_map.svg.png",
  stars: (generatedStars["cygnus"]?.stars ?? []),
  lines: generatedStars["cygnus"]?.lines,
},

{
  id: "aquila",
  name: {
    uk: "Орел",
    en: "Aquila",
  },
  skyX: 0,
  skyY: 0,
  description: {
    uk: "Орел — сузір'я, що лежить прямо на небесному екваторі, в площині Чумацького Шляху. Його яскравий Альтаїр (12-та за яскравістю зірка всього неба) розташований лише за 17 світлових років від нас — один із найближчих яскравих сусідів Сонця. Альтаїр обертається з неймовірною швидкістю (286 км/с), через що сплющений біля полюсів, мов гарбуз. Разом із Вегою і Денебом він утворює знаменитий Літній Трикутник. Сузір'я однаково добре видно як із України, так і з країн Південної півкулі.",
    en: "Aquila sits on the celestial equator and along the plane of the Milky Way. Its brightest star, Altair, ranks 12th in the whole sky and lies only 17 light-years from the Sun, making it one of our nearest bright neighbours. Altair spins so fast (286 km/s) that it is noticeably flattened at its poles. Together with Vega and Deneb it forms the prominent Summer Triangle asterism visible across both hemispheres in summer.",
  },
  legend: {
    uk: "У давньогрецькій традиції Орел — вірний птах Зевса, носій його блискавок. За одним із міфів, саме Орел відніс прекрасного юнака Ганімеда на Олімп, де той став виночерпієм богів (Ганімед уособлений сузір'ям Водолія). За іншою версією, Орел охороняв стрілу Ероса, яка вразила Зевса й змусила його закохатись. Зевс підняв птаха на небо на знак вдячності.",
    en: "In Greek mythology, Aquila was Zeus's faithful eagle, keeper of his thunderbolts. In one famous tale the god sent the eagle to carry the beautiful Trojan youth Ganymede up to Olympus to serve as cup-bearer to the gods. As a reward for its loyal service, Zeus placed the eagle among the stars.",
  },
  howToFind: {
    uk: "Шукайте Альтаїр — яскраву зірку в нижній вершині Літнього Трикутника: він сходить першим і підіймається найнижче з трьох зірок Трикутника. Характерна ознака: по обидва боки від Альтаїра є дві більш тьмяні зірки (Альшаїн і Таразед) — разом вони нагадують три кульки на нитці. Від них легко простежити «крила» Орла. Сузір'я найкраще видно з липня по жовтень.",
    en: "Locate Altair — the lowest and first-rising star of the Summer Triangle. A helpful trick: two fainter stars flank Altair on either side (Alshain and Tarazed), giving the impression of three beads on a string. From this line, trace out the eagle's wings extending to either side. Aquila is best seen July through October from both hemispheres.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Aquila_constellation_map.svg/640px-Aquila_constellation_map.svg.png",
  stars: (generatedStars["aquila"]?.stars ?? []),
  lines: generatedStars["aquila"]?.lines,
},

{
  id: "gemini",
  name: {
    uk: "Близнюки",
    en: "Gemini",
  },
  skyX: 0,
  skyY: 0,
  description: {
    uk: "Близнюки — зодіакальне сузір'я, кероване двома яскравими зірками: Кастором і Поллуксом, що символізують братів-близнюків. Поллукс є найяскравішою зіркою сузір'я — жовтогарячий гігант із підтвердженою планетою на орбіті. Кастор більш вражаючий астрономічно: він являє собою систему з шести зір. Від голів близнюків донизу тягнуться паралельні ланцюжки зір, що нагадують дві фігури, які тримаються за руки. У грудні та січні тут відбувається один із найбагатших метеорних потоків — Гемініди (до 100 метеорів на годину).",
    en: "Gemini is a zodiac constellation dominated by two bright stars: Castor and Pollux, representing the mythological twin brothers. Pollux (magnitude 1.14) is the constellation's brightest star — an orange giant with a confirmed orbiting planet. Castor is actually a system of six stars. In December and January Gemini hosts the Geminids, one of the richest annual meteor showers, producing up to 100 meteors per hour.",
  },
  legend: {
    uk: "За давньогрецьким міфом, Кастор і Поллукс — брати-близнюки, народжені царицею Спарти Ледою. Кастор був смертним сином царя Тіндарея, а Поллукс — безсмертним сином Зевса. Разом вони плавали з Ясоном за Золотим руном. Коли смертний Кастор загинув у бою, безсмертний Поллукс благав Зевса поділити з ним вічне життя. Зевс розмістив їх на небі разом, щоб брати більше не розлучалися.",
    en: "In Greek mythology, Castor and Pollux were twin brothers born to the Spartan queen Leda. Castor was mortal, son of king Tyndareus, while Pollux was immortal, sired by Zeus. Together they sailed with Jason and the Argonauts. When mortal Castor was killed in battle, immortal Pollux begged Zeus to share his immortality. Moved by their brotherhood, Zeus placed them both among the stars so they would never be parted again.",
  },
  howToFind: {
    uk: "Від Пояса Оріона проведіть уявну лінію через Бетельгейзе і продовжте її вгору — вона приведе до двох яскравих зірок, що стоять поряд: це Поллукс (правіший і яскравіший, злегка жовтуватий) і Кастор (лівіший і трохи тьмяніший, білуватий). Від їхніх «голів» донизу в бік Оріона тягнуться дві паралельні смуги зір — «тіла» близнюків. Близнюки найкраще видно в грудні та березні.",
    en: "Draw an imaginary line from Orion's Belt through Betelgeuse and continue upward — it leads straight to two prominent stars standing close together. The slightly brighter, more orange-hued one is Pollux; the slightly dimmer, whiter one is Castor. From their heads, trace two parallel lines of stars angling down toward Orion: those are the twins' bodies. Gemini is best seen December through March.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Gemini_constellation_map.svg/640px-Gemini_constellation_map.svg.png",
  stars: (generatedStars["gemini"]?.stars ?? []),
  lines: generatedStars["gemini"]?.lines,
},

// ── Наступні 10 сузір'їв з повними описами ──────────────────────────────

{
  id: "andromeda",
  name: {
    uk: "Андромеда",
    en: "Andromeda",
  },
  skyX: -30,
  skyY: -25,
  description: {
    uk: "Андромеда відома насамперед завдяки галактиці M31 — нашій найближчій сусідній спіральній галактиці, яку видно неозброєним оком навіть в умовах помірного засвічення неба. Відстань до неї — понад 2,5 мільйона світлових років, але вона все одно видна як тьмяна пляма у темну ніч, що робить її найдальшим об'єктом, доступним людському оку без приладів. Галактика Андромеди більша за наш Чумацький Шлях і рухається назустріч нам: через 4,5 мільярда років вони зіллються воєдино. Сузір'я видно з вересня по грудень.",
    en: "Andromeda is famous above all for the Andromeda Galaxy (M31) — our closest major galactic neighbour, visible to the naked eye on a dark night as a faint smudge more than 2.5 million light-years away, making it the most distant object a human can see without any instrument. The Andromeda Galaxy is larger than our own Milky Way and is approaching us at 110 km/s; in around 4.5 billion years the two galaxies will merge. The constellation is best seen September through December.",
  },
  legend: {
    uk: "В давньогрецькій міфології Андромеда — ефіопська принцеса, донька гордовитої цариці Кассіопеї та царя Цефея. Через хвалькуватість матері її прикували до скелі як жертву морському чудовиську Кеті. Герой Персей, летячи повз на крилатих сандалях із головою Медузи Горгони, помітив Андромеду й урятував її, перетворивши чудовисько на камінь. Усі учасники цієї драми стали сузір'ями — Кассіопея, Цефей, Персей, Андромеда й Кит.",
    en: "In Greek mythology, Andromeda was an Ethiopian princess, daughter of the vain queen Cassiopeia and king Cepheus. Because her mother boasted that Andromeda was more beautiful than the sea-nymphs, Poseidon demanded the princess be chained to a rock as a sacrifice to the sea-monster Cetus. Perseus, flying past on winged sandals after slaying Medusa, spotted her and turned the monster to stone with the Gorgon's gaze. All participants in this drama became neighbouring constellations: Cassiopeia, Cepheus, Perseus, Andromeda, and Cetus.",
  },
  howToFind: {
    uk: "Знайдіть Великий Квадрат Пегаса — чотири яскраві зірки, що утворюють майже правильний квадрат у осінньому небі. Ліва верхня зірка квадрата — це одночасно і права нижня зірка Андромеди. Від неї вгору та вліво тягнуться два ланцюжки зір. Між ними, трохи вище середини, знаходиться галактика M31. В темну ніч вона помітна як витягнута тьмяна пляма. Найкраще видно у жовтні та листопаді.",
    en: "Find the Great Square of Pegasus — four bright stars forming a large square in the autumn sky. The upper-left star of the square is also the lower-right star of Andromeda. From there, two arcing chains of stars extend upward and to the left. Between these chains, roughly in the middle, lies the Andromeda Galaxy M31. On a dark night it appears as an elongated fuzzy patch. The constellation is best seen in October and November.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Andromeda_constellation_map.svg/640px-Andromeda_constellation_map.svg.png",
  stars: (generatedStars["andromeda"]?.stars ?? []),
  lines: generatedStars["andromeda"]?.lines,
},

{
  id: "aquarius",
  name: {
    uk: "Водолій",
    en: "Aquarius",
  },
  skyX: -170,
  skyY: 25,
  description: {
    uk: "Водолій — одне з найдавніших зодіакальних сузір'їв, відоме ще вавилонянам понад 3000 років тому. Воно не має особливо яскравих зір, проте містить кілька виняткових об'єктів: планетарну туманність Гелікс (NGC 7293) — найближча до нас планетарна туманність, яку часто називають «Оком Бога» за неймовірну фотогенічність. Крім того, в Осінньому Водолії щороку відбуваються два метеорних потоки: Ета Акваріди (травень, залишки комети Галлея) та Дельта Акваріди (липень). В Україні Водолій найкраще видно у серпні та вересні, але низько над горизонтом.",
    en: "Aquarius is one of the oldest zodiac constellations, known to the Babylonians more than 3,000 years ago. It lacks very bright stars but contains exceptional deep-sky objects: the Helix Nebula (NGC 7293), the nearest planetary nebula to Earth, is often called the Eye of God for its eerie beauty in photographs. The constellation also hosts two major meteor showers: the Eta Aquariids in May (debris from Halley's Comet) and the Delta Aquariids in July. Best seen in August and September from mid-northern latitudes.",
  },
  legend: {
    uk: "У давньогрецькій традиції Водолій уособлює Ганімеда — прекрасного юнака-троянця, якого Зевс у вигляді орла забрав на Олімп, де той став виночерпієм богів. Але вавилонська версія куди давніша: там це бог Еа, «Великий» — владика потоків і мудрості, що тримає посудину, з якої ллється вода знань і родючості на всю землю. Більшість ранніх культур пов'язувала це сузір'я з дощем і розливами річок — а отже, з врожаєм і самим життям.",
    en: "In Greek tradition, Aquarius represents Ganymede, the beautiful Trojan youth carried off by Zeus's eagle to serve as cup-bearer to the gods on Olympus. But the Babylonian version is far older: there it is the god Ea, 'The Great One,' lord of streams and wisdom, pouring the waters of knowledge and fertility over the earth. Most early cultures linked this constellation to rain and flooding rivers — and thus to harvest and life itself.",
  },
  howToFind: {
    uk: "Водолій не має яскравих зірок, тому шукайте його методом «від сусідів». Знайдіть яскравий Фомальгаут (єдина справді яскрава зірка в цій частині неба) — він належить сузір'ю Південної Риби, а Водолій розташований прямо на північ від нього. Характерна деталь всередині сузір'я — «зіркова мітла» з кількох зір у формі розгорнутого Y або перевернутого парасольки. Найкраще видно у вересні та жовтні.",
    en: "Aquarius has no very bright stars, so use Fomalhaut — the lone bright star low in the south during autumn — as a signpost: Aquarius lies directly north of it. Within the constellation, look for the Water Jar asterism: a Y-shaped cluster of stars that marks the jug the water-bearer is pouring. Best seen in September and October.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Aquarius_constellation_map.svg/640px-Aquarius_constellation_map.svg.png",
  stars: (generatedStars["aquarius"]?.stars ?? []),
  lines: generatedStars["aquarius"]?.lines,
},

{
  id: "aries",
  name: {
    uk: "Овен",
    en: "Aries",
  },
  skyX: -60,
  skyY: 12,
  description: {
    uk: "Овен — невелике зодіакальне сузір'я з трьома основними зірками, але астрономічно дуже важливе: понад 2000 років тому саме в ньому знаходилася точка весняного рівнодення (місце перетину екліптики з небесним екватором). Хоча через прецесію земної осі ця точка давно перемістилася в Риби, вона й досі зветься «Першою точкою Овна» і є точкою відліку в небесній механіці. Найяскравіша зірка Овна — Хамаль, помаранчевий гігант. Сузір'я найкраще видно в листопаді та грудні.",
    en: "Aries is a small zodiac constellation with only three main stars, yet it holds enormous astronomical significance: over 2,000 years ago the spring equinox — the point where the ecliptic crosses the celestial equator — was located here. Although Earth's axial precession has since shifted this point into Pisces, it is still called the 'First Point of Aries' and serves as the origin of celestial coordinate systems used worldwide. Aries is best seen in November and December.",
  },
  legend: {
    uk: "Овен уособлює золоторунного барана, якого боги послали, щоб урятувати дітей фессалійського царя від злої мачухи. Баран поніс Фрікса та Гелле на спині крізь небо. Гелла впала в протоку між Азією та Європою (названу Геллеспонт — «море Гелли»), а Фрікс добрався до Колхіди, де приніс барана в жертву і вкрив золоте руно. Саме за ним пізніше й вирушили Ясон і аргонавти.",
    en: "Aries represents the golden-fleeced ram sent by the gods to rescue the children of a Thessalian king from their wicked stepmother. The ram carried Phrixus and Helle through the sky, but Helle fell into the strait between Europe and Asia — ever after called the Hellespont, 'Sea of Helle.' Phrixus reached Colchis, sacrificed the ram, and hung its Golden Fleece in a sacred grove — the very treasure that Jason and the Argonauts later set out to retrieve.",
  },
  howToFind: {
    uk: "Овен розташований між Плеядами (в Тельці) та Великим Квадратом Пегаса. Знайдіть Плеяди — помітне зоряне скупчення у вигляді маленького ковша — і рухайтеся від них на захід. Три зірки Овна утворюють невеликий дугоподібний рядок: Хамаль (найяскравіша, помаранчевувата), Шератан і Мезартхім. Овен найкраще видно з жовтня по грудень.",
    en: "Aries lies between the Pleiades (in Taurus) and the Great Square of Pegasus. Find the Pleiades — the famous tiny dipper-shaped star cluster — and sweep westward. Three stars form a small curved line: Hamal (the brightest, slightly orange), Sheratan, and Mesarthim. Aries is best seen October through December.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Aries_constellation_map.svg/640px-Aries_constellation_map.svg.png",
  stars: (generatedStars["aries"]?.stars ?? []),
  lines: generatedStars["aries"]?.lines,
},

{
  id: "auriga",
  name: {
    uk: "Візничий",
    en: "Auriga",
  },
  skyX: -80,
  skyY: -5,
  description: {
    uk: "Візничий — яскраве зимове сузір'я з однією з найпомітніших зірок усього неба: Капелла займає 6-те місце за яскравістю і видна навіть у дуже засвіченому місті. За кольором вона нагадує наше Сонце — жовтувата, але насправді є парою гігантських жовтих зір, що обертаються одна навколо одної. У межах сузір'я — три чудових зоряних скупчення: M36, M37, M38, доступні вже у бінокль. Візничий зручно розташований у Чумацькому Шляху і найкраще видно з грудня по лютий.",
    en: "Auriga is a bright winter constellation anchored by Capella, the sixth-brightest star in the night sky, easily visible even from light-polluted cities. Yellow in colour like our Sun, Capella is actually a pair of giant yellow stars orbiting each other. Within the constellation lie three outstanding open clusters — M36, M37, and M38 — all visible through binoculars. Auriga rides along the Milky Way and is best seen December through February.",
  },
  legend: {
    uk: "Візничий уособлює Еріхтонія — афінського царя, якого вважали винахідником колісниці. За легендою, Еріхтоній народився незвичайним способом і виховувався самою богинею Афіною. Він першим запряг чотирьох коней у колісницю і навчив цьому мистецтву людей, за що Зевс підняв його на небо. Три тьмяні зірки поруч із Капеллою зазвичай зображують козенят, яких несе візничий.",
    en: "Auriga represents Erichthonius, the legendary king of Athens credited with inventing the four-horse chariot. Born in an unusual manner and raised by the goddess Athena herself, he taught humankind the art of horsemanship. Zeus honoured him by placing him among the stars. Three faint stars near Capella traditionally represent the kids (young goats) the charioteer carries in his arms.",
  },
  howToFind: {
    uk: "Капелла — одна з найяскравіших зірок зимового неба, помітна дуже високо над горизонтом. Її не переплутати: яскрава жовтувата зірка в зоні між Оріоном і Перисею. Решта яскравих зір Візничого утворюють витягнутий неправильний п'ятикутник навколо Капелли. Разом із Бетельгейзе та Процьоном Капелла формує Зимовий Трикутник. Найкраще видно з листопада по березень.",
    en: "Capella is one of the brightest stars of the winter sky, riding very high overhead. It cannot be mistaken: a prominent yellow star between Orion and Perseus. The other bright stars of Auriga form an elongated irregular pentagon around Capella. Together with Betelgeuse and Procyon, Capella is sometimes noted as part of the Winter Triangle. Best seen November through March.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Auriga_constellation_map.svg/640px-Auriga_constellation_map.svg.png",
  stars: (generatedStars["auriga"]?.stars ?? []),
  lines: generatedStars["auriga"]?.lines,
},

{
  id: "bootes",
  name: {
    uk: "Волопас",
    en: "Boötes",
  },
  skyX: -95,
  skyY: 5,
  description: {
    uk: "Волопас — велике весняно-літнє сузір'я, головна зірка якого Арктур є найяскравішою у Північній півкулі й четвертою за яскравістю на всьому небі. Арктур — помаранчевий гігант, у 25 разів більший за Сонце. Він мчить крізь галактику з незвичайно великою швидкістю і є одним із найстаріших зір поблизу нашого «зоряного сусідства». У 1933 році на Всесвітній виставці в Чикаго організатори включили Арктур у святкову церемонію: фотоелемент уловив світло зірки і «запалив» прожектори виставки.",
    en: "Boötes is a large spring-summer constellation whose brightest star, Arcturus, is the most luminous in the Northern Hemisphere and fourth overall in the night sky. Arcturus is an orange giant 25 times larger than the Sun, racing through the galaxy at an unusually high speed and considered one of the oldest stars in our local stellar neighbourhood. In 1933 its light was used ceremonially to open the Chicago World's Fair — focused through a telescope onto a photoelectric cell to trigger the floodlights.",
  },
  legend: {
    uk: "Найпоширеніша версія: Волопас — це Аркас, син Зевса і Каллісто, який навчив людей орати землю й жити осілим життям. Зевс підняв його на небо за цей дар людству. За іншим міфом, Волопас — Ікарій, виноградар, якому Діоніс відкрив таємницю вина. Він пригостив пастухів, ті подумали, що їх отруїли, і вбили Ікарія. Зевс підняв нещасного виноградаря на небо на честь його щедрості.",
    en: "The most popular version makes Boötes Arcas, son of Zeus and Callisto, who taught humanity the art of ploughing and settled agriculture. Zeus placed him among the stars for this gift to civilization. Another myth identifies him as Icarius, a vintner to whom Dionysus revealed the secret of wine. He shared his new wine with shepherds who, thinking themselves poisoned, killed him. Zeus immortalized the generous man among the stars.",
  },
  howToFind: {
    uk: "Найпростіший спосіб знайти Волопаса — продовжити дугу руків'я Великого Ковша (Велика Ведмедиця) вниз: ця дуга природно приведе до помаранчево-жовтого Арктура. Астрономи навіть склали мнемоніку: «Arc to Arcturus» — «проведи дугу до Арктура». Від Арктура сузір'я розширюється вгору у формі морозива або повітряного змія. Найкраще видно з квітня по серпень.",
    en: "The easiest way to find Boötes is to follow the arc of the Big Dipper's handle outward — it curves naturally toward Arcturus, a memorably bright orange-yellow star. Astronomers use the mnemonic 'arc to Arcturus.' From Arcturus, the constellation fans upward in a kite or ice-cream cone shape. Best seen April through August.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Bootes_constellation_map.svg/640px-Bootes_constellation_map.svg.png",
  stars: (generatedStars["bootes"]?.stars ?? []),
  lines: generatedStars["bootes"]?.lines,
},

{
  id: "cancer",
  name: {
    uk: "Рак",
    en: "Cancer",
  },
  skyX: -155,
  skyY: 12,
  description: {
    uk: "Рак — найтьмяніше із зодіакальних сузір'їв, але з виключно важливою деталлю всередині: розсіяне зоряне скупчення Ясла (M44, або «Прасепе») помітне неозброєним оком як хмарка й було відоме ще давнім грекам. У гарний телескоп або навіть бінокль скупчення розкривається у фантастичне поле зір — понад 1000 зірок на відстані близько 577 світлових років. Ще одне скупчення — M67 — одне з найстаріших у галактиці (близько 3,2 мільярда років). Приблизно 2000 років тому в Раку була точка літнього сонцестояння, саме тому Тропік Раку отримав свою назву.",
    en: "Cancer is the faintest zodiac constellation but hides a gem: the Beehive Cluster (M44, also called Praesepe), visible to the naked eye as a misty patch and known to ancient Greeks. Through binoculars or a telescope it resolves into a stunning field of over 1,000 stars about 577 light-years away. The constellation also contains M67, one of the oldest open clusters in the galaxy at around 3.2 billion years. Some 2,000 years ago the summer solstice point was located here — which is why the Tropic of Cancer bears its name.",
  },
  legend: {
    uk: "Рак відіграє лише епізодичну роль у грецькій міфології. Коли Геракл воював із Гідрою — дев'ятиголовою водяною змією, богиня Гера (яка ненавиділа Геракла) послала Рака, щоб той відволік героя, вчепившись у ногу. Геракл розтоптав Рака, але Гера з поваги до вірної тварини підняла її на небо.",
    en: "The Crab plays only a minor role in Greek mythology. When Heracles was battling the nine-headed Hydra, the goddess Hera — who despised the hero — sent a crab to distract him by pinching his foot. Heracles promptly crushed it underfoot, but Hera honoured the loyal creature's sacrifice by placing it among the stars.",
  },
  howToFind: {
    uk: "Рак розташований між двома виразними сузір'ями: Близнюками (зліва) і Левом (справа). У темну ніч між ними можна побачити тьмяву хмарку — це скупчення Ясла (M44). Через засвічення неба в Україні Рак видно погано з міст, але ясної зимово-весняної ночі за містом хмарка Яслів помітна. Найкраще видно у лютому та березні.",
    en: "Cancer lies between the distinctive constellations Gemini (to the left) and Leo (to the right). On a dark night, look between them for a faint misty cloud — that is the Beehive Cluster, M44, visible without a telescope. The constellation's individual stars are hard to see in light-polluted skies, but the Beehive is surprisingly easy on a clear night outside a city. Best seen February through March.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cancer_constellation_map.svg/640px-Cancer_constellation_map.svg.png",
  stars: (generatedStars["cancer"]?.stars ?? []),
  lines: generatedStars["cancer"]?.lines,
},

{
  id: "canis-major",
  name: {
    uk: "Великий Пес",
    en: "Canis Major",
  },
  skyX: -175,
  skyY: 22,
  description: {
    uk: "Великий Пес — сузір'я з одним незаперечним рекордсменом: Сіріус є найяскравішою зіркою всього нічного неба (магнітуда −1.46). Він розташований лише за 8.6 світлових років — другий за близькістю яскравий сусід Сонця. Давні єгиптяни будували свій календар по Сіріусу: його першій появі на світанку (геліакічний схід) збігався з розливом Нілу та початком сільськогосподарського сезону. Рожево-блакитний колір Сіріуса видно неозброєним оком; поруч із ним є маленький білий карлик — Сіріус B, зорю-компаньйон.",
    en: "Canis Major is anchored by Sirius, the brightest star in the entire night sky at magnitude −1.46. It lies just 8.6 light-years away, the second-nearest bright star to the Sun. The ancient Egyptians built their calendar around Sirius: its first appearance at dawn (heliacal rising) marked the annual flooding of the Nile and the start of the agricultural year. Sirius has a faint companion, the white dwarf Sirius B, which orbits it every 50 years.",
  },
  legend: {
    uk: "У давньогрецькій традиції Великий Пес — один із двох мисливських псів Оріона (другий — Малий Пес), що ганяє Зайця (сузір'я Заяць) і тримається поруч із господарем на небі. Сіріус зветься «Псячою зіркою» — саме звідси походить вираз «псячі дні» (dog days of summer): давні греки та римляни вважали, що в дні, коли Сіріус сходить разом із Сонцем (липень), він додає тепла і стає причиною найспекотнішої пори літа.",
    en: "In Greek tradition, Canis Major is one of Orion's two hunting dogs (the other being Canis Minor), chasing the hare Lepus across the sky while faithfully following their master. Sirius is called the 'Dog Star,' and it gave us the phrase 'dog days of summer': ancient Greeks and Romans believed that in the weeks when Sirius rose with the Sun (around July), it added extra heat to the sky, causing the hottest days of the year.",
  },
  howToFind: {
    uk: "Сіріус не потребує особливих вказівок — це просто найяскравіша зірка зимового неба, помітна одразу. Знайдіть Пояс Оріона і проведіть лінію вліво та вниз: вона приведе прямо до Сіріуса. Сіріус сяє з легким блакитним відтінком і часто миготить, особливо низько над горизонтом. Великий Пес найкраще видно в січні та лютому.",
    en: "Sirius needs no special directions — it is simply the brightest star of the winter sky and unmissable. Find Orion's Belt and draw a line down and to the left: it points directly to Sirius. The star shines with a distinctly blue-white tint and twinkles dramatically near the horizon. Canis Major is best seen January through February.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Canis_Major_constellation_map.svg/640px-Canis_Major_constellation_map.svg.png",
  stars: (generatedStars["canis-major"]?.stars ?? []),
  lines: generatedStars["canis-major"]?.lines,
},

{
  id: "canis-minor",
  name: {
    uk: "Малий Пес",
    en: "Canis Minor",
  },
  skyX: -160,
  skyY: 15,
  description: {
    uk: "Малий Пес — одне з найменших сузір'їв, що складається практично лише з двох помітних зір. Але одна з них — Процьон — є 8-ю за яскравістю зіркою всього неба й розташована лише за 11.4 світлових роки. Назва Процьон у перекладі з грецької означає «перед Псом» — бо в помірних широтах він сходить трохи раніше за Сіріуса (Великий Пес). Разом із Сіріусом та Бетельгейзе Процьон утворює Зимовий Трикутник — зручний орієнтир у зимовому небі, добре видний навіть над яскравими містами.",
    en: "Canis Minor is one of the smallest constellations, consisting of essentially just two notable stars. But one of them, Procyon, is the eighth-brightest star in the entire sky, lying just 11.4 light-years away. Its name means 'before the dog' in Greek, because it rises slightly ahead of Sirius in the east at mid-northern latitudes. Together with Sirius and Betelgeuse, Procyon forms the Winter Triangle, a prominent asterism visible even from light-polluted cities.",
  },
  legend: {
    uk: "Малий Пес — другий із мисливських псів Оріона. За окремою легендою, він уособлює Мерасу — собаку Ікарія, виноградаря, якому Діоніс навчив робити вино. Коли пастухи вбили Ікарія (переплутавши сп'яніння від вина з отруєнням), вірна Мера прибігла до дочки Ікарія Еріґони та привела її до тіла господаря. Вражений Зевс підняв і пса, і дочку, і батька на небо — щоб такої несправедливості більше не сталося.",
    en: "Canis Minor is the second of Orion's hunting dogs. In another tradition it represents Maera, the dog of Icarius, the vintner to whom Dionysus taught the secret of wine. When shepherds killed Icarius — believing his wine to be poison — faithful Maera led Icarius's daughter Erigone to the body. Zeus, moved by the dog's devotion, placed Maera, Erigone, and Icarius all among the stars.",
  },
  howToFind: {
    uk: "Малий Пес легко знайти за Процьоном — яскравою жовтуватою зіркою в зимовому небі. Він розташований між Орієном і Близнюками та трохи нижче від них. Уявний трикутник між Бетельгейзе (Оріон), Сіріусом (Великий Пес) і Процьоном є Зимовим Трикутником. Малий Пес найкраще видно в лютому та березні.",
    en: "Canis Minor is easy to find by locating Procyon — a bright, slightly yellowish star in the winter sky, situated between Orion and Gemini and a little south of the line between them. The imaginary triangle connecting Betelgeuse (Orion), Sirius (Canis Major), and Procyon is the Winter Triangle, a helpful landmark. Best seen February through March.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Canis_Minor_constellation_map.svg/640px-Canis_Minor_constellation_map.svg.png",
  stars: (generatedStars["canis-minor"]?.stars ?? []),
  lines: generatedStars["canis-minor"]?.lines,
},

{
  id: "capricornus",
  name: {
    uk: "Козоріг",
    en: "Capricornus",
  },
  skyX: -185,
  skyY: 28,
  description: {
    uk: "Козоріг — одне з найдавніших зодіакальних сузір'їв: його зображення знайдено на вавилонських табличках, яким понад 3000 років. Воно не має яскравих зір, але являє собою добре помітний трикутник або кострубатий ромб із середньо-яскравих зір. Найцікавіша астрономічна деталь — подвійна зірка Альгеді: неозброєним оком вона виглядає як дві окремі зірки, але насправді це оптична пара (зірки перебувають на різних відстанях, просто потрапили в одну лінію зору). Близько 2000 років тому в Козорозі знаходилася точка зимового сонцестояння.",
    en: "Capricornus is one of the oldest zodiac constellations, depicted on Babylonian star catalogs over 3,000 years old. It has no bright stars, but forms a recognizable triangle or irregular rhombus of medium-bright stars. The most interesting feature is Algedi: to the naked eye it looks like two separate stars, but they are actually an optical double — two unrelated stars that happen to align in the same line of sight. Around 2,000 years ago the winter solstice point was located here.",
  },
  legend: {
    uk: "Козоріг — гібрид кози та риби, що звучить дивно, але вписується в логіку давньовавилонської та давньогрецької космології. За грецьким міфом, бог Пан, коли всі боги в жаху тікали від велетня Тіфона, стрибнув у річку Ніл і намагався перетворитися на рибу — але поспіхом перетворив рибою лише нижню частину тіла. Зевс підняв цю комічну постать на небо як добрий жарт чи нагадування про переляк богів.",
    en: "Capricornus is a sea-goat — half goat, half fish — a strange hybrid that makes sense in ancient Babylonian and Greek cosmology. According to Greek myth, the god Pan, fleeing in terror from the monster Typhon along with all the other gods, leapt into the Nile River and tried to transform himself into a fish. In his panic he only managed to transform his lower half, creating the absurd sea-goat shape. Zeus affectionately placed this comical figure among the stars.",
  },
  howToFind: {
    uk: "Козоріг — не найяскравіше сузір'я, тому шукайте його в темному небі на півдні, між Стрільцем (де видно хмарку Чумацького Шляху) і Водолієм. Характерна форма — приплющений ромб або трикутник із зір третьої-четвертої величини. З України він помітний влітку та на початку осені, але ніколи не піднімається дуже високо. Найкраще видно у серпні та вересні.",
    en: "Capricornus is one of the fainter zodiac constellations, best sought in a dark sky in the south. Look between the bright Milky Way region of Sagittarius to the west and Aquarius to the east. The constellation forms a flattened triangle or rhombus of third-and-fourth-magnitude stars. Best seen August through September.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Capricornus_constellation_map.svg/640px-Capricornus_constellation_map.svg.png",
  stars: (generatedStars["capricornus"]?.stars ?? []),
  lines: generatedStars["capricornus"]?.lines,
},

  // ── Решта сузір'їв ────────────────────────────────────────────────────────
  ...([
    { id: "antlia",             name: { uk: "Насос" },               skyX: -180, skyY: 30  },
    { id: "apus",               name: { uk: "Птах Раю" },            skyX: 200,  skyY: 50  },
    { id: "ara",                name: { uk: "Вівтар" },              skyX: -115, skyY: 35  },
    { id: "camelopardalis",     name: { uk: "Жираф" },               skyX: -20,  skyY: -35 },
    { id: "canes-venatici",     name: { uk: "Гончі Пси" },           skyX: -108, skyY: -2  },
    { id: "carina",             name: { uk: "Кіль" },                skyX: 185,  skyY: 40  },
    { id: "centaurus",          name: { uk: "Центавр" },             skyX: 170,  skyY: 38  },
    { id: "cepheus",            name: { uk: "Цефей" },               skyX: -45,  skyY: -30 },
    { id: "cetus",              name: { uk: "Кит" },                 skyX: -75,  skyY: 20  },
    { id: "chamaeleon",         name: { uk: "Хамелеон" },            skyX: 195,  skyY: 52  },
    { id: "circinus",           name: { uk: "Циркуль" },             skyX: 175,  skyY: 42  },
    { id: "columba",            name: { uk: "Голуб" },               skyX: -195, skyY: 28  },
    { id: "coma-berenices",     name: { uk: "Коса Вероніки" },       skyX: -115, skyY: 5   },
    { id: "corona-australis",   name: { uk: "Південна Корона" },     skyX: -130, skyY: 30  },
    { id: "corona-borealis",    name: { uk: "Північна Корона" },     skyX: -102, skyY: 3   },
    { id: "corvus",             name: { uk: "Ворон" },               skyX: -148, skyY: 22  },
    { id: "crater",             name: { uk: "Чаша" },                skyX: -152, skyY: 20  },
    { id: "crux",               name: { uk: "Південний Хрест" },     skyX: 178,  skyY: 45  },
    { id: "delphinus",          name: { uk: "Дельфін" },             skyX: -158, skyY: 12  },
    { id: "dorado",             name: { uk: "Меч-Риба" },            skyX: 190,  skyY: 48  },
    { id: "draco",              name: { uk: "Дракон" },              skyX: -60,  skyY: -22 },
    { id: "equuleus",           name: { uk: "Лоша" },                skyX: -162, skyY: 14  },
    { id: "eridanus",           name: { uk: "Еридан" },              skyX: -185, skyY: 25  },
    { id: "fornax",             name: { uk: "Піч" },                 skyX: -195, skyY: 26  },
    { id: "hercules",           name: { uk: "Геркулес" },            skyX: -118, skyY: -3  },
    { id: "horologium",         name: { uk: "Годинник" },            skyX: -200, skyY: 32  },
    { id: "hydra",              name: { uk: "Гідра" },               skyX: -145, skyY: 20  },
    { id: "hydrus",             name: { uk: "Водяна Змія" },         skyX: 188,  skyY: 50  },
    { id: "indus",              name: { uk: "Індієць" },             skyX: 165,  skyY: 45  },
    { id: "lacerta",            name: { uk: "Ящірка" },              skyX: -52,  skyY: -18 },
    { id: "lepus",              name: { uk: "Заєць" },               skyX: -178, skyY: 20  },
    { id: "libra",              name: { uk: "Терези" },              skyX: -120, skyY: 20  },
    { id: "lupus",              name: { uk: "Вовк" },                skyX: -125, skyY: 30  },
    { id: "lynx",               name: { uk: "Рись" },                skyX: -138, skyY: -8  },
    { id: "leo-minor",          name: { uk: "Малий Лев" },           skyX: -132, skyY: 5   },
    { id: "mensa",              name: { uk: "Столова Гора" },        skyX: 192,  skyY: 55  },
    { id: "microscopium",       name: { uk: "Мікроскоп" },           skyX: -172, skyY: 32  },
    { id: "monoceros",          name: { uk: "Єдиноріг" },            skyX: -168, skyY: 18  },
    { id: "musca",              name: { uk: "Муха" },                skyX: 182,  skyY: 46  },
    { id: "norma",              name: { uk: "Наугольник" },          skyX: -122, skyY: 32  },
    { id: "octans",             name: { uk: "Октант" },              skyX: 198,  skyY: 58  },
    { id: "ophiuchus",          name: { uk: "Зміїносець" },          skyX: -112, skyY: 15  },
    { id: "pavo",               name: { uk: "Павич" },               skyX: 168,  skyY: 48  },
    { id: "pegasus",            name: { uk: "Пегас" },               skyX: -68,  skyY: -10 },
    { id: "perseus",            name: { uk: "Персей" },              skyX: -40,  skyY: -15 },
    { id: "phoenix",            name: { uk: "Фенікс" },              skyX: -192, skyY: 30  },
    { id: "pictor",             name: { uk: "Живописець" },          skyX: 188,  skyY: 43  },
    { id: "pisces",             name: { uk: "Риби" },                skyX: -78,  skyY: 8   },
    { id: "piscis-austrinus",   name: { uk: "Південна Риба" },       skyX: -178, skyY: 28  },
    { id: "puppis",             name: { uk: "Корма" },               skyX: 180,  skyY: 38  },
    { id: "pyxis",              name: { uk: "Компас" },              skyX: 175,  skyY: 36  },
    { id: "reticulum",          name: { uk: "Сітка" },               skyX: 192,  skyY: 50  },
    { id: "sagitta",            name: { uk: "Стріла" },              skyX: -140, skyY: 10  },
    { id: "sagittarius",        name: { uk: "Стрілець" },            skyX: -135, skyY: 25  },
    { id: "sculptor",           name: { uk: "Скульптор" },           skyX: -188, skyY: 24  },
    { id: "scutum",             name: { uk: "Щит" },                 skyX: -132, skyY: 18  },
    { id: "serpens",            name: { uk: "Змія" },                skyX: -108, skyY: 12  },
    { id: "sextans",            name: { uk: "Секстант" },            skyX: -148, skyY: 15  },
    { id: "taurus",             name: { uk: "Телець" },              skyX: -55,  skyY: 5   },
    { id: "telescopium",        name: { uk: "Телескоп" },            skyX: -145, skyY: 38  },
    { id: "triangulum",         name: { uk: "Трикутник" },           skyX: -65,  skyY: -5  },
    { id: "triangulum-australe",name: { uk: "Південний Трикутник" }, skyX: 172,  skyY: 44  },
    { id: "tucana",             name: { uk: "Тукан" },               skyX: 193,  skyY: 53  },
    { id: "vela",               name: { uk: "Вітрила" },             skyX: 178,  skyY: 38  },
    { id: "virgo",              name: { uk: "Діва" },                skyX: -132, skyY: 14  },
    { id: "volans",             name: { uk: "Летюча Риба" },         skyX: 186,  skyY: 44  },
    { id: "vulpecula",          name: { uk: "Лисичка" },             skyX: -135, skyY: 8   },
  ] as { id: string; name: LocalizedText; skyX: number; skyY: number }[]).map((c) => ({
    ...c,
    description: { uk: `${c.name.uk} — сузір'я, яке несе в собі тисячолітню мудрість зоряних карт. Детальний опис буде доданий найближчим часом.` },
    legend: { uk: `Легенди про ${c.name.uk} сягають глибокої давнини. Детальний опис легенди буде доданий найближчим часом.` },
    howToFind: { uk: `Інструкція з пошуку сузір'я ${c.name.uk} на нічному небі буде додана найближчим часом.` },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ursa_Major_constellation_map.svg/640px-Ursa_Major_constellation_map.svg.png",
    stars: (generatedStars[c.id]?.stars ?? []) as Star[],
    lines: generatedStars[c.id]?.lines,
  })),
];