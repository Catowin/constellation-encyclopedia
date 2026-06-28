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
{
  id: "antlia",
  name: { uk: "Насос", en: "Antlia" },
  skyX: -180,
  skyY: 30,
  description: {
    uk: "Насос — одне з найменш примітних сузір'їв південного неба, введене французьким астрономом Ніколя Лакайлем у 1756 році. Він назвав його на честь повітряного насоса, винайденого Робером Бойлем і вдосконаленого Дені Папеном. Лакайль систематично заповнював «порожні» ділянки південного неба новими сузір'ями, називаючи їх на честь наукових інструментів епохи Просвітництва. Насос не має зір яскравіших за четверту величину і жодних помітних глибоких об'єктів — це суто «картографічне» сузір'я без астеризмів чи яскравих особливостей.",
    en: "Antlia is one of the most inconspicuous constellations in the southern sky, introduced by French astronomer Nicolas Louis de Lacaille in 1756. He named it after the air pump invented by Robert Boyle and improved by Denis Papin. Lacaille systematically filled the 'empty' patches of the southern sky with new constellations, naming them after scientific instruments of the Enlightenment. Antlia has no stars brighter than fourth magnitude and no notable deep-sky objects — it is purely a cartographic constellation without any striking features.",
  },
  legend: {
    uk: "Насос не має жодної пов'язаної міфології — це суто наукова назва, дана в епоху Просвітництва. Лакайль свідомо відступив від традиції: замість героїв і тварин він увіковічнив наукові прилади свого часу. Повний список його «технічних» сузір'їв включає також Мікроскоп, Телескоп, Годинник, Секстант і Компас. Це єдині сузір'я на небі, що відображають не стародавні вірування, а торжество науки над забобонами.",
    en: "Antlia has no mythology attached to it — it is a purely scientific name given during the Age of Enlightenment. Lacaille deliberately broke from tradition: instead of heroes and animals, he commemorated the scientific instruments of his era. His full list of 'technical' constellations also includes Microscopium, Telescopium, Horologium, Sextans, and Pyxis. These are the only constellations in the sky that reflect not ancient beliefs but the triumph of reason over superstition.",
  },
  howToFind: {
    uk: "Насос — одне з найскладніших сузір'їв для пошуку. Воно розташоване між Гідрою на півночі, Вітрилами та Кілем на півдні. Орієнтиром може слугувати яскрава зірка Альфард (серце Гідри) — від неї рухайтеся на південь. З України Насос практично не видно: він піднімається лише на кілька градусів над горизонтом у лютому та березні і доступний лише з самого півдня країни в ідеальних умовах.",
    en: "Antlia is one of the most challenging constellations to locate. It lies between Hydra to the north and Vela and Carina to the south. Use the bright star Alphard (heart of Hydra) as a starting point and sweep southward. The constellation is best seen from the Southern Hemisphere in March and April. From mid-northern latitudes it barely clears the horizon.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Antlia_constellation_map.svg/640px-Antlia_constellation_map.svg.png",
  stars: (generatedStars["antlia"]?.stars ?? []),
  lines: generatedStars["antlia"]?.lines,
},

{
  id: "apus",
  name: { uk: "Птах Раю", en: "Apus" },
  skyX: 200,
  skyY: 50,
  description: {
    uk: "Птах Раю — маленьке сузір'я глибокого південного неба, введене нідерландськими мореплавцями Петером Кейзером і Фредеріком де Гаутманом наприкінці XVI століття під час їхньої експедиції до Індонезії. Воно назване на честь чудових птахів-раїв із Нової Гвінеї, яких європейці тоді вперше побачили. Торговці привозили шкурки цих птахів до Європи без ніг (для зберігання), що породило міф: птахи-раї ніколи не торкаються землі і живуть вічно в небесах. Сузір'я розташоване поряд із Південним полюсом і з України не видне.",
    en: "Apus is a small constellation of the deep southern sky, introduced by Dutch navigators Pieter Dirkszoon Keyser and Frederick de Houtman during their late 16th-century expedition to Indonesia. It is named after the spectacular birds-of-paradise from New Guinea, which Europeans encountered for the first time on these voyages. Traders brought the skins to Europe with legs removed for preservation, giving rise to the legend that birds-of-paradise never touched the ground and lived forever in the heavens. The constellation lies near the South Celestial Pole and is invisible from Ukraine.",
  },
  legend: {
    uk: "Міф про птахів-раїв, що ніколи не торкаються землі, виявився надзвичайно живучим у Європі XVI–XVII століть. Ці птахи асоціювалися з раєм, безсмертям і вічною красою. Самі нідерландські мореплавці, що вперше описали ці сузір'я, побачили в небесних птахах символ своїх далеких відкриттів. Незважаючи на прозаїчне пояснення (продавці просто відрізали ноги для зручності перевезення), поетична ідея живе й досі у самій назві сузір'я.",
    en: "The myth of footless birds-of-paradise that never touched the ground proved remarkably persistent in 16th and 17th century Europe. These birds were associated with paradise, immortality, and eternal beauty. The Dutch navigators who first charted these southern constellations saw in the celestial bird a symbol of their distant discoveries. Despite the prosaic explanation — traders simply removed the legs for easier transportation — the poetic idea lives on in the constellation's name.",
  },
  howToFind: {
    uk: "Птах Раю розташований між Трикутником Південним, Вівтарем і Павичем, поблизу Південного полюсу. З України воно абсолютно недоступне для спостереження. Його можна побачити лише з широт південніше 5° пн. ш. — тобто з екваторіальних країн, Австралії, Південної Африки чи Нової Зеландії, де воно є приполярним і видне цілий рік.",
    en: "Apus lies between Triangulum Australe, Ara, and Pavo, close to the South Celestial Pole. It is completely invisible from Ukraine and most of the Northern Hemisphere. The constellation is accessible only from latitudes south of about 5° North — meaning equatorial countries, Australia, South Africa, or New Zealand, where it is circumpolar and visible year-round.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Apus_constellation_map.svg/640px-Apus_constellation_map.svg.png",
  stars: (generatedStars["apus"]?.stars ?? []),
  lines: generatedStars["apus"]?.lines,
},

{
  id: "ara",
  name: { uk: "Вівтар", en: "Ara" },
  skyX: -115,
  skyY: 35,
  description: {
    uk: "Вівтар — стародавнє сузір'я, відоме ще з часів давньої Греції та занесене до каталогу Птолемея у II столітті н. е. Воно лежить у густій частині Чумацького Шляху і містить кілька розсіяних зоряних скупчень та туманностей, доступних у бінокль. Найяскравіша зірка — Бета Ара, помаранчево-білий надгігант. Сузір'я розташоване далеко на півдні і з більшості міст України видно лише влітку дуже низько над горизонтом — для спостереження потрібен відкритий південний горизонт.",
    en: "Ara is an ancient constellation catalogued by Ptolemy in the 2nd century AD and known to the ancient Greeks. It lies in a rich part of the Milky Way and contains several open clusters and nebulae accessible through binoculars. Its brightest star, Beta Arae, is an orange-white supergiant. Situated far to the south, Ara is only visible from Ukraine during summer evenings very low on the southern horizon — an unobstructed southern horizon is essential for any meaningful observation.",
  },
  legend: {
    uk: "У давньогрецькій традиції Вівтар — той самий жертовник, на якому боги-олімпійці принесли клятву перед битвою з Титанами. Саме тут вони поклялися в солідарності та боротьбі, після чого скинули Титанів до Тартару. За іншою версією, це вівтар кентавра Хірона, мудрого наставника багатьох героїв. Дим жертвопринесення тягнеться по Чумацькому Шляху — саме так давні греки пояснювали сусідство сузір'я з галактичною смугою.",
    en: "In Greek tradition, Ara represents the altar on which the Olympian gods swore their oath of solidarity before their war against the Titans. It was here that Zeus and his siblings pledged to fight together, ultimately casting the Titans into Tartarus. Another tradition identifies it as the altar of the centaur Chiron, the wise teacher of heroes. The smoke of the sacrifice was said to drift along the Milky Way — the ancient Greek explanation for the constellation's proximity to the galactic band.",
  },
  howToFind: {
    uk: "Вівтар знаходиться на південь від хвоста Скорпіона — шукайте характерне жало Скорпіона (зігнутий ланцюжок зір), а потім дивіться ще нижче. З України сузір'я видно лише з кінця червня по серпень, і лише з відкритим горизонтом на півдні. Найкращі умови — в степових районах або на узбережжі Чорного моря, де горизонт не перекритий деревами чи будівлями.",
    en: "Ara lies just south of the Scorpion's tail — find the characteristic curved stinger of Scorpius and look further south. From mid-northern latitudes it is only accessible in June through August, and only with a completely clear southern horizon. Best seen from tropical and southern latitudes where it climbs high enough for detailed observation.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Ara_constellation_map.svg/640px-Ara_constellation_map.svg.png",
  stars: (generatedStars["ara"]?.stars ?? []),
  lines: generatedStars["ara"]?.lines,
},

{
  id: "camelopardalis",
  name: { uk: "Жираф", en: "Camelopardalis" },
  skyX: -20,
  skyY: -35,
  description: {
    uk: "Жираф — велике, але дуже тьмяне приполярне сузір'я північного неба, введене нідерландським картографом Петером Планціусом у 1612 році. Незважаючи на свої розміри (18-те за площею серед 88), воно не має жодної зірки яскравішої за четверту величину, тому виглядає як порожня темна ділянка між Персеєм, Возничим і Кассіопеєю. Слово «camelopardalis» у латині означало жирафа — тварину, яку стародавні римляни вважали гібридом верблюда і леопарда. Попри тьмяність, сузір'я видно цілий рік з України.",
    en: "Camelopardalis is a large but very faint circumpolar constellation of the northern sky, introduced by Dutch cartographer Petrus Plancius in 1612. Despite ranking 18th in size among the 88 constellations, it has no star brighter than fourth magnitude, making it appear as a blank dark patch between Perseus, Auriga, and Cassiopeia. The Latin word 'camelopardalis' meant giraffe — an animal ancient Romans believed to be a hybrid of camel and leopard, hence the name. Despite its faintness, it is visible year-round from Ukraine.",
  },
  legend: {
    uk: "Жираф не має давньогрецького або римського mythological підґрунтя — Планціус ввів його лише у 1612 році, і деякі вчені пов'язують назву з біблійним сюжетом: жирафа, якого Ревекка їхала побачити Ісаака («верблюд» у деяких перекладах Біблії). Це одне з небагатьох сузір'їв, що не мають античного коріння і є суто продуктом епохи великих географічних відкриттів, коли картографи заповнювали небесні «білі плями».",
    en: "Camelopardalis has no ancient Greek or Roman mythological background — Plancius introduced it only in 1612, and some scholars link the name to a biblical reference: the animal Rebekah rode to meet Isaac (rendered as 'camel' in some Bible translations). It is one of the few constellations with no classical roots, purely a product of the Age of Exploration when cartographers were filling in celestial 'blank spots' just as sailors were filling in geographical ones.",
  },
  howToFind: {
    uk: "Жираф найлегше знайти, визначивши спочатку його сусідів: Кассіопею (W-форма) на заході та Полярну зірку на півдні. Жираф займає велику порожню ділянку між ними. У темну ніч за містом можна відстежити кілька слабких зір четвертої величини, але в умовах навіть незначного засвічення неба сузір'я практично зникає. Воно видно цілий рік і найкраще розташоване в небі в грудні та січні.",
    en: "The easiest way to find Camelopardalis is to identify its neighbours first: Cassiopeia's W-shape to the west and Polaris to the south. The giraffe occupies the large empty patch between them. On a truly dark night away from city lights, a few fourth-magnitude stars become traceable, but even mild light pollution renders the constellation nearly invisible. It is circumpolar and best positioned in the sky in December and January.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Camelopardalis_constellation_map.svg/640px-Camelopardalis_constellation_map.svg.png",
  stars: (generatedStars["camelopardalis"]?.stars ?? []),
  lines: generatedStars["camelopardalis"]?.lines,
},

{
  id: "canes-venatici",
  name: { uk: "Гончі Пси", en: "Canes Venatici" },
  skyX: -108,
  skyY: -2,
  description: {
    uk: "Гончі Пси — невелике сузір'я між Великою Ведмедицею та Волопасом, введене польським астрономом Яном Гевелієм у 1687 році. Попри скромний вигляд, воно є скарбницею для любителів галактик: тут знаходяться знаменита Вир (M51) — перша галактика, в якій виявили спіральну структуру, та Соняшник (M63). Обидві доступні у невеликий аматорський телескоп. Найяскравіша зірка — Кор Каролі («Серце Карла») з величиною 2.9, названа на честь англійського короля Карла II.",
    en: "Canes Venatici is a small constellation between Ursa Major and Boötes, introduced by Polish astronomer Johannes Hevelius in 1687. Despite its modest appearance, it is a treasure trove for galaxy hunters: here lie the famous Whirlpool Galaxy (M51) — the first galaxy in which spiral structure was ever identified — and the Sunflower Galaxy (M63). Both are accessible through a small amateur telescope. The brightest star, Cor Caroli ('Heart of Charles'), at magnitude 2.9, was named in honour of the English king Charles II.",
  },
  legend: {
    uk: "Гончі Пси зображують двох мисливських псів — Астеріона та Харою — що ведуть на повідку мисливець Волопас. Як і більшість сузір'їв Гевелія, вони не мають давньогрецького myths — це авторська вигадка XVII ст. Кор Каролі отримала свою назву від придворного лікаря Чарльза II Едмунда Галлея (того самого, що відкрив знамениту комету): за легендою, зірка засяяла особливо яскраво в ніч повернення короля до Лондона у 1660 році.",
    en: "Canes Venatici depicts two hunting dogs — Asterion and Chara — on a leash held by the herdsman Boötes nearby. Like most of Hevelius's constellations, they have no ancient Greek mythology — they are a 17th-century invention. The star Cor Caroli received its name from Edmond Halley (the same astronomer who identified the famous comet), who recorded that it shone with unusual brilliance on the night King Charles II returned to London in 1660.",
  },
  howToFind: {
    uk: "Знайдіть «ручку» Великого Ковша (три зірки хвоста Великої Ведмедиці) і дивіться трохи нижче та на захід від неї. Кор Каролі — єдина відносно яскрава зірка в цій ділянці неба між Аркетуром (Волопас) та Дубхе (Велика Ведмедиця). Від Кор Каролі на захід близько 3.5° знаходиться галактика Вир (M51) — в темну ніч у телескоп видно навіть її супутникову галактику NGC 5195. Найкраще видно у квітні та травні.",
    en: "Find the handle of the Big Dipper (the three stars of Ursa Major's tail) and look slightly below and west of it. Cor Caroli is the only relatively bright star in the region between Arcturus (Boötes) and Dubhe (Ursa Major). About 3.5° west of Cor Caroli lies the Whirlpool Galaxy (M51) — on a dark night a telescope will even reveal its companion galaxy NGC 5195. Best seen April through May.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Canes_Venatici_constellation_map.svg/640px-Canes_Venatici_constellation_map.svg.png",
  stars: (generatedStars["canes-venatici"]?.stars ?? []),
  lines: generatedStars["canes-venatici"]?.lines,
},

{
  id: "carina",
  name: { uk: "Кіль", en: "Carina" },
  skyX: 185,
  skyY: 40,
  description: {
    uk: "Кіль — частина колишнього величезного сузір'я Корабель Арго (Argo Navis), яке французький астроном Ніколя Лакайль розбив у 1752 році на три окремі: Кіль, Корму та Вітрила. Кіль отримав найцінніший скарб цього поділу: Канопус — другу за яскравістю зірку всього нічного неба (магнітуда −0.74), жовто-білий надгігант на відстані 310 світлових років. Також у Кілі знаходиться туманність Ета Кільова — одна з найбільших і найяскравіших туманностей у нашій галактиці, в якій перебуває зірка Ета Кільова — кандидат у наднові. З України Кіль не видно.",
    en: "Carina is a part of the former giant constellation Argo Navis, which French astronomer Nicolas Lacaille split in 1752 into three separate constellations: Carina, Puppis, and Vela. Carina inherited the most precious treasure: Canopus — the second-brightest star in the entire night sky at magnitude −0.74, a yellow-white supergiant 310 light-years away. Carina also contains the Carina Nebula, one of the largest and brightest nebulae in our galaxy, home to the volatile star Eta Carinae — a supernova candidate. Carina is not visible from Ukraine.",
  },
  legend: {
    uk: "Корабель Арго в давньогрецькій mythology — легендарний корабель Ясона та аргонавтів, що вирушив за Золотим руном до Колхіди. Кіль — це буквально підводна частина корпусу корабля. Зевс підняв корабель на небо на честь першого у міфологічній історії далекого морського походу. Цікаво, що при поділі Корабля Арго на три частини грецькі літери присвоювалися не кожному сузір'ю окремо, а зберігали нумерацію старого: тому в Кілі немає зірок Альфа і Бета — вони відійшли до Корми.",
    en: "The ship Argo in Greek mythology was the legendary vessel of Jason and the Argonauts, built for the quest to retrieve the Golden Fleece from Colchis. Carina is literally the keel — the underside of the hull. Zeus placed the entire ship among the stars to honour the first great sea voyage in mythological history. Notably, when Argo Navis was split into three constellations, the Greek letter designations were kept from the original numbering — which is why Carina has no Alpha or Beta stars: those letters belong to Puppis.",
  },
  howToFind: {
    uk: "Кіль розташований у глибокому південному небі і з України абсолютно недоступний. Канопус — другу за яскравістю зірку неба — можна побачити лише з широт південніше 37° пн. ш. (тобто південніше Криму). З Австралії, Південної Африки чи Аргентини Канопус — один із найзручніших орієнтирів для навігації в Південній півкулі, аналог Полярної зірки для мореплавців.",
    en: "Carina lies deep in the southern sky and is completely inaccessible from Ukraine. Canopus, the second-brightest star in the sky, is only visible from latitudes south of 37° North. From Australia, South Africa, or Argentina, Canopus is one of the most useful navigational stars in the Southern Hemisphere, serving a role analogous to Polaris for northern navigators. In February and March it blazes almost overhead from these southern locations.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Carina_constellation_map.svg/640px-Carina_constellation_map.svg.png",
  stars: (generatedStars["carina"]?.stars ?? []),
  lines: generatedStars["carina"]?.lines,
},

{
  id: "centaurus",
  name: { uk: "Центавр", en: "Centaurus" },
  skyX: 170,
  skyY: 38,
  description: {
    uk: "Центавр — одне з найбільших і найяскравіших сузір'їв неба, хоча з України видно лише його верхню частину. Воно містить дві зірки виняткового астрономічного значення. Альфа Центавра (Рігіль Кентавр) — третя за яскравістю зірка неба і, що важливіше, найближча зоряна система до нашого Сонця: всього 4.37 світлових роки. Насправді це потрійна система: дві жовті зірки (Альфа Цен A і B) та маленький червоний карлик Проксима Центавра — найближча до Сонця окрема зірка (4.24 св. р.), у якої виявлено планету в зоні придатності для життя.",
    en: "Centaurus is one of the largest and most spectacular constellations in the sky, though only its northern edge is visible from Ukraine. It contains two stars of extraordinary astronomical significance. Alpha Centauri (Rigil Kentaurus) is the third-brightest star in the sky and, more importantly, the nearest star system to our Sun at just 4.37 light-years. It is actually a triple system: two yellow stars (Alpha Cen A and B) plus the small red dwarf Proxima Centauri — the single closest star to the Sun at 4.24 light-years — which hosts a planet in its habitable zone.",
  },
  legend: {
    uk: "Центавр уособлює мудрого кентавра Хірона — напівлюдину-напівконя, наставника багатьох давньогрецьких героїв: Ахілла, Ясона, Асклепія. На відміну від інших кентаврів, відомих дикими звичками, Хірон був уособленням мудрості, медицини і мистецтва. За легендою, він загинув випадково від отруєної стріли Геракла і, не маючи змоги зцілити себе (навіть будучи безсмертним), попросив Зевса дозволити йому вмерти. Зевс підняв Хірона на небо з почестями.",
    en: "Centaurus represents the wise centaur Chiron — half-human, half-horse — the tutor of many Greek heroes including Achilles, Jason, and Asclepius. Unlike other centaurs known for wildness, Chiron embodied wisdom, medicine, and the arts. According to legend, he was accidentally wounded by one of Heracles' poisoned arrows and, unable to heal himself despite being immortal, asked Zeus for the mercy of death. Zeus honoured him by placing him among the stars.",
  },
  howToFind: {
    uk: "З України видно лише найпівнічніші зірки Центавра, і лише влітку низько над горизонтом на півдні. Альфа та Бета Центавра (Хадар) — «Вказівники» Південного Хреста — з України взагалі недоступні. Якщо ви опиняєтеся в Греції, Туреччині або Єгипті, шукайте дві яскраві зірки низько на півдні у травні та червні — це і є Альфа і Бета Центавра, найвидатніша пара зір південного неба.",
    en: "From Ukraine only the northernmost stars of Centaurus are briefly visible low on the southern horizon in summer. Alpha and Beta Centauri — the famous 'Pointers' to the Southern Cross — are not accessible from Ukrainian latitudes. If you find yourself in southern Europe, Turkey, or further south, look for two brilliant stars low in the south during May and June: these are Alpha and Beta Centauri, the most prominent stellar pair of the southern sky.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Centaurus_constellation_map.svg/640px-Centaurus_constellation_map.svg.png",
  stars: (generatedStars["centaurus"]?.stars ?? []),
  lines: generatedStars["centaurus"]?.lines,
},

{
  id: "cepheus",
  name: { uk: "Цефей", en: "Cepheus" },
  skyX: -45,
  skyY: -30,
  description: {
    uk: "Цефей — приполярне сузір'я, що ніколи не заходить за горизонт із більшості міст України. Його форма нагадує будиночок або п'ятикутник. Найцікавіша зірка — Дельта Цефея, прототип усіх цефеїд: клас зірок, що пульсують із суворою регулярністю, змінюючи яскравість. Залежність між періодом пульсацій і абсолютною яскравістю зірки дозволила астрономам вимірювати відстані до далеких галактик — це одна з найважливіших «стандартних свічок» у космології. Ще одна перлина — Мю Цефея, «Гранатова зірка» Гершеля: один із найбільших відомих зорів, червоний надгігант із діаметром до 1650 діаметрів Сонця.",
    en: "Cepheus is a circumpolar constellation that never sets below the horizon from most Ukrainian cities. Its shape resembles a small house or pentagon. Its most important star is Delta Cephei, the prototype of all Cepheid variables: a class of stars that pulsate with strict regularity, changing in brightness. The relationship between pulsation period and absolute luminosity allows astronomers to measure distances to distant galaxies — making Cepheids one of the most important 'standard candles' in cosmology. Another gem is Mu Cephei, Herschel's 'Garnet Star': one of the largest known stars, a red supergiant up to 1,650 times the Sun's diameter.",
  },
  legend: {
    uk: "У давньогрецькій mythology Цефей — цар Ефіопії, чоловік гордовитої Кассіопеї та батько Андромеди. Він зображений як безвольний правитель, нездатний захистити доньку від вимог Посейдона — саме він погодився прикувати Андромеду до скелі. Незважаючи на пасивну роль у myth, Цефей отримав місце на небі серед своєї сім'ї: поруч на небі знаходяться Кассіопея, Андромеда та Персей, що утворюють єдиний mythological «ансамбль».",
    en: "In Greek mythology, Cepheus was the king of Aethiopia, husband of the vain Cassiopeia and father of Andromeda. He is portrayed as a weak ruler unable to protect his daughter from Poseidon's demands — it was he who consented to chain Andromeda to the rock. Despite his passive role in the myth, Cepheus was placed in the sky alongside his family: Cassiopeia, Andromeda, and Perseus all lie nearby, forming a unique mythological ensemble in the northern sky.",
  },
  howToFind: {
    uk: "Цефей найлегше знайти між Кассіопеєю (W-форма) та Полярною зіркою. П'ять основних зір утворюють характерний «будиночок» — трикутний дах із квадратним основою. На відміну від яскравої Кассіопеї, Цефей трохи тьмяніший, але добре видний у темному небі. Як приполярне сузір'я, воно видно цілий рік, але найкраще розташоване у небі з серпня по жовтень.",
    en: "Cepheus is easiest to find between Cassiopeia's W-shape and Polaris. Its five main stars form a distinctive little house shape — a triangular roof atop a square base. Unlike the bright Cassiopeia, Cepheus is somewhat fainter but clearly visible on a dark night. As a circumpolar constellation it is visible year-round from the Northern Hemisphere, but best positioned in the sky August through October.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cepheus_constellation_map.svg/640px-Cepheus_constellation_map.svg.png",
  stars: (generatedStars["cepheus"]?.stars ?? []),
  lines: generatedStars["cepheus"]?.lines,
},

{
  id: "cetus",
  name: { uk: "Кит", en: "Cetus" },
  skyX: -75,
  skyY: 20,
  description: {
    uk: "Кит — четверте за площею сузір'я серед 88, хоча жодна його зірка не є особливо яскравою. Найвідоміша тут — Міра («Дивовижна»): перша відкрита довгоперіодична змінна зірка (1596 рік), яка змінює яскравість від 2.0 до 10.1 протягом приблизно 332 діб. В максимумі вона помітна неозброєним оком, у мінімумі — потребує телескопа. Крім того, в Киті знаходиться Тау Кита — одна з найближчих зірок, схожих на Сонце (11.9 св. р.), яку давно розглядають як ціль для пошуку позаземного життя.",
    en: "Cetus is the fourth-largest of the 88 constellations, though none of its stars are particularly brilliant. Its most famous resident is Mira ('the Wonderful'): the first long-period variable star ever discovered (1596), which changes in brightness from magnitude 2.0 to 10.1 over roughly 332 days. At maximum it is easily visible to the naked eye; at minimum it requires a telescope. Cetus also contains Tau Ceti — one of the nearest Sun-like stars at 11.9 light-years, long considered a prime target in the search for extraterrestrial intelligence.",
  },
  legend: {
    uk: "Кит — те саме морське чудовисько, що мало пожерти прикуту до скелі Андромеду. Персей, летячи повз із головою Медузи, побачив картину і вирішив втрутитися: він показав чудовиську голову горгони, і Кит скам'янів. В ширшому контексті myth, Кит є знаряддям помсти Посейдона проти гордовитої цариці Кассіопеї, яка образила морських нереїд. Ціле небесне угруповання — Цефей, Кассіопея, Андромеда, Персей і Кит — утворює єдину зв'язану myth.",
    en: "Cetus is the sea monster sent by Poseidon to devour Andromeda, chained to her rock as punishment for her mother Cassiopeia's vanity. Perseus, flying past on his winged sandals after slaying Medusa, saw the scene and intervened: he held up the Gorgon's head, and the monster was turned to stone. In the broader mythological context, Cetus is the instrument of Poseidon's revenge. The entire celestial group — Cepheus, Cassiopeia, Andromeda, Perseus, and Cetus — forms one connected mythological narrative.",
  },
  howToFind: {
    uk: "Кит розташований у «водній» частині неба — поруч із Рибами, Водолієм і Річкою Еридан. Ця область бідна на яскраві зірки, тому Кита важко знайти без орієнтирів. Найяскравіша зірка — Денеб Каїтос (Бета Кита, магнітуда 2.0) — шукайте її на південь від Риб. Навесні слідкуйте за Мірою: у роки максимуму вона помітна між жовтнем і лютим як незнайома яскрава зірка там, де зазвичай нічого немає.",
    en: "Cetus occupies the 'watery' part of the sky alongside Pisces, Aquarius, and Eridanus — a region poor in bright stars. The easiest entry point is Deneb Kaitos (Beta Ceti, magnitude 2.0), the constellation's brightest star, found south of Pisces. Keep an eye on Mira during autumn and winter: in years when it reaches maximum brightness, it appears as a striking 'new' star in an otherwise unremarkable patch of sky. Best seen October through December.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Cetus_constellation_map.svg/640px-Cetus_constellation_map.svg.png",
  stars: (generatedStars["cetus"]?.stars ?? []),
  lines: generatedStars["cetus"]?.lines,
},

{
  id: "chamaeleon",
  name: { uk: "Хамелеон", en: "Chamaeleon" },
  skyX: 195,
  skyY: 52,
  description: {
    uk: "Хамелеон — маленьке сузір'я поблизу Південного полюсу, введене нідерландськими мореплавцями Кейзером і де Гаутманом наприкінці XVI ст. Воно не має зір яскравіших за четверту величину і практично недоступне з Північної півкулі. Проте у межах сузір'я знаходиться Хамелеонний комплекс — область активного зореутворення на відстані близько 520 світлових років, де прямо зараз народжуються нові зірки. Це одна з найближчих до нас активних зоряних «колисок» і цікавий об'єкт для астрофізиків.",
    en: "Chamaeleon is a small constellation near the South Celestial Pole, introduced by Dutch navigators Keyser and de Houtman in the late 16th century. It has no stars brighter than fourth magnitude and is practically inaccessible from the Northern Hemisphere. However, within the constellation lies the Chamaeleon Cloud Complex — an active star-forming region about 520 light-years away, where new stars are being born right now. It is one of the nearest active stellar nurseries to Earth and an important target for astrophysicists.",
  },
  legend: {
    uk: "Хамелеон, як і більшість південних сузір'їв, введених мореплавцями XVI–XVII ст., не має жодної myth. Нідерландські навігатори просто називали нові сузір'я на честь екзотичних тварин, яких зустрічали під час своїх далеких подорожей — хамелеонів, папуг, птахів-раїв і тукан. Це була систематична спроба картографувати невідоме небо Південної півкулі, де жодна європейська традиція раніше не залишила слідів.",
    en: "Chamaeleon, like most southern constellations introduced by 16th and 17th century navigators, has no mythology. The Dutch seafarers simply named new constellations after exotic creatures they encountered on their distant voyages — chameleons, parrots, birds-of-paradise, and toucans. It was a systematic effort to map the unknown southern sky where no European tradition had previously left a mark, guided by empirical observation rather than ancient story.",
  },
  howToFind: {
    uk: "Хамелеон абсолютно недоступний з України та більшості Північної півкулі. Він розташований поблизу Південного полюсу між Кілем, Мухою та Октантом. Побачити його можна лише з широт південніше 0° (тобто з Південної півкулі), де він є приполярним і видний цілий рік. З Австралії або Нової Зеландії це постійний житель неба, але, на жаль, один із найнепомітніших.",
    en: "Chamaeleon is completely inaccessible from Ukraine and most of the Northern Hemisphere. It lies near the South Celestial Pole between Carina, Musca, and Octans. It can only be seen from latitudes south of the equator, where it is circumpolar and visible year-round. From Australia or New Zealand it is a permanent resident of the sky, but unfortunately one of its most inconspicuous inhabitants.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Chamaeleon_constellation_map.svg/640px-Chamaeleon_constellation_map.svg.png",
  stars: (generatedStars["chamaeleon"]?.stars ?? []),
  lines: generatedStars["chamaeleon"]?.lines,
},
{
  id: "circinus",
  name: { uk: "Циркуль", en: "Circinus" },
  skyX: 175,
  skyY: 42,
  description: {
    uk: "Циркуль — одне з найменших сузір'їв неба, введене Лакайлем у 1756 році на честь креслярського циркуля. Воно настільки мале, що вміщується між Альфою Центавра та Бетою Трикутника Південного — двома яскравими зірками значно більших сузір'їв-сусідів. Попри мініатюрні розміри, тут є цікавий об'єкт: галактика Циркуль (ESO 97-G13) — одна з найближчих до нас активних галактик із надмасивною чорною дірою в центрі, що поглинає речовину і випромінює потужні струмені енергії. З України Циркуль недоступний.",
    en: "Circinus is one of the smallest constellations in the sky, introduced by Lacaille in 1756 to honour the draughtsman's compass. It is so tiny that it fits between Alpha Centauri and Beta Trianguli Australis — two bright stars of much larger neighbouring constellations. Despite its miniature size, it contains a remarkable object: the Circinus Galaxy (ESO 97-G13), one of the nearest active galaxies to Earth, with a supermassive black hole at its centre actively consuming matter and emitting powerful jets of energy. Circinus is not visible from Ukraine.",
  },
  legend: {
    uk: "Циркуль, як і більшість сузір'їв Лакайля, не має жодної mythology — це суто інструментальна назва епохи Просвітництва. Лакайль назвав його на честь циркуля, яким креслять кола, — одного з базових інструментів математики, геодезії та картографії. Показово, що саме під час складання карти південного неба Лакайль вимірював дугу меридіана в Південній Африці, тобто циркуль був для нього не просто символом, а буквально робочим інструментом.",
    en: "Circinus, like most of Lacaille's constellations, has no mythology — it is a purely instrumental name from the Age of Enlightenment. Lacaille named it after the drawing compass used to inscribe circles, one of the fundamental tools of mathematics, surveying, and cartography. Fittingly, Lacaille was himself measuring an arc of the meridian in South Africa while compiling his southern sky catalogue — meaning the compass was not merely a symbol for him but a literal working tool.",
  },
  howToFind: {
    uk: "Циркуль недоступний з України. Для спостерігачів у Південній півкулі — шукайте пару яскравих зірок Альфа та Бета Центавра і дивіться трохи на схід від них: крихітний трикутник із трьох тьмяних зір і є Циркулем. Найкраще видно з квітня по червень із широт південніше 20° пн. ш.",
    en: "Circinus is not visible from Ukraine. For Southern Hemisphere observers, find the bright pair of Alpha and Beta Centauri and look slightly east of them: a tiny triangle of three faint stars is Circinus. Best seen April through June from latitudes south of 20° North.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Circinus_constellation_map.svg/640px-Circinus_constellation_map.svg.png",
  stars: (generatedStars["circinus"]?.stars ?? []),
  lines: generatedStars["circinus"]?.lines,
},

{
  id: "columba",
  name: { uk: "Голуб", en: "Columba" },
  skyX: -195,
  skyY: 28,
  description: {
    uk: "Голуб — невелике сузір'я південного неба, що знаходиться нижче Оріона та Зайця. Введене нідерландським картографом Петером Планціусом близько 1592 року, воно символізує голуба Ноя або голуба аргонавтів. Найяскравіша зірка — Факт (Альфа Голуба, магнітуда 2.65), жовто-білий гігант. Цікавий астрофізичний об'єкт — Мю Голуба: «втікаюча зірка», що мчить крізь галактику зі швидкістю понад 100 км/с і була колись викинута з потрійної зоряної системи. З України Голуб видно взимку дуже низько над горизонтом.",
    en: "Columba is a small southern constellation sitting just below Orion and Lepus. Introduced by Dutch cartographer Petrus Plancius around 1592, it represents either Noah's dove or the dove sent ahead of the Argo. Its brightest star, Phact (Alpha Columbae, magnitude 2.65), is a yellow-white giant. An intriguing astrophysical object here is Mu Columbae: a 'runaway star' racing through the galaxy at over 100 km/s, apparently flung from a triple star system in the distant past. Columba is visible from Ukraine in winter, very low on the southern horizon.",
  },
  legend: {
    uk: "Планціус пов'язував це сузір'я з двома різними голубами. Перший — голуб із Книги Буття, якого Ной випустив із ковчегу: він повернувся з гілкою оливи, сповістивши про кінець потопу. Другий — голуб, якого аргонавти відправили вперед, щоб перевірити, чи можна пройти крізь Симплегади (скелі, що стулялися): птах прослизнув між ними, і Ясон знав, що треба гребти якнайшвидше. Обидва образи об'єднує тема вісника надії.",
    en: "Plancius associated this constellation with two different doves. The first is the dove from Genesis that Noah released from the ark: it returned with an olive branch, signalling the end of the flood. The second is the dove the Argonauts sent ahead to test whether they could pass through the Symplegades — the clashing rocks: the bird slipped through, and Jason knew to row with all speed. Both images share the theme of a messenger of hope.",
  },
  howToFind: {
    uk: "Голуб розташований прямо під Оріоном і Зайцем (Lepus). Знайдіть Рігель — яскраву нижню праву зірку Оріона — і дивіться прямо вниз до горизонту. Факт (Альфа Голуба) — найяскравіша зірка в цій ділянці. З України сузір'я видно у грудні та січні, але ніколи не піднімається вище 10–15° над горизонтом, тому необхідний відкритий вид на південь.",
    en: "Columba lies directly below Orion and Lepus. Find Rigel — the bright lower-right star of Orion — and look straight down toward the horizon. Phact (Alpha Columbae) is the brightest star in that area. From Ukraine the constellation is visible in December and January but never rises more than 10–15° above the horizon, so an unobstructed southern view is essential. Best seen January and February from southern Europe.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Columba_constellation_map.svg/640px-Columba_constellation_map.svg.png",
  stars: (generatedStars["columba"]?.stars ?? []),
  lines: generatedStars["columba"]?.lines,
},

{
  id: "coma-berenices",
  name: { uk: "Коса Вероніки", en: "Coma Berenices" },
  skyX: -115,
  skyY: 5,
  description: {
    uk: "Коса Вероніки — невелике сузір'я весняного неба, відоме перш за все розсіяним зоряним скупченням Мелотт 111: близько 40 зір, розкиданих на великій площі неба, добре видних у бінокль. Але головна визначна пам'ятка — Скупчення галактик у Волосах Вероніки (Coma Cluster): понад тисяча галактик на відстані 320 мільйонів світлових років. Саме вивчаючи швидкості галактик у цьому скупченні, астроном Фріц Цвіккі у 1933 році вперше припустив існування темної матерії. Також тут проходить Наддень Коси Вероніки — один із полюсів галактики, де видно мінімум зір Чумацького Шляху і максимум далеких галактик.",
    en: "Coma Berenices is a small spring constellation best known for the Melotte 111 open cluster: around 40 stars spread across a wide area of sky, easily seen through binoculars. Its greater claim to fame is the Coma Galaxy Cluster: over a thousand galaxies at a distance of 320 million light-years. It was while studying the velocities of galaxies in this cluster that astronomer Fritz Zwicky in 1933 first proposed the existence of dark matter. The constellation also marks the Coma Supercluster and sits near the North Galactic Pole — the point where the fewest Milky Way stars obscure the view of deep space.",
  },
  legend: {
    uk: "Це одне з небагатьох сузір'їв, що має реальне історичне підґрунтя. Вероніка II — цариця Єгипту, дружина Птолемея III, пожертвувала своїм розкішним золотим волоссям богині Афродіті, благаючи про безпечне повернення чоловіка з військового походу. Коли цар повернувся, коса таємничо зникла з храму. Придворний астроном Конон Самоський оголосив, що боги вознесли її на небо — і вказав на розсіяне скупчення зір між Левом і Волопасом. Цариця була в захваті.",
    en: "This is one of the few constellations with a genuine historical basis. Berenice II, queen of Egypt and wife of Ptolemy III, sacrificed her magnificent golden hair to the goddess Aphrodite, praying for her husband's safe return from a military campaign. When the king returned, the lock of hair mysteriously vanished from the temple. The court astronomer Conon of Samos announced that the gods had taken it to the heavens — and pointed to a scattered group of stars between Leo and Boötes. The queen was delighted.",
  },
  howToFind: {
    uk: "Знайдіть яскравий Арктур (Волопас) і Денеболу (хвіст Лева) — Коса Вероніки знаходиться між ними. У темну ніч скупчення Мелотт 111 видне неозброєним оком як розмита хмарка; у бінокль воно розкривається в десятки окремих зір. Навесні, коли сузір'я стоїть високо в небі, навіть невеликий телескоп дозволяє знайти кілька яскравих галактик скупчення. Найкраще видно у квітні та травні.",
    en: "Find the bright star Arcturus (Boötes) and Denebola (the tail of Leo) — Coma Berenices lies between them. On a dark night the Melotte 111 cluster is visible to the naked eye as a misty patch; through binoculars it resolves into dozens of individual stars. In spring, when the constellation rides high, even a small telescope reveals several bright galaxies of the Coma Cluster. Best seen April through May.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Coma_Berenices_constellation_map.svg/640px-Coma_Berenices_constellation_map.svg.png",
  stars: (generatedStars["coma-berenices"]?.stars ?? []),
  lines: generatedStars["coma-berenices"]?.lines,
},

{
  id: "corona-australis",
  name: { uk: "Південна Корона", en: "Corona Australis" },
  skyX: -130,
  skyY: 30,
  description: {
    uk: "Південна Корона — маленьке, але витончене сузір'я на південь від Стрільця, відоме ще давнім грекам. Воно являє собою невеликий вигнутий ланцюжок середньо-яскравих зір, що справді нагадує корону або вінець. У межах сузір'я знаходиться Хмара Корони Австраліс — одна з найближчих до нас областей зореутворення (всього 430 світлових років), де просто зараз народжуються нові зірки. Молоді зірки підсвічують навколишній газ і пил, утворюючи красиві відбивні туманності, добре видні у великий телескоп.",
    en: "Corona Australis is a small but elegant constellation south of Sagittarius, known to the ancient Greeks. It forms a small curved arc of medium-bright stars that genuinely resembles a crown or wreath. Within the constellation lies the Corona Australis Molecular Cloud — one of the nearest star-forming regions to Earth at just 430 light-years — where new stars are being born right now. These young stars illuminate the surrounding gas and dust, creating beautiful reflection nebulae visible through a large telescope.",
  },
  legend: {
    uk: "Стародавні греки бачили в цьому сузір'ї вінець або корону, кинуту на землю одним із богів. Одна з версій пов'язує його з Діонісом: він нібито кинув свою корону на землю, щоб позначити вхід до підземного царства, коли спускався туди за матір'ю Семелою. Арат і Птолемей описували це сузір'я як «вінець» або «корону» без конкретної прив'язки до myth — просто красивий геометричний візерунок зір на небі.",
    en: "The ancient Greeks saw in this constellation a wreath or crown cast down by one of the gods. One version links it to Dionysus, who supposedly threw his crown to the ground to mark the entrance to the underworld when he descended to retrieve his mother Semele. Aratus and Ptolemy described it simply as a 'wreath' or 'crown' without a specific mythological attachment — it was appreciated as a beautiful geometric pattern of stars rather than a narrative figure.",
  },
  howToFind: {
    uk: "Знайдіть Стрільця — характерний «чайник» із зір у літньому небі на півдні. Трохи нижче і правіше від нього знаходиться Скорпіон з Антаресом. Між ними і трохи нижче — маленький вигнутий ланцюжок зір Південної Корони. З України вона видна влітку дуже низько над горизонтом — не вище 10°, тому потрібен максимально відкритий вид на південь. Найкраще видно у липні та серпні.",
    en: "Find Sagittarius — the distinctive 'Teapot' asterism in the summer southern sky. Just below and to the right of it sits Scorpius with Antares. Between them and slightly lower lies the small curved arc of Corona Australis. From Ukraine it is visible in summer very low on the horizon — no higher than 10° — so an unobstructed southern horizon is essential. Best seen July and August.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Corona_Australis_constellation_map.svg/640px-Corona_Australis_constellation_map.svg.png",
  stars: (generatedStars["corona-australis"]?.stars ?? []),
  lines: generatedStars["corona-australis"]?.lines,
},

{
  id: "corona-borealis",
  name: { uk: "Північна Корона", en: "Corona Borealis" },
  skyX: -102,
  skyY: 3,
  description: {
    uk: "Північна Корона — невелике, але дуже впізнаване сузір'я: сім зір утворюють майже ідеальне півколо — «корону» чи «чашу». Його неможливо переплутати з чимось іншим. Найяскравіша зірка — Гемма (Альфакка), білий гігант із магнітудою 2.2. Один із найочікуваніших астрономічних подій найближчих років — спалах нової зірки T Корони Borealis: це зіркова система, що вже кілька разів у записаній history спалахувала до другої зоряної величини (яскравішою за Полярну зірку!) і, за прогнозами, може повторити це в найближчі роки.",
    en: "Corona Borealis is a small but instantly recognizable constellation: seven stars form a near-perfect semicircle — a 'crown' or 'bowl' that cannot be confused with anything else. Its brightest star is Gemma (Alphecca), a white giant at magnitude 2.2. One of the most anticipated astronomical events of the coming years is the outburst of the recurrent nova T Coronae Borealis: a stellar system that has already erupted to second magnitude (brighter than Polaris!) several times in recorded history and is predicted to do so again in the near future.",
  },
  legend: {
    uk: "Північна Корона — корона Аріадни, дочки критського царя Міноса. Коли герой Тесей покинув Аріадну на острові Наксос після того, як вона допомогла йому вбити Мінотавра і вибратися з лабіринту, бог вина Діоніс знайшов її і взяв за дружину. На весілля він подарував їй золоту корону, виковану богом-ковалем Гефестом. Після смерті Аріадни Діоніс підняв її корону на небо, де вона сяє вічно.",
    en: "Corona Borealis is the crown of Ariadne, daughter of the Cretan king Minos. When the hero Theseus abandoned Ariadne on the island of Naxos after she had helped him slay the Minotaur and escape the labyrinth, the wine-god Dionysus found her and made her his wife. As a wedding gift he gave her a golden crown forged by the smith-god Hephaestus. After Ariadne's death, Dionysus placed her crown in the sky where it shines forever.",
  },
  howToFind: {
    uk: "Знайдіть Арктур — яскравий помаранчевий Волопас — і дивіться від нього на схід. Невелика дуга із семи зір, що нагадує чашу або підкову, — це Північна Корона. Вона настільки характерна за формою, що одразу впізнається. Якщо коли-небудь зіниця T CrB досягне максимуму, в середині цієї «чаші» з'явиться нова яскрава зірка, якої раніше не було. Найкраще видно з травня по вересень.",
    en: "Find Arcturus — the bright orange star of Boötes — and look east of it. A small arc of seven stars shaped like a bowl or horseshoe is Corona Borealis. Its shape is so distinctive it is immediately recognizable. If and when T CrB reaches maximum brightness, a new bright star will appear in the middle of this 'bowl' where none was visible before — one of the sky's most dramatic spectacles. Best seen May through September.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Corona_Borealis_constellation_map.svg/640px-Corona_Borealis_constellation_map.svg.png",
  stars: (generatedStars["corona-borealis"]?.stars ?? []),
  lines: generatedStars["corona-borealis"]?.lines,
},

{
  id: "corvus",
  name: { uk: "Ворон", en: "Corvus" },
  skyX: -148,
  skyY: 22,
  description: {
    uk: "Ворон — невелике, але помітне сузір'я весняного неба: чотири відносно яскраві зірки утворюють виразний неправильний чотирикутник, який важко сплутати. Цей астеризм відомий з давніх часів і легко знаходиться на сучасному небі. Поряд розташована сусідня галактика Антени (NGC 4038/4039) — пара галактик, що зіткнулися й зливаються воєдино. Їхні витягнуті «щупальця» із зір надали їм цю назву; процес злиття триватиме ще сотні мільйонів років і є одним із найкрасивіших прикладів галактичних взаємодій.",
    en: "Corvus is a small but distinctive spring constellation: four relatively bright stars form a clear irregular quadrilateral that is hard to confuse with anything else. This asterism has been recognized since antiquity and is easy to locate in the modern sky. Nearby lies the Antennae Galaxies (NGC 4038/4039) — a pair of colliding and merging galaxies whose long tails of ejected stars give them their name. The merger will continue for hundreds of millions of years and is one of the most photogenic examples of galactic interaction.",
  },
  legend: {
    uk: "За давньогрецьким myth, Ворон був білим птахом Аполлона, наділеним даром мови. Одного разу бог послав його принести воду в чаші (сусіднє сузір'я Кратер). Ворон зволікав — чекав, поки достигне смоква, — а потім збрехав Аполлону, що чашу захопила водяна змія (Гідра). Аполлон розкусив брехню і в гніві покарав Ворона: позбавив його чудового голосу (тепер він лише каркає), перетворив із білого на чорного і закинув на небо разом із Чашею та Гідрою — вічно прагнути до води, яку Гідра охороняє.",
    en: "In Greek myth, the Crow was Apollo's white bird, gifted with speech. The god once sent it to fetch water in a cup — the neighbouring constellation Crater. The crow dawdled, waiting for a fig to ripen, then lied to Apollo, claiming a water snake (Hydra) had blocked the spring. Apollo saw through the lie and punished the crow: he stripped it of its beautiful voice (now it only croaks), turned it from white to black, and flung it into the sky alongside the Cup and the Hydra — forever straining toward the water that Hydra guards.",
  },
  howToFind: {
    uk: "Ворон — один із легших весняних сузір'їв для пошуку. Знайдіть яскравий Спіку (Діва) і дивіться вправо та вниз: чотири зірки у формі нерівного прямокутника — це Ворон. Вони помітні навіть в умовах помірного засвічення. Поряд ліворуч — тьмяніший чотирикутник Чаші (Кратер). Ворон найкраще видно у квітні та травні в південній частині неба.",
    en: "Corvus is one of the easier spring constellations to find. Locate the bright star Spica (Virgo) and look right and downward: four stars forming an uneven rectangle are Corvus. They are noticeable even in moderately light-polluted skies. Just to the left sits the fainter quadrilateral of Crater. Corvus is best seen April through May in the southern sky.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Corvus_constellation_map.svg/640px-Corvus_constellation_map.svg.png",
  stars: (generatedStars["corvus"]?.stars ?? []),
  lines: generatedStars["corvus"]?.lines,
},

{
  id: "crater",
  name: { uk: "Чаша", en: "Crater" },
  skyX: -152,
  skyY: 20,
  description: {
    uk: "Чаша — стародавнє сузір'я, занесене до каталогу Птолемея, що зображує античну посудину для вина (кратер). Воно розташоване між Вороном і Гідрою та не має зір яскравіших за четверту величину, тому в умовах міського засвічення практично непомітне. Разом із Вороном і Гідрою Чаша утворює тематичну тріаду пов'язаних myth сузір'їв — унікальна ситуація, коли три сусідніх сузір'я складають єдину легенду. Цікавий глибокий об'єкт — галактика NGC 3511, спіральна галактика, видима у телескоп.",
    en: "Crater is an ancient constellation catalogued by Ptolemy, depicting a classical wine-mixing vessel. Situated between Corvus and Hydra, it has no stars brighter than fourth magnitude, making it nearly invisible under urban light pollution. Together with Corvus and Hydra, Crater forms a thematic mythological trilogy — a rare situation where three neighbouring constellations tell a single connected story. A noteworthy deep-sky object is the spiral galaxy NGC 3511, visible through a telescope.",
  },
  legend: {
    uk: "Чаша — та сама посудина, з якою Ворон полетів по воду для Аполлона і так і не виконав доручення (дивись myth Ворона). Аполлон закинув Чашу на небо разом із Вороном і Гідрою, причому розмістив їх так, що Ворон вічно тягнеться до Чаші з водою, але Гідра, вигинаючись між ними, не дає йому напитися. Це одна з небагатьох небесних «сцен», де взаємне розташування трьох сузір'їв є частиною самого myth.",
    en: "Crater is the very cup the Crow was sent to fetch water in for Apollo — and failed to deliver (see the myth of Corvus). Apollo cast the Cup into the sky alongside the Crow and the Hydra, arranging them so that the Crow eternally reaches toward the Cup of water, but the Hydra, coiled between them, prevents it from drinking. It is one of the rare celestial 'scenes' where the relative positions of three constellations are themselves part of the myth.",
  },
  howToFind: {
    uk: "Чаша знаходиться безпосередньо ліворуч (на схід) від Ворона і розташована на «спині» Гідри. Знайдіть чотирикутник Ворона — Чаша є схожим, але тьмянішим і менш правильним угрупованням зір трохи лівіше. У темну ніч за містом можна прослідкувати весь ланцюжок: Гідра тягнеться від Рака аж до Шальки Терезів, несучи на спині Чашу та Ворона. Найкраще видно у квітні та травні.",
    en: "Crater lies directly to the left (east) of Corvus and sits on the 'back' of Hydra. Find the Corvus quadrilateral — Crater is a similar but fainter and less regular grouping of stars just to its east. On a dark night away from city lights you can trace the entire sequence: Hydra stretches from Cancer all the way to Libra, carrying Crater and Corvus on its back. Best seen April through May.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Crater_constellation_map.svg/640px-Crater_constellation_map.svg.png",
  stars: (generatedStars["crater"]?.stars ?? []),
  lines: generatedStars["crater"]?.lines,
},

{
  id: "crux",
  name: { uk: "Південний Хрест", en: "Crux" },
  skyX: 178,
  skyY: 45,
  description: {
    uk: "Південний Хрест — найменше з 88 сузір'їв, але одне з найвідоміших і найважливіших у Південній півкулі. Чотири яскраві зірки утворюють характерний хрест, що служить аналогом Полярної зірки для мореплавців південних морів: лінія, проведена через довгу вісь хреста, вказує на Південний полюс. Найяскравіша зірка — Акрукс (Альфа Південного Хреста, магнітуда 0.77), насправді подвійна зірка, роздільна в телескоп. Поряд знаходиться Вугільний Мішок — темна туманність, «чорна пляма» в Чумацькому Шляху, помітна неозброєним оком. Зображення Південного Хреста є на прапорах Австралії, Нової Зеландії, Бразилії, Папуа Нової Гвінеї та Самоа.",
    en: "Crux is the smallest of the 88 constellations but one of the most famous and important in the Southern Hemisphere. Its four bright stars form a distinctive cross that serves as the southern equivalent of Polaris: a line extended through the long axis of the cross points toward the South Celestial Pole. The brightest star, Acrux (Alpha Crucis, magnitude 0.77), is actually a double star resolvable through a telescope. Nearby sits the Coalsack Nebula — a dark cloud, a 'black hole' in the Milky Way visible to the naked eye. The Southern Cross appears on the flags of Australia, New Zealand, Brazil, Papua New Guinea, and Samoa.",
  },
  legend: {
    uk: "Давні греки бачили ці зірки, коли Середземне море ще давало можливість спостерігати частину південного неба, і включали їх до сузір'я Кентавра. Пізніше, з прецесією, Хрест опустився нижче горизонту для Середземномор'я. Португальські мореплавці XV–XVI ст. знову «відкрили» його і описали як хрест; саме вони закріпили сучасну назву. Для народів Австралії, Полінезії та Андських цивілізацій ці зірки мали тисячолітнє культурне значення як навігаційний орієнтир задовго до появи європейців.",
    en: "Ancient Greeks could see these stars when the Mediterranean still allowed views of the southern sky, and included them in the constellation Centaurus. Later, as precession moved them below the Mediterranean horizon, they faded from European awareness. Portuguese navigators of the 15th and 16th centuries rediscovered and described them as a cross, coining the modern name. For the Aboriginal peoples of Australia, Polynesian cultures, and Andean civilizations, these stars carried millennia of cultural and navigational significance long before European contact.",
  },
  howToFind: {
    uk: "Південний Хрест не видно з України — він завжди залишається нижче горизонту для широт північніше 25° пн. ш. З Греції або Кіпру в квітні можна спробувати побачити його самі нижні зірки точно над горизонтом. Для спостерігачів у Південній півкулі він є приполярним і видний цілий рік. Щоб знайти Південний полюс: продовжте довгу вісь хреста на 4.5 його довжини — ця точка і є приблизним Південним полюсом.",
    en: "Crux is not visible from Ukraine — it remains permanently below the horizon for latitudes north of 25° North. From Greece or Cyprus in April one might catch its lowest stars just above the southern horizon on ideal nights. For Southern Hemisphere observers it is circumpolar and visible year-round. To find the South Celestial Pole: extend the long axis of the cross by 4.5 times its length — that point is the approximate South Pole of the sky.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Crux_constellation_map.svg/640px-Crux_constellation_map.svg.png",
  stars: (generatedStars["crux"]?.stars ?? []),
  lines: generatedStars["crux"]?.lines,
},

{
  id: "delphinus",
  name: { uk: "Дельфін", en: "Delphinus" },
  skyX: -158,
  skyY: 12,
  description: {
    uk: "Дельфін — крихітне, але дуже характерне сузір'я літнього неба: п'ять зір утворюють компактний ромб із «хвостом», що справді нагадує стрибаючого дельфіна. Відомий з давніх часів, він розташований поблизу Орла та Альтаїра. Чотири зірки ромба (тіло дельфіна) складають астеризм «Ромб Job» або «Хрест Наполеона» — ці прізвиська виникли через парадокс: зірки Альфа та Бета Дельфіна носять латинські назви Sualocin і Rotanev — назад прочитані «Nicolaus Venator», латинізоване ім'я астронома Нікколо Качаторе, що таємно вставив їх до каталогу у 1814 році.",
    en: "Delphinus is a tiny but very distinctive summer constellation: five stars form a compact diamond with a 'tail' that genuinely resembles a leaping dolphin. Known since antiquity, it lies near Aquila and Altair. The four stars of the diamond have a remarkable secret: Alpha and Beta Delphini bear the Latin names Sualocin and Rotanev — which, read backwards, spell 'Nicolaus Venator,' the Latinized name of astronomer Niccolò Cacciatore, who quietly inserted them into a star catalogue in 1814, giving himself a form of immortality among the stars.",
  },
  legend: {
    uk: "Дельфін пов'язаний з Аполлоном і музикантом Аріоном із Корінфа — одним із найвидатніших кіфаредів античності. Повертаючись із Сицилії після перемоги на музичних змаганнях, Аріон був захоплений піратами, що хотіли вкрасти його нагороди. Дозволивши заспівати останню пісню, вони здивувалися, коли дельфіни зібралися навколо корабля, зачаровані музикою. Аріон стрибнув у море, і один із дельфінів доніс його до берега. Посейдон або Аполлон підняли вірного дельфіна на небо.",
    en: "Delphinus is linked to Apollo and the musician Arion of Corinth, one of antiquity's greatest lyre players. Returning from Sicily after winning a music competition, Arion was seized by pirates who wanted to steal his prizes. They allowed him one final song before throwing him overboard — and were astonished when dolphins gathered around the ship, enchanted by the music. Arion leapt into the sea, and a dolphin carried him safely to shore. Poseidon or Apollo placed the faithful dolphin among the stars in gratitude.",
  },
  howToFind: {
    uk: "Дельфін — один із найприємніших сюрпризів літнього неба для початківця. Знайдіть яскравий Альтаїр (Орел) і дивіться від нього на схід: трохи правіше і вище — компактна група зір у формі ромба з маленьким хвостиком. У темну ніч вона одразу впадає в очі своєю правильністю та компактністю. Дельфін найкраще видно з липня по жовтень.",
    en: "Delphinus is one of the most delightful surprises of the summer sky for a beginner. Find the bright star Altair (Aquila) and look to its northeast: a compact diamond-shaped group of stars with a small tail will immediately catch the eye with its neatness and compactness. The constellation is best seen July through October.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Delphinus_constellation_map.svg/640px-Delphinus_constellation_map.svg.png",
  stars: (generatedStars["delphinus"]?.stars ?? []),
  lines: generatedStars["delphinus"]?.lines,
},

{
  id: "dorado",
  name: { uk: "Меч-Риба", en: "Dorado" },
  skyX: 190,
  skyY: 48,
  description: {
    uk: "Меч-Риба — невелике сузір'я глибокого південного неба, введене нідерландськими мореплавцями наприкінці XVI ст. на честь великої тропічної риби-меча. Попри скромний вигляд, воно містить один із найважливіших об'єктів позагалактичної астрономії: Велику Магелланову Хмару (ВМХ) — найближчу до нас велику галактику на відстані лише 163 000 світлових років. ВМХ видна неозброєним оком як відірваний шматок Чумацького Шляху. Всередині ВМХ знаходиться туманність Тарантул (NGC 2070) — найбільша відома область зореутворення в місцевій групі галактик, у сотні разів більша за туманність Оріона.",
    en: "Dorado is a small constellation of the deep southern sky, introduced by Dutch navigators in the late 16th century and named after the large tropical mahi-mahi fish. Despite its modest appearance, it contains one of the most important objects in extragalactic astronomy: the Large Magellanic Cloud (LMC) — the nearest large galaxy to us at just 163,000 light-years. The LMC is visible to the naked eye as a detached fragment of the Milky Way. Within it lies the Tarantula Nebula (NGC 2070) — the largest known star-forming region in the Local Group of galaxies, hundreds of times the size of the Orion Nebula.",
  },
  legend: {
    uk: "Меч-Риба не має давньогрецьких або римських легенд. Мореплавці XVI ст. називали сузір'я на честь доради — великої золотистої риби, яку часто зустрічали в тропічних водах під час далеких плавань. Велика Магелланова Хмара, що займає значну частину сузір'я, отримала свою назву від Фернана Магеллана: його екіпаж описав ці «хмари» під час першої кругосвітньої подорожі 1519–1522 років, хоча місцеві народи Південної півкулі знали їх тисячоліттями раніше.",
    en: "Dorado has no ancient Greek or Roman legends. The 16th-century navigators named the constellation after the dorado (mahi-mahi) — the large, brilliantly coloured fish they frequently encountered in tropical waters during long ocean voyages. The Large Magellanic Cloud, which occupies much of the constellation, takes its name from Ferdinand Magellan: his crew described these 'clouds' during the first circumnavigation of 1519–1522, though indigenous peoples of the Southern Hemisphere had known them for millennia.",
  },
  howToFind: {
    uk: "Меч-Риба і Велика Магелланова Хмара абсолютно недоступні з України. З Австралії, Нової Зеландії або Південної Африки ВМХ неможливо не помітити в темну ніч — вона виглядає як відірваний шматок Чумацького Шляху на півдні неба і набагато яскравіша за будь-яку іншу галактику на небі для неозброєного ока. Найкраще видно з листопада по березень із Південної півкулі.",
    en: "Dorado and the Large Magellanic Cloud are completely inaccessible from Ukraine. From Australia, New Zealand, or South Africa, the LMC is impossible to miss on a dark night — it looks like a detached fragment of the Milky Way in the southern sky and is far brighter than any other galaxy visible to the naked eye. Best seen November through March from the Southern Hemisphere.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Dorado_constellation_map.svg/640px-Dorado_constellation_map.svg.png",
  stars: (generatedStars["dorado"]?.stars ?? []),
  lines: generatedStars["dorado"]?.lines,
},
{
  id: "draco",
  name: { uk: "Дракон", en: "Draco" },
  skyX: -60,
  skyY: -22,
  description: {
    uk: "Дракон — велике приполярне сузір'я, що звивається навколо Малої Ведмедиці й ніколи не заходить за горизонт із більшості міст України. Його зірки утворюють довгий вигнутий ланцюжок від голови (чотирикутник зір поблизу Геркулеса) аж до хвоста між Великою та Малою Ведмедицями. Туканська зірка Тубан (Альфа Дракона) 5000 років тому була Полярною зіркою — саме на неї орієнтувалися єгиптяни при будівництві пірамід. Крім того, в Дракона знаходиться Кошачє Око (NGC 6543) — одна з найкрасивіших планетарних туманностей, знімок якої від телескопа «Хаббл» став одним із найвідоміших астрофото.",
    en: "Draco is a large circumpolar constellation that winds around Ursa Minor and never sets below the horizon from most of Ukraine. Its stars form a long winding chain from the head (a quadrilateral near Hercules) all the way to the tail between the two Bears. Its brightest star, Thuban (Alpha Draconis), was the North Star 5,000 years ago — the star the ancient Egyptians used to align the pyramids. Draco also contains the Cat's Eye Nebula (NGC 6543), one of the most spectacular planetary nebulae, whose Hubble Space Telescope image became one of the most iconic astrophotographs ever taken.",
  },
  legend: {
    uk: "У давньогрецькій mythology Дракон — стоголовий дракон Ладон, що охороняв золоті яблука Гесперид у саду на краю світу. Здобути ці яблука було одинадцятим подвигом Геракла. За іншою версією, Дракон — той самий, якого богиня Афіна схопила під час битви олімпійців із гігантами і закрутила в небі навколо Полюса, де він і залишився вічно. Обидві легенди відображають архаїчний образ дракона-стража, що охороняє щось безцінне.",
    en: "In Greek mythology, Draco is Ladon, the hundred-headed dragon that guarded the golden apples of the Hesperides at the edge of the world. Obtaining these apples was the eleventh labour of Heracles. Another tradition identifies it as the dragon that the goddess Athena seized during the battle of Olympians against the Giants and hurled spinning into the sky around the Pole, where it has remained ever since. Both legends reflect the archaic image of the guardian dragon protecting something beyond price.",
  },
  howToFind: {
    uk: "Дракон видно цілий рік — знайдіть Малу Ведмедицю і шукайте ланцюжок зір, що обгинає її. Голова Дракона — характерний чотирикутник між Геркулесом і Лірою, впізнаваний навіть у засвіченому небі. Від голови хвіст тягнеться на північ і захід, огинаючи Малу Ведмедицю. Найкраще видно з травня по серпень, коли голова Дракона стоїть майже в зеніті.",
    en: "Draco is visible year-round — find Ursa Minor and look for the chain of stars winding around it. The Dragon's head is a distinctive quadrilateral between Hercules and Lyra, recognizable even in light-polluted skies. From the head the tail sweeps north and west, wrapping around Ursa Minor. Best seen May through August, when the Dragon's head stands nearly at the zenith.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Draco_constellation_map.svg/640px-Draco_constellation_map.svg.png",
  stars: (generatedStars["draco"]?.stars ?? []),
  lines: generatedStars["draco"]?.lines,
},

{
  id: "equuleus",
  name: { uk: "Лоша", en: "Equuleus" },
  skyX: -162,
  skyY: 14,
  description: {
    uk: "Лоша — друге за розміром найменше сузір'я на небі (після Південного Хреста), що складається з чотирьох тьмяних зірок. Попри мікроскопічні розміри, воно одне з найдавніших: Птолемей включив його до свого каталогу у II столітті н. е. Навіть у цьому крихітному сузір'ї є щось цікаве: зірка Гамма Лоша — спектрально-подвійна система, де дві зірки виявляються лише спектроскопічно. Лоша розташована між Дельфіном і Пегасом і практично непомітна на засвіченому небі.",
    en: "Equuleus is the second-smallest constellation in the sky (after Crux), consisting of just four faint stars. Despite its microscopic size, it is one of the oldest: Ptolemy included it in his catalogue in the 2nd century AD. Even this tiny constellation holds something of interest: the star Gamma Equulei is a spectroscopic binary — two stars that can only be distinguished through spectral analysis. Equuleus sits between Delphinus and Pegasus and is virtually invisible from light-polluted locations.",
  },
  legend: {
    uk: "Лоша пов'язана з Целерісом — братом крилатого Пегаса, даром бога Меркурія Кастору (одному з Близнюків). За іншою версією, це Філіра або Гіппа — дочка кентавра Хірона, перетворена на кобилу. Птолемей не залишив чіткого пояснення, і сучасні дослідники вважають, що це могло бути просто зображення «голови коня» — частини більшого образу Пегаса, що не вмістився в одне сузір'я.",
    en: "Equuleus is associated with Celeris — the brother of the winged Pegasus, given as a gift by Mercury to Castor of the Gemini twins. Another tradition links it to Philyra or Hippe, a daughter of the centaur Chiron who was transformed into a mare. Ptolemy left no clear explanation, and modern scholars suggest it may simply have been a 'horse's head' — a fragment of the larger Pegasus figure that did not fit neatly into a single constellation.",
  },
  howToFind: {
    uk: "Лоша — одне з найважчих для пошуку сузір'їв через свої крихітні розміри та тьмяність зір. Знайдіть яскравий Дельфін (компактний ромб) і дивіться трохи лівіше та нижче від нього: чотири тьмяні зірки між Дельфіном і Великим Квадратом Пегаса. У темну ніч за містом їх можна відстежити, але в умовах будь-якого засвічення вони зникають. Найкраще видно у серпні та вересні.",
    en: "Equuleus is one of the hardest constellations to locate due to its tiny size and faint stars. Find the compact diamond of Delphinus and look slightly left and below it: four faint stars between Delphinus and the Great Square of Pegasus. On a truly dark night away from cities they can be traced, but under any light pollution they vanish. Best seen August through September.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Equuleus_constellation_map.svg/640px-Equuleus_constellation_map.svg.png",
  stars: (generatedStars["equuleus"]?.stars ?? []),
  lines: generatedStars["equuleus"]?.lines,
},

{
  id: "eridanus",
  name: { uk: "Еридан", en: "Eridanus" },
  skyX: -185,
  skyY: 25,
  description: {
    uk: "Еридан — друге за площею сузір'я на всьому небі, що тягнеться від зірки Курса (поряд з Оріоном) аж до Ахернара на далекому півдні. Цей довгий звивистий «небесний потік» перетинає 60° небесної сфери по схиленню. Ахернар (Альфа Еридана) — дев'ята за яскравістю зірка всього неба і одна з найбільш сплющених: вона обертається настільки швидко, що її екваторіальний діаметр на 56% більший за полярний. З України видно лише північ сузір'я: Курсу та кілька сусідніх зір; Ахернар залишається за горизонтом.",
    en: "Eridanus is the second-largest constellation in the sky, stretching from the star Cursa (near Orion) all the way south to Achernar. This long winding 'celestial river' spans 60° of declination across the celestial sphere. Achernar (Alpha Eridani) is the ninth-brightest star in the sky and one of the most oblate: it rotates so rapidly that its equatorial diameter is 56% larger than its polar diameter. From Ukraine only the northern part of the constellation is visible — Cursa and a few nearby stars; Achernar remains permanently below the horizon.",
  },
  legend: {
    uk: "Еридан у давньогрецькій mythology — небесна річка, що тече по зоряному небу. Найвідоміший myth пов'язує її з Фаетоном — сином бога Сонця Геліоса. Фаетон випросив у батька дозвіл керувати сонячною колісницею, але не зміг стримати вогненних коней. Колісниця зійшла з дороги і мало не спалила Землю, поки Зевс не зупинив катастрофу блискавкою, скинувши Фаетона в річку. За деякими версіями myth, ця річка і є Еридан — небесний слід падіння Фаетона.",
    en: "Eridanus in Greek mythology is the celestial river flowing across the starry sky. Its most famous myth links it to Phaethon, son of the sun-god Helios. Phaethon persuaded his father to let him drive the solar chariot for a day, but could not control the fiery horses. The chariot veered off course and nearly scorched the Earth until Zeus stopped the catastrophe with a thunderbolt, hurling Phaethon into a river. In some versions of the myth that river is Eridanus — the celestial trace of Phaethon's fall.",
  },
  howToFind: {
    uk: "Знайдіть Рігель (яскрава нижня права зірка Оріона) і дивіться трохи вище та ліворуч від нього: Курса — перша зірка Еридана. Від неї ланцюжок зір іде на захід, потім на південь, поступово спускаючись до горизонту. З України можна простежити перші 15–20 зір сузір'я взимку; решта залишається за горизонтом. Найкраще видно у листопаді та грудні.",
    en: "Find Rigel (the bright lower-right star of Orion) and look slightly above and to its right: Cursa is the first star of Eridanus. From it a chain of stars winds west and then south, gradually descending toward the horizon. From Ukraine you can trace the first 15–20 stars of the constellation in winter; the rest remain below the horizon. Best seen November through December.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Eridanus_constellation_map.svg/640px-Eridanus_constellation_map.svg.png",
  stars: (generatedStars["eridanus"]?.stars ?? []),
  lines: generatedStars["eridanus"]?.lines,
},

{
  id: "fornax",
  name: { uk: "Піч", en: "Fornax" },
  skyX: -195,
  skyY: 26,
  description: {
    uk: "Піч — невелике тьмяне сузір'я південного неба, введене Лакайлем у 1756 році на честь хімічної печі. Попри невиразний вигляд, воно знамените завдяки одному знімку: саме в напрямку Печі наведено «Надглибоке поле Хаббла» (Hubble Ultra Deep Field) — найвидатніший знімок в history астрономії. На цій маленькій ділянці неба (розміром із монету, яку тримають на відстані витягнутої руки) видно понад 10 000 галактик, кожна з яких містить мільярди зірок. Цей знімок став найпереконливішим візуальним підтвердженням масштабів Всесвіту.",
    en: "Fornax is a small, faint southern constellation introduced by Lacaille in 1756 to honour the chemical furnace. Despite its unremarkable appearance, it is famous for one image: the Hubble Ultra Deep Field was aimed at a patch of sky within Fornax. This single photograph — taken toward an area of sky the size of a coin held at arm's length — reveals over 10,000 galaxies, each containing billions of stars. It became the most compelling visual demonstration of the sheer scale of the Universe ever captured.",
  },
  legend: {
    uk: "Піч, як і більшість сузір'їв Лакайля, не має жодної mythology. Лакайль назвав його на честь «athanor» — хімічної печі для тривалого підтримання постійної температури, яку широко використовували в хімічних лабораторіях XVIII ст. Первісна повна назва сузір'я була Fornax Chemica (Хімічна Піч). У 1930 році Міжнародний астрономічний союз скоротив назву до просто Fornax.",
    en: "Fornax, like most of Lacaille's constellations, has no mythology. Lacaille named it after the 'athanor' — a chemical furnace for maintaining steady long-term heat, widely used in 18th-century chemistry laboratories. The original full name was Fornax Chemica (the Chemical Furnace). In 1930 the International Astronomical Union shortened the name to simply Fornax.",
  },
  howToFind: {
    uk: "Піч розташована між Китом і Ериданом у бідній на яскраві зірки частині осінньо-зимового неба. Її найяскравіша зірка — Альфа Печі — має лише 3.9 зоряної величини. З України видно лише північ сузір'я восени та взимку, дуже низько над горизонтом. Жодних яскравих зір або помітних астеризмів немає — ця ділянка неба цікава лише у телескоп для пошуку галактик скупчення Fornax Cluster.",
    en: "Fornax sits between Cetus and Eridanus in a star-poor region of the autumn and winter sky. Its brightest star, Alpha Fornacis, is only magnitude 3.9. From Ukraine only the northern part of the constellation is visible in autumn and winter, very low on the horizon. There are no bright stars or obvious asterisms — this patch of sky is interesting only telescopically, for hunting the galaxies of the Fornax Cluster.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Fornax_constellation_map.svg/640px-Fornax_constellation_map.svg.png",
  stars: (generatedStars["fornax"]?.stars ?? []),
  lines: generatedStars["fornax"]?.lines,
},

{
  id: "hercules",
  name: { uk: "Геркулес", en: "Hercules" },
  skyX: -118,
  skyY: -3,
  description: {
    uk: "Геркулес — п'яте за площею сузір'я неба, хоча не має особливо яскравих зір. Його центральна частина — характерний «Замок» або «Метелик» із чотирьох зір (Зета, Ета, Пі, Епсілон) — добре помітна в темну ніч. Але головний скарб сузір'я — кулясте зоряне скупчення M13, «Велике Геркулесове скупчення»: понад 300 000 зір, стиснутих у кулю діаметром 145 світлових років, на відстані 25 000 св. р. від нас. У 1974 році саме у напрямку M13 було відправлено послання Аресібо — перший навмисний радіосигнал до позаземного розуму. M13 видно неозброєним оком у темну ніч і є однією з найкращих цілей для невеликого телескопа.",
    en: "Hercules is the fifth-largest constellation in the sky, though it lacks particularly bright stars. Its central part — the distinctive 'Keystone' asterism of four stars (Zeta, Eta, Pi, Epsilon) — is clearly visible on a dark night. The constellation's greatest treasure is the globular cluster M13, the 'Great Hercules Cluster': over 300,000 stars packed into a ball 145 light-years in diameter, 25,000 light-years from us. In 1974 the Arecibo Message — humanity's first deliberate radio signal to extraterrestrial intelligence — was beamed in the direction of M13. It is faintly visible to the naked eye on a dark night and is one of the finest targets for a small telescope.",
  },
  legend: {
    uk: "Геракл (Геркулес) — найвеличніший герой давньогрецьких myth, відомий насамперед своїми дванадцятьма подвигами, здійсненими на спокутування вбивства власної родини в нападі божевілля, насланого Герою. Серед подвигів — перемога над Немейським левом, Лернейською гідрою, Стімфалійськими птахами, захоплення Критського бика і коней Діомеда, здобуття яблук Гесперид. На небі Геракл зображений на колінах — можливо, у момент відпочинку або молитви після чергового подвигу.",
    en: "Heracles (Hercules) is the greatest hero of Greek mythology, famous above all for his Twelve Labours — performed as penance for killing his own family during a fit of madness sent by Hera. The labours included slaying the Nemean Lion and the Lernaean Hydra, capturing the Cretan Bull and the Mares of Diomedes, and obtaining the Apples of the Hesperides. In the sky Hercules is depicted kneeling — perhaps in a moment of rest or prayer after another ordeal, though the ancient Greeks themselves debated the pose's meaning.",
  },
  howToFind: {
    uk: "Знайдіть яскравий Арктур (Волопас) і Вегу (Ліра) — Геркулес знаходиться між ними. Центральний «Замок» із чотирьох зір — трапецієподібний малюнок між Вегою та головою Дракона — є найпростішим орієнтиром. Від Замку вгору тягнеться тіло героя, а «голова» вказує в бік Корони Північної. M13 знаходиться на третину відстані між зірками Ета і Зета Геркулеса (між верхніми зірками Замку). Найкраще видно у червні та липні.",
    en: "Find the bright stars Arcturus (Boötes) and Vega (Lyra) — Hercules lies between them. The central 'Keystone' of four stars — a trapezoidal shape between Vega and the head of Draco — is the easiest landmark. From the Keystone the hero's body extends above, with his 'head' pointing toward Corona Borealis. M13 lies one-third of the way between the stars Eta and Zeta Herculis (the upper two Keystone stars). Best seen June through July.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Hercules_constellation_map.svg/640px-Hercules_constellation_map.svg.png",
  stars: (generatedStars["hercules"]?.stars ?? []),
  lines: generatedStars["hercules"]?.lines,
},

{
  id: "horologium",
  name: { uk: "Годинник", en: "Horologium" },
  skyX: -200,
  skyY: 32,
  description: {
    uk: "Годинник — тьмяне невелике сузір'я глибокого південного неба, введене Лакайлем у 1752 році на честь маятникового годинника. Жодна з його зір не досягає третьої зоряної величини. Проте в межах сузір'я знаходиться Скупчення галактик Годинника — одне з найближчих до нас великих скупчень (близько 160 мільйонів світлових років), що містить понад 3000 галактик. Також тут виявлено кілька зір із підтвердженими екзопланетами. З України Годинник недоступний для спостереження.",
    en: "Horologium is a faint, small constellation of the deep southern sky, introduced by Lacaille in 1752 to honour the pendulum clock. None of its stars reaches third magnitude. However, within its boundaries lies the Horologium Supercluster — one of the largest known structures in the Universe, a vast concentration of galaxy clusters spanning roughly 550 million light-years. The constellation also contains several stars with confirmed exoplanets. Horologium is not accessible from Ukraine.",
  },
  legend: {
    uk: "Годинник, як і всі сузір'я Лакайля, не має mythology. Назва вшановує маятниковий годинник — революційний науковий прилад XVII–XVIII ст., що вперше дозволив точно вимірювати час і був незамінний у навігації та астрономічних вимірюваннях. Лакайль сам використовував точні хронометри під час свого картографування південного неба в Південній Африці у 1751–1752 роках. Можна сказати, що без точного годинника не було б і самих карт Лакайля.",
    en: "Horologium, like all of Lacaille's constellations, has no mythology. The name honours the pendulum clock — the revolutionary scientific instrument of the 17th and 18th centuries that first allowed precise timekeeping and was indispensable for navigation and astronomical measurement. Lacaille himself relied on accurate chronometers during his southern sky survey in South Africa in 1751–1752. Without precise clocks, Lacaille's own star maps would not have been possible.",
  },
  howToFind: {
    uk: "Годинник недоступний з України. З Південної півкулі він розташований між Ериданом і Ретикулом, на схід від яскравого Ахернара (Альфа Еридана). Усі зірки тьмяні й без виразної форми. Найкраще видно з листопада по лютий із широт південніше 23° пн. ш.",
    en: "Horologium is not accessible from Ukraine. From the Southern Hemisphere it lies between Eridanus and Reticulum, east of the bright star Achernar (Alpha Eridani). All its stars are faint and form no distinctive pattern. Best seen November through February from latitudes south of 23° North.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Horologium_constellation_map.svg/640px-Horologium_constellation_map.svg.png",
  stars: (generatedStars["horologium"]?.stars ?? []),
  lines: generatedStars["horologium"]?.lines,
},

{
  id: "hydra",
  name: { uk: "Гідра", en: "Hydra" },
  skyX: -145,
  skyY: 20,
  description: {
    uk: "Гідра — найбільше сузір'я серед 88 за площею та найдовше: воно тягнеться по небу більш ніж на 100°, від голови між Раком і Близнюками аж до хвоста поблизу Терезів. Незважаючи на колосальні розміри, Гідра має лише одну яскраву зірку — Альфард («Самотня»), помаранчевий гігант із магнітудою 2.0, що буквально потопає в порожній ділянці неба. На «спині» Гідри лежать менші сузір'я Ворон і Чаша, пов'язані з нею єдиним myth. У межах Гідри знаходиться галактика M83 («Південний Вітряк») — одна з найяскравіших спіральних галактик у телескоп.",
    en: "Hydra is the largest of the 88 constellations by area and the longest: it stretches more than 100° across the sky, from its head between Cancer and Gemini to its tail near Libra. Despite its colossal size, Hydra has only one bright star — Alphard ('the Solitary One'), an orange giant of magnitude 2.0 that floats alone in an otherwise empty region of sky. The smaller constellations Corvus and Crater sit on the Hydra's back, connected to it by a single myth. Within Hydra lies the galaxy M83 ('Southern Pinwheel'), one of the brightest spiral galaxies visible through a telescope.",
  },
  legend: {
    uk: "Гідра — Лернейська гідра, другий подвиг Геракла. Це дев'ятиголова водяна змія, що жила в болоті поблизу Лерни і спустошувала навколишні землі. Основна складність: коли Геракл відрубував одну голову, на її місці виростали дві нові. Вирішення знайшов його племінник Іолай: прижигати шиї смолоскипом одразу після відрубування голови. Гера, яка ненавиділа Геракла, послала краба (сузір'я Рак), щоб відволікти героя — але Геракл розтоптав його. У myth чітко простежуються сусідні сузір'я: Ворон, Чаша, Рак.",
    en: "Hydra is the Lernaean Hydra, the second labour of Heracles. It was a nine-headed water serpent living in the marshes near Lerna, devastating the surrounding countryside. The core difficulty: whenever Heracles cut off one head, two more grew in its place. His nephew Iolaus found the solution — cauterizing each stump with a torch immediately after the cut. Hera, who despised Heracles, sent a crab (the constellation Cancer) to distract the hero — but Heracles crushed it underfoot. The myth weaves together the neighbouring constellations Corvus, Crater, and Cancer into one narrative.",
  },
  howToFind: {
    uk: "Голова Гідри — невелике кільце з п'яти–шести зір між Раком і Малим Псом — найлегше знайти в лютому та березні. Від голови тіло тягнеться на схід під Левом, а Альфард — єдина яскрава зірка в порожній ділянці неба на південь від Леопарда. Продовжуйте лінію далі на схід: через Чашу і Ворона аж до хвоста під Терезами. Для того щоб охопити все сузір'я, потрібно охопити поглядом мало не пів-неба.",
    en: "The head of Hydra — a small ring of five to six stars between Cancer and Canis Minor — is the easiest starting point, best found in February and March. From the head the body sweeps east below Leo, with Alphard the only bright star in an otherwise empty region south of Leo. Continue east past Crater and Corvus all the way to the tail below Libra. Tracing the full constellation requires spanning nearly half the sky in a single sweep.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Hydra_constellation_map.svg/640px-Hydra_constellation_map.svg.png",
  stars: (generatedStars["hydra"]?.stars ?? []),
  lines: generatedStars["hydra"]?.lines,
},

{
  id: "hydrus",
  name: { uk: "Водяна Змія", en: "Hydrus" },
  skyX: 188,
  skyY: 50,
  description: {
    uk: "Водяна Змія — невелике сузір'я глибокого південного неба, введене нідерландськими мореплавцями Кейзером і де Гаутманом наприкінці XVI ст. Не слід плутати з Гідрою (Hydra) — значно більшим сузір'ям Північної півкулі. Водяна Змія розташована між Великою та Малою Магеллановими Хмарами і в певному сенсі «тримає» їх у своїх кільцях. Зірка Бета Водяної Змії — одна з найближчих одиночних зірок, схожих на Сонце (24 світлових роки), що робить її перспективним кандидатом для пошуку екзопланет. Недоступна з України.",
    en: "Hydrus is a small constellation of the deep southern sky, introduced by Dutch navigators Keyser and de Houtman in the late 16th century. It should not be confused with Hydra — the much larger northern constellation. Hydrus is situated between the Large and Small Magellanic Clouds, effectively 'holding' them within its coils. The star Beta Hydri is one of the nearest Sun-like solitary stars at 24 light-years, making it a strong candidate in the search for exoplanets. Not visible from Ukraine.",
  },
  legend: {
    uk: "Водяна Змія не має mythology — це суто навігаційне сузір'я епохи великих географічних відкриттів. Назву обрали, щоб відрізнити «південну водяну змію» від античної Гідри у Північній півкулі, хоча ці дві змії не пов'язані між собою жодним спільним myth. Цікаво, що і Гідра, і Водяна Змія є серед найдовших і найвидовищніших зоряних «рептилій» неба — просто на протилежних його половинах.",
    en: "Hydrus has no mythology — it is a purely navigational constellation of the Age of Exploration. The name was chosen to distinguish the 'southern water snake' from the ancient Hydra of the Northern Hemisphere, though the two serpents share no common myth. Interestingly, both Hydra and Hydrus are among the sky's longest and most impressive stellar 'reptiles' — just on opposite halves of the celestial sphere.",
  },
  howToFind: {
    uk: "Водяна Змія недоступна з України. З Південної півкулі шукайте її між Великою Магеллановою Хмарою (в Меч-Рибі та Столовій Горі) і Малою Магеллановою Хмарою (в Тукані). Три яскравіші зірки утворюють невеликий трикутник між двома «хмарами». Найкраще видно з жовтня по грудень із широт південніше 8° пн. ш.",
    en: "Hydrus is not visible from Ukraine. From the Southern Hemisphere, look for it between the Large Magellanic Cloud (in Dorado and Mensa) and the Small Magellanic Cloud (in Tucana). Three brighter stars form a small triangle between the two 'clouds.' Best seen October through December from latitudes south of 8° North.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Hydrus_constellation_map.svg/640px-Hydrus_constellation_map.svg.png",
  stars: (generatedStars["hydrus"]?.stars ?? []),
  lines: generatedStars["hydrus"]?.lines,
},

{
  id: "indus",
  name: { uk: "Індієць", en: "Indus" },
  skyX: 165,
  skyY: 45,
  description: {
    uk: "Індієць — тьмяне сузір'я південного неба, введене Кейзером і де Гаутманом близько 1598 року і що зображує «індійця» — мешканця одного з регіонів, які відвідали нідерландські мореплавці (Індія, Ост-Індія чи Америка — точно невідомо). Сузір'я не має зір яскравіших за 3.1 зоряної величини і жодних помітних глибоких об'єктів у межах своїх кордонів. Проте поряд із ним розташована зірка Епсілон Індійця — одна з найближчих до Сонця зір, схожих на нього (11.8 світлових роки), яка має підтверджену систему з двома коричневими карликами.",
    en: "Indus is a faint southern constellation introduced by Keyser and de Houtman around 1598, depicting an 'Indian' — an inhabitant of one of the regions visited by Dutch navigators (whether India, the East Indies, or the Americas remains unclear). It has no stars brighter than magnitude 3.1 and no notable deep-sky objects within its boundaries. However, nearby lies Epsilon Indi — one of the nearest Sun-like stars to our Solar System at 11.8 light-years, with a confirmed companion system of two brown dwarfs.",
  },
  legend: {
    uk: "Індієць не має mythology — це суто етнографічна назва, данина тим землям і народам, які нідерландські мореплавці зустрічали під час своїх торгових і дослідницьких плавань наприкінці XVI ст. Фігуру зображували по-різному: як жителя Індії з копицею, як американського індіанця з луком або просто як екзотичного чужинця. Вибір назви відображає колоніальний погляд епохи, а не реальні культурні зв'язки.",
    en: "Indus has no mythology — it is a purely ethnographic name, a tribute to the lands and peoples encountered by Dutch navigators during their trading and exploration voyages in the late 16th century. The figure was depicted variously as an Indian with a spear, a Native American with a bow, or simply as an exotic stranger. The choice of name reflects the colonial perspective of the era rather than any real cultural connection.",
  },
  howToFind: {
    uk: "Індієць недоступний з України. З Південної півкулі він розташований між Журавлем, Мікроскопом і Павичем. Усі його зірки тьмяні, і без зоряної карти знайти сузір'я важко. Єдиний орієнтир — яскравий Фомальгаут у сусідньому Південному Рибі; від нього рухайтеся на схід. Найкраще видно у серпні та вересні з широт південніше 15° пн. ш.",
    en: "Indus is not visible from Ukraine. From the Southern Hemisphere it lies between Grus, Microscopium, and Pavo. All its stars are faint and without a star chart the constellation is difficult to locate. The only useful landmark is the bright Fomalhaut in nearby Piscis Austrinus; from there sweep east. Best seen August through September from latitudes south of 15° North.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Indus_constellation_map.svg/640px-Indus_constellation_map.svg.png",
  stars: (generatedStars["indus"]?.stars ?? []),
  lines: generatedStars["indus"]?.lines,
},

{
  id: "lacerta",
  name: { uk: "Ящірка", en: "Lacerta" },
  skyX: -52,
  skyY: -18,
  description: {
    uk: "Ящірка — невелике приполярне сузір'я між Лебедем і Андромедою, введене польським астрономом Яном Гевелієм у 1687 році. Воно складається з ланцюжка тьмяних зір, що звивається як ящірка, і не має жодної зірки яскравішої за 3.8 зоряної величини. Проте тут є знаменитий об'єкт: BL Ящірки (BL Lac) — прототип цілого класу активних галактичних ядер, що нині звуться «блазарами». Це надзвичайно яскраве активне ядро далекої галактики, яке міняє яскравість настільки стрімко й непередбачувано, що спочатку його прийняли за змінну зірку в нашій галактиці.",
    en: "Lacerta is a small circumpolar constellation between Cygnus and Andromeda, introduced by Polish astronomer Johannes Hevelius in 1687. It consists of a zigzag chain of faint stars resembling a lizard and has no star brighter than magnitude 3.8. However, it contains a famous object: BL Lacertae (BL Lac) — the prototype of an entire class of active galactic nuclei now called blazars. This extraordinarily luminous active nucleus of a distant galaxy changes in brightness so rapidly and unpredictably that it was initially mistaken for a variable star within our own galaxy.",
  },
  legend: {
    uk: "Ящірка не має mythology — Гевелій заповнив цим сузір'ям порожню ділянку між яскравими Лебедем, Пегасом і Андромедою. За легендою, Гевелій планував назвати сузір'я «Скіпетром Яна III Собеського» на честь польського короля, але врешті вирішив залишити нейтральну назву. Самі зірки Ящірки раніше іноді включали до сусідніх сузір'їв — зокрема до Андромеди — але Гевелій виділив їх в окрему фігуру.",
    en: "Lacerta has no mythology — Hevelius created it to fill an empty patch of sky between the prominent constellations Cygnus, Pegasus, and Andromeda. According to tradition, Hevelius initially considered naming it 'Sceptrum Brandenburgicum' after the Brandenburg sceptre, but ultimately chose a neutral name. The stars of Lacerta were previously sometimes grouped with neighbouring constellations — including Andromeda — before Hevelius separated them into a distinct figure.",
  },
  howToFind: {
    uk: "Ящірка розташована між Денебом (Лебідь) і Великим Квадратом Пегаса. Знайдіть обидва ці орієнтири і шукайте між ними звивистий ланцюжок тьмяних зір. Як приполярне сузір'я, воно видно цілий рік, але краще за все спостерігається з вересня по листопад, коли піднімається до зеніту. В умовах міського засвічення Ящірка практично невидима — потрібне темне небо.",
    en: "Lacerta lies between Deneb (Cygnus) and the Great Square of Pegasus. Find both these landmarks and look for a zigzag chain of faint stars between them. As a circumpolar constellation it is visible year-round, but best observed September through November when it stands near the zenith. Under urban light pollution Lacerta is virtually invisible — a dark sky is essential.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Lacerta_constellation_map.svg/640px-Lacerta_constellation_map.svg.png",
  stars: (generatedStars["lacerta"]?.stars ?? []),
  lines: generatedStars["lacerta"]?.lines,
},
{
  id: "lepus",
  name: { uk: "Заєць", en: "Lepus" },
  skyX: -178,
  skyY: 20,
  description: {
    uk: "Заєць — невелике, але помітне зимове сузір'я прямо під ногами Оріона. Чотири яскравіші зірки утворюють виразний чотирикутник, від якого відходять дві пари зір — «вуха» та «лапи». Найвідоміший об'єкт — кулясте скупчення M79, одне з небагатьох таких скупчень, добре видних узимку. Цікаве відкриття: зірка R Зайця (Пурпурна зірка Гінда) — одна з найчервоніших зірок на небі, вуглецева зірка, що виглядає у телескоп як крапля рубінової крові на чорному оксамиті. Заєць видно з усієї території України взимку.",
    en: "Lepus is a small but distinctive winter constellation sitting directly below the feet of Orion. Its four brighter stars form a clear quadrilateral, from which two pairs of stars extend as 'ears' and 'feet.' The most notable object is the globular cluster M79, one of the few such clusters well-placed in winter skies. A remarkable discovery: the star R Leporis (Hind's Crimson Star) is one of the reddest stars in the sky — a carbon star that appears through a telescope as a drop of ruby blood on black velvet. Lepus is visible from all of Ukraine in winter.",
  },
  legend: {
    uk: "У давньогрецькій mythology Заєць — улюблена здобич Оріона: мисливець переслідує його по зоряному небу разом зі своїми псами (Великим і Малим Псом). Деякі античні автори розповідали іншу легенду: мешканці острова Лерос завезли одну пару зайців, ті розмножилися і знищили всі врожаї. Острів врятувався лише після тотального полювання. На згадку про це лихо і в науку нащадкам зайця підняли на небо — щоб не забували, що надмір навіть чогось гарного буває небезпечний.",
    en: "In Greek mythology, the Hare is the favourite quarry of Orion: the hunter pursues it across the starry sky alongside his two dogs (Canis Major and Canis Minor). Some ancient authors told a different tale: the inhabitants of the island of Leros imported a single pair of hares, which multiplied and devastated all the crops. The island was saved only after a total hunt. In memory of this disaster and as a lesson to future generations, the hare was placed in the sky — a reminder that an excess of even something harmless can bring ruin.",
  },
  howToFind: {
    uk: "Заєць — один із найлегших об'єктів для пошуку взимку. Знайдіть Оріон і дивіться прямо під нього: чотирикутник із чотирьох зір між третьої та четвертої величини — це тіло Зайця. Зірки Арнеб (Альфа) та Нівал (Бета) є найяскравішими. Поруч на заході знаходиться Рігель — права нижня зірка Оріона, і від неї легко перейти до Зайця. Найкраще видно у грудні та лютому.",
    en: "Lepus is one of the easiest winter objects to find. Locate Orion and look directly below it: a quadrilateral of four third-and-fourth-magnitude stars is the body of the Hare. Arneb (Alpha) and Nihal (Beta) are the brightest. Nearby to the west is Rigel — Orion's bright lower-right star — and from there it is easy to hop to Lepus. Best seen December through February.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Lepus_constellation_map.svg/640px-Lepus_constellation_map.svg.png",
  stars: (generatedStars["lepus"]?.stars ?? []),
  lines: generatedStars["lepus"]?.lines,
},

{
  id: "libra",
  name: { uk: "Терези", en: "Libra" },
  skyX: -120,
  skyY: 20,
  description: {
    uk: "Терези — єдине зодіакальне сузір'я, що зображує неживий предмет, а не істоту. Воно є відносно молодим серед зодіакальних: у давньогрецькі часи його зірки вважалися клешнями сусіднього Скорпіона, і лише за часів Римської республіки їх виділили в окреме сузір'я. Найяскравіша зірка — Зубен-аль-Шемалі (Бета Терезів) — дивна аномалія: вона яскравіша за зірку Альфа того ж сузір'я. Зубен-аль-Шемалі є однією з небагатьох зірок, що здаються людському оку зеленуватими — хоча фізично «зелених зірок» не існує.",
    en: "Libra is the only zodiac constellation representing an inanimate object rather than a living creature. It is relatively young among the zodiacal constellations: in ancient Greek times its stars were considered the claws of neighbouring Scorpius, and only during the Roman Republic were they separated into a distinct constellation. Its brightest star — Zubenelschemali (Beta Librae) — is an odd anomaly: it outshines the Alpha star of the same constellation. Zubenelschemali is one of the very few stars that appears slightly greenish to the human eye, though physically 'green stars' do not exist.",
  },
  legend: {
    uk: "Для римлян Терези були символом справедливості й закону — їх асоціювали з богинею правосуддя Астреєю (уособленою сузір'ям Діви поряд) або з самим Юпітером як охоронцем закону. Назви зірок зберегли більш давні арабські переклади грецьких «пазурів Скорпіона»: Зубен-ель-Генубі означає «південний пазур», Зубен-аль-Шемалі — «північний пазур». Включення Терезів до зодіаку збіглося з епохою розквіту Римської республіки, коли ідеали рівноваги та справедливості стали центральними в державній ідеології.",
    en: "For the Romans, Libra symbolized justice and law — associated with the goddess Astraea (represented by neighbouring Virgo) or with Jupiter as guardian of law. The star names preserve the older Arabic translations of the Greek 'claws of the Scorpion': Zubenelgenubi means 'southern claw' and Zubenelschemali means 'northern claw.' The elevation of Libra to a separate zodiac constellation coincided with the height of the Roman Republic, when ideals of balance and justice became central to Roman state ideology.",
  },
  howToFind: {
    uk: "Терези розташовані між Скорпіоном (схід) і Дівою (захід). Знайдіть яскраву Спіку (Діва) і дивіться від неї на схід — група відносно тьмяних зірок із характерним трапецієподібним малюнком і є Терезами. Зубен-ель-Генубі (Альфа) і Зубен-аль-Шемалі (Бета) — найяскравіші. Навесні порівняйте кольори: Бета справді здається злегка зеленуватою на тлі інших зір. Найкраще видно у травні та червні.",
    en: "Libra lies between Scorpius to the east and Virgo to the west. Find the bright star Spica (Virgo) and sweep east — a group of relatively faint stars in a characteristic trapezoidal pattern is Libra. Zubenelgenubi (Alpha) and Zubenelschemali (Beta) are the brightest. In spring, compare their colours: Beta genuinely appears slightly greenish against the backdrop of other stars. Best seen May through June.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Libra_constellation_map.svg/640px-Libra_constellation_map.svg.png",
  stars: (generatedStars["libra"]?.stars ?? []),
  lines: generatedStars["libra"]?.lines,
},

{
  id: "lupus",
  name: { uk: "Вовк", en: "Lupus" },
  skyX: -125,
  skyY: 30,
  description: {
    uk: "Вовк — стародавнє сузір'я між Центавром і Скорпіоном, відоме ще давнім грекам і занесене до каталогу Птолемея. Воно лежить у густій частині Чумацького Шляху і містить кілька розсіяних зоряних скупчень та подвійних зірок. У 1006 році в межах Вовка спалахнула Наднова SN 1006 — найяскравіша зірка, будь-коли зафіксована в записаній history людства: за сучасними оцінками, вона досягала −7.5 зоряної величини і була видна вдень. Арабські, китайські, єгипетські та швейцарські хроніки зафіксували цю подію. З України видно лише краєчок сузір'я.",
    en: "Lupus is an ancient constellation between Centaurus and Scorpius, known to the ancient Greeks and catalogued by Ptolemy. It lies in a rich section of the Milky Way and contains several open clusters and double stars. In 1006 the supernova SN 1006 blazed within Lupus — the brightest stellar event ever recorded in human history, estimated at magnitude −7.5 and reportedly visible in daylight. Arab, Chinese, Egyptian, and Swiss chronicles all recorded the event. Only the very edge of the constellation is visible from Ukraine.",
  },
  legend: {
    uk: "У давньогрецькій традиції Вовк не мав самостійної легенди: його зображували як дику тварину, нанизану на списа Центавра (сусіднього сузір'я) і яку той несе до Вівтаря (Ара) для жертвоприношення. Лише в пізнішій римській традиції тварину ідентифікували як вовка. Деякі античні автори вважали, що це Лікаон — аркадський цар, якого Зевс перетворив на вовка за те, що той подав богові людське м'ясо замість жертовної тварини.",
    en: "In ancient Greek tradition, Lupus had no independent legend: it was depicted as a wild animal skewered on the spear of Centaurus (the neighbouring constellation) being carried to the Altar (Ara) for sacrifice. Only in later Roman tradition was the animal specifically identified as a wolf. Some ancient authors believed it represented Lycaon — the Arcadian king whom Zeus transformed into a wolf as punishment for serving the god human flesh instead of a sacrificial animal.",
  },
  howToFind: {
    uk: "Вовк знаходиться на південь від Скорпіона та на схід від Центавра. З України він практично недоступний: видно лише найпівнічніші зірки в липні, дуже низько над горизонтом. Для повноцінного спостереження потрібні широти південніше 35° пн. ш. З Греції або Кіпру влітку можна спробувати побачити найяскравіші зірки сузір'я над південним горизонтом.",
    en: "Lupus lies south of Scorpius and east of Centaurus. From Ukraine it is practically inaccessible — only the northernmost stars are briefly visible in July, very low on the horizon. Full observation requires latitudes south of 35° North. From Greece or Cyprus in summer one can attempt to spot the brightest constellation stars above the southern horizon.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Lupus_constellation_map.svg/640px-Lupus_constellation_map.svg.png",
  stars: (generatedStars["lupus"]?.stars ?? []),
  lines: generatedStars["lupus"]?.lines,
},

{
  id: "lynx",
  name: { uk: "Рись", en: "Lynx" },
  skyX: -138,
  skyY: -8,
  description: {
    uk: "Рись — велике, але надзвичайно тьмяне сузір'я між Возничим і Великою Ведмедицею, введене Гевелієм у 1687 році. Найяскравіша зірка має лише 3.1 зоряної величини, а більшість зір четвертої та п'ятої. За переказами, Гевелій назвав його Рис'ю, бо «треба мати очі рисі, щоб взагалі розгледіти ці зірки». У межах сузір'я знаходиться NGC 2419 — «Галактичний мандрівник»: кулясте скупчення настільки далеко від центру Чумацького Шляху (300 000 світлових років), що астрономи довго сумнівалися, чи належить воно взагалі до нашої галактики.",
    en: "Lynx is a large but extremely faint constellation between Auriga and Ursa Major, introduced by Hevelius in 1687. Its brightest star is only magnitude 3.1, with most stars at fourth and fifth magnitude. According to tradition, Hevelius named it Lynx because 'one needs the eyes of a lynx to see these stars at all.' Within the constellation lies NGC 2419 — the 'Intergalactic Wanderer': a globular cluster so far from the centre of the Milky Way (300,000 light-years) that astronomers long debated whether it belonged to our galaxy at all.",
  },
  legend: {
    uk: "Рись не має давньогрецького або римського підґрунтя — це суто авторська вигадка Гевелія XVII ст. Польський астроном, систематично заповнюючи порожні ділянки зоряного неба, виявив між Возничим і Великою Ведмедицею великий «тихий» простір, де бракувало сузір'я. Він заповнив його ланцюжком із кількох тьмяних зір і назвав Рис'ю — з іронічним жартом щодо необхідних для пошуку якостей зору спостерігача.",
    en: "Lynx has no Greek or Roman mythological background — it is a purely original creation of Hevelius in the 17th century. The Polish astronomer, systematically filling empty patches of the sky, found a large quiet space between Auriga and Ursa Major that lacked a constellation. He filled it with a chain of faint stars and named it Lynx — with an ironic joke about the quality of vision required to find it.",
  },
  howToFind: {
    uk: "Рись займає велику ділянку між Близнюками, Возничим і Великою Ведмедицею — але побачити її непросто. Починайте від Капелли (Возничий) або зірок ручки Великого Ковша і шукайте слабкий зигзагоподібний ланцюжок зір між ними. У темну ніч за містом можна простежити 6–7 зір сузір'я; будь-яке засвічення повністю ховає Рись. Найкраще видно у лютому та березні.",
    en: "Lynx occupies a large area between Gemini, Auriga, and Ursa Major — but it is far from easy to see. Start from Capella (Auriga) or the handle stars of the Big Dipper and look for a faint zigzag chain of stars between them. On a truly dark night 6–7 constellation stars can be traced; any light pollution hides Lynx completely. Best seen February through March.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Lynx_constellation_map.svg/640px-Lynx_constellation_map.svg.png",
  stars: (generatedStars["lynx"]?.stars ?? []),
  lines: generatedStars["lynx"]?.lines,
},

{
  id: "leo-minor",
  name: { uk: "Малий Лев", en: "Leo Minor" },
  skyX: -132,
  skyY: 5,
  description: {
    uk: "Малий Лев — невелике сузір'я між Великою Ведмедицею та Левом, введене Гевелієм у 1687 році. Воно не має яскравих зір (найяскравіша — 46 Малого Лева з магнітудою 3.8) і помітного малюнку. Є невелика курйозна деталь: у сузір'ї немає зірки Альфа — через помилку Франциска Бейлі при складанні каталогу 1845 року літеру Альфа просто не присвоїли жодній зірці, і це відтоді не виправляли. У межах сузір'я знаходяться кілька тьмяних галактик, доступних лише великому телескопу.",
    en: "Leo Minor is a small constellation between Ursa Major and Leo, introduced by Hevelius in 1687. It has no bright stars (the brightest, 46 Leonis Minoris, is magnitude 3.8) and no distinctive pattern. A small curiosity: the constellation has no Alpha star — due to an oversight by Francis Baily when compiling his 1845 catalogue, the letter Alpha was simply never assigned to any star, and this has never been corrected. The constellation contains several faint galaxies accessible only through a large telescope.",
  },
  legend: {
    uk: "Малий Лев не має mythology — Гевелій заповнив ним простір між Левом і Великою Ведмедицею, не залишивши жодних пояснень щодо вибору назви. Можливо, сузір'я мало символізувати молодого лева або левеня поруч із дорослим Левом — так само, як Мала Ведмедиця сусідить із Великою. Незважаючи на відсутність myth, воно присутнє в офіційному каталозі IAU як одне з 88 сучасних сузір'їв.",
    en: "Leo Minor has no mythology — Hevelius filled the gap between Leo and Ursa Major with it, leaving no explanation for the choice of name. It was presumably meant to symbolize a young lion or lion cub alongside the adult Leo — just as Ursa Minor neighbours Ursa Major. Despite the absence of myth, it is listed in the official IAU catalogue as one of the 88 modern constellations.",
  },
  howToFind: {
    uk: "Малий Лев розташований між Регулом (Лев) та зірками «дна» Великого Ковша. Знайдіть обидва орієнтири і шукайте між ними невелику групу тьмяних зір. Жодного яскравого астеризму немає, тому для пошуку потрібне темне небо та зоряна карта. Найкраще видно у березні та квітні, коли сузір'я стоїть досить високо у весняному небі.",
    en: "Leo Minor lies between Regulus (Leo) and the bottom stars of the Big Dipper. Find both landmarks and look for a small group of faint stars between them. There is no bright asterism, so dark skies and a star chart are needed. Best seen March through April, when the constellation stands reasonably high in the spring sky.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Leo_Minor_constellation_map.svg/640px-Leo_Minor_constellation_map.svg.png",
  stars: (generatedStars["leo-minor"]?.stars ?? []),
  lines: generatedStars["leo-minor"]?.lines,
},

{
  id: "mensa",
  name: { uk: "Столова Гора", en: "Mensa" },
  skyX: 192,
  skyY: 55,
  description: {
    uk: "Столова Гора — найпівденніше сузір'я серед усіх 88, назване на честь Столової гори поблизу Кейптауна, звідки Лакайль проводив свої спостереження у 1751–1752 роках. Це єдине сузір'я, назване на честь географічного об'єкта на Землі. Жодна з його зір не яскравіша за 5.1 зоряної величини — Столова Гора є найтьмянішим із усіх 88 сузір'їв. Проте тут розташована частина Великої Магелланової Хмари, що «перетікає» сюди із сусідньої Меч-Риби, — і в цьому сенсі сузір'я містить мільярди зірок, просто дуже далеко.",
    en: "Mensa is the southernmost of all 88 constellations, named after Table Mountain near Cape Town, from where Lacaille conducted his observations in 1751–1752. It is the only constellation named after a geographical feature on Earth. None of its stars is brighter than magnitude 5.1 — Mensa is the faintest of all 88 constellations by its brightest star. However, part of the Large Magellanic Cloud spills into it from neighbouring Dorado — so in a sense the constellation contains billions of stars, just very far away.",
  },
  legend: {
    uk: "Столова Гора — єдине сузір'я з «земною» назвою і без жодної mythology. Лакайль назвав його на честь скелястого плато над Кейптауном, яке сьогодні є одним із найвідоміших природних орієнтирів Африки. Реальна Столова гора вкрита хмарами приблизно 160 днів на рік — і Лакайль побачив у цьому поетичну паралель: частина Великої Магелланової Хмари, що стелиться над сузір'ям, нагадує хмарну скатертину на вершині гори.",
    en: "Mensa is the only constellation with an earthly name and no mythology. Lacaille named it after the flat-topped rocky plateau above Cape Town, today one of Africa's most iconic natural landmarks. The real Table Mountain is covered by clouds about 160 days per year — and Lacaille saw a poetic parallel: the part of the Large Magellanic Cloud that drifts across the constellation resembles the famous 'tablecloth' of cloud that spreads across the mountain's summit.",
  },
  howToFind: {
    uk: "Столова Гора недоступна з України — вона ніколи не піднімається над горизонтом північніше 5° пн. ш. З Південної півкулі вона є приполярною і видна цілий рік; найкраще з грудня по лютий. Орієнтир — Велика Магелланова Хмара: яскрава її частина в Меч-Рибі, а тьмяніший «хвіст» заходить у Столову Гору.",
    en: "Mensa is not accessible from Ukraine — it never rises above the horizon north of 5° North. From the Southern Hemisphere it is circumpolar and visible year-round; best placed December through February. The landmark is the Large Magellanic Cloud: its bright core lies in Dorado, while a fainter extension drifts into Mensa.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Mensa_constellation_map.svg/640px-Mensa_constellation_map.svg.png",
  stars: (generatedStars["mensa"]?.stars ?? []),
  lines: generatedStars["mensa"]?.lines,
},

{
  id: "microscopium",
  name: { uk: "Мікроскоп", en: "Microscopium" },
  skyX: -172,
  skyY: 32,
  description: {
    uk: "Мікроскоп — тьмяне невелике сузір'я південного неба, введене Лакайлем у 1756 році на честь складеного мікроскопа — одного з революційних наукових інструментів XVII–XVIII ст. Жодна з його зірок не перевищує четвертої зоряної величини. У межах сузір'я виявлено кілька зір із підтвердженими екзопланетами. Зірка AU Мікроскопа — молода зірка, навколо якої виявлено протопланетний диск з активним рухом речовини: у 2020 році телескоп «Хаббл» зафіксував у диску хвилі, схожі на ті, що виникають під час формування планет.",
    en: "Microscopium is a faint, small southern constellation introduced by Lacaille in 1756 to honour the compound microscope — one of the revolutionary scientific instruments of the 17th and 18th centuries. None of its stars exceeds fourth magnitude. The constellation contains several stars with confirmed exoplanets. The star AU Microscopii is a young star surrounded by a protoplanetary disk with active material movement: in 2020 the Hubble Space Telescope detected waves in the disk resembling those produced during planet formation.",
  },
  legend: {
    uk: "Мікроскоп, як і всі сузір'я Лакайля, не має mythology. Назва вшановує мікроскоп — прилад, що відкрив людству мікросвіт і змінив біологію, медицину й розуміння природи хвороб. Антоні ван Левенгук, що вдосконалив мікроскоп у 1670-х роках, зробив це приблизно за 80 років до того, як Лакайль назвав сузір'я. Символічно, що сузір'я Мікроскопа і Телескопа сусідять: разом вони позначають два полюси наукового пізнання — малого й великого.",
    en: "Microscopium, like all of Lacaille's constellations, has no mythology. The name honours the microscope — the instrument that opened the microcosm to humanity and transformed biology, medicine, and the understanding of disease. Antonie van Leeuwenhoek, who refined the microscope in the 1670s, did so roughly 80 years before Lacaille named the constellation. It is symbolically fitting that Microscopium and Telescopium are neighbours in the sky: together they represent the two poles of scientific inquiry — the infinitely small and the infinitely large.",
  },
  howToFind: {
    uk: "Мікроскоп розташований на південь від Козорога і Стрільця, між Журавлем і Індійцем. З України він видно дуже низько над горизонтом у серпні та вересні, лише з відкритим горизонтом на півдні. Усі зірки тьмяні й без характерної форми — без зоряної карти знайти практично неможливо.",
    en: "Microscopium lies south of Capricornus and Sagittarius, between Grus and Indus. From Ukraine it is visible very low on the horizon in August and September, only with an unobstructed southern view. All stars are faint and form no distinctive pattern — virtually impossible to locate without a star chart.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Microscopium_constellation_map.svg/640px-Microscopium_constellation_map.svg.png",
  stars: (generatedStars["microscopium"]?.stars ?? []),
  lines: generatedStars["microscopium"]?.lines,
},

{
  id: "monoceros",
  name: { uk: "Єдиноріг", en: "Monoceros" },
  skyX: -168,
  skyY: 18,
  description: {
    uk: "Єдиноріг — велике, але тьмяне сузір'я в центрі зимового неба, що лежить прямо всередині Зимового Трикутника (Сіріус, Процьон, Бетельгейзе). Незважаючи на тьмяність зір, Єдиноріг надзвичайно багатий на туманності та зоряні скупчення, бо лежить у площині Чумацького Шляху. Найвидатніший об'єкт — Туманність Розетта (NGC 2237): величезна хмара газу діаметром 130 світлових років, в якій народжуються зірки. Ще одна перлина — NGC 2264 із «Ялинковим скупченням» та «Конусоподібною туманністю». Все це недоступне для неозброєного ока, але фантастично виглядає на фотографіях.",
    en: "Monoceros is a large but faint constellation in the heart of the winter sky, lying directly inside the Winter Triangle (Sirius, Procyon, Betelgeuse). Despite its dim stars, Monoceros is extraordinarily rich in nebulae and star clusters because it lies along the plane of the Milky Way. Its finest object is the Rosette Nebula (NGC 2237): a vast gas cloud 130 light-years in diameter where stars are actively forming. Another gem is NGC 2264 with the Christmas Tree Cluster and the Cone Nebula. All of this is invisible to the naked eye but spectacular in photographs.",
  },
  legend: {
    uk: "Єдиноріг не фігурує в давньогрецьких myth — сузір'я введене значно пізніше: перші згадки відносяться до XVII ст. Єдиноріг як тварина широко зустрічається в середньовічній європейській традиції як символ чистоти й неприборканої сили, а також у перській та китайській mythology. Деякі дослідники стверджують, що сузір'я з'явилося на зоряних картах Планціуса близько 1612 року, але точне походження залишається дискусійним. Найімовірніше, це просто романтична назва для нанесення на небесну карту між трьома сузір'ями-псами Оріона.",
    en: "Monoceros does not appear in ancient Greek myths — the constellation was introduced much later, with the earliest references dating to the 17th century. The unicorn as an animal figures widely in medieval European tradition as a symbol of purity and untameable power, as well as in Persian and Chinese mythology. Some researchers trace the constellation to Plancius's star maps around 1612, but its exact origin remains debated. Most likely it was simply a romantic name chosen to fill the sky between the three dog-constellations of Orion's hunt.",
  },
  howToFind: {
    uk: "Знайдіть Зимовий Трикутник — Сіріус (Великий Пес), Процьон (Малий Пес), Бетельгейзе (Оріон) — і дивіться всередину нього: це і є Єдиноріг. Зір яскравіших за третю величину немає, тому для пошуку потрібне темне небо. В умовах чистого темного неба крізь Єдиноріг проходить слабка смуга Чумацького Шляху. Найкраще видно у грудні та лютому.",
    en: "Find the Winter Triangle — Sirius (Canis Major), Procyon (Canis Minor), Betelgeuse (Orion) — and look into the space enclosed by them: that is Monoceros. No stars are brighter than third magnitude, so dark skies are needed. Under a truly dark sky a faint band of the Milky Way passes through Monoceros. Best seen December through February.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Monoceros_constellation_map.svg/640px-Monoceros_constellation_map.svg.png",
  stars: (generatedStars["monoceros"]?.stars ?? []),
  lines: generatedStars["monoceros"]?.lines,
},

{
  id: "musca",
  name: { uk: "Муха", en: "Musca" },
  skyX: 182,
  skyY: 46,
  description: {
    uk: "Муха — невелике, але відносно помітне сузір'я глибокого південного неба між Хрестом і Кілем. Введене нідерландськими мореплавцями наприкінці XVI ст., воно є одним із небагатьох «комашиних» сузір'їв неба. Найяскравіша зірка — Альфа Мухи (магнітуда 2.69). У межах сузір'я знаходяться кулясті скупчення NGC 4833 і NGC 4372, а також темна туманність «Вугільний Мішок» частково заходить у його межі з сусіднього Хреста. Перша назва сузір'я була Апіс (Бджола), але згодом перейменована, щоб уникнути плутанини з сузір'ям Птах Раю.",
    en: "Musca is a small but relatively prominent constellation of the deep southern sky between Crux and Carina. Introduced by Dutch navigators in the late 16th century, it is one of the very few insect constellations in the sky. Its brightest star, Alpha Muscae, shines at magnitude 2.69. Within the constellation lie the globular clusters NGC 4833 and NGC 4372, and the Coalsack Dark Nebula partially overlaps its boundary from neighbouring Crux. The constellation's original name was Apis (the Bee), later renamed to avoid confusion with the constellation Apus.",
  },
  legend: {
    uk: "Муха не має mythology — це суто картографічне сузір'я епохи великих відкриттів. Первісна назва Apis (Бджола) вказує на те, що мореплавці просто давали новим сузір'ям назви знайомих комах та тварин. Перейменування на Musca (Муха) у XVIII ст. додало ще більшого прозаїзму. Примітно, що Муха — єдина «комаха» серед сучасних 88 офіційних сузір'їв (Бджола, Метелик та інші не збереглися як самостійні сузір'я).",
    en: "Musca has no mythology — it is purely a cartographic constellation of the Age of Discovery. The original name Apis (the Bee) suggests that navigators simply gave new constellations the names of familiar insects and animals. Renaming it Musca (the Fly) in the 18th century added even more prosaic quality. Notably, Musca is the only 'insect' among the modern 88 official constellations — the Bee, Butterfly, and others did not survive as independent constellations.",
  },
  howToFind: {
    uk: "Муха недоступна з України. З Південної півкулі вона розташована безпосередньо на південь від Південного Хреста — найвпізнаванішого сузір'я південного неба. Знайдіть Хрест і дивіться трохи нижче: невеликий ромб із чотирьох зір — це Муха. Як і Хрест, вона є приполярною з широт південніше 25° пн. ш. Найкраще видно у квітні та травні.",
    en: "Musca is not visible from Ukraine. From the Southern Hemisphere it lies directly south of the Southern Cross — the most recognizable constellation in the southern sky. Find Crux and look slightly below it: a small rhombus of four stars is Musca. Like Crux, it is circumpolar from latitudes south of 25° North. Best seen April through May.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Musca_constellation_map.svg/640px-Musca_constellation_map.svg.png",
  stars: (generatedStars["musca"]?.stars ?? []),
  lines: generatedStars["musca"]?.lines,
},

{
  id: "norma",
  name: { uk: "Наугольник", en: "Norma" },
  skyX: -122,
  skyY: 32,
  description: {
    uk: "Наугольник — невелике тьмяне сузір'я між Скорпіоном і Центавром, введене Лакайлем у 1756 році на честь столярного кутника або наугольника. Лежить у дуже густій частині Чумацького Шляху і містить кілька яскравих розсіяних скупчень, зокрема NGC 6087 і NGC 6067. Хмара Наугольника — одна з найяскравіших ділянок зоряного поля у видимій частині Чумацького Шляху, добре помітна неозброєним оком із темних місць. З України майже недоступне.",
    en: "Norma is a small, faint constellation between Scorpius and Centaurus, introduced by Lacaille in 1756 to honour the carpenter's square or set square. It lies in an extremely dense region of the Milky Way and contains several bright open clusters, including NGC 6087 and NGC 6067. The Norma Cluster region is one of the most star-rich visible patches of the Milky Way, clearly noticeable to the naked eye from dark locations. Almost inaccessible from Ukraine.",
  },
  legend: {
    uk: "Наугольник, як і всі сузір'я Лакайля, не має mythology — це назва на честь вимірювального інструмента. Столярний кутник (наугольник) є одним із базових інструментів геометрії та будівництва. Повна первісна назва у Лакайля була Norma et Regula (Наугольник і Лінійка), але пізніше скорочена. Це одне з кількох сузір'їв Лакайля, що разом утворюють «набір інструментів» на південному небі: Наугольник, Циркуль, Компас, Телескоп, Мікроскоп.",
    en: "Norma, like all of Lacaille's constellations, has no mythology — it is named after a measuring instrument. The carpenter's square is one of the fundamental tools of geometry and construction. Lacaille's original full name was Norma et Regula (the Square and Rule), later shortened. It is one of several Lacaille constellations that together form a 'toolbox' on the southern sky: the Square, Compass, Pyxis, Telescope, Microscope.",
  },
  howToFind: {
    uk: "Наугольник розташований між хвостом Скорпіона та Вівтарем, у найгустішій частині Чумацького Шляху. З України видно лише влітку дуже низько над горизонтом — фактично недоступний для спостережень. З широт Греції або Туреччини влітку можна спробувати побачити яскраве зоряне поле в цій ділянці навіть без ідентифікації самих зірок сузір'я. Найкраще видно у червні та липні з широт південніше 30° пн. ш.",
    en: "Norma lies between the tail of Scorpius and Ara, in the densest part of the Milky Way. From Ukraine it is visible only in summer very low on the horizon — effectively inaccessible for observation. From Greece or Turkey in summer one can attempt to see the bright star field in this region even without identifying the constellation's individual stars. Best seen June through July from latitudes south of 30° North.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Norma_constellation_map.svg/640px-Norma_constellation_map.svg.png",
  stars: (generatedStars["norma"]?.stars ?? []),
  lines: generatedStars["norma"]?.lines,
},

{
  id: "octans",
  name: { uk: "Октант", en: "Octans" },
  skyX: 198,
  skyY: 58,
  description: {
    uk: "Октант — сузір'я, що містить Південний полюс світу, введене Лакайлем у 1752 році на честь навігаційного октанта — прибора для вимірювання кутів між небесними тілами. Аналог Малої Ведмедиці для Південної півкулі, але значно менш зручний: зірка Південного полюса (Сігма Октанта) має лише 5.4 зоряної величини й ледь помітна неозброєним оком. Це різко контрастує з яскравим Поларісом у Північній півкулі й робить навігацію на півдні значно складнішою. З України Октант абсолютно недоступний.",
    en: "Octans is the constellation containing the South Celestial Pole, introduced by Lacaille in 1752 to honour the navigational octant — an instrument for measuring angles between celestial objects. It is the Southern Hemisphere equivalent of Ursa Minor, but far less convenient: the South Pole Star (Sigma Octantis) is only magnitude 5.4 and barely visible to the naked eye. This contrasts sharply with the brilliant Polaris of the Northern Hemisphere and makes southern celestial navigation considerably more challenging. Octans is completely inaccessible from Ukraine.",
  },
  legend: {
    uk: "Октант не має mythology — це суто інструментальна назва Лакайля. Октант як навігаційний прилад був винайдений приблизно у 1730-х роках — майже одночасно і незалежно Джоном Гедлі в Англії та Томасом Гоббом у США — і став попередником секстанта. Саме завдяки октанту мореплавці вперше змогли точно вимірювати кути між зірками прямо з хитного корабля. Лакайль назвав на його честь сузір'я з Південним полюсом — мабуть, щоб підкреслити роль навігаційних інструментів у відкритті та картографуванні південного неба.",
    en: "Octans has no mythology — it is a purely instrumental name from Lacaille. The octant as a navigational instrument was invented in the early 1730s — simultaneously and independently by John Hadley in England and Thomas Godfrey in America — and became the predecessor of the sextant. The octant allowed navigators to accurately measure angles between stars directly from a moving ship for the first time. Lacaille named the constellation containing the South Pole after it — presumably to emphasize the role of navigational instruments in the discovery and mapping of the southern sky.",
  },
  howToFind: {
    uk: "Октант недоступний з України. З Південної півкулі Сігма Октанта — «Південна Полярна зірка» — ледь помітна неозброєним оком на темному небі. Щоб знайти Південний полюс без неї, використовують Південний Хрест: продовжте довгу вісь хреста на 4.5 його довжини — ця точка і є приблизним Південним полюсом. Октант є приполярним і видний цілий рік із будь-якої точки Південної півкулі.",
    en: "Octans is not accessible from Ukraine. From the Southern Hemisphere, Sigma Octantis — the 'South Pole Star' — is barely visible to the naked eye on a dark night. To find the South Pole without it, use the Southern Cross: extend the long axis of Crux by 4.5 times its own length — that point approximates the South Celestial Pole. Octans is circumpolar and visible year-round from anywhere in the Southern Hemisphere.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Octans_constellation_map.svg/640px-Octans_constellation_map.svg.png",
  stars: (generatedStars["octans"]?.stars ?? []),
  lines: generatedStars["octans"]?.lines,
},

{
  id: "ophiuchus",
  name: { uk: "Зміїносець", en: "Ophiuchus" },
  skyX: -112,
  skyY: 15,
  description: {
    uk: "Зміїносець — велике сузір'я між Скорпіоном і Геркулесом, що містить одну з найяскравіших зірок — Рас Альхаге (магнітуда 2.07). Воно перетинає екліптику і є фактично тринадцятим зодіакальним сузір'ям: Сонце проходить через нього з 30 листопада по 18 грудня, довше ніж через сусідній Скорпіон. Серед глибоких об'єктів — сім кулястих скупчень, включно з M10, M12 і M62. У 1604 році тут спалахнула Наднова Кеплера — остання зафіксована наднова в нашій галактиці, яку спостерігав Йоганн Кеплер. Зміїносець поділений Змією (Serpens) на дві частини, що робить його унікальним серед усіх сузір'їв.",
    en: "Ophiuchus is a large constellation between Scorpius and Hercules containing one of the brighter stars in the sky — Rasalhague (magnitude 2.07). It crosses the ecliptic and is effectively the thirteenth zodiac constellation: the Sun passes through it from November 30 to December 18, longer than it spends in neighbouring Scorpius. Among its deep-sky objects are seven globular clusters, including M10, M12, and M62. In 1604 Kepler's Supernova blazed here — the last confirmed supernova observed in our galaxy, studied by Johannes Kepler. Ophiuchus is uniquely divided into two halves by the constellation Serpens.",
  },
  legend: {
    uk: "Зміїносець уособлює Асклепія — бога медицини й цілительства, сина Аполлона. За myth, Асклепій спостерігав, як змія лікувала іншу змію травами, і навчився від неї мистецтву зцілення. Він досяг такої майстерності, що почав воскрешати мертвих. Аїд поскаржився Зевсу, що втрачає нових підданців, і Зевс убив Асклепія блискавкою — але підняв на небо з пошаною. Жезл Асклепія зі змією залишається символом медицини й досі. Варто не плутати: медичний символ — один жезл з однією змією, а «кадуцей» Гермеса — два жезла з двома, і до медицини відношення не має.",
    en: "Ophiuchus represents Asclepius, the god of medicine and healing, son of Apollo. According to myth, Asclepius observed a snake healing another snake with herbs and learned from it the art of cure. He became so skilled that he began raising the dead. Hades complained to Zeus that he was losing new subjects, and Zeus struck Asclepius with a thunderbolt — but honoured him with a place in the sky. The Rod of Asclepius with its single serpent remains the symbol of medicine to this day. Worth noting: the medical symbol is one rod with one snake, while the caduceus of Hermes has two rods and two snakes and has no medical connection.",
  },
  howToFind: {
    uk: "Знайдіть Антарес (серце Скорпіона) і дивіться прямо на північ від нього: велика група зір із Рас Альхаге (яскрава зірка у вершині сузір'я) — це Зміїносець. Характерна форма: широкий неправильний шестикутник. По боках від нього тягнуться дві частини Змії — Голова (на захід) і Хвіст (на схід). Найкраще видно у червні та липні, коли сузір'я стоїть у зеніті для південних широт України.",
    en: "Find Antares (the heart of Scorpius) and look directly north of it: a large group of stars with Rasalhague (the bright star at the top) is Ophiuchus. The characteristic shape is a wide irregular hexagon. On either side extend the two halves of Serpens — the Head to the west and the Tail to the east. Best seen June through July, when the constellation stands high in the sky from southern Ukraine.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Ophiuchus_constellation_map.svg/640px-Ophiuchus_constellation_map.svg.png",
  stars: (generatedStars["ophiuchus"]?.stars ?? []),
  lines: generatedStars["ophiuchus"]?.lines,
},
{
  id: "pavo",
  name: { uk: "Павич", en: "Pavo" },
  skyX: 168,
  skyY: 48,
  description: {
    uk: "Павич — відносно яскраве сузір'я південного неба, введене нідерландськими мореплавцями наприкінці XVI ст. Його найяскравіша зірка — Альфа Павича (Павоніс) з магнітудою 1.94, що робить її однією з найяскравіших зірок південного неба. Павоніс є так званою «дельта Щіта зіркою» — пульсуючою змінною, що злегка змінює яскравість протягом кількох годин. Тут знаходиться кулясте скупчення NGC 6752 — третє за яскравістю в небі після Омеги Центавра і 47 Тукана, добре видне в бінокль. З України Павич недоступний.",
    en: "Pavo is a relatively prominent southern constellation introduced by Dutch navigators in the late 16th century. Its brightest star, Alpha Pavonis (Peacock), shines at magnitude 1.94, making it one of the brightest stars of the southern sky. Peacock is a so-called 'Delta Scuti variable' — a pulsating star that slightly changes brightness over a few hours. The constellation contains the globular cluster NGC 6752, the third-brightest in the sky after Omega Centauri and 47 Tucanae, clearly visible through binoculars. Pavo is not accessible from Ukraine.",
  },
  legend: {
    uk: "У давньогрецькій mythology павич — священний птах богині Гери. За легендою, Гера доручила сторожити Іо (яку Зевс перетворив на корову) стоголовому велетню Аргусу. Гермес за наказом Зевса приспав Аргуса грою на сопілці і вбив його. Гера, жалкуючи за вірним вартовим, перенесла його сто очей на хвіст павича. Відтоді хвіст павича з «очима» є символом пильності та Гери. Нідерландські мореплавці асоціювали екзотичну птицю, яку бачили в Індії та Ост-Індії, саме з цим образом.",
    en: "In Greek mythology, the peacock is the sacred bird of the goddess Hera. According to legend, Hera assigned the hundred-eyed giant Argus to guard Io, whom Zeus had transformed into a cow. Hermes, acting on Zeus's orders, lulled Argus to sleep with his flute and killed him. Hera, mourning her faithful watchman, transferred his hundred eyes to the tail of the peacock. Since then the peacock's 'eye-spotted' tail has symbolized vigilance and Hera herself. Dutch navigators associated the exotic bird they encountered in India and the East Indies with this very image.",
  },
  howToFind: {
    uk: "Павич недоступний з України. З Південної півкулі шукайте яскраву зірку Павоніс — одну з небагатьох зірок першої-другої величини в цій частині неба між Телескопом та Індійцем. Від неї вниз тягнеться тіло павича. NGC 6752 розташоване приблизно за 3° на північ від Альфи — у бінокль видно як пухка кулькувата пляма. Найкраще видно у липні та серпні з широт південніше 15° пн. ш.",
    en: "Pavo is not visible from Ukraine. From the Southern Hemisphere look for the bright star Peacock — one of the few first-to-second-magnitude stars in this part of the sky between Telescopium and Indus. The body of the peacock fans out from it. NGC 6752 lies about 3° north of Alpha — through binoculars it appears as a soft globular patch. Best seen July through August from latitudes south of 15° North.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pavo_constellation_map.svg/640px-Pavo_constellation_map.svg.png",
  stars: (generatedStars["pavo"]?.stars ?? []),
  lines: generatedStars["pavo"]?.lines,
},

{
  id: "pegasus",
  name: { uk: "Пегас", en: "Pegasus" },
  skyX: -68,
  skyY: -10,
  description: {
    uk: "Пегас — велике і помітне сузір'я осіннього неба, найвідоміша деталь якого — «Великий Квадрат Пегаса»: чотири яскраві зірки, що утворюють майже правильний квадрат, видний навіть у засвіченому місті. Цей квадрат є одним із найзручніших орієнтирів осінньо-зимового неба. У 1995 році зірка 51 Пегаса стала першою зіркою сонячного типу, навколо якої було відкрито екзопланету — цей факт змінив астрономію назавжди. За це відкриття Мішель Майор і Дідьє Кело отримали Нобелівську премію з фізики 2019 року.",
    en: "Pegasus is a large and prominent autumn constellation whose most recognizable feature is the Great Square of Pegasus: four bright stars forming a near-perfect square visible even from light-polluted cities. This square is one of the most convenient landmarks of the autumn and winter sky. In 1995 the star 51 Pegasi became the first Sun-like star found to host an exoplanet — a discovery that changed astronomy forever. For this Michel Mayor and Didier Queloz received the 2019 Nobel Prize in Physics.",
  },
  legend: {
    uk: "Пегас — крилатий кінь, що народився з крові Медузи Горгони, коли Персей відрубав їй голову. Герой Беллерофонт приборкав Пегаса за допомогою золотої вуздечки від Афіни і здійснив на ньому подвиги, зокрема вбивство Химери. Але потім Беллерофонт вирішив злетіти на Олімп до богів — Зевс послав овода, що вжалив Пегаса, і герой впав. Пегас же долетів до Олімпу і залишився там, несучи блискавки Зевса, а після смерті став сузір'ям.",
    en: "Pegasus is the winged horse born from the blood of Medusa when Perseus severed her head. The hero Bellerophon tamed Pegasus with a golden bridle from Athena and accomplished great deeds on his back, including slaying the Chimera. But then Bellerophon attempted to fly to Olympus to join the gods — Zeus sent a gadfly that stung Pegasus, and the hero fell. Pegasus flew on to Olympus and remained there carrying Zeus's thunderbolts; after his death he was transformed into a constellation.",
  },
  howToFind: {
    uk: "Великий Квадрат Пегаса — один із найлегших астеризмів для пошуку. Восени він стоїть майже в зеніті: чотири зірки другої-третьої величини утворюють великий квадрат, «порожнину» всередині якого видно навіть у місті. Ліва верхня зірка квадрата (Альферац) одночасно належить і сузір'ю Андромеди. Від квадрата вліво вгору тягнуться дві дуги зір — «шия» і «голова» коня. Найкраще видно у вересні та жовтні.",
    en: "The Great Square of Pegasus is one of the easiest asterisms to find. In autumn it stands almost at the zenith: four second-to-third-magnitude stars form a large square whose empty interior is visible even from cities. The upper-left star of the square (Alpheratz) simultaneously belongs to the constellation Andromeda. From the square two arcing chains of stars extend to the left and upward — the horse's neck and head. Best seen September through October.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Pegasus_constellation_map.svg/640px-Pegasus_constellation_map.svg.png",
  stars: (generatedStars["pegasus"]?.stars ?? []),
  lines: generatedStars["pegasus"]?.lines,
},

{
  id: "perseus",
  name: { uk: "Персей", en: "Perseus" },
  skyX: -40,
  skyY: -15,
  description: {
    uk: "Персей — яскраве приполярне сузір'я між Кассіопеєю та Возничим, добре видне з України цілий рік. Найяскравіша зірка — Мірфак (Альфа Персея), жовто-білий надгігант. Але найвідоміша — Алгол (Бета Персея): «зірка-демон», регулярно меркне кожні 2.87 доби, коли темніший компаньйон затуляє її. Алгол є прототипом затемнювально-подвійних зірок. Крім того, щороку 10–13 серпня тут відбувається один із найвидовищніших метеорних потоків — Персеїди: до 100 метеорів на годину, залишки комети Свіфта-Таттла. Також тут знаходиться подвійне зоряне скупчення h і χ Персея, видне неозброєним оком.",
    en: "Perseus is a bright circumpolar constellation between Cassiopeia and Auriga, visible year-round from Ukraine. Its brightest star is Mirfak (Alpha Persei), a yellow-white supergiant. But the most famous is Algol (Beta Persei): the 'Demon Star,' which regularly dims every 2.87 days when a darker companion eclipses it. Algol is the prototype of all eclipsing binary stars. Every year around August 10–13, Perseus hosts one of the most spectacular meteor showers — the Perseids: up to 100 meteors per hour, debris from Comet Swift-Tuttle. The constellation also contains the famous Double Cluster h and Chi Persei, visible to the naked eye.",
  },
  legend: {
    uk: "Персей — один із найвеличніших героїв давньогрецької mythology. Син Зевса і Данаї, він здійснив три славетні подвиги: убив горгону Медузу (відрубав їй голову, дивлячись лише у відображення мідного щита), врятував Андромеду від морського чудовиська Кіта і врешті скористався головою Медузи, щоб перетворити на камінь свого ворога Полідекта. Алгол (Бета Персея) зображує саме голову Медузи — звідси і назва: «Ра'с аль Гул» по-арабськи означає «голова демона».",
    en: "Perseus is one of the greatest heroes of Greek mythology. Son of Zeus and Danaë, he accomplished three famous feats: he killed the Gorgon Medusa by looking only at her reflection in his bronze shield, rescued Andromeda from the sea monster Cetus, and finally used Medusa's severed head to turn his enemy Polydectes to stone. Algol (Beta Persei) represents Medusa's head in the sky — its name from Arabic 'Ra's al Ghul' means 'head of the demon,' a reference to its unsettling regular fading.",
  },
  howToFind: {
    uk: "Знайдіть Кассіопею (W-форма) і дивіться від неї на схід: яскраве скупчення зір між Кассіопеєю та Возничим — це Персей. Мірфак — найяскравіша зірка в центрі. Подвійне скупчення h і χ знаходиться між Персеєм і Кассіопеєю — у темну ніч видно неозброєним оком як дві пов'язані хмарки. Алгол знаходиться «ліворуч» від центру: слідкуйте за ним кілька ночей і помітите, як він тьмяніє. Найкраще видно з жовтня по березень.",
    en: "Find Cassiopeia's W-shape and look east of it: the bright concentration of stars between Cassiopeia and Auriga is Perseus. Mirfak is the brightest star at the centre. The Double Cluster h and Chi lies between Perseus and Cassiopeia — on a dark night it is visible to the naked eye as two linked misty patches. Algol sits to the left of centre: watch it over several nights and you will notice it fading. Best seen October through March.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Perseus_constellation_map.svg/640px-Perseus_constellation_map.svg.png",
  stars: (generatedStars["perseus"]?.stars ?? []),
  lines: generatedStars["perseus"]?.lines,
},

{
  id: "phoenix",
  name: { uk: "Фенікс", en: "Phoenix" },
  skyX: -192,
  skyY: 30,
  description: {
    uk: "Фенікс — помірно яскраве сузір'я південного неба, введене нідерландськими мореплавцями наприкінці XVI ст. Його найяскравіша зірка — Анкаа (Альфа Фенікса, магнітуда 2.4), помаранчевий гігант. У межах сузір'я знаходиться скупчення галактик Фенікс (Phoenix Cluster) — одне з найбільших і найяскравіших скупчень у Всесвіті на відстані 5.7 мільярда світлових років. Чорна діра в його центрі є однією з наймасивніших відомих: близько 100 мільярдів мас Сонця. З України Фенікс видно лише осінніми вечорами дуже низько над горизонтом, і лише з самого півдня країни.",
    en: "Phoenix is a moderately bright southern constellation introduced by Dutch navigators in the late 16th century. Its brightest star, Ankaa (Alpha Phoenicis, magnitude 2.4), is an orange giant. Within the constellation lies the Phoenix Cluster — one of the largest and most luminous galaxy clusters in the Universe at 5.7 billion light-years. The black hole at its centre is among the most massive known: roughly 100 billion solar masses. From Ukraine Phoenix is visible only on autumn evenings very low on the horizon, and only from the southernmost parts of the country.",
  },
  legend: {
    uk: "Фенікс — легендарний птах з єгипетської, а потім грецької та римської mythology, що живе тисячу років, спалює себе і відроджується з попелу. У різних культурах він символізує відродження, безсмертя, сонячний цикл. Нідерландські мореплавці, що назвали це сузір'я, безсумнівно знали легенду і могли вбачати в ній символ своїх кораблів, що долають небезпечні шторми і повертаються цілими. Фенікс — одне з небагатьох суто «казкових» тварин серед назв нових південних сузір'їв поряд із більш реалістичними.",
    en: "The Phoenix is a legendary bird from Egyptian and later Greek and Roman mythology, said to live a thousand years, ignite itself, and rise reborn from the ashes. In various cultures it symbolizes rebirth, immortality, and the solar cycle. The Dutch navigators who named this constellation undoubtedly knew the legend and may have seen in it a symbol of their ships surviving dangerous storms and returning whole. Phoenix is one of the few purely 'mythical' creatures among the new southern constellations, alongside more realistic animals.",
  },
  howToFind: {
    uk: "Фенікс розташований між Ериданом, Скульптором і Журавлем. Найкращий орієнтир — яскравий Фомальгаут (Південна Риба): дивіться від нього на захід і трохи вниз. Анкаа — найяскравіша зірка в цій ділянці осіннього неба. З України видно лише з відкритим горизонтом на півдні у жовтні та листопаді, дуже низько. Повноцінно спостерігати можна лише з широт південніше 32° пн. ш.",
    en: "Phoenix lies between Eridanus, Sculptor, and Grus. The best landmark is the bright star Fomalhaut (Piscis Austrinus): look west and slightly below it. Ankaa is the brightest star in that part of the autumn sky. From Ukraine it is only visible with a clear southern horizon in October and November, very low. Full observation requires latitudes south of 32° North.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Phoenix_constellation_map.svg/640px-Phoenix_constellation_map.svg.png",
  stars: (generatedStars["phoenix"]?.stars ?? []),
  lines: generatedStars["phoenix"]?.lines,
},

{
  id: "pictor",
  name: { uk: "Живописець", en: "Pictor" },
  skyX: 188,
  skyY: 43,
  description: {
    uk: "Живописець — невелике тьмяне сузір'я між Канопусом і Великою Магеллановою Хмарою, введене Лакайлем у 1756 році на честь мольберта живописця. Жодна зірка не яскравіша за 3.2 зоряної величини. Але астрофізично сузір'я відоме зіркою Бета Живописця: навколо неї виявлено один із найкраще вивчених протопланетних дисків — тонкий, сильно нахилений диск пилу та газу, у якому вже ідентифіковані щонайменше дві молоді планети. Це одна з найяскравіших молодих зоряних систем, де можна спостерігати планетоутворення в реальному часі. Недоступне з України.",
    en: "Pictor is a small, faint constellation between Canopus and the Large Magellanic Cloud, introduced by Lacaille in 1756 to honour the painter's easel. No star is brighter than magnitude 3.2. But astrophysically the constellation is famous for Beta Pictoris: one of the best-studied protoplanetary disks surrounds it — a thin, steeply inclined disk of dust and gas in which at least two young planets have already been identified. It is one of the brightest young stellar systems where planet formation can be observed in real time. Not accessible from Ukraine.",
  },
  legend: {
    uk: "Живописець, як і всі сузір'я Лакайля, не має mythology. Первісна назва була Equuleus Pictoris (Мольберт Живописця). Лакайль вибирав назви на честь мистецтв та науки — поряд із Хімічною Піччю, Мікроскопом і Телескопом він розмістив і Живописця, віддаючи данину і точним, і образотворчим мистецтвам. Скорочена назва Pictor закріпилася після рішення IAU 1930 року.",
    en: "Pictor, like all of Lacaille's constellations, has no mythology. Its original name was Equuleus Pictoris (the Painter's Easel). Lacaille chose names honouring both the arts and sciences — alongside the Chemical Furnace, Microscope, and Telescope he placed the Painter, paying tribute to the visual arts as well as to exact sciences. The shortened name Pictor was standardized by the IAU in 1930.",
  },
  howToFind: {
    uk: "Живописець недоступний з України. З Південної півкулі він розташований між Канопусом (другою за яскравістю зіркою неба, в Кілі) та Великою Магеллановою Хмарою (в Меч-Рибі). Знайдіть Канопус — його важко не помітити — і дивіться на схід від нього. Найкраще видно у січні та лютому з широт південніше 26° пн. ш.",
    en: "Pictor is not accessible from Ukraine. From the Southern Hemisphere it lies between Canopus (the second-brightest star in the sky, in Carina) and the Large Magellanic Cloud (in Dorado). Find Canopus — it is hard to miss — and look east of it. Best seen January through February from latitudes south of 26° North.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pictor_constellation_map.svg/640px-Pictor_constellation_map.svg.png",
  stars: (generatedStars["pictor"]?.stars ?? []),
  lines: generatedStars["pictor"]?.lines,
},

{
  id: "pisces",
  name: { uk: "Риби", en: "Pisces" },
  skyX: -78,
  skyY: 8,
  description: {
    uk: "Риби — велике зодіакальне сузір'я осінньо-зимового неба, що не має яскравих зірок, але має величезне астрономічне значення: саме тут зараз знаходиться точка весняного рівнодення — місце, де Сонце перетинає небесний екватор у березні. Ця точка є початком відліку прямих висхождень усіх зірок і називається «Першою точкою Овна», хоча через прецесію вже понад 2000 років вона реально перебуває в Рибах. Саме зі входу Сонця до Риб (і переходу точки рівнодення в Риби) починається «Епоха Риб», яку у XX ст. змінює «Епоха Водолія».",
    en: "Pisces is a large zodiac constellation of the autumn and winter sky with no bright stars, but it holds immense astronomical significance: this is where the vernal equinox currently lies — the point where the Sun crosses the celestial equator in March. This point is the zero of the right ascension coordinate system used for all stars, and is still called the 'First Point of Aries' despite having been in Pisces for over 2,000 years due to precession. The passage of this point into Pisces marks the astrological 'Age of Pisces,' which in the 20th century begins transitioning into the 'Age of Aquarius.'",
  },
  legend: {
    uk: "У давньогрецькій mythology Риби — Афродіта і її син Ерос, що перетворилися на риб і стрибнули в річку Євфрат, рятуючись від велетня Тіфона (той самий, що налякав усіх богів на Олімпі). Щоб не загубитися у воді, вони прив'язали себе мотузкою — звідси тонкий ланцюжок зір, що з'єднує двох риб у сузір'ї. В більш давній вавилонській традиції Риби символізували «хвости» — двох рибоподібних богів родючості.",
    en: "In Greek mythology, Pisces represents Aphrodite and her son Eros, who transformed into fish and leapt into the Euphrates River to escape the giant Typhon — the same monster that sent all the Olympian gods fleeing in panic. To avoid losing each other in the water they tied themselves together with a cord — hence the faint chain of stars connecting the two fish in the constellation. In the older Babylonian tradition, Pisces symbolized the 'tails' of two fish-tailed fertility deities.",
  },
  howToFind: {
    uk: "Риби розташовані між Великим Квадратом Пегаса (північ) і Китом (південь). Два «скупчення» зір — по одному на кожну рибу — з'єднані тонким ланцюжком зір четвертої-п'ятої величини. Через відсутність яскравих зір Риби практично невидимі в засвіченому небі міста — потрібне темне небо і зоряна карта. Найяскравіша зірка Альфа Риб (Альрісха) — точка з'єднання мотузки між рибами. Найкраще видно у жовтні та листопаді.",
    en: "Pisces lies between the Great Square of Pegasus to the north and Cetus to the south. Two knots of stars — one for each fish — are connected by a faint chain of fourth-and-fifth-magnitude stars. With no bright stars, Pisces is nearly invisible from light-polluted skies — dark skies and a star chart are needed. The brightest star, Alpha Piscium (Alrescha), marks the knot joining the cord between the two fish. Best seen October through November.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Pisces_constellation_map.svg/640px-Pisces_constellation_map.svg.png",
  stars: (generatedStars["pisces"]?.stars ?? []),
  lines: generatedStars["pisces"]?.lines,
},

{
  id: "piscis-austrinus",
  name: { uk: "Південна Риба", en: "Piscis Austrinus" },
  skyX: -178,
  skyY: 28,
  description: {
    uk: "Південна Риба — невелике сузір'я осіннього неба, відоме насамперед завдяки одній зірці: Фомальгаут — «рот кита» по-арабськи — є 18-ю за яскравістю зіркою всього неба (магнітуда 1.16) і найяскравішою точкою в цій частині осіннього неба. Фомальгаут особливо знаменитий тим, що у 2008 році був першою зіркою, навколо якої безпосередньо сфотографували екзопланету у видимому світлі. Навколо зірки є виразний протопланетний диск пилу, що нагадує кільця навколо яйця. Крім того, Фомальгаут — одна з чотирьох «Королівських зірок» давнини разом із Регулом, Антаресом та Альдебараном.",
    en: "Piscis Austrinus is a small autumn constellation famous above all for a single star: Fomalhaut — 'mouth of the fish' in Arabic — is the 18th-brightest star in the sky (magnitude 1.16) and the brightest point in this part of the autumn sky. Fomalhaut gained particular fame in 2008 as the first star to have an exoplanet directly photographed in visible light. The star is surrounded by a prominent debris disk that resembles a luminous egg. Fomalhaut is also one of the four 'Royal Stars' of antiquity, alongside Regulus, Antares, and Aldebaran.",
  },
  legend: {
    uk: "У вавилонській традиції Фомальгаут був одним із чотирьох «Сторожів Неба» — зірок, що позначали чотири сторони світу. Фомальгаут охороняв південь, Альдебаран — схід, Регул — північ, Антарес — захід. За давньогрецьким myth, Південна Риба п'є воду, яку виливає Водолій із своєї посудини — і сузір'я на небі розташовані відповідно: Водолій вище, Південна Риба під ним.",
    en: "In Babylonian tradition, Fomalhaut was one of the four 'Royal Stars' or 'Guardians of Heaven' — stars that marked the four cardinal directions. Fomalhaut guarded the south, Aldebaran the east, Regulus the north, and Antares the west. In Greek myth, the Southern Fish drinks the water poured by Aquarius from his jar — and the constellations in the sky are arranged accordingly: Aquarius above, Piscis Austrinus below.",
  },
  howToFind: {
    uk: "Фомальгаут — єдина по-справжньому яскрава зірка в осінньому небі на півдні, тому її важко не помітити. Вона висить низько над горизонтом у жовтні та листопаді: яскравий вогонь без яскравих сусідів. Від Великого Квадрата Пегаса проведіть лінію через ліву сторону квадрата вниз — вона вкаже на Фомальгаут. Решта сузір'я тьмяна і непомітна. Найкраще видно у жовтні та листопаді.",
    en: "Fomalhaut is the only truly bright star in the southern autumn sky, so it is hard to miss: a solitary blaze of light with no bright neighbours. Draw a line southward through the left side of the Great Square of Pegasus — it points straight to Fomalhaut. The rest of the constellation is faint and inconspicuous. Best seen October through November.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Piscis_Austrinus_constellation_map.svg/640px-Piscis_Austrinus_constellation_map.svg.png",
  stars: (generatedStars["piscis-austrinus"]?.stars ?? []),
  lines: generatedStars["piscis-austrinus"]?.lines,
},

{
  id: "puppis",
  name: { uk: "Корма", en: "Puppis" },
  skyX: 180,
  skyY: 38,
  description: {
    uk: "Корма — частина колишнього сузір'я Корабель Арго, розбитого Лакайлем у 1752 році. Це найбільша з трьох частин (Кіль, Корма, Вітрила) і містить найяскравішу зірку — Дзету Корми (Наос), блакитний надгігант із магнітудою 2.21. Наос є одним із найгарячіших і найсвітліших зорів, видних неозброєним оком: її поверхня розігріта до 42 000 К. Тут також знаходяться яскраві відкриті скупчення M46, M47 і M93, що добре видно у бінокль. Корма багата на Чумацький Шлях і є чудовою ціллю для простого бінокля. З України видно лише частково взимку.",
    en: "Puppis is part of the former constellation Argo Navis, split by Lacaille in 1752. It is the largest of the three parts (Carina, Puppis, Vela) and contains the brightest surviving star — Zeta Puppis (Naos), a blue supergiant of magnitude 2.21. Naos is one of the hottest and most luminous stars visible to the naked eye, with a surface temperature of 42,000 K. The constellation also hosts the bright open clusters M46, M47, and M93, all well seen through binoculars. Puppis is rich in Milky Way star fields and is an excellent target for simple binoculars. Only partially visible from Ukraine in winter.",
  },
  legend: {
    uk: "Корма — кормова частина корабля Арго, на якому Ясон та аргонавти плавали за Золотим руном до Колхіди. Цікава астрономічна деталь: оскільки Лакайль зберіг грецьку літерну нумерацію старого Арго при поділі, зірки з літерами Альфа і Бета залишилися в Кормі. Але Зета (Наос) виявилася найяскравішою після поділу — тобто Корма є єдиним сузір'ям, де найяскравіша зірка позначена не Альфою і навіть не Бетою, а Дзетою.",
    en: "Puppis is the stern of the ship Argo, on which Jason and the Argonauts sailed to Colchis in search of the Golden Fleece. An interesting astronomical detail: since Lacaille preserved the original Greek letter designations from Argo Navis when he split it, the Alpha and Beta stars remained in Puppis. Yet Zeta (Naos) turned out to be the brightest star after the split — making Puppis the only constellation where the brightest star is designated not Alpha or Beta, but Zeta.",
  },
  howToFind: {
    uk: "Корму найлегше знайти через Сіріуса (Великий Пес): дивіться від нього на схід і трохи вниз — перші яскраві зірки в цьому напрямку вже належать Кормі. Зета Корми (Наос) — одна з найяскравіших зірок у зимовому небі на połudні. Відкриті скупчення M46 і M47 знаходяться поряд і у бінокль виглядають як два «хмарних клаптики» поруч. З України видно взимку, але ніколи не піднімається вище 15–20° над горизонтом.",
    en: "The easiest way to find Puppis is through Sirius (Canis Major): look east and slightly below it — the first bright stars in that direction already belong to Puppis. Zeta Puppis (Naos) is one of the brightest stars in the winter southern sky. The open clusters M46 and M47 lie nearby and through binoculars appear as two adjacent misty patches. From Ukraine it is visible in winter but never rises above 15–20° on the horizon.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Puppis_constellation_map.svg/640px-Puppis_constellation_map.svg.png",
  stars: (generatedStars["puppis"]?.stars ?? []),
  lines: generatedStars["puppis"]?.lines,
},

{
  id: "pyxis",
  name: { uk: "Компас", en: "Pyxis" },
  skyX: 175,
  skyY: 36,
  description: {
    uk: "Компас — невелике тьмяне сузір'я між Кормою та Вітрилами, введене Лакайлем у 1752 році на честь морського компаса. Жодна зірка не яскравіша за 3.7 зоряної величини. Деякі астрономи розглядають Компас як четверту частину колишнього Корабля Арго, хоча сам Лакайль вважав його окремим нетематичним сузір'ям. У 1920 році в Компасі зафіксували повторну нову зірку T Компаса — зіркову систему, що вже кілька разів спалахувала і є потенційним кандидатом на наднову типу Ia у далекому майбутньому. З України практично недоступний.",
    en: "Pyxis is a small, faint constellation between Puppis and Vela, introduced by Lacaille in 1752 to honour the mariner's compass. No star is brighter than magnitude 3.7. Some astronomers consider Pyxis the fourth part of the former Argo Navis, though Lacaille himself treated it as a separate unrelated constellation. In 1920 astronomers recorded the recurrent nova T Pyxidis — a stellar system that has erupted multiple times and is a potential candidate for a Type Ia supernova in the distant future. Practically inaccessible from Ukraine.",
  },
  legend: {
    uk: "Компас не має mythology. Назва вшановує магнітний корабельний компас — навігаційний прилад, що революціонізував морські подорожі і без якого нідерландські мореплавці XVI ст. не могли б відкрити ті далекі краї, зірки яких вони й нанесли на небесні карти. Є певна іронія в тому, що прилад-компас потрапив у сузір'я поряд із частинами корабля Арго — корабля, що плавав у ті часи, коли магнітного компаса ще не існувало.",
    en: "Pyxis has no mythology. The name honours the magnetic ship's compass — the navigational instrument that revolutionized sea travel and without which the Dutch navigators of the 16th century could not have explored the distant lands whose stars they mapped. There is a certain irony in placing the compass instrument among the parts of the ship Argo — a vessel that sailed in an age before magnetic compasses existed.",
  },
  howToFind: {
    uk: "Компас розташований між Кормою та Вітрилами, на північ від Кіля. З України видно лише взимку дуже низько над горизонтом — практично недосяжний для спостережень. З Середземноморського узбережжя можна спробувати знайти три найяскравіші зірки (Альфа, Бета, Гамма) вздовж однієї лінії у лютому та березні. Найкраще видно з широт південніше 25° пн. ш.",
    en: "Pyxis lies between Puppis and Vela, north of Carina. From Ukraine it is only visible in winter very low on the horizon — practically unreachable for observation. From Mediterranean coastal locations one can attempt to find the three brightest stars (Alpha, Beta, Gamma) along a single line in February and March. Best seen from latitudes south of 25° North.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Pyxis_constellation_map.svg/640px-Pyxis_constellation_map.svg.png",
  stars: (generatedStars["pyxis"]?.stars ?? []),
  lines: generatedStars["pyxis"]?.lines,
},

{
  id: "reticulum",
  name: { uk: "Сітка", en: "Reticulum" },
  skyX: 192,
  skyY: 50,
  description: {
    uk: "Сітка — невелике сузір'я глибокого південного неба між Великою Магеллановою Хмарою та Ериданом, введене Лакайлем у 1752 році на честь сітки ниток у фокусі телескопа — мікрометричної сітки, що використовувалася для точних вимірювань позицій зірок. Зірки четвертої величини утворюють маленький ромб, що виглядає як крихітний аналог Великого Квадрата Пегаса. У межах сузір'я зірка Дзета Сітки — подвійна система, де обидва компоненти схожі на Сонце і є одним із найбільш вивчених «сонячних аналогів». З України недоступне.",
    en: "Reticulum is a small constellation of the deep southern sky between the Large Magellanic Cloud and Eridanus, introduced by Lacaille in 1752 to honour the reticle — the crosshair or grid of threads placed in a telescope's focal plane for precise positional measurements. Its fourth-magnitude stars form a small rhombus resembling a tiny version of the Great Square of Pegasus. Within the constellation, the star Zeta Reticuli is a binary system where both components resemble the Sun, making it one of the most studied 'solar analogue' pairs. Not accessible from Ukraine.",
  },
  legend: {
    uk: "Сітка не має mythology. Назва вшановує мікрометричну сітку — технічний елемент телескопа, що дозволяв астрономам точно вимірювати положення зірок. Лакайль особисто використовував такі сітки під час своєї роботи в Кейптауні. Серед широкого загалу Зета Сітки набула несподіваної слави після 1961 року, коли її назвали у зв'язку з так званим «інцидентом Хілла» — одним із найвідоміших в американській культурі описів нібито контакту з позаземним розумом.",
    en: "Reticulum has no mythology. The name honours the reticle — the technical element of a telescope that allowed astronomers to precisely measure star positions. Lacaille himself used such reticles during his work in Cape Town. Among the wider public, Zeta Reticuli gained unexpected fame after 1961, when it was named in connection with the so-called 'Hill incident' — one of the most famous alleged extraterrestrial contact accounts in American popular culture.",
  },
  howToFind: {
    uk: "Сітка недоступна з України. З Південної півкулі вона розташована між Великою Магеллановою Хмарою (на північ) та яскравим Ахернаром (Еридан, на захід). Маленький ромб із чотирьох зір четвертої величини впізнаваний за правильною формою на тлі порівняно бідного зірками неба. Найкраще видно у листопаді та грудні з широт південніше 23° пн. ш.",
    en: "Reticulum is not accessible from Ukraine. From the Southern Hemisphere it lies between the Large Magellanic Cloud to the north and the bright star Achernar (Eridanus) to the west. The small rhombus of four fourth-magnitude stars is recognizable by its regular shape against a relatively star-poor background. Best seen November through December from latitudes south of 23° North.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Reticulum_constellation_map.svg/640px-Reticulum_constellation_map.svg.png",
  stars: (generatedStars["reticulum"]?.stars ?? []),
  lines: generatedStars["reticulum"]?.lines,
},

{
  id: "sagitta",
  name: { uk: "Стріла", en: "Sagitta" },
  skyX: -140,
  skyY: 10,
  description: {
    uk: "Стріла — третє найменше сузір'я неба, що складається лише з чотирьох зір і справді нагадує стрілу в польоті. Попри мікроскопічні розміри, воно є одним із найдавніших: Птолемей включив його до каталогу у II ст. н. е. У Стрілі знаходиться кулясте скупчення M71 — доволі незвичне: довгий час астрономи сперечалися, чи є воно куляcтим скупченням чи щільним розсіяним. Зараз M71 класифікується як молоде кулясте скупчення зі слабкою концентрацією до центру. З України добре видне влітку.",
    en: "Sagitta is the third-smallest constellation in the sky, consisting of just four stars that genuinely resemble an arrow in flight. Despite its microscopic size, it is one of the oldest: Ptolemy catalogued it in the 2nd century AD. Within Sagitta lies the globular cluster M71 — a rather unusual one: astronomers long debated whether it was a globular cluster or a very dense open cluster. It is now classified as a young globular cluster with an unusually loose central concentration. Clearly visible from Ukraine in summer.",
  },
  legend: {
    uk: "Стріла має кілька тлумачень у давньогрецькій mythology. За однією версією, це стріла Геракла, якою він убив орла Прометея (сузір'я Орел поряд) — птаха, що щодня з'їдав печінку прикутого титана. За іншою — стріла Аполлона, якою він убив циклопів на помсту за смерть свого сина Асклепія (що теж є сузір'ям поряд — Зміїносець). Третя версія: стріла Ероса, що вражала серця богів і людей.",
    en: "Sagitta carries several interpretations in Greek mythology. In one version it is the arrow with which Heracles killed the eagle of Prometheus — the bird (neighbouring constellation Aquila) that daily devoured the Titan's liver. In another it is Apollo's arrow, shot at the Cyclopes in revenge for the death of his son Asclepius (also a neighbouring constellation — Ophiuchus). A third version makes it the arrow of Eros, piercing the hearts of gods and mortals alike.",
  },
  howToFind: {
    uk: "Стріла розташована між Орлом і Лебедем, трохи на північ від Альтаїра. Знайдіть Альтаїр і дивіться вгору і трохи ліворуч — маленький рядок із чотирьох зір, що нагадує стрілу, добре видний у темну ніч. Попри малі розміри, форма сузір'я настільки характерна, що його легко впізнати. M71 знаходиться між середніми зірками «древка». Найкраще видно у серпні та вересні.",
    en: "Sagitta lies between Aquila and Cygnus, slightly north of Altair. Find Altair and look up and slightly left — a small row of four stars resembling an arrow is clearly visible on a dark night. Despite its tiny size the constellation's shape is so distinctive that it is easy to recognize once you know where to look. M71 lies between the middle stars of the 'shaft.' Best seen August through September.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Sagitta_constellation_map.svg/640px-Sagitta_constellation_map.svg.png",
  stars: (generatedStars["sagitta"]?.stars ?? []),
  lines: generatedStars["sagitta"]?.lines,
},

{
  id: "sagittarius",
  name: { uk: "Стрілець", en: "Sagittarius" },
  skyX: -135,
  skyY: 25,
  description: {
    uk: "Стрілець — одне з найвидовищніших сузір'їв літнього неба, де сконцентровано найбільше зірок і туманностей. Саме в бік Стрільця знаходиться центр нашого Чумацького Шляху — надмасивна чорна діра Стрілець А* масою 4 мільйони сонячних. Частина сузір'я складає астеризм «Чайник» — шість зірок у формі чайника, з «носика» якого «ллється» Чумацький Шлях. У Стрільці зосереджені найяскравіші туманності неба: Лагуна (M8), Тріфід (M20), Омега (M17) і численні кулясті скупчення — M22, M28. Це справжня скарбниця для любителів астрономії з біноклем.",
    en: "Sagittarius is one of the most spectacular summer constellations, where the greatest density of stars and nebulae is concentrated. It is in the direction of Sagittarius that the centre of our Milky Way lies — the supermassive black hole Sagittarius A* with a mass of 4 million Suns. Part of the constellation forms the 'Teapot' asterism — six stars shaped like a teapot, from whose 'spout' the Milky Way appears to steam. Within Sagittarius lie some of the sky's most magnificent nebulae: the Lagoon (M8), Trifid (M20), Omega (M17), and numerous globular clusters — M22, M28. It is a true treasure trove for binocular observers.",
  },
  legend: {
    uk: "Стрілець зображує кентавра з натягнутим луком, що цілиться в Скорпіона — ворога Оріона. За давньогрецьким myth, він уособлює Кротона — сина Пана, що жив разом із музами на горі Гелікон і навчився мистецтву стрільби з лука. Після смерті музи попросили Зевса підняти його на небо. За іншою версією, це Хірон, але більшість античних авторів відносять Хірона до Центавра, а Стрілець ідентифікується окремо. Стрілець є одним із двох кентаврів на небі.",
    en: "Sagittarius depicts a centaur with a drawn bow aimed at Scorpius — the enemy of Orion. In Greek myth he represents Crotus, son of Pan, who lived with the Muses on Mount Helicon and mastered the art of archery. After his death the Muses asked Zeus to place him in the sky. Another tradition identifies him with Chiron, but most ancient authors assign Chiron to Centaurus and treat Sagittarius as a separate figure. Sagittarius is one of two centaurs in the sky.",
  },
  howToFind: {
    uk: "Стрілець найкраще видно у липні та серпні на півдні — шукайте «Чайник» із шести зірок, що нагадує малий чайник. «Носик» чайника вказує прямо в центр галактики — там піднімається найгустіша хмара Чумацького Шляху. Під «носиком» у темну ніч видно хмарку туманності Лагуна (M8). З України Стрілець ніколи не піднімається вище 20° над горизонтом, але при відкритому виді на південь цього достатньо для пошуку яскравих туманностей у бінокль.",
    en: "Sagittarius is best seen in July and August in the south — look for the 'Teapot' of six stars. The spout of the Teapot points directly toward the galactic centre — the densest cloud of the Milky Way rises from it like steam. Below the spout on a dark night the Lagoon Nebula (M8) is visible to the naked eye as a misty patch. From Ukraine Sagittarius never rises above 20° on the horizon, but with an open southern view that is sufficient to sweep the bright nebulae with binoculars.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sagittarius_constellation_map.svg/640px-Sagittarius_constellation_map.svg.png",
  stars: (generatedStars["sagittarius"]?.stars ?? []),
  lines: generatedStars["sagittarius"]?.lines,
},
{
  id: "sculptor",
  name: { uk: "Скульптор", en: "Sculptor" },
  skyX: -188,
  skyY: 24,
  description: {
    uk: "Скульптор — тьмяне сузір'я осіннього неба між Китом і Фенікcом, введене Лакайлем у 1756 році на честь скульптурної майстерні. Жодна зірка не яскравіша за 4.3 зоряної величини. Попри непоказний вигляд, тут знаходиться Галактичний полюс Скульптора — одна з двох точок, де вісь Чумацького Шляху перпендикулярна до площини нашої галактики. З цього «вікна» відкривається найчистіший вид у глибокий Всесвіт без хмар пилу Чумацького Шляху. Тому саме тут зосереджені яскраві галактики: NGC 253 (Срібна монета) та NGC 300 — одні з найкрасивіших спіральних галактик, видних у невеликий телескоп.",
    en: "Sculptor is a faint autumn constellation between Cetus and Phoenix, introduced by Lacaille in 1756 to honour the sculptor's studio. No star is brighter than magnitude 4.3. Despite its unremarkable appearance, it contains the South Galactic Pole — one of two points where the axis of the Milky Way is perpendicular to our galaxy's plane. From this 'window' the clearest view into deep space opens up, unobstructed by Milky Way dust clouds. This is why the constellation concentrates notable galaxies: NGC 253 (the Silver Coin Galaxy) and NGC 300 — among the most beautiful spiral galaxies visible through a small telescope.",
  },
  legend: {
    uk: "Скульптор не має mythology. Первісна повна назва Лакайля — l'Atelier du Sculpteur (Майстерня Скульптора). Лакайль розміщував свої «мистецькі» сузір'я поруч із «науковими»: Живописець, Різець, Скульптор разом утворюють маленький «культурний кластер» на південному небі. Назву скорочено до Sculptor після стандартизації IAU у 1930 році.",
    en: "Sculptor has no mythology. Lacaille's original full name was l'Atelier du Sculpteur (the Sculptor's Studio). Lacaille grouped his 'artistic' constellations near the 'scientific' ones: Pictor, Caelum, and Sculptor together form a small 'cultural cluster' on the southern sky. The name was shortened to Sculptor after the IAU standardization of 1930.",
  },
  howToFind: {
    uk: "Скульптор розташований на південь від Кита і на захід від Фенікса. Найкращий орієнтир — яскравий Фомальгаут (Південна Риба): Скульптор знаходиться прямо на північ від нього. З України видно восени дуже низько, і лише NGC 253 у невеликий телескоп варта пошуку — вона доволі яскрава (6.9 зоряної величини) і протяжна. Найкраще видно у жовтні та листопаді.",
    en: "Sculptor lies south of Cetus and west of Phoenix. The best landmark is the bright star Fomalhaut (Piscis Austrinus): Sculptor is directly north of it. From Ukraine it is only visible in autumn very low on the horizon, but NGC 253 is worth hunting with a small telescope — it is relatively bright at magnitude 6.9 and visibly elongated. Best seen October through November.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sculptor_constellation_map.svg/640px-Sculptor_constellation_map.svg.png",
  stars: (generatedStars["sculptor"]?.stars ?? []),
  lines: generatedStars["sculptor"]?.lines,
},

{
  id: "scutum",
  name: { uk: "Щит", en: "Scutum" },
  skyX: -132,
  skyY: 18,
  description: {
    uk: "Щит — одне з найменших сузір'їв, але розташоване в одній із найбагатших на зірки ділянок неба — прямо у серці Чумацького Шляху між Орлом і Стрільцем. Через цю ділянку проходить так зване «Зоряне хмарне скупчення Щита» — одна з найяскравіших ділянок Чумацького Шляху, добре видна неозброєним оком у темну ніч. Тут знаходиться відкрите скупчення M11 («Дика Качка») — одне з найщільніших і найчисленніших відомих розсіяних скупчень із понад 2900 зір. У бінокль воно виглядає як щільна сяюча пляма; у телескоп — як нескінченне поле зір.",
    en: "Scutum is one of the smallest constellations but lies in one of the richest star fields in the sky — right in the heart of the Milky Way between Aquila and Sagittarius. Through this region passes the Scutum Star Cloud, one of the brightest patches of the Milky Way, clearly visible to the naked eye on a dark night. Here lies the open cluster M11 (the Wild Duck Cluster) — one of the densest and most populated known open clusters, with over 2,900 stars. Through binoculars it appears as a compact glowing patch; through a telescope it becomes an endless field of stars.",
  },
  legend: {
    uk: "Щит — єдине сузір'я, введене не на честь тварини, інструмента чи mythology, а на честь конкретної живої людини — короля Польщі Яна III Собеського. Гевелій ввів його у 1684 році після перемоги Собеського під Віднем у 1683 році, коли польсько-австрійські війська зупинили турецьку навалу на Європу. Первісна назва — Scutum Sobiescianum (Щит Собеського). Це єдиний «політичний» монумент на небі серед сучасних 88 сузір'їв.",
    en: "Scutum is the only constellation named not after an animal, instrument, or mythology, but in honour of a specific living person — King John III Sobieski of Poland. Hevelius introduced it in 1684 following Sobieski's famous victory at Vienna in 1683, when the Polish-Austrian forces halted the Ottoman advance into Europe. The original name was Scutum Sobiescianum (Sobieski's Shield). It is the only 'political monument' in the sky among the modern 88 constellations.",
  },
  howToFind: {
    uk: "Щит знаходиться між Орлом і Стрільцем, прямо в Чумацькому Шляху. Знайдіть Альтаїр (Орел) і дивіться від нього на південь: яскрава хмара Чумацького Шляху там і є Хмарою Щита. M11 розташоване у центрі сузір'я і у бінокль видне як яскрава пляма. У темну серпневу ніч вся ця ділянка виглядає фантастично — ніби потовщення Чумацького Шляху. Найкраще видно у липні та серпні.",
    en: "Scutum lies between Aquila and Sagittarius, right along the Milky Way. Find Altair (Aquila) and look south of it: the bright cloud of the Milky Way there is the Scutum Star Cloud. M11 sits at the centre of the constellation and through binoculars appears as a bright compact glow. On a dark August night the entire region looks spectacular — a bright thickening of the Milky Way. Best seen July through August.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Scutum_constellation_map.svg/640px-Scutum_constellation_map.svg.png",
  stars: (generatedStars["scutum"]?.stars ?? []),
  lines: generatedStars["scutum"]?.lines,
},

{
  id: "serpens",
  name: { uk: "Змія", en: "Serpens" },
  skyX: -108,
  skyY: 12,
  description: {
    uk: "Змія — унікальне сузір'я: єдине з 88, що складається з двох несуміжних частин — Голови Змії (Serpens Caput) на заході та Хвоста Змії (Serpens Cauda) на сході. Між ними розташований Зміїносець, що буквально «тримає» Змію в руках. У Хвості знаходиться туманність Орел (M16) із знаменитою фотографією «Стовпи Творення» від телескопа «Хаббл» — мабуть, найвідоміший астрофотознімок усіх часів. У Голові — кулясте скупчення M5, одне з найстаріших відомих (близько 13 мільярдів років) і одне з найкрасивіших у телескоп.",
    en: "Serpens is unique among the 88 constellations: it is the only one divided into two non-contiguous parts — Serpens Caput (the Head) to the west and Serpens Cauda (the Tail) to the east. Between them lies Ophiuchus, who literally 'holds' the Serpent in his hands. In the Tail lies the Eagle Nebula (M16) containing the famous 'Pillars of Creation' photograph taken by the Hubble Space Telescope — arguably the most iconic astrophotograph of all time. In the Head lies the globular cluster M5, one of the oldest known (around 13 billion years) and one of the most beautiful through a telescope.",
  },
  legend: {
    uk: "Змія — та сама, яку тримає Асклепій (Зміїносець): за myth, саме від змії він навчився мистецтву цілительства. Змія є символом медицини і мудрості в багатьох культурах: вона скидає шкіру і немовби відроджується, символізуючи зцілення й безсмертя. Жезл Асклепія з єдиною обвитою змією — до сьогодні символ медицини в більшості країн світу. Сузір'я Змії і Зміїносця утворюють єдиний mythology образ, розбитий на два окремих офіційних сузір'я.",
    en: "Serpens is the snake held by Asclepius (Ophiuchus): in myth, it was from watching a snake that he learned the art of healing. The serpent is a symbol of medicine and wisdom in many cultures — it sheds its skin and appears reborn, symbolizing healing and immortality. The Rod of Asclepius with its single coiled serpent remains the symbol of medicine in most countries today. The constellations of Serpens and Ophiuchus together form a single mythological image split into two separate official constellations.",
  },
  howToFind: {
    uk: "Голова Змії знаходиться на захід від Зміїносця, між Волопасом і Геркулесом — шукайте кілька зір четвертої величини у трикутнику Арктур-Унук-Альхаге. Хвіст Змії лежить на схід від Зміїносця, між ним і Стрільцем — яскрава туманність M16 у бінокль видна як невелика хмарка. M5 (Голова) у бінокль помітна як зірочка, що не фокусується. Найкраще видно у червні та липні.",
    en: "The Head of Serpens lies west of Ophiuchus, between Boötes and Hercules — look for several fourth-magnitude stars in the triangle formed by Arcturus, Unukalhai, and Rasalhague. The Tail of Serpens lies east of Ophiuchus, between it and Sagittarius — the Eagle Nebula M16 through binoculars appears as a small misty patch. M5 (in the Head) through binoculars is visible as a star that refuses to focus sharply. Best seen June through July.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Serpens_constellation_map.svg/640px-Serpens_constellation_map.svg.png",
  stars: (generatedStars["serpens"]?.stars ?? []),
  lines: generatedStars["serpens"]?.lines,
},

{
  id: "sextans",
  name: { uk: "Секстант", en: "Sextans" },
  skyX: -148,
  skyY: 15,
  description: {
    uk: "Секстант — тьмяне невелике сузір'я між Левом і Гідрою, введене Гевелієм у 1687 році на честь астрономічного секстанта — приладу для вимірювання кутових відстаней між зірками. Жодна зірка не яскравіша за 4.5 зоряної величини, і без зоряної карти знайти його майже неможливо. Проте Секстант має важливу геометричну особливість: через нього проходить небесний екватор, і саме тут (у точці між Левом і Секстантом) відбувається осіннє рівнодення. Є й цікавий об'єкт — карликова галактика Секстанта, один із супутників нашого Чумацького Шляху.",
    en: "Sextans is a faint, small constellation between Leo and Hydra, introduced by Hevelius in 1687 to honour the astronomical sextant — the instrument for measuring angular distances between stars. No star is brighter than magnitude 4.5, and without a star chart it is nearly impossible to locate. However, the constellation has an important geometric property: the celestial equator passes through it, and the autumnal equinox point lies nearby at the Leo-Sextans boundary. There is also a notable object — the Sextans Dwarf Galaxy, one of the satellite galaxies of our Milky Way.",
  },
  legend: {
    uk: "Секстант не має mythology — Гевелій назвав його на честь астрономічного секстанта, який він сам активно використовував у своїх спостереженнях. За легендою, оригінальний секстант Гевелія згорів у пожежі його обсерваторії у 1679 році. Він відновив інструмент і на його честь назвав нове сузір'я — своєрідна данина улюбленому приладу. Секстант Гевелія мав радіус близько 1.8 м і міг вимірювати кути з точністю до 10 кутових секунд.",
    en: "Sextans has no mythology — Hevelius named it after the astronomical sextant he himself used extensively in his observations. According to tradition, Hevelius's original sextant burned in the fire that destroyed his observatory in 1679. He rebuilt the instrument and named a new constellation in its honour — a tribute to his favourite tool. Hevelius's sextant had a radius of about 1.8 metres and could measure angles to within 10 arcseconds.",
  },
  howToFind: {
    uk: "Секстант розташований між яскравим Регулом (Лев) і Альфардом (Гідра). Знайдіть обидві зірки і шукайте між ними порожню ділянку неба — це і є Секстант. Через відсутність яскравих зір сузір'я невидиме в засвіченому місті і важке навіть у темному небі. Небесний екватор, що проходить тут, можна уявити як лінію між двома орієнтирами. Найкраще видно у березні та квітні.",
    en: "Sextans lies between the bright stars Regulus (Leo) and Alphard (Hydra). Find both stars and look for the empty patch of sky between them — that is Sextans. With no bright stars the constellation is invisible from cities and challenging even under dark skies. The celestial equator that passes through here can be imagined as a line between the two landmarks. Best seen March through April.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sextans_constellation_map.svg/640px-Sextans_constellation_map.svg.png",
  stars: (generatedStars["sextans"]?.stars ?? []),
  lines: generatedStars["sextans"]?.lines,
},

{
  id: "taurus",
  name: { uk: "Телець", en: "Taurus" },
  skyX: -55,
  skyY: 5,
  description: {
    uk: "Телець — одне з найстаріших і найвиразніших зодіакальних сузір'їв зимового неба. Він містить одразу два видатних зоряних скупчення: Плеяди (M45) — семизір'я, або «Стожари» в українській народній традиції, відоме ще з доісторичних часів і видне неозброєним оком як маленький ківшик; та Гіади — найближче до нас розсіяне скупчення (153 світлових роки), що складає «морду бика» навколо яскравого Альдебарана. Альдебаран — одна з чотирьох «Королівських зірок» давнини, помаранчевий гігант 13-та за яскравістю зірка неба. Тут також знаходиться Крабоподібна туманність (M1) — залишок наднової 1054 року, що спалахнула настільки яскраво, що була видна вдень протягом 23 днів.",
    en: "Taurus is one of the oldest and most distinctive zodiac constellations of the winter sky. It contains two outstanding star clusters: the Pleiades (M45) — the Seven Sisters, known since prehistoric times and visible to the naked eye as a miniature dipper; and the Hyades — the nearest open cluster to Earth at 153 light-years, forming the bull's face around the bright Aldebaran. Aldebaran is one of the four 'Royal Stars' of antiquity, an orange giant and the 13th-brightest star in the sky. The constellation also contains the Crab Nebula (M1) — remnant of the supernova of 1054 AD, which blazed so brightly it was visible in daylight for 23 consecutive days.",
  },
  legend: {
    uk: "У давньогрецькій mythology Телець — Зевс, що перетворився на прекрасного білого бика, щоб викрасти фінікійську принцесу Європу. Він вийшов із моря, ліг до її ніг і дозволив сісти на себе, а потім поплив із нею на Крит. На небі зображена лише передня частина бика — за деякими тлумаченнями, тому що він виринає з морських хвиль. Плеяди у myth — сім дочок Атланта та Плейони, які Зевс перетворив на зірки, щоб врятувати від переслідування мисливця Оріона (що і досі йде за ними по небу).",
    en: "In Greek mythology, Taurus is Zeus transformed into a magnificent white bull to abduct the Phoenician princess Europa. He emerged from the sea, lay at her feet, allowed her to climb on his back, then swam with her to Crete. In the sky only the front half of the bull is depicted — by some interpretations because he is rising from the ocean waves. The Pleiades in myth are the seven daughters of Atlas and Pleione, transformed into stars by Zeus to save them from the pursuit of the hunter Orion — who still follows them across the sky.",
  },
  howToFind: {
    uk: "Від Пояса Оріона проведіть лінію вправо та вгору — вона приведе прямо до помаранчевого Альдебарана, найяскравішої зірки Тельця. Навколо Альдебарана розкидані зірки скупчення Гіади у формі букви V. Трохи лівіше і вище — помітна хмарка Плеяд. На ліво від Альдебарана на небі — Рожки бика (Бета та Дзета Тельця). Телець найкраще видно у грудні та лютому.",
    en: "From Orion's Belt draw a line upward and to the right — it leads straight to orange Aldebaran, the brightest star of Taurus. Around Aldebaran the Hyades cluster spreads in a V-shape. Slightly to the left and above is the clearly visible Pleiades cluster. To the left of Aldebaran on the sky are the Bull's Horns (Beta and Zeta Tauri). Taurus is best seen December through February.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Taurus_constellation_map.svg/640px-Taurus_constellation_map.svg.png",
  stars: (generatedStars["taurus"]?.stars ?? []),
  lines: generatedStars["taurus"]?.lines,
},

{
  id: "telescopium",
  name: { uk: "Телескоп", en: "Telescopium" },
  skyX: -145,
  skyY: 38,
  description: {
    uk: "Телескоп — невелике тьмяне сузір'я між Стрільцем і Павичем, введене Лакайлем у 1752 році на честь оптичного телескопа. Жодна зірка не яскравіша за 3.5 зоряної величини. Попри скромний вигляд, у межах сузір'я знаходиться зірка RR Телескопа — одна з найяскравіших симбіотичних нових зірок: система з білого карлика й червоного гіганта, що спалахнула у 1944 році і з того часу повільно тьмяніє вже понад 80 років поспіль. З України Телескоп практично недоступний.",
    en: "Telescopium is a small, faint constellation between Sagittarius and Pavo, introduced by Lacaille in 1752 to honour the optical telescope. No star is brighter than magnitude 3.5. Despite its modest appearance, the constellation contains the star RR Telescopii — one of the brightest symbiotic novae: a system of a white dwarf and a red giant that erupted in 1944 and has been slowly fading for over 80 years since. Telescopium is practically inaccessible from Ukraine.",
  },
  legend: {
    uk: "Телескоп не має mythology. Лакайль назвав сузір'я на честь оптичного телескопа — приладу, що революціонізував астрономію починаючи з Галілео Галілея у 1609 році. Символічно, що за допомогою саме таких телескопів Лакайль і спостерігав південне небо, нанесене ним на карту. Сузір'я Мікроскоп і Телескоп сусідять — Лакайль немовби розмістив два кінці наукового пізнання поряд: гранично мале і гранично велике.",
    en: "Telescopium has no mythology. Lacaille named the constellation after the optical telescope — the instrument that revolutionized astronomy beginning with Galileo Galilei in 1609. Fittingly, it was through exactly such telescopes that Lacaille himself observed and mapped the southern sky. The neighbouring constellations Microscopium and Telescopium sit side by side — as if Lacaille placed the two extremes of scientific inquiry next to each other: the infinitely small and the infinitely large.",
  },
  howToFind: {
    uk: "Телескоп розташований між хвостом Скорпіона, Стрільцем і Павичем. З України видно лише влітку дуже низько — практично недосяжний. З Австралії або Південної Африки шукайте його між Стрільцем і яскравою зіркою Павоніс (Павич). Найкраще видно у липні та серпні з широт південніше 20° пн. ш.",
    en: "Telescopium lies between the tail of Scorpius, Sagittarius, and Pavo. From Ukraine it is only visible in summer very low on the horizon — practically unreachable. From Australia or South Africa look for it between Sagittarius and the bright star Peacock (Pavo). Best seen July through August from latitudes south of 20° North.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Telescopium_constellation_map.svg/640px-Telescopium_constellation_map.svg.png",
  stars: (generatedStars["telescopium"]?.stars ?? []),
  lines: generatedStars["telescopium"]?.lines,
},

{
  id: "triangulum",
  name: { uk: "Трикутник", en: "Triangulum" },
  skyX: -65,
  skyY: -5,
  description: {
    uk: "Трикутник — невелике, але давнє сузір'я між Андромедою і Овном, відоме ще давнім грекам. Три зірки справді утворюють виразний рівнобедрений трикутник — одну з найпростіших і найчистіших геометричних фігур на небі. Головна визначна пам'ятка: галактика Трикутника (M33) — третя за розміром галактика Місцевої групи після Туманності Андромеди та Чумацького Шляху, на відстані 2.7 мільйона світлових років. Незважаючи на відносну близькість, M33 має низьку поверхневу яскравість і потребує темного неба навіть для виявлення неозброєним оком.",
    en: "Triangulum is a small but ancient constellation between Andromeda and Aries, known to the ancient Greeks. Its three stars genuinely form a clear isosceles triangle — one of the simplest and purest geometric figures in the sky. Its main attraction is the Triangulum Galaxy (M33) — the third-largest galaxy in the Local Group after the Andromeda Galaxy and the Milky Way, at a distance of 2.7 million light-years. Despite its relative proximity, M33 has low surface brightness and requires a dark sky even to detect with the naked eye.",
  },
  legend: {
    uk: "Давні греки бачили в цьому сузір'ї різні речі: острів Сицилія (за формою), дельту річки Ніл, або просто букву «Дельта» грецького алфавіту — звідси стара назва Deltoton. Деякі автори ідентифікували його як золотий трикутник, що Гермес помістив на небо, щоб позначити форму Єгипту або Нілу. Жодної сталої загальноприйнятої легенди немає — сузір'я цінувалося насамперед за чіткість і простоту своєї геометрії.",
    en: "The ancient Greeks saw various things in this constellation: the island of Sicily (by shape), the Nile Delta, or simply the Greek letter Delta — hence the old name Deltoton. Some authors identified it as a golden triangle placed in the sky by Hermes to mark the shape of Egypt or the Nile. No single established legend prevailed — the constellation was valued primarily for the clarity and simplicity of its geometry.",
  },
  howToFind: {
    uk: "Трикутник знаходиться між Андромедою та Овном, трохи на південь від Андромеди. Три зірки другої-третьої величини утворюють витягнутий трикутник, помітний у темну ніч. Найяскравіша зірка — Бета Трикутника (Металтах, 3.0 зоряної величини). M33 розташована всередині трикутника — шукайте її в бінокль при хорошому темному небі як велику, але тьмяну пляму. Найкраще видно у жовтні та листопаді.",
    en: "Triangulum lies between Andromeda and Aries, slightly south of Andromeda. Its three second-to-third-magnitude stars form an elongated triangle visible on a dark night. The brightest star is Beta Trianguli (Mothallah, magnitude 3.0). M33 lies within the triangle — look for it through binoculars under a good dark sky as a large but faint smudge. Best seen October through November.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Triangulum_constellation_map.svg/640px-Triangulum_constellation_map.svg.png",
  stars: (generatedStars["triangulum"]?.stars ?? []),
  lines: generatedStars["triangulum"]?.lines,
},

{
  id: "triangulum-australe",
  name: { uk: "Південний Трикутник", en: "Triangulum Australe" },
  skyX: 172,
  skyY: 44,
  description: {
    uk: "Південний Трикутник — невелике, але яскраве сузір'я глибокого південного неба, введене нідерландськими мореплавцями наприкінці XVI ст. Попри мініатюрні розміри (83-тє за площею), його три зірки першої-другої величини утворюють яскравий і ідеально рівносторонній трикутник, що легко впізнається. Найяскравіша — Атрія (Альфа, магнітуда 1.91), помаранчевий гігант. На відміну від свого північного аналога (Трикутника), Південний Трикутник набагато помітніший і легший для пошуку. З України недоступний.",
    en: "Triangulum Australe is a small but bright constellation of the deep southern sky, introduced by Dutch navigators in the late 16th century. Despite its tiny size (83rd in area), its three stars of first-to-second magnitude form a bright, nearly equilateral triangle that is easily recognized. The brightest, Atria (Alpha, magnitude 1.91), is an orange giant. Unlike its northern counterpart Triangulum, the Southern Triangle is far more prominent and easy to locate. Not accessible from Ukraine.",
  },
  legend: {
    uk: "Південний Трикутник не має mythology. Нідерландські мореплавці Кейзер і де Гаутман ввели його наприкінці XVI ст., паралелячи з древнім Трикутником Північної півкулі. На деяких ранніх картах поряд із ним зображували Циркуль і Наугольник — три геометричні інструменти разом, що утворюють маленький «геодезичний куток» на південному небі. У Петруса Планціуса сузір'я іноді позначалося як «Tres Patriarchae» (Три Патріархи) — Авраам, Ісаак і Яків.",
    en: "Triangulum Australe has no mythology. Dutch navigators Keyser and de Houtman introduced it in the late 16th century, paralleling the ancient Triangulum of the Northern Hemisphere. On some early star maps it was depicted alongside Circinus and Norma — three geometric instruments together forming a small 'surveying corner' on the southern sky. In Petrus Plancius's work the constellation was sometimes labelled 'Tres Patriarchae' (the Three Patriarchs) — Abraham, Isaac, and Jacob.",
  },
  howToFind: {
    uk: "Південний Трикутник недоступний з України. З Південної півкулі він один із найлегших сузір'їв для пошуку: три яскраві зірки у формі рівностороннього трикутника між Норма та Центавром. Шукайте його між «Вказівниками» Південного Хреста (Альфа і Бета Центавра) та Скорпіоном. Найкраще видно у червні та липні з широт південніше 19° пн. ш.",
    en: "Triangulum Australe is not accessible from Ukraine. From the Southern Hemisphere it is one of the easiest constellations to find: three bright stars in a near-equilateral triangle between Norma and Centaurus. Look for it between the Southern Cross Pointers (Alpha and Beta Centauri) and Scorpius. Best seen June through July from latitudes south of 19° North.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Triangulum_Australe_constellation_map.svg/640px-Triangulum_Australe_constellation_map.svg.png",
  stars: (generatedStars["triangulum-australe"]?.stars ?? []),
  lines: generatedStars["triangulum-australe"]?.lines,
},

{
  id: "tucana",
  name: { uk: "Тукан", en: "Tucana" },
  skyX: 193,
  skyY: 53,
  description: {
    uk: "Тукан — сузір'я глибокого південного неба, введене нідерландськими мореплавцями наприкінці XVI ст. на честь тропічного птаха тукана. Незважаючи на тьмяні зорі, тут знаходяться два виняткових об'єкти. Перший — Мала Магелланова Хмара (ММХ): найближчий карликовий супутник нашого Чумацького Шляху на відстані 200 000 світлових років, видний неозброєним оком як відірваний клаптик Чумацького Шляху. Другий — 47 Тукана (NGC 104): одне з двох найяскравіших кулястих скупчень неба, видне неозброєним оком як тьмяна зірка другої величини прямо на тлі ММХ. З України недоступне.",
    en: "Tucana is a constellation of the deep southern sky, introduced by Dutch navigators in the late 16th century and named after the tropical toucan bird. Despite its faint stars, it contains two exceptional objects. First, the Small Magellanic Cloud (SMC): the nearest dwarf satellite of our Milky Way at 200,000 light-years, visible to the naked eye as a detached fragment of the Milky Way. Second, 47 Tucanae (NGC 104): one of the two brightest globular clusters in the sky, visible to the naked eye as a fuzzy second-magnitude star projected right against the SMC. Not accessible from Ukraine.",
  },
  legend: {
    uk: "Тукан не має mythology. Нідерландські мореплавці просто назвали сузір'я на честь екзотичного птаха з величезним яскравим дзьобом, якого вперше побачили у Бразилії та Ост-Індії. Тукан став одним із кількох «екзотичних птахів» на південному небі поряд із Птахом Раю, Журавлем і Павичем. Мала Магелланова Хмара, що розкинулася в сузір'ї, відома місцевим народам Австралії та Полінезії тисячоліттями і має різні назви в їхніх cultural традиціях.",
    en: "Tucana has no mythology. Dutch navigators simply named the constellation after the exotic bird with an enormous colourful beak that they first encountered in Brazil and the East Indies. Tucana became one of several 'exotic birds' on the southern sky alongside Apus, Grus, and Pavo. The Small Magellanic Cloud that spreads across the constellation has been known to the indigenous peoples of Australia and Polynesia for millennia and carries various names in their cultural traditions.",
  },
  howToFind: {
    uk: "Тукан недоступний з України. З Південної півкулі Мала Магелланова Хмара є найкращим орієнтиром: у темну ніч вона виглядає як відірваний шматок Чумацького Шляху на півдні неба. 47 Тукана помітне прямо на краю ММХ як яскрава нефокусована «зірочка». Обидва об'єкти є приполярними і видні цілий рік із широт південніше 14° пн. ш. Найкраще видно у жовтні та листопаді.",
    en: "Tucana is not accessible from Ukraine. From the Southern Hemisphere the Small Magellanic Cloud is the best landmark: on a dark night it looks like a detached piece of the Milky Way in the southern sky. The globular cluster 47 Tucanae is visible right at the edge of the SMC as a bright, unresolvable 'fuzzy star.' Both objects are circumpolar and visible year-round from latitudes south of 14° North. Best seen October through November.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tucana_constellation_map.svg/640px-Tucana_constellation_map.svg.png",
  stars: (generatedStars["tucana"]?.stars ?? []),
  lines: generatedStars["tucana"]?.lines,
},

{
  id: "vela",
  name: { uk: "Вітрила", en: "Vela" },
  skyX: 178,
  skyY: 38,
  description: {
    uk: "Вітрила — третя частина колишнього Корабля Арго після Кіля та Корми. Як і в сусідній Кормі, тут немає зірок Альфа та Бета — вони залишились у Кормі після поділу Лакайля. Зате є унікальний об'єкт: Пульсар у Вітрилах (Vela Pulsar) — залишок наднової, що вибухнула 11 000 років тому. Це один із найяскравіших гамма-джерел усього неба і один із небагатьох пульсарів, видних в оптичному діапазоні. Туманність Вітрила — уламки оболонки тієї ж наднової — є однією з найбільших і найяскравіших залишків наднової на небі. З України не видно.",
    en: "Vela is the third part of the former Argo Navis after Carina and Puppis. As with neighbouring Puppis, it has no Alpha or Beta stars — they remained in Puppis after Lacaille's division. However, Vela contains a unique object: the Vela Pulsar — the remnant of a supernova that exploded 11,000 years ago. It is one of the brightest gamma-ray sources in the entire sky and one of the very few pulsars visible in optical light. The Vela Supernova Remnant — the shattered shell of that same explosion — is one of the largest and brightest supernova remnants in the sky. Not visible from Ukraine.",
  },
  legend: {
    uk: "Вітрила — вітрила корабля Арго, на якому Ясон та аргонавти пливли за Золотим руном. Вітрило як частина корабля уособлює рух, пригоду і невідоме — квінтесенцію мореплавства. Після поділу Арго на три частини Вітрила успадкували «середню» секцію між Кілем і Кормою, хоча жодна конкретна mythology сцена не асоціюється саме з цією частиною корабля.",
    en: "Vela represents the sails of the ship Argo, on which Jason and the Argonauts voyaged to retrieve the Golden Fleece. The sail as part of the ship embodies movement, adventure, and the unknown — the very essence of seafaring. After Argo was divided into three parts, Vela inherited the 'middle' section between Carina and Puppis, though no specific mythological scene is associated with this particular part of the ship.",
  },
  howToFind: {
    uk: "Вітрила недоступні з України. З Південної півкулі вони розташовані між Кілем і Кормою — шукайте яскраві зірки Гамма та Дельта Вітрил, що разом із Іота та Каппа Кіля утворюють «Хибний Хрест» — астеризм, який мореплавці часто плутали з Південним Хрестом. Найкраще видно у лютому та березні з широт південніше 30° пн. ш.",
    en: "Vela is not accessible from Ukraine. From the Southern Hemisphere it lies between Carina and Puppis — look for the bright stars Gamma and Delta Velorum, which together with Iota and Kappa Carinae form the 'False Cross' asterism, long confused with the Southern Cross by navigators. Best seen February through March from latitudes south of 30° North.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Vela_constellation_map.svg/640px-Vela_constellation_map.svg.png",
  stars: (generatedStars["vela"]?.stars ?? []),
  lines: generatedStars["vela"]?.lines,
},

{
  id: "virgo",
  name: { uk: "Діва", en: "Virgo" },
  skyX: -132,
  skyY: 14,
  description: {
    uk: "Діва — друге за площею зодіакальне сузір'я і взагалі друге за площею серед 88, де сконцентровано феноменальна кількість галактик. Найяскравіша зірка — Спіка (Альфа Діви, магнітуда 1.04), блакитно-білий гігант і 15-та зірка неба, насправді тісна подвійна система. Діва є центром «Суперскупчення Діви» — найближчого до нас великого суперскупчення галактик, що містить понад 1300 галактик і до якого входить і наш Місцевий Рій разом із Чумацьким Шляхом. Уявіть: наша галактика є лише тихою провінцією цього гігантського мегаполіса.",
    en: "Virgo is the second-largest zodiac constellation and second-largest overall among the 88, harbouring a phenomenal concentration of galaxies. Its brightest star, Spica (Alpha Virginis, magnitude 1.04), is a blue-white giant and the 15th-brightest star in the sky — actually a close binary system. Virgo is the heart of the Virgo Supercluster — the nearest large supercluster to us, containing over 1,300 galaxies and including our own Local Group along with the Milky Way. Our entire galaxy is merely a quiet outskirt of this vast metropolitan region.",
  },
  legend: {
    uk: "Діва в давньогрецькій mythology уособлює насамперед Деметру — богиню врожаю та родючості. Коли її дочку Персефону викрали до підземного світу, Деметра у горі занедбала поля — і на землі настала зима. Саме тому Діва асоціюється з часом врожаю (коли вона на небі) і зимою (коли вона нижче горизонту). За іншою версією, це Астрея — богиня справедливості, остання з богів, що покинула Землю в кінці Золотого віку, прихопивши із собою Терези (сузір'я Терезів поруч).",
    en: "In Greek mythology, Virgo primarily represents Demeter, the goddess of harvest and fertility. When her daughter Persephone was abducted to the underworld, Demeter in grief neglected the fields — and winter came to the earth. This is why Virgo is associated with the harvest season (when she is in the sky) and winter (when she is below the horizon). Another tradition identifies her as Astraea, the goddess of justice, the last deity to leave the Earth at the end of the Golden Age — taking the Scales with her (the neighbouring constellation Libra).",
  },
  howToFind: {
    uk: "Найпростіший спосіб знайти Діву — продовжити дугу ручки Великого Ковша через Арктур (Волопас) далі вниз: наступна яскрава зірка на цій дузі — Спіка. Астрономи запам'ятовують це як «Arc to Arcturus, Speed on to Spica». Від Спіки розгортається широке сузір'я на схід і північ. Для пошуку галактик Діви потрібен телескоп і темне небо. Найкраще видно у квітні та травні.",
    en: "The easiest way to find Virgo is to extend the arc of the Big Dipper's handle through Arcturus (Boötes) and continue further: the next bright star along that arc is Spica. Astronomers remember this as 'Arc to Arcturus, Speed on to Spica.' From Spica the wide constellation spreads east and north. Hunting Virgo's galaxies requires a telescope and dark skies. Best seen April through May.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Virgo_constellation_map.svg/640px-Virgo_constellation_map.svg.png",
  stars: (generatedStars["virgo"]?.stars ?? []),
  lines: generatedStars["virgo"]?.lines,
},

{
  id: "volans",
  name: { uk: "Летюча Риба", en: "Volans" },
  skyX: 186,
  skyY: 44,
  description: {
    uk: "Летюча Риба — невелике сузір'я між Кілем і Великою Магеллановою Хмарою, введене нідерландськими мореплавцями наприкінці XVI ст. на честь летючих риб, яких вони бачили у тропічних водах — рибин, що вискакують з моря і планують на грудних плавниках над хвилями до 400 метрів. Жодна зірка не яскравіша за 3.8 зоряної величини. У межах сузір'я знаходиться Lindsay-Shapley Ring (AM 0644-741) — рідкісна кільцева галактика, що утворилася внаслідок зіткнення двох галактик. З України недоступне.",
    en: "Volans is a small constellation between Carina and the Large Magellanic Cloud, introduced by Dutch navigators in the late 16th century in honour of flying fish — creatures they observed in tropical waters that leap from the sea and glide on their pectoral fins for up to 400 metres. No star is brighter than magnitude 3.8. Within the constellation lies the Lindsay-Shapley Ring (AM 0644-741) — a rare ring galaxy formed by the collision of two galaxies. Not accessible from Ukraine.",
  },
  legend: {
    uk: "Летюча Риба не має mythology. Назва відображає суто натуралістичний підхід нідерландських мореплавців до найменування нових сузір'їв — вони просто фіксували дивовижних тварин, яких зустрічали під час плавань. Летюча риба була для моряків XVI–XVII ст. справжнім дивом: риба, що літає! Первісна латинська назва Piscis Volans була скорочена до Volans Міжнародним астрономічним союзом у 1930 році.",
    en: "Volans has no mythology. The name reflects the purely naturalistic approach of Dutch navigators to naming new constellations — they simply recorded the astonishing creatures they encountered on their voyages. The flying fish was a genuine marvel for 16th and 17th century sailors: a fish that flies! The original Latin name Piscis Volans was shortened to Volans by the International Astronomical Union in 1930.",
  },
  howToFind: {
    uk: "Летюча Риба недоступна з України. З Південної півкулі вона розташована між яскравим Канопусом (Кіль) і Великою Магеллановою Хмарою (Меч-Риба). Усі зірки тьмяні і без характерної форми. Найкраще видно у лютому та березні з широт південніше 15° пн. ш.",
    en: "Volans is not accessible from Ukraine. From the Southern Hemisphere it lies between the bright star Canopus (Carina) and the Large Magellanic Cloud (Dorado). All its stars are faint and form no distinctive pattern. Best seen February through March from latitudes south of 15° North.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Volans_constellation_map.svg/640px-Volans_constellation_map.svg.png",
  stars: (generatedStars["volans"]?.stars ?? []),
  lines: generatedStars["volans"]?.lines,
},

{
  id: "vulpecula",
  name: { uk: "Лисичка", en: "Vulpecula" },
  skyX: -135,
  skyY: 8,
  description: {
    uk: "Лисичка — невелике тьмяне сузір'я в серці Літнього Трикутника між Лебедем, Орлом і Стрілою, введене Гевелієм у 1687 році. Жодна зірка не яскравіша за 4.4 зоряної величини. Але тут знаходяться два видатних об'єкти. Перший — гантель (M27): перша відкрита планетарна туманність (1764 рік, Шарль Мессьє) і одна з найбільших і найяскравіших, видна в невеликий телескоп. Другий — PSR B1919+21: перший відкритий пульсар (1967 рік, Джослін Белл). Спочатку регулярний сигнал від нього прийняли за послання позаземного розуму і навіть присвоїли назву LGM-1 (Little Green Men).",
    en: "Vulpecula is a small, faint constellation in the heart of the Summer Triangle between Cygnus, Aquila, and Sagitta, introduced by Hevelius in 1687. No star is brighter than magnitude 4.4. However it contains two outstanding objects. First, the Dumbbell Nebula (M27): the first planetary nebula ever discovered (1764, Charles Messier), and one of the largest and brightest, visible through a small telescope. Second, PSR B1919+21: the first pulsar ever detected (1967, Jocelyn Bell). Its regular signal was initially interpreted as a message from extraterrestrial intelligence and was even designated LGM-1 (Little Green Men).",
  },
  legend: {
    uk: "Гевелій назвав сузір'я Vulpecula cum Ansere (Лисичка з Гуском) — спочатку в ньому зображалася лисиця з гускою в пащі. Пізніше Гусак як окремий елемент зник, залишилася лише Лисичка. Жодної давньої mythology немає. Пульсар PSR B1919+21 отримав тимчасову назву «Маленькі Зелені Чоловічки» (LGM-1) через неймовірну регулярність його імпульсів — вчені серйозно розглядали гіпотезу штучного сигналу. Відкриття Джослін Белл у 1967 році стало одним із найдраматичніших моментів в history астрономії.",
    en: "Hevelius named the constellation Vulpecula cum Ansere (the Fox with the Goose) — it originally depicted a fox carrying a goose in its jaws. The Goose later disappeared as a separate element, leaving only the Fox. There is no ancient mythology. The pulsar PSR B1919+21 received the temporary designation LGM-1 (Little Green Men) because of the extraordinary regularity of its pulses — scientists seriously considered the hypothesis of an artificial signal. Jocelyn Bell's 1967 discovery became one of the most dramatic moments in the history of astronomy.",
  },
  howToFind: {
    uk: "Лисичка розташована всередині Літнього Трикутника — між Денебом (Лебідь), Вегою (Ліра) і Альтаїром (Орел). Знайдіть Стрілу (маленький рядок із чотирьох зір) і дивіться трохи вище від неї: ця ділянка і є Лисичкою. M27 знаходиться на північ від центральної зірки Стріли — у бінокль видно як невелика овальна пляма. Лисичка найкраще видна у серпні та вересні.",
    en: "Vulpecula lies inside the Summer Triangle — between Deneb (Cygnus), Vega (Lyra), and Altair (Aquila). Find Sagitta (the small row of four stars) and look slightly above it: that area is Vulpecula. The Dumbbell Nebula M27 lies north of the central star of Sagitta — through binoculars it appears as a small oval smudge. Vulpecula is best seen August through September.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Vulpecula_constellation_map.svg/640px-Vulpecula_constellation_map.svg.png",
  stars: (generatedStars["vulpecula"]?.stars ?? []),
  lines: generatedStars["vulpecula"]?.lines,
}]