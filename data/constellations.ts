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
  name: {
    uk: "Велика Ведмедиця",
    la: "Ursa Maior",
    en: "Great Bear",
  },
  skyX: 0,
  skyY: 0,
  
  description: {
    uk: "Велика Ведмедиця — третє за площею сузір'я серед 88 сучасних сузір'їв та одне з найвідоміших на нічному небі. Сім його найяскравіших зір утворюють знаменитий Великий Ківш, який протягом тисячоліть допомагав знаходити Полярну зірку та визначати напрямок на північ. У межах сузір'я розташовано багато галактик, зокрема М81 і М82, що робить його популярною ціллю для астрономічних спостережень.",
    la: "Ursa Maior est tertia maxima inter omnes constellationes modernas atque una ex clarissimis caeli borealis. Septem stellae splendidissimae figuram Magni Plaustri efficiunt, quae per multa saecula viatoribus et nautis ad septentrionem demonstrandum servivit. Constellatio multas galaxias, inter quas M81 et M82, continet.",
    en: "Ursa Major is the third-largest constellation in the modern sky and one of the most recognizable. Its seven brightest stars form the famous Big Dipper, an asterism that has helped travelers and navigators locate the North Star for centuries. The constellation also contains numerous galaxies, including Messier 81 and Messier 82."
  },
  legend: {
    uk: "У давньогрецькій міфології Велика Ведмедиця уособлює німфу Каллісто, яку Зевс покохав. Ревнива Гера перетворила Каллісто на ведмедицю, а згодом Зевс підняв її на небо, щоб урятувати від загибелі. Поруч він розмістив і її сина Аркаса, який став сузір'ям Малої Ведмедиці.",
    la: "Secundum mythologiam Graecam, Ursa Maior Callistonympham repraesentat, quam Iuppiter in caelum transtulit postquam in ursam conversa erat.",
    en: "In Greek mythology, Ursa Major represents Callisto, a nymph transformed into a bear by the jealous Hera. Zeus later placed her among the stars, where she remains forever alongside her son, represented by Ursa Minor."
  },
  howToFind: {
    uk: "Спочатку знайдіть Великий Ківш — сім яскравих зір, які добре видно майже протягом усього року. Проведіть уявну лінію через Дубхе та Мерак і продовжте її приблизно вп'ятеро — вона приведе до Полярної зірки. Завдяки цьому Велика Ведмедиця є одним із найкращих орієнтирів на небі.",
    la: "Septem stellae Magni Plaustri facile conspiciuntur. Linea a Merak per Dubhe ducta ad Stellam Polarem demonstrat.",
    en: "Look for the Big Dipper, the distinctive group of seven bright stars. Draw an imaginary line through Merak and Dubhe and extend it about five times to reach Polaris. This makes Ursa Major one of the easiest constellations to use for navigation."
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ursa_Major_constellation_map.svg/640px-Ursa_Major_constellation_map.svg.png",
  stars: (generatedStars["ursa-major"]?.stars ?? []),
  lines: generatedStars["ursa-major"]?.lines,
},
 
// URSA MINOR
{
  id: "ursa-minor",
  name: {
    uk: "Мала Ведмедиця",
    la: "Ursa Minor",
    en: "Little Bear",
  },
  skyX: 0,
  skyY: 0,
 
  description: {
    uk: "Мала Ведмедиця — 56-те за площею сузір'я серед 88 сучасних, але одне з найважливіших на небі: саме в ньому розташована Полярна зірка (Поларіс), яка майже точно вказує на північ. Сім найяскравіших зір утворюють Малий Ківш — зменшену копію Великого Ковша. Поларіс є жовто-білим надгігантом і найвідомішою навігаційною зіркою в історії: завдяки її нерухомому положенню на небі моряки та мандрівники орієнтувалися протягом тисячоліть.",
    la: "Ursa Minor, quamquam 56a inter 88 constellationes in magnitudine, una ex maxime notabilibus est propter Polarem, stellam proxime ad polum boreale sitam. Septem stellae splendidiores asterismum Parvi Plaustri efficiunt. Polaris, stella navigantibus per saecula utilissima, stella multiplex est circa 432 annos lucis a Terra remota.",
    en: "Ursa Minor ranks 56th in size among the modern constellations, yet holds one of the most important stars in the sky: Polaris, the North Star. Its seven brightest stars form the Little Dipper, a smaller counterpart to the Big Dipper in Ursa Major. Polaris, a yellow-white supergiant roughly 432 light-years away, sits nearly motionless above the North Pole, making it humanity's most reliable navigational reference for thousands of years.",
  },
  legend: {
    uk: "У грецькій міфології Мала Ведмедиця уособлює Аркаса — сина Каллісто та Зевса. Мисливець мало не вбив власну матір, не впізнавши її в образі ведмедиці (Велика Ведмедиця), але Зевс втрутився і підняв обох на небо. За іншою версією, сузір'я символізує одну з німф — Іду або Адрастею, яка доглядала за немовлям Зевсом на Криті.",
    la: "In mythologia Graeca, Ursa Minor Arcadem, filium Callistus et Iovis, repraesentat. Cum Arcas matrem in ursa forma fere occidisset, Iuppiter eos in caelum sustulit. Alia fabula nympham Idam, altricem Iovis in Creta, significat.",
    en: "In Greek mythology, Ursa Minor represents Arcas, son of Callisto and Zeus, who nearly killed his own mother in her bear form before Zeus swept them both into the sky. An older tradition identifies the constellation with Ida, the nymph who nursed the infant Zeus on the island of Crete.",
  },
  howToFind: {
    uk: "Знайдіть Великий Ківш у Великій Ведмедиці та проведіть уявну лінію через дві крайні зірки його «ковша» — Дубхе та Мерак — вгору приблизно на п'ятикратну відстань між ними. Ця лінія приведе прямо до Полярної зірки, яка є кінцем руків'я Малого Ковша. Сузір'я видно цілий рік у Північній півкулі.",
    la: "Per lineam a Merak et Dubhe (stellis Ursae Maioris) productam Polaris invenitur — stella extrema manubrii Parvi Plaustri. Constellatio omni tempore anni in hemisphaerio boreali conspicua est.",
    en: "Use the Big Dipper as a guide: draw an imaginary line through its outer bowl stars, Merak and Dubhe, and extend it about five times that distance to reach Polaris — the tip of the Little Dipper's handle. Once you find Polaris, the rest of Ursa Minor fans out from it. The constellation is circumpolar and visible year-round from the Northern Hemisphere.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ursa_Minor_constellation_map.svg/640px-Ursa_Minor_constellation_map.svg.png",
  stars: (generatedStars["ursa-minor"]?.stars ?? []),
  lines: generatedStars["ursa-minor"]?.lines,
},

// ORION
{
  id: "orion",
  name: {
    uk: "Оріон",
    la: "Orion",
    en: "Orion",
  },
  skyX: 0,
  skyY: 0,
  
  description: {
    uk: "Оріон — одне з найвпізнаваніших і найяскравіших сузір'їв на небі. Три зірки Пояса Оріона утворюють ідеально рівний ряд, навколо якого розташовані яскравий червоний надгігант Бетельгейзе (плече мисливця) та синювато-білий Рігель (його нога). У межах сузір'я знаходиться знаменита туманність Оріона (M42) — одна з найяскравіших областей зореутворення, видима навіть неозброєним оком. Оріон домінує в зимовому небі і є відправною точкою для пошуку інших сузір'їв.",
    la: "Orion inter constellationes clarissimas et notissimas numeratur. Tres stellae Cinguli lineam rectam perfectam efficiunt, circa quam Betelgeuse, supergigans rubra, et Rigel, stella caeruleo-alba, fulgent. Constellatio nebulam celeberrimam M42 continet, in qua novae stellae nascuntur.",
    en: "Orion is one of the most recognizable and spectacular constellations in the sky. Three stars of Orion's Belt form a perfectly straight line flanked by red supergiant Betelgeuse at the hunter's shoulder and blue-white Rigel at his foot. Within the constellation lies the Great Orion Nebula (M42), one of the brightest star-forming regions visible to the naked eye. Orion dominates the winter sky and serves as an anchor for navigating to neighboring constellations.",
  },
  legend: {
    uk: "У давньогрецькій міфології Оріон — велетень-мисливець, син Посейдона, наділений даром ходити по воді. Він похвалявся, що може вбити будь-яку звірину на Землі. За однією версією, ображена цим богиня Гея послала Скорпіона, який і вжалив Оріона — саме тому два сузір'я завжди перебувають на протилежних боках неба і ніколи не видні одночасно: щойно Скорпіон сходить, Оріон іде за горизонт.",
    la: "In mythologia Graeca, Orion gigas venator erat, filius Neptuni, qui se omnes bestias superaturum iactabat. Dea Gaea scorpionem misit, qui Orionem peremit. Quamobrem Orion et Scorpius semper in partibus caeli contrariis versantur.",
    en: "In Greek mythology, Orion was a giant hunter, son of Poseidon, who boasted he could kill every beast on Earth. The Earth goddess Gaia sent a scorpion to humble him, and the two fought until Orion was slain. Zeus immortalized both in the sky, but placed them on opposite sides — when Scorpius rises, Orion sets, ensuring the hunter and his nemesis never meet again.",
  },
  howToFind: {
    uk: "Шукайте три яскраві зірки, вишикувані в рівний ряд, — це Пояс Оріона (Альнітак, Альнілам, Мінтака). Вони видні неозброєним оком навіть у місті. Ліворуч і вище від пояса — червонуватий Бетельгейзе, праворуч і нижче — яскравий Рігель. Нижче пояса можна знайти Меч Оріона з туманністю M42. Оріон найкраще спостерігається у грудні–лютому.",
    la: "Tres stellae Cinguli (Alnitak, Alnilam, Mintaka) in linea recta positae faciliter inveniuntur. Betelgeuse supra et ad sinistram, Rigel infra et ad dextram conspiciuntur. Mense Ianuario altissimus in caelo est.",
    en: "Look for the three evenly spaced stars of Orion's Belt — Alnitak, Alnilam, and Mintaka — which form an unmistakable straight line visible even from light-polluted skies. Above and left of the Belt glows reddish Betelgeuse; below and right shines brilliant Rigel. Below the Belt, look for the faint smudge of the Orion Nebula hanging from the Sword. Orion is best seen December through February.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Orion_constellation_map.svg/640px-Orion_constellation_map.svg.png",
  stars: (generatedStars["orion"]?.stars ?? []),
  lines: generatedStars["orion"]?.lines,
},

// CASSIOPEIA
{
  id: "cassiopeia",
  name: {
    uk: "Кассіопея",
    la: "Cassiopeia",
    en: "Cassiopeia",
  },
  skyX: 0,
  skyY: 0,

  description: {
    uk: "Кассіопея — легко впізнаване приполярне сузір'я у формі букви W (або M, залежно від часу ночі й пори року). П'ять яскравих зір утворюють цей характерний зигзаг, добре помітний цілий рік у Північній півкулі. Сузір'я лежить просто в площині Чумацького Шляху, тому рясніє зоряними скупченнями й туманностями. У 1572 році тут спалахнула наднова, яку детально описав Тихо Браге, — вона стала поворотним моментом в астрономії, довівши, що «нерухоме» небо може змінюватися.",
    la: "Cassiopeia constellatio circumpolaris est, quinae stellae formam litterae W vel M efficiunt. In plano Viae Lacteae sita, cumulos et nebulas multas continet. Anno 1572 stella nova ibi apparuit, quam Tycho Brahe accuratissime descripsit.",
    en: "Cassiopeia is an unmistakable circumpolar constellation whose five bright stars trace the shape of a W or M, rotating around Polaris throughout the year. It lies along the plane of the Milky Way and is rich in star clusters and nebulae. In 1572 a supernova blazed here — observed in detail by Tycho Brahe — and helped overturn the ancient idea of an unchanging sky.",
  },
  legend: {
    uk: "У давньогрецькій міфології Кассіопея — цариця Ефіопії, дружина царя Цефея та мати Андромеди. Вражена власною красою, вона похвалилася, що перевершує красою морських німф-нереїд. Розгніваний Посейдон покарав гордовиту царицю: умістив її на небо прикутою до трону, приреченою вічно оберталися навколо Полярної зірки — і половину часу висіти вниз головою.",
    la: "In fabula Graeca, Cassiopeia regina Aethiopiae erat, quae se Nereidibus pulchriorem esse iactavit. Ob superbiam Neptunus eam in caelum posuit, ubi in throno ligata aeternumque circumvolvitur — nonnumquam inversa ob poenam.",
    en: "In Greek mythology, Cassiopeia was queen of Aethiopia, wife of King Cepheus and mother of Andromeda. Her fatal flaw was vanity: she boasted that she and her daughter surpassed the sea-nymphs in beauty, enraging Poseidon. As punishment, she was placed in the sky chained to her throne, doomed to spin endlessly around the North Star — spending half the year upside down as a humbling reminder of her pride.",
  },
  howToFind: {
    uk: "Знайдіть Полярну зірку, а потім огляньте небо по інший бік від Великого Ковша — там і є Кассіопея у формі W або M. Як приполярне сузір'я, вона ніколи не заходить за горизонт у помірних широтах Північної півкулі та добре видна цілий рік, особливо восени та взимку. Яскраві зірки W легко помітні навіть у місті.",
    la: "Polaris inter Cassiopeiam et Ursum Maiorem sita est. W-forma quinque stellarum clarissima est; constellatio omni anno in latitudinibus borealibus conspicua est, maxime autumno et hieme.",
    en: "Find Polaris, then look to the opposite side from the Big Dipper — Cassiopeia's W-shape will be there. As a circumpolar constellation, it never sets below the horizon at mid-northern latitudes and is visible year-round. It is especially well-placed in autumn and early winter evenings, when it rides high in the northern sky. The five stars forming the W are bright enough to spot even from cities.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Cassiopeia_constellation_map.svg/640px-Cassiopeia_constellation_map.svg.png",
  stars: (generatedStars["cassiopeia"]?.stars ?? []),
  lines: generatedStars["cassiopeia"]?.lines,
},

// LEO
{
  id: "leo",
  name: {
    uk: "Лев",
    la: "Leo",
    en: "Leo",
  },
  skyX: 0,
  skyY: 0,
 
  description: {
    uk: "Лев — одне з найвиразніших зодіакальних сузір'їв весняного неба, що справді нагадує лежачого лева. Шість зір утворюють характерний «Серп» — зворотний знак питання, що позначає голову й гриву звіра. В основі цього Серпа сяє Регул — «маленький цар», 22-га за яскравістю зірка всього неба, синювато-біла та розташована лише за 77 світлових років від нас. Хвіст лева позначає Денебола. У межах сузір'я розкидана ціла колонія яскравих галактик: Тріо Лева (M65, M66, NGC 3628) — популярна ціль для любителів астрономії.",
    la: "Leo constellatio zodiacalis una ex maxime conspicuis verni caeli est. Sex stellae Falcem efficiunt, insignem asterismum caput leonis repraesentantem. Regulus, stella prima magnitudinis, cor leonis marcat. Plures galaxiae notabiles, inter quas M65, M66 et NGC 3628, in constellatione inveniuntur.",
    en: "Leo is one of the most striking zodiac constellations of the spring sky, genuinely resembling a crouching lion. Six stars form the Sickle — a backward question mark outlining the lion's head and mane — anchored by Regulus, the 'little king,' a blue-white star 77 light-years away and the 22nd brightest in the sky. Denebola marks the lion's tail. The constellation also hosts a notable family of galaxies, including the Leo Triplet (M65, M66, NGC 3628), a favourite target for amateur astronomers.",
  },
  legend: {
    uk: "У давньогрецькій міфології Лев уособлює Немейського лева — невразливого хижака, шкіра якого не піддавалася жодній зброї. Він тероризував жителів Немеї, поки Геракл не переміг його у першому зі своїх дванадцяти подвигів, задушивши голіруч. Зевс підняв звіра на небо, щоб увіковічнити і перемогу сина, і нездоланну силу самого лева.",
    la: "Leo leonem Nemeaeum repraesentat, bestiam invulnerabilem quam Hercules primo labore manibus nudis strangulans vicit. Iuppiter leonem in caelum transtulit in memoriam victoriae et fortitudinis belluae.",
    en: "Leo represents the Nemean Lion of Greek mythology — a fearsome beast whose hide was impervious to all weapons, terrorizing the region around Nemea. Heracles slew it with his bare hands as the first of his twelve labors, stripping its pelt with the lion's own claws and wearing it as armour. Zeus placed the lion among the stars to commemorate both the hero's triumph and the creature's extraordinary power.",
  },
  howToFind: {
    uk: "Знайдіть Великий Ківш і спрямуйте погляд вниз від дна його «ковша» (зірок Мегрец і Фекда) — ця уявна лінія приведе до Регула, найяскравішої зірки Лева. Від Регула вгору розгортається дуга зірок Серпа — зворотний знак питання. Лев найкраще видно у квітні–травні на висоті в південній частині неба.",
    la: "Linea a Megrez et Phecda (Ursae Maioris) deorsum ducta ad Regulum dirigit. Ab eo asterismus Falcis (signum interrogativum inversum) conspicitur. Mense Aprili altissimus in caelo meridiano est.",
    en: "Use the Big Dipper: draw a line from the bowl stars Megrez and Phecda downward, and it points directly to Regulus. From Regulus, trace the arc of the Sickle upward — the backward question mark that forms the lion's head. A triangle of stars to the east completes the lion's body, ending with Denebola at the tail. Leo is best seen in April and May in the southern evening sky.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Leo_constellation_map.svg/640px-Leo_constellation_map.svg.png",
  stars: (generatedStars["leo"]?.stars ?? []),
  lines: generatedStars["leo"]?.lines,
},

// SCORPIUS
{
  id: "scorpius",
  name: {
    uk: "Скорпіон",
    la: "Scorpius",
    en: "Scorpius",
  },
  skyX: 0,
  skyY: 0,
  
  description: {
    uk: "Скорпіон — одне з небагатьох сузір'їв, що справді нагадують своє зображення: вигнутий ланцюжок зір відтворює тіло та жало скорпіона. Серце цього ланцюжка — Антарес, яскраво-червоний надгігант із магнітудою 1.0 і діаметром у понад 700 разів більшим за сонячний. Назва Антарес означає «суперник Ареса (Марса)» — за колір, схожий на планету. Сузір'я лежить у найгустішій частині Чумацького Шляху і містить кілька яскравих скупчень: M6 (Метелик) і M7 (Птолемія).",
    la: "Scorpius inter constellationes zodiaci una ex antiquissimis est. Antares, supergigans rubra magnitudinis 0.96, cor scorpionis marcat; nomen 'rival Martis' significat ob colorem similem. M6 et M7, cumulis conspicui, in constellatione inveniuntur.",
    en: "Scorpius is one of the few constellations that genuinely resembles its namesake: a curving chain of stars traces the scorpion's body and upturned stinger. Its heart is Antares, a red supergiant shining at magnitude 0.96 with a diameter over 700 times that of the Sun — its name means 'rival of Ares (Mars)' for its fiery colour. The constellation lies in the richest part of the Milky Way and includes two spectacular open clusters: M6 (the Butterfly Cluster) and M7 (Ptolemy's Cluster).",
  },
  legend: {
    uk: "У давньогрецькій міфології Скорпіон — той самий, якого богиня Артеміда (або богиня Землі Гея) послала, щоб убити хвалькуватого мисливця Оріона. Після смерті обох їх підняли на небо, але розмістили на протилежних кінцях неба — тому Оріон заходить щойно Скорпіон сходить, і вони ніколи не зустрічаються.",
    la: "Scorpius scorpionem est qui Orionem venationibus gloriosum occidit, missu Dianae vel Gaiae. Ambo in caelum translati sunt, sed in partibus contrariis positi: Orion cedit cum Scorpius oritur.",
    en: "In Greek mythology, Scorpius is the scorpion sent by Artemis (or in some versions, by the Earth goddess Gaia) to slay the boastful hunter Orion. Both were immortalised in the sky, but placed on opposite sides of the celestial sphere — when Scorpius rises in summer, Orion retreats below the horizon, ensuring the eternal enemies never share the sky.",
  },
  howToFind: {
    uk: "Скорпіон — виразне літнє сузір'я південної частини неба. Шукайте яскраво-червонувату зірку Антарес: вона добре помітна низько над південним горизонтом у липні–серпні. Від Антареса вгору і вниз простягається характерний вигнутий ланцюжок. З широт України сузір'я ніколи не піднімається високо, тому краще спостерігати його в ясну ніч з відкритим горизонтом на півдні.",
    la: "Antares, stella rubra fulgida, centrum constellationis marcat. Aestate meridiana, in latitudinibus septentrionalibus humile, per Iulium et Augustum conspicuum. Curvatura stellarum formam scorpionis efficit.",
    en: "Scorpius is a summer constellation best seen in July and August low in the southern sky. Look for bright, reddish Antares — it is hard to miss once you know its ruddy colour. The curved chain of stars stretches up and down from Antares, tracing the scorpion's body. From mid-northern latitudes it never rises high, so find an unobstructed southern horizon on a clear night for the best view.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Scorpius_constellation_map.svg/640px-Scorpius_constellation_map.svg.png",
  stars: (generatedStars["scorpius"]?.stars ?? []),
  lines: generatedStars["scorpius"]?.lines,
},

// LYRA
{
  id: "lyra",
  name: {
    uk: "Ліра",
    la: "Lyra",
    en: "Lyra",
  },
  skyX: 0,
  skyY: 0,

  description: {
    uk: "Ліра — невелике, але дуже яскраве сузір'я літнього неба. Його головна зірка — Вега, п'ята за яскравістю зірка всього неба (магнітуда 0.03) і одна з вершин знаменитого Літнього Трикутника разом із Денебом (Лебідь) і Альтаїром (Орел). У межах сузір'я знаходиться Кільцева туманність (M57) — одна з найвідоміших планетарних туманностей у вигляді кільця газу навколо вмираючої зірки, видима в невеликий телескоп. Приблизно 14 000 років тому Вега, а не Поларіс, була Полярною зіркою.",
    la: "Lyra parva sed insignis constellatio est. Vega, stella quinta magnitudinis in toto caelo, cum Deneb et Altair Triangulum Aestivum format. Nebula Annularis (M57), nebula planetaria celeberrima, in constellatione invenitur.",
    en: "Lyra is a small but dazzling summer constellation. Its brightest star, Vega, ranks fifth in the entire sky at magnitude 0.03 and forms one corner of the famous Summer Triangle along with Deneb in Cygnus and Altair in Aquila. Within Lyra lies the Ring Nebula (M57), one of the sky's best-known planetary nebulae — a shell of glowing gas puffed out by a dying star, visible through a small telescope. Around 14,000 years ago Vega, not Polaris, was Earth's North Star.",
  },
  legend: {
    uk: "У давньогрецькій міфології Ліра належала Орфею — найвеличнішому з музикантів, чия гра зачаровувала людей, звірів і навіть богів підземного царства. Коли він спустився до Аїду, щоб повернути кохану Еврідіку, музика Ліри зворушила самого Аїда. Після трагічної загибелі Орфея боги підняли його Ліру на небо як вічний символ мистецтва та краси музики.",
    la: "Lyra Orphei, cantatoris praeclarissimi antiquitatis, fuit, cuius cantus deos ipsos movebat. Postquam Orpheus periit, di lyram in caelum posuerunt in memoriam artis eius.",
    en: "In Greek mythology, the Lyre belonged to Orpheus, the greatest musician of antiquity, whose playing could charm animals, trees, and even the gods of the underworld. When he descended to Hades to reclaim his lost wife Eurydice, his music moved even the pitiless ruler of the dead. After Orpheus was killed, the gods placed his lyre among the stars as an eternal tribute to the power of music.",
  },
  howToFind: {
    uk: "Знайдіть Вегу — одну з найяскравіших зірок літнього неба, що горить майже в зеніті в серпні. Разом із Денебом і Альтаїром вона утворює великий Літній Трикутник. Від Веги легко знайти решту зір Ліри: невеличкий паралелограм безпосередньо «під» нею. Ліра найкраще видна з травня по листопад.",
    la: "Vega, stella splendidissima Trianguli Aestivi, facillime invenitur. Parallelogrammum parvum sub Vega cetera constellationis stellas format. A Maio ad Novembrem optime conspicitur.",
    en: "Find Vega first — one of the brightest stars in the summer sky, blazing nearly overhead in August from mid-northern latitudes. Together with Deneb and Altair it forms the large Summer Triangle, an easy landmark. Just below Vega look for a small parallelogram of stars: those are the main stars of Lyra. The constellation is best seen May through November.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Lyra_constellation_map.svg/640px-Lyra_constellation_map.svg.png",
  stars: (generatedStars["lyra"]?.stars ?? []),
  lines: generatedStars["lyra"]?.lines,
},

// CYGNUS
{
  id: "cygnus",
  name: {
    uk: "Лебідь",
    la: "Cygnus",
    en: "Cygnus",
  },
  skyX: 0,
  skyY: 0,

  description: {
    uk: "Лебідь — велике і яскраве сузір'я, що ширяє прямо по Чумацькому Шляху. Його головні зірки утворюють добре помітний Північний Хрест. Найяскравіша зірка — Денеб, блакитно-білий надгігант, що сяє з відстані понад 2600 світлових років і є одним із найсвітліших зорів у галактиці. Албіреo (Beta Cygni) — улюблена подвійна зірка аматорів: у телескоп вона розпадається на золоту та синю компоненти. Сузір'я також відоме туманностями Вуаль та Північ Америка, а також місцем розташування першої підтвердженої чорної діри — Лебідь X-1.",
    la: "Cygnus constellatio magna per Viam Lacteam volat. Stellae principales Crucem Borealem efficiunt. Deneb, supergigans caeruleo-alba ultra 2600 annos lucis remota, stella 19a in caelo est. Cygnus X-1, prima stella nigra confirmata, in constellatione sita est.",
    en: "Cygnus is a large, brilliant constellation sweeping through the heart of the Milky Way, its main stars forming the unmistakable Northern Cross. Its brightest star, Deneb — a blue-white supergiant over 2,600 light-years away — is one of the most luminous stars in the galaxy. Albireo (Beta Cygni), the swan's beak, splits through a telescope into a stunning gold-and-blue double. The constellation also hosts the Veil and North America Nebulae, and Cygnus X-1, the first object widely confirmed to be a black hole.",
  },
  legend: {
    uk: "Із Лебедем пов'язано кілька давньогрецьких міфів. Найвідоміший: Зевс перетворився на лебедя, щоб зблизитися із спартанською царицею Ледою — від цього союзу народились близнюки Кастор і Поллукс (сузір'я Близнюків) та Єлена Троянська. За іншою легендою, Лебідь уособлює Кікна, скорботного друга Фаетона, який нирнув у річку, щоб зібрати останки загиблого товариша, — і боги із жалю перетворили його на птаха.",
    la: "Cygnus Iovem in forma cycni repraesentat, qui Ledam reginam Spartae amavit, ex qua Castor, Pollux et Helena Troiana nati sunt. Alia fabula Cycnum, amicum Phaethontis, commemorat, qui in cycnum versus ob pietatem erga amicum mortuum.",
    en: "Cygnus carries several Greek myths. In the most famous, Zeus disguised himself as a swan to woo the Spartan queen Leda, whose offspring included the twins Castor and Pollux (the constellation Gemini) and the fabled Helen of Troy. Another legend identifies the Swan with Cycnus, a devoted friend of Phaethon, who dove repeatedly into a river to recover his fallen companion's body — moved by his grief, the gods transformed him into a swan and set him among the stars.",
  },
  howToFind: {
    uk: "Знайдіть яскравий Денеб — він утворює вершину Літнього Трикутника разом із Вегою (Ліра) та Альтаїром (Орел). Від Денеба вниз простягається довга лінія зір до Альбірео — це «тіло» лебедя. Перпендикулярно до неї розкидані зірки «крил». Весь цей хрест добре видно без телескопа з червня по грудень. Лебідь лежить прямо вздовж Чумацького Шляху — в темну ніч за ним видно яскраву смугу галактики.",
    la: "Deneb, vertex Trianguli Aestivi cum Vega et Altair, facillime invenitur. Linea stellarum a Deneb ad Albireo corpus cycni format; stellae alarum perpendiculariter extenduntur. A Iunio ad Decembrem conspicuus est.",
    en: "Find Deneb first — it forms the northeastern corner of the Summer Triangle alongside Vega and Altair, and is one of the brightest stars of the summer sky. From Deneb, trace a line of stars downward to Albireo (the swan's beak): that is the body and neck of the swan. Stars branching perpendicularly to either side form the wings. The full cross-shape is easy to spot with the naked eye from June through December. Cygnus flies along the Milky Way, so on a dark night the galactic band glows behind it.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cygnus_constellation_map.svg/640px-Cygnus_constellation_map.svg.png",
  stars: (generatedStars["cygnus"]?.stars ?? []),
  lines: generatedStars["cygnus"]?.lines,
},

// AQUILA
{
  id: "aquila",
  name: {
    uk: "Орел",
    la: "Aquila",
    en: "Aquila",
  },
  skyX: 0,
  skyY: 0,

  description: {
    uk: "Орел — сузір'я, що лежить прямо на небесному екваторі, в площині Чумацького Шляху. Його яскравий Альтаїр (12-та за яскравістю зірка всього неба, магнітуда 0.76) розташований лише за 17 світлових років від нас — один із найближчих яскравих сусідів Сонця. Альтаїр обертається з неймовірною швидкістю (286 км/с), через що сплющений біля полюсів, мов гарбуз. Разом із Вегою і Денебом він утворює знаменитий Літній Трикутник. Сузір'я видно з обох півкуль.",
    la: "Aquila in caelesti aequatore et in plano Viae Lacteae sita est. Altair, stella 12a caeli (magnitudo 0.76), solum 17 annos lucis a Sole distat. Celerrima rotatione (286 km/s) stella comprimitur. Cum Vega et Deneb Triangulum Aestivum format.",
    en: "Aquila sits on the celestial equator and along the plane of the Milky Way. Its brightest star, Altair, ranks 12th in the whole sky at magnitude 0.76 and lies only 17 light-years from the Sun, making it one of our nearest bright neighbours. Altair spins so fast (286 km/s) that it is noticeably flattened at its poles. Together with Vega and Deneb it forms the prominent Summer Triangle asterism visible across the Northern Hemisphere in summer.",
  },
  legend: {
    uk: "У давньогрецькій традиції Орел — вірний птах Зевса, носій його блискавок. За одним із міфів, саме Орел відніс прекрасного юнака Ганімеда на Олімп, де той став виночерпієм богів (Ганімед уособлений сузір'ям Водолія). За іншою версією, Орел охороняв стрілу Ероса, яка вразила Зевса й змусила його закохатись. Зевс підняв птаха на небо на знак вдячності.",
    la: "Aquila avem Iovis fulminibusque servientem repraesentat. Secundum fabulam, Iovem iussit Ganymedem, puerum Troianum, ad Olympum rapere ut diis ministraret. Iuppiter aquilam in caelum transtulit ob fidem.",
    en: "In Greek mythology, Aquila was Zeus's faithful eagle, keeper of his thunderbolts. In one famous tale the god sent the eagle to carry the beautiful Trojan youth Ganymede up to Olympus to serve as cup-bearer to the gods (Ganymede is represented by the nearby constellation Aquarius). In another myth the eagle guarded the arrow of Eros that struck Zeus and made him fall in love. As a reward for its loyal service, Zeus placed the eagle among the stars.",
  },
  howToFind: {
    uk: "Шукайте Альтаїр — яскраву зірку в нижній вершині Літнього Трикутника: він сходить першим і підіймається найнижче з трьох зірок Трикутника. Характерна ознака: по обидва боки від Альтаїра є дві більш тьмяні зірки (Альшаїн і Таразед) — разом вони нагадують три кульки на нитці. Від них легко простежити «крила» Орла. Сузір'я найкраще видно з липня по жовтень.",
    la: "Altair, vertex inferior Trianguli Aestivi, primum in horizonte apparet. Duae stellae (Alshain et Tarazed) utrinque Altairum flanquant. A Iulio ad Octobrem maxime conspicuum est.",
    en: "Locate Altair — the lowest and first-rising star of the Summer Triangle. A helpful trick: two fainter stars flank Altair on either side (Alshain and Tarazed), giving the impression of three beads on a string. From this line, trace out the eagle's wings extending to either side. Aquila is best seen July through October from both hemispheres, lying along the Milky Way.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Aquila_constellation_map.svg/640px-Aquila_constellation_map.svg.png",
  stars: (generatedStars["aquila"]?.stars ?? []),
  lines: generatedStars["aquila"]?.lines,
},

// GEMINI
{
  id: "gemini",
  name: {
    uk: "Близнюки",
    la: "Gemini",
    en: "Gemini",
  },
  skyX: 0,
  skyY: 0,
  
  description: {
    uk: "Близнюки — зодіакальне сузір'я, кероване двома яскравими зірками: Кастором і Поллуксом, що символізують братів-близнюків. Поллукс (магнітуда 1.14) є найяскравішою зіркою сузір'я, жовтогарячий гігант із підтвердженою планетою на орбіті. Кастор — більш вражаючий астрономічно: він являє собою систему з шести зір. Від голів близнюків донизу тягнуться паралельні ланцюжки зір, що нагадують дві фігури, які тримаються за руки. У грудні–січні тут відбувається один із найбагатших метеорних потоків — Гемініди (до 100 метеорів на годину).",
    la: "Gemini constellatio zodiacalis duabus stellis claris, Castore et Polluce, dominatur. Pollux, stella prima magnitudinis, gigans aurantia cum planeta confirmata est. Castor systema sextuplex est. Geminidae, unus e maximis pluviis meteoritarum (100 per horam), e constellatione radiant.",
    en: "Gemini is a zodiac constellation dominated by two bright stars: Castor and Pollux, representing the mythological twin brothers. Pollux (magnitude 1.14) is the constellation's brightest star — an orange giant with a confirmed orbiting planet. Castor is the more astronomically remarkable: it is actually a system of six stars. Parallel chains of stars descend from the twins' heads, suggesting two figures standing side by side. In December–January Gemini hosts the Geminids, one of the richest annual meteor showers, producing up to 100 meteors per hour.",
  },
  legend: {
    uk: "За давньогрецьким міфом, Кастор і Поллукс (Поллідевкес) — брати-близнюки, народжені царицею Спарти Ледою. Кастор був смертним сином царя Тіндарея, а Поллукс — безсмертним сином Зевса. Разом вони плавали з Ясоном за Золотим руном. Коли смертний Кастор загинув у бою, безсмертний Поллукс благав Зевса поділити з ним вічне життя. Зевс розмістив їх на небі разом, щоб брати більше не розлучалися.",
    la: "Castor et Pollux gemini erant: Castor mortalis, Pollux immortalis filius Iovis. Cum Iazone in Argonautarum expeditione navigaverunt. Post mortem Castoris, Pollux immortalitatem fratri dividendam rogavit. Iuppiter ambo in caelum transtulit.",
    en: "In Greek mythology, Castor and Pollux were twin brothers born to the Spartan queen Leda. Castor was mortal, son of king Tyndareus, while Pollux was immortal, sired by Zeus. Together they sailed with Jason and the Argonauts in search of the Golden Fleece. When mortal Castor was killed in battle, immortal Pollux begged Zeus to share his immortality. Moved by their brotherhood, Zeus placed them both among the stars so they would never be parted again.",
  },
  howToFind: {
    uk: "Від Пояса Оріона проведіть уявну лінію через Бетельгейзе і продовжте її вгору — вона приведе до двох яскравих зірок, що стоять поряд: це Поллукс (правіший і яскравіший, злегка жовтуватий) і Кастор (лівіший і трохи тьмяніший, білуватий). Від їхніх «голів» донизу в бік Оріона тягнуться дві паралельні смуги зір — «тіла» близнюків. Близнюки найкраще видно в грудні–березні.",
    la: "Linea per Betelgeusem a Cingulo Orionis sursum ducta ad Castorem et Pollucem pervenit. Pollux aurantior et clarior est, Castor albidior. A Decembri ad Martium maxime conspicui sunt.",
    en: "Draw an imaginary line from Orion's Belt through Betelgeuse and continue upward — it leads straight to two prominent stars standing close together. The slightly brighter, more orange-hued one is Pollux; the slightly dimmer, whiter one is Castor. From their heads, trace two parallel lines of stars angling down toward Orion: those are the twins' bodies. Gemini is best seen December through March, riding high in the winter sky.",
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Gemini_constellation_map.svg/640px-Gemini_constellation_map.svg.png",
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