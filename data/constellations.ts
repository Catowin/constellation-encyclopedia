import { generatedStars } from "./generated-stars";

export interface Star {
  name: string;
  top: string;
  left: string;
  size: number;
}

export type Lang = "uk" | "la" | "en";

export interface LocalizedText {
  uk: string;
  la?: string;  // латинська — необов'язкова, заповнюємо поступово
  en?: string;  // англійська — необов'язкова, заповнюємо поступово
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
  name: { uk: "Велика Ведмедиця", la: "Ursa Maior", en: "Great Bear" },
  skyX: 0,
  skyY: 0,
  viewBox: [14, 2, 60, 80], // Якщо він специфічний саме для відображення картки
  description: { uk: "Велика Ведмедиця — одне з найбільших..." },
  legend: { uk: "У давньогрецьких міфах..." },
  howToFind: { uk: "Велику Ведмедицю неможливо не помітити..." },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ursa_Major_constellation_map.svg/640px-Ursa_Major_constellation_map.svg.png",
  // ТАК САМО ЯК І ВСІ ІНШІ:
  stars: (generatedStars["ursa-major"]?.stars ?? []),
  lines: generatedStars["ursa-major"]?.lines,
},
 
  {
    id: "ursa-minor",
    name: { uk: "Мала Ведмедиця", la: "Ursa Minor", en: "Little Bear" },
    skyX: -18,
    skyY: -12,
    description: {
      uk: "Мала Ведмедиця — навколополярне сузір'я північної півкулі, відоме насамперед тим, що в ньому знаходиться Полярна зірка (Поларіс) — найважливіший орієнтир для мореплавців і мандрівників протягом тисячоліть.",
      la: "Ursa Minor — constellation circumpolaris hemisphaerii septentrionalis. Stella Polaris, in cauda Ursae Minoris sita, directionem Septentrionis indicat.",
      en: "Ursa Minor is a circumpolar constellation best known for containing Polaris, the North Star, which has guided navigators and travelers for thousands of years.",
    },
    legend: {
      uk: "За однією з грецьких легенд, Мала Ведмедиця — це Аркас, син Каллісто і Зевса. Зевс перетворив хлопця на ведмедицю і підняв обох на небо.",
      la: "Secundum fabulam Graecam, Ursa Minor est Arcas, filius Callistus et Iovis. Iuppiter eum in ursam mutavit et in caelum cum matre transtulit.",
      en: "According to Greek legend, Ursa Minor is Arcas, son of Callisto and Zeus. To prevent him from accidentally harming his mother, Zeus transformed him into a bear and placed both in the sky.",
    },
    howToFind: {
      uk: "Знайдіть дві крайні зірки Великого Ковша — Дубхе і Мерак. Проведіть уявну лінію від Мерака через Дубхе і продовжте її приблизно в п'ять разів — вона вкаже на Полярну зірку.",
      la: "Inveni duas stellas extremas Haustri Magni — Dubhe et Merak. Lineam per eas duc et extende quinquies — ea Stellam Polarem demonstrabit.",
      en: "Find the two stars at the end of the Big Dipper's bowl — Dubhe and Merak. Draw a line through them and extend it about five times — it points directly to Polaris.",
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ursa_Minor_constellation_map.svg/640px-Ursa_Minor_constellation_map.svg.png",
    stars: (generatedStars["ursa-minor"]?.stars ?? []),
    lines: generatedStars["ursa-minor"]?.lines,
  },
  {
    id: "orion",
    name: { uk: "Оріон" },
    skyX: -36,
    skyY: 15,
    description: { uk: "Оріон — одне з найвпізнаваніших і найяскравіших сузір'їв зоряного неба. Воно містить два з десяти найяскравіших зірок неба — Рігель і Бетельгейзе. Три зірки пояса Оріона — Альнітак, Альнілам і Мінтака — утворюють ідеально рівну лінію і відомі в різних культурах як «Три Царі» або «Три Сестри»." },
    legend: { uk: "Оріон — велетенський мисливець з давньогрецьких міфів, син Посейдона. Він хвалився, що вб'є всіх звірів на землі. Богиня Гея розгнівалась і послала велетенського Скорпіона вбити хвалька. Зевс підняв обох на небо, але поставив так, щоб вони ніколи не зустрічались: коли Оріон заходить, Скорпіон сходить, і навпаки." },
    howToFind: { uk: "Три зірки пояса Оріона — найпростіший орієнтир: шукайте три яскраві зірки в майже ідеально рівний рядок. Навколо них побачите трапецію з чотирьох яскравих зірок — це тіло Оріона. Яскраво-червонувата Бетельгейзе — це його плече, блакитно-білий Рігель — нога. Сузір'я краще за все видно в грудні–лютому." },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Orion_constellation_map.svg/640px-Orion_constellation_map.svg.png",
    stars: (generatedStars["orion"]?.stars ?? []),
    lines: generatedStars["orion"]?.lines,
  },
  {
    id: "cassiopeia",
    name: { uk: "Кассіопея" },
    skyX: -54,
    skyY: -20,
    description: { uk: "Кассіопея — яскраве навколополярне сузір'я, що легко впізнається за характерною формою букви W або M залежно від пори року. П'ять головних зірок утворюють цей впізнаваний зигзаг. Сузір'я видно цілий рік у середніх та високих широтах і є одним із найпопулярніших серед любителів астрономії." },
    legend: { uk: "Кассіопея — ефіопська цариця, дружина царя Цефея і мати Андромеди. Вона хвалилась своєю красою, стверджуючи, що перевершує морських німф — нереїд. Ображені німфи попросили Посейдона покарати гордовиту царицю. Бог моря послав чудовисько Кіта спустошувати береги Ефіопії. Щоб умилостивити богів, Кассіопея мала принести в жертву власну дочку." },
    howToFind: { uk: "Кассіопея знаходиться майже прямо навпроти Великої Ведмедиці відносно Полярної зірки. Якщо ви знайшли Полярну зірку, проведіть від неї лінію через Ківш Великої Ведмедиці — і ви опинитесь у районі Кассіопеї. Характерний W-подібний зигзаг не переплутати ні з чим іншим. Найкраще видно восени та взимку." },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Cassiopeia_constellation_map.svg/640px-Cassiopeia_constellation_map.svg.png",
    stars: (generatedStars["cassiopeia"]?.stars ?? []),
    lines: generatedStars["cassiopeia"]?.lines,
  },
  {
    id: "leo",
    name: { uk: "Лев" },
    skyX: -72,
    skyY: 10,
    description: { uk: "Лев — велике сузір'я зодіакального кола, що уособлює царя звірів. Найяскравіша зірка сузір'я — Регул, одна з найяскравіших зірок нічного неба. Характерний серп зірок, що нагадує обернений знак питання або голову лева, дозволяє легко знайти це сузір'я. Сонце проходить крізь Лева з серпня по вересень." },
    legend: { uk: "У давньогрецькій міфології Лев — це Немейський лев, якого переміг Геракл у своєму першому подвигу. Цей велетенський лев з невразливою шкірою спустошував околиці міста Немея. Геракл задушив його голіруч, оскільки жодна зброя не могла пробити його шкіру. Після перемоги Геракл зняв шкіру лева і носив її як плащ. Зевс помістив лева на небо як нагадування про великий подвиг." },
    howToFind: { uk: "Шукайте характерний серп або кому з зірок у весняному небі — це голова та грива Лева. Найяскравіша зірка серпа — Регул — знаходиться внизу і знаменує серце лева. Правіше від серпа три зірки утворюють трикутник — це задня частина тіла. Знайти сузір'я допоможуть зірки ковша Великої Ведмедиці: якщо провести лінію через «дно» ковша вниз — вона вкаже на Регул." },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Leo_constellation_map.svg/640px-Leo_constellation_map.svg.png",
    stars: (generatedStars["leo"]?.stars ?? []),
    lines: generatedStars["leo"]?.lines,
  },
  {
    id: "scorpius",
    name: { uk: "Скорпіон" },
    skyX: -90,
    skyY: 25,
    description: { uk: "Скорпіон — одне з найвидовищніших сузір'їв зодіаку, що й справді нагадує скорпіона з хвостом і жалом. Антарес — найяскравіша зірка сузір'я — є одним із найбільших відомих червоних надгігантів. Сузір'я багате на зоряні скупчення і туманності. На жаль, для мешканців України воно піднімається невисоко над горизонтом." },
    legend: { uk: "Скорпіон — той самий, якого послала богиня Гея, щоб покарати мисливця Оріона за хвальковитість. Зевс помістив обидва сузір'я на протилежних кінцях неба, щоб вони ніколи не зустрічалися. Коли Оріон заходить на заході, Скорпіон сходить на сході, і навпаки — ця небесна погоня триває вічно." },
    howToFind: { uk: "Скорпіон видно влітку на півдні та південному сході, але він піднімається невисоко. Шукайте яскраву червонувату зірку Антарес — серце скорпіона. Від неї в обидва боки розходяться зірки: вгору — голова і кігті, вниз і вбік — хвіст із характерним вигином і яскравим жалом. Найкраще спостерігати в червні–серпні після опівночі." },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Scorpius_constellation_map.svg/640px-Scorpius_constellation_map.svg.png",
    stars: (generatedStars["scorpius"]?.stars ?? []),
    lines: generatedStars["scorpius"]?.lines,
  },
  {
    id: "lyra",
    name: { uk: "Ліра" },
    skyX: -108,
    skyY: -8,
    description: { uk: "Ліра — невелике, але дуже яскраве сузір'я північного літнього неба. Його головна зірка Вега є п'ятою за яскравістю зіркою на всьому нічному небі і однією з вершин «Літнього трикутника» — великого астеризму разом з Денебом і Альтаїром. Вега також буде Полярною зіркою приблизно через 12 000 років через прецесію земної осі." },
    legend: { uk: "Ліра — інструмент Орфея, найвидатнішого музиканта давньої Греції. Його гра зачаровувала не лише людей, а й диких звірів, птахів, дерева і навіть каміння. Коли загинула його кохана Еврідіка, Орфей зійшов у підземне царство і своєю музикою розчулив навіть Аїда, щоб повернути її. Після загибелі Орфея Музи поховали його ліру і попросили Зевса помістити її на небо." },
    howToFind: { uk: "Вега — одна з найяскравіших зірок літнього неба. Влітку шукайте ярку блакитнувато-білу зірку майже в зеніті або трохи на північ від зеніту. Решта сузір'я — невеликий паралелограм із чотирьох зірок поряд із Вегою. Разом із Денебом (у Лебеді) і Альтаїром (в Орлі) Вега утворює великий «Літній трикутник»." },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lyra_constellation_map.svg/640px-Lyra_constellation_map.svg.png",
    stars: (generatedStars["lyra"]?.stars ?? []),
    lines: generatedStars["lyra"]?.lines,
  },
  {
    id: "cygnus",
    name: { uk: "Лебідь" },
    skyX: -126,
    skyY: -5,
    description: { uk: "Лебідь — велике і яскраве сузір'я літнього неба. П'ять головних зірок утворюють характерний «Північний хрест» — один з найвідоміших астеризмів. Найяскравіша зірка — Денеб — одна з найсвітліших зірок Галактики: якби вона знаходилась так само близько від нас, як Сіріус, вона б сяяла яскравіше за Місяць і відкидала б тіні вночі." },
    legend: { uk: "Лебідь на небі — це сам Зевс, який перетворився на лебедя. За однією з легенд, він прийняв цей образ, щоб спокусити спартанську царицю Леду. За іншою версією, це Орфей, який після своєї трагічної загибелі був перетворений на лебедя і поміщений поруч із своєю лірою на небі." },
    howToFind: { uk: "Шукайте яскравий «Північний хрест» у літньому небі. Денеб — найяскравіша зірка у верхній частині хреста. Уявіть лебедя, що летить на південь: Денеб — хвіст, Альбірео — голова (нижня зірка хреста), а перекладина хреста — розкриті крила. Денеб також є вершиною «Літнього трикутника» разом із Вегою і Альтаїром." },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cygnus_constellation_map.svg/640px-Cygnus_constellation_map.svg.png",
    stars: (generatedStars["cygnus"]?.stars ?? []),
    lines: generatedStars["cygnus"]?.lines,
  },
  {
    id: "aquila",
    name: { uk: "Орел" },
    skyX: -144,
    skyY: 18,
    description: { uk: "Орел — сузір'я літнього неба з яскравою зіркою Альтаїр, що входить до «Літнього трикутника». Альтаїр обертається з шаленою швидкістю — один оберт за 9 годин (Сонце обертається за 25 днів), через що ця зірка сплюснута: її екваторіальний діаметр на 20% більший за полярний. Відстань до Альтаїра — лише 17 світлових років." },
    legend: { uk: "Орел — птах самого Зевса, вісник і виконавець волі царя богів. Саме орел приніс на Олімп прекрасного юнака Ганімеда, щоб той став виночерпієм богів. За іншою легендою, щодня орел прилітав до прикутого Прометея і виїдав його печінку, що щоночі знову виростала. Геракл урешті вбив цього орла і визволив Прометея." },
    howToFind: { uk: "Альтаїр — найяскравіша зірка сузір'я і одна з найяскравіших зірок літнього неба. Відрізнити її легко: по обидва боки від Альтаїра є дві менші зірки, що утворюють характерну трійку в ряд — «пояс орла». Альтаїр є частиною «Літнього трикутника» разом із Вегою (у Лірі) і Денебом (у Лебеді)." },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Aquila_constellation_map.svg/640px-Aquila_constellation_map.svg.png",
    stars: (generatedStars["aquila"]?.stars ?? []),
    lines: generatedStars["aquila"]?.lines,
  },
  {
    id: "gemini",
    name: { uk: "Близнюки" },
    skyX: -162,
    skyY: 8,
    description: { uk: "Близнюки — зодіакальне сузір'я, що легко впізнається за двома яскравими зірками — Кастором і Поллуксом, що символізують голови небесних братів-близнюків. Поллукс є найближчим до нас гігантом і яскравіший за Кастора, хоча Кастор — насправді система з шести зірок. Метеорний потік Геміноїди, що досягає максимуму в грудні, є одним із найпотужніших у році." },
    legend: { uk: "Кастор і Поллукс — брати-близнюки з грецької міфології, сини спартанської цариці Леди. Поллукс був безсмертним сином Зевса, а Кастор — смертним сином царя Тіндарея. Коли Кастор загинув у бою, безсмертний Поллукс попросив Зевса дозволити йому ділити безсмертя з братом. Зевс зглянувся і помістив обох на небо, де вони вічно разом." },
    howToFind: { uk: "Шукайте дві яскраві зірки поряд у зимово-весняному небі — це Кастор і Поллукс, голови близнюків. Поллукс (нижня і яскравіша) має злегка помаранчевий відтінок, Кастор (верхня) — біліший. Якщо знайшли Оріон, проведіть лінію від пояса через яскраву Бетельгейзе і продовжте — вона вкаже на Близнюків." },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Gemini_constellation_map.svg/640px-Gemini_constellation_map.svg.png",
    stars: (generatedStars["gemini"]?.stars ?? []),
    lines: generatedStars["gemini"]?.lines,
  },

  // ── Решта 78 сузір'їв ────────────────────────────────────────────────────
  ...([
    { id: "andromeda",          name: { uk: "Андромеда" },           skyX: -30,  skyY: -25 },
    { id: "antlia",             name: { uk: "Насос" },               skyX: -180, skyY: 30  },
    { id: "apus",               name: { uk: "Птах Раю" },            skyX: 200,  skyY: 50  },
    { id: "aquarius",           name: { uk: "Водолій" },             skyX: -170, skyY: 25  },
    { id: "ara",                name: { uk: "Вівтар" },              skyX: -115, skyY: 35  },
    { id: "aries",              name: { uk: "Овен" },                skyX: -60,  skyY: 12  },
    { id: "auriga",             name: { uk: "Візничий" },            skyX: -80,  skyY: -5  },
    { id: "bootes",             name: { uk: "Волопас" },             skyX: -95,  skyY: 5   },
    { id: "caelum",             name: { uk: "Різець" },              skyX: -190, skyY: 30  },
    { id: "camelopardalis",     name: { uk: "Жираф" },               skyX: -20,  skyY: -35 },
    { id: "cancer",             name: { uk: "Рак" },                 skyX: -155, skyY: 12  },
    { id: "canes-venatici",     name: { uk: "Гончі Пси" },           skyX: -108, skyY: -2  },
    { id: "canis-major",        name: { uk: "Великий Пес" },         skyX: -175, skyY: 22  },
    { id: "canis-minor",        name: { uk: "Малий Пес" },           skyX: -160, skyY: 15  },
    { id: "capricornus",        name: { uk: "Козоріг" },             skyX: -185, skyY: 28  },
    { id: "carina",             name: { uk: "Кіль" },                skyX: 185,  skyY: 40  },
    { id: "centaurus",          name: { uk: "Центавр" },             skyX: 170,  skyY: 38  },
    { id: "cepheus",            name: { uk: "Цефей" },               skyX: -45,  skyY: -30 },
    { id: "cetus",              name: { uk: "Кит" },                 skyX: -75,  skyY: 20  },
    { id: "chamaeleon",         name: { uk: "Хамелеон" },            skyX: 195,  skyY: 52  },
    { id: "circinus",           name: { uk: "Циркуль" },             skyX: 175,  skyY: 42  },
    { id: "columba",            name: { uk: "Голуб" },               skyX: -195, skyY: 28  },
    { id: "coma-berenices",     name: { uk: "Коса Вероніки" },       skyX: -115, skyY: 5   },
    { id: "corona-australis",   name: "Південна Корона",     skyX: -130, skyY: 30  },
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
    { id: "piscis-austrinus",   name: "Південна Риба",       skyX: -178, skyY: 28  },
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
    { id: "triangulum-australe",name: "Південний Трикутник", skyX: 172,  skyY: 44  },
    { id: "tucana",             name: { uk: "Тукан" },               skyX: 193,  skyY: 53  },
    { id: "vela",               name: { uk: "Вітрила" },             skyX: 178,  skyY: 38  },
    { id: "virgo",              name: { uk: "Діва" },                skyX: -132, skyY: 14  },
    { id: "volans",             name: { uk: "Летюча Риба" },         skyX: 186,  skyY: 44  },
    { id: "vulpecula",          name: { uk: "Лисичка" },             skyX: -135, skyY: 8   },
  ] as { id: string; name: string; skyX: number; skyY: number }[]).map((c) => ({
    ...c,
    description: { uk: "${typeof c.name === 'string' ? c.name : c.name.uk} — сузір'я, яке несе в собі тисячолітню мудрість зоряних карт. Детальний опис буде доданий найближчим часом." },
    legend: { uk: "Легенди про ${typeof c.name === 'string' ? c.name : c.name.uk} сягають глибокої давнини. Детальний опис легенди буде доданий найближчим часом." },
    howToFind: { uk: "Інструкція з пошуку сузір'я ${typeof c.name === 'string' ? c.name : c.name.uk} на нічному небі буде додана найближчим часом." },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ursa_Major_constellation_map.svg/640px-Ursa_Major_constellation_map.svg.png",
    stars: (generatedStars[c.id]?.stars ?? []) as Star[],
    lines: generatedStars[c.id]?.lines,
  })),
];