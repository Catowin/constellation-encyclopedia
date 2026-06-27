/**
 * generate-constellations.mjs
 * Запуск: node generate-constellations.mjs
 * Результат: src/data/generated-stars.ts
 */

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const UA_NAMES = {
  And:"Андромеда", Ant:"Насос", Aps:"Птах Раю", Aqr:"Водолій", Aql:"Орел",
  Ara:"Вівтар", Ari:"Овен", Aur:"Візничий", Boo:"Волопас", Cae:"Різець",
  Cam:"Жираф", Cnc:"Рак", CVn:"Гончі Пси", CMa:"Великий Пес", CMi:"Малий Пес",
  Cap:"Козоріг", Car:"Кіль", Cas:"Кассіопея", Cen:"Центавр", Cep:"Цефей",
  Cet:"Кит", Cha:"Хамелеон", Cir:"Циркуль", Col:"Голуб", Com:"Коса Вероніки",
  CrA:"Південна Корона", CrB:"Північна Корона", Crv:"Ворон", Crt:"Чаша",
  Cru:"Південний Хрест", Cyg:"Лебідь", Del:"Дельфін", Dor:"Меч-Риба",
  Dra:"Дракон", Equ:"Лоша", Eri:"Еридан", For:"Піч", Gem:"Близнюки",
  Gru:"Журавель", Her:"Геркулес", Hor:"Годинник", Hya:"Гідра",
  Hyi:"Водяна Змія", Ind:"Індієць", Lac:"Ящірка", Leo:"Лев",
  LMi:"Малий Лев", Lep:"Заєць", Lib:"Терези", Lup:"Вовк", Lyn:"Рись",
  Lyr:"Ліра", Men:"Столова Гора", Mic:"Мікроскоп", Mon:"Єдиноріг",
  Mus:"Муха", Nor:"Наугольник", Oct:"Октант", Oph:"Зміїносець", Ori:"Оріон",
  Pav:"Павич", Peg:"Пегас", Per:"Персей", Phe:"Фенікс", Pic:"Живописець",
  Psc:"Риби", PsA:"Південна Риба", Pup:"Корма", Pyx:"Компас", Ret:"Сітка",
  Sge:"Стріла", Sgr:"Стрілець", Sco:"Скорпіон", Scl:"Скульптор",
  Sct:"Щит", Ser:"Змія", Sex:"Секстант", Tau:"Телець", Tel:"Телескоп",
  Tri:"Трикутник", TrA:"Південний Трикутник", Tuc:"Тукан",
  UMa:"Велика Ведмедиця", UMi:"Мала Ведмедиця", Vel:"Вітрила",
  Vir:"Діва", Vol:"Летюча Риба", Vul:"Лисичка",
};

const LA_NAMES = {
  And:"Andromeda", Ant:"Antlia", Aps:"Apus", Aqr:"Aquarius", Aql:"Aquila",
  Ara:"Ara", Ari:"Aries", Aur:"Auriga", Boo:"Boötes", Cae:"Caelum",
  Cam:"Camelopardalis", Cnc:"Cancer", CVn:"Canes Venatici", CMa:"Canis Maior",
  CMi:"Canis Minor", Cap:"Capricornus", Car:"Carina", Cas:"Cassiopeia",
  Cen:"Centaurus", Cep:"Cepheus", Cet:"Cetus", Cha:"Chamaeleon",
  Cir:"Circinus", Col:"Columba", Com:"Coma Berenices", CrA:"Corona Australis",
  CrB:"Corona Borealis", Crv:"Corvus", Crt:"Crater", Cru:"Crux",
  Cyg:"Cygnus", Del:"Delphinus", Dor:"Dorado", Dra:"Draco", Equ:"Equuleus",
  Eri:"Eridanus", For:"Fornax", Gem:"Gemini", Gru:"Grus", Her:"Hercules",
  Hor:"Horologium", Hya:"Hydra", Hyi:"Hydrus", Ind:"Indus", Lac:"Lacerta",
  Leo:"Leo", LMi:"Leo Minor", Lep:"Lepus", Lib:"Libra", Lup:"Lupus",
  Lyn:"Lynx", Lyr:"Lyra", Men:"Mensa", Mic:"Microscopium", Mon:"Monoceros",
  Mus:"Musca", Nor:"Norma", Oct:"Octans", Oph:"Ophiuchus", Ori:"Orion",
  Pav:"Pavo", Peg:"Pegasus", Per:"Perseus", Phe:"Phoenix", Pic:"Pictor",
  Psc:"Pisces", PsA:"Piscis Austrinus", Pup:"Puppis", Pyx:"Pyxis",
  Ret:"Reticulum", Sge:"Sagitta", Sgr:"Sagittarius", Sco:"Scorpius",
  Scl:"Sculptor", Sct:"Scutum", Ser:"Serpens", Sex:"Sextans", Tau:"Taurus",
  Tel:"Telescopium", Tri:"Triangulum", TrA:"Triangulum Australe",
  Tuc:"Tucana", UMa:"Ursa Maior", UMi:"Ursa Minor", Vel:"Vela",
  Vir:"Virgo", Vol:"Volans", Vul:"Vulpecula",
};

const EN_NAMES = {
  And:"Andromeda", Ant:"Air Pump", Aps:"Bird of Paradise", Aqr:"Water Bearer",
  Aql:"Eagle", Ara:"Altar", Ari:"Ram", Aur:"Charioteer", Boo:"Herdsman",
  Cae:"Chisel", Cam:"Giraffe", Cnc:"Crab", CVn:"Hunting Dogs",
  CMa:"Great Dog", CMi:"Little Dog", Cap:"Sea Goat", Car:"Keel",
  Cas:"Cassiopeia", Cen:"Centaur", Cep:"Cepheus", Cet:"Whale",
  Cha:"Chameleon", Cir:"Compass", Col:"Dove", Com:"Berenice's Hair",
  CrA:"Southern Crown", CrB:"Northern Crown", Crv:"Crow", Crt:"Cup",
  Cru:"Southern Cross", Cyg:"Swan", Del:"Dolphin", Dor:"Swordfish",
  Dra:"Dragon", Equ:"Little Horse", Eri:"River", For:"Furnace",
  Gem:"Twins", Gru:"Crane", Her:"Hercules", Hor:"Clock", Hya:"Hydra",
  Hyi:"Water Snake", Ind:"Indian", Lac:"Lizard", Leo:"Lion",
  LMi:"Little Lion", Lep:"Hare", Lib:"Scales", Lup:"Wolf", Lyn:"Lynx",
  Lyr:"Lyre", Men:"Table Mountain", Mic:"Microscope", Mon:"Unicorn",
  Mus:"Fly", Nor:"Square", Oct:"Octant", Oph:"Serpent Bearer", Ori:"Orion",
  Pav:"Peacock", Peg:"Pegasus", Per:"Perseus", Phe:"Phoenix",
  Pic:"Painter", Psc:"Fishes", PsA:"Southern Fish", Pup:"Poop Deck",
  Pyx:"Compass Box", Ret:"Net", Sge:"Arrow", Sgr:"Archer", Sco:"Scorpion",
  Scl:"Sculptor", Sct:"Shield", Ser:"Serpent", Sex:"Sextant", Tau:"Bull",
  Tel:"Telescope", Tri:"Triangle", TrA:"Southern Triangle", Tuc:"Toucan",
  UMa:"Great Bear", UMi:"Little Bear", Vel:"Sails", Vir:"Virgin",
  Vol:"Flying Fish", Vul:"Fox",
};

const SKY_OFFSETS = {
  UMa:[0,0], UMi:[-18,-12], Ori:[-36,15], Cas:[-54,-20], Leo:[-72,10],
  Sco:[-90,25], Lyr:[-108,-8], Cyg:[-126,-5], Aql:[-144,18], Gem:[-162,8],
  And:[-30,-25], Ant:[-180,30], Aps:[200,50], Aqr:[-170,25], Ara:[-115,35],
  Ari:[-60,12], Aur:[-80,-5], Boo:[-95,5], Cae:[-190,30], Cam:[-20,-35],
  Cnc:[-155,12], CVn:[-108,-2], CMa:[-175,22], CMi:[-160,15], Cap:[-185,28],
  Car:[185,40], Cen:[170,38], Cep:[-45,-30], Cet:[-75,20], Cha:[195,52],
  Cir:[175,42], Col:[-195,28], Com:[-115,5], CrA:[-130,30], CrB:[-102,3],
  Crv:[-148,22], Crt:[-152,20], Cru:[178,45], Del:[-158,12], Dor:[190,48],
  Dra:[-60,-22], Equ:[-162,14], Eri:[-185,25], For:[-195,26], Her:[-118,-3],
  Hor:[-200,32], Hya:[-145,20], Hyi:[188,50], Ind:[165,45], Lac:[-52,-18],
  LMi:[-132,5], Lep:[-178,20], Lib:[-120,20], Lup:[-125,30], Lyn:[-138,-8],
  Men:[192,55], Mic:[-172,32], Mon:[-168,18], Mus:[182,46], Nor:[-122,32],
  Oct:[198,58], Oph:[-112,15], Pav:[168,48], Peg:[-68,-10], Per:[-40,-15],
  Phe:[-192,30], Pic:[188,43], Psc:[-78,8], PsA:[-178,28], Pup:[180,38],
  Pyx:[175,36], Ret:[192,50], Sge:[-140,10], Sgr:[-135,25], Scl:[-188,24],
  Sct:[-132,18], Ser:[-108,12], Sex:[-148,15], Tau:[-55,5], Tel:[-145,38],
  Tri:[-65,-5], TrA:[172,44], Tuc:[193,53], Vel:[178,38], Vir:[-132,14],
  Vol:[186,44], Vul:[-135,8], Gru:[-182,35],
};

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchText(res.headers.location).then(resolve).catch(reject);
      }
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
      res.on("error", reject);
    }).on("error", reject);
  });
}

function slugify(abr) {
  // Повна таблиця відповідності — точно збігається з id в constellations.ts
  const map = {
    And:"andromeda",      Ant:"antlia",          Aps:"apus",
    Aqr:"aquarius",       Aql:"aquila",          Ara:"ara",
    Ari:"aries",          Aur:"auriga",          Boo:"bootes",
    Cae:"caelum",         Cam:"camelopardalis",  Cnc:"cancer",
    CVn:"canes-venatici", CMa:"canis-major",     CMi:"canis-minor",
    Cap:"capricornus",    Car:"carina",          Cas:"cassiopeia",
    Cen:"centaurus",      Cep:"cepheus",         Cet:"cetus",
    Cha:"chamaeleon",     Cir:"circinus",        Col:"columba",
    Com:"coma-berenices", CrA:"corona-australis",CrB:"corona-borealis",
    Crv:"corvus",         Crt:"crater",          Cru:"crux",
    Cyg:"cygnus",         Del:"delphinus",       Dor:"dorado",
    Dra:"draco",          Equ:"equuleus",        Eri:"eridanus",
    For:"fornax",         Gem:"gemini",          Gru:"grus",
    Her:"hercules",       Hor:"horologium",      Hya:"hydra",
    Hyi:"hydrus",         Ind:"indus",           Lac:"lacerta",
    Leo:"leo",            LMi:"leo-minor",       Lep:"lepus",
    Lib:"libra",          Lup:"lupus",           Lyn:"lynx",
    Lyr:"lyra",           Men:"mensa",           Mic:"microscopium",
    Mon:"monoceros",      Mus:"musca",           Nor:"norma",
    Oct:"octans",         Oph:"ophiuchus",       Ori:"orion",
    Pav:"pavo",           Peg:"pegasus",         Per:"perseus",
    Phe:"phoenix",        Pic:"pictor",          Psc:"pisces",
    PsA:"piscis-austrinus", Pup:"puppis",        Pyx:"pyxis",
    Ret:"reticulum",      Sge:"sagitta",         Sgr:"sagittarius",
    Sco:"scorpius",       Scl:"sculptor",        Sct:"scutum",
    Ser:"serpens",        Sex:"sextans",         Tau:"taurus",
    Tel:"telescopium",    Tri:"triangulum",      TrA:"triangulum-australe",
    Tuc:"tucana",         UMa:"ursa-major",      UMi:"ursa-minor",
    Vel:"vela",           Vir:"virgo",           Vol:"volans",
    Vul:"vulpecula",
  };
  return map[abr] || abr.toLowerCase();
}

// Знімає лапки з CSV значення
function unquote(s) {
  return s ? s.replace(/^"|"$/g, "").trim() : "";
}

function parseCSVLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;
  for (const ch of line) {
    if (ch === '"') { inQuotes = !inQuotes; }
    else if (ch === "," && !inQuotes) { result.push(current); current = ""; }
    else { current += ch; }
  }
  result.push(current);
  return result;
}

async function main() {
  console.log("📡 Завантажуємо каталог зірок HYG...");
  const hygRaw = await fetchText(
    "https://raw.githubusercontent.com/astronexus/HYG-Database/main/hyg/CURRENT/hygdata_v41.csv"
  );

  console.log("📡 Завантажуємо лінії сузір'їв...");
  const linesRaw = await fetchText(
    "https://raw.githubusercontent.com/MarcvdSluys/ConstellationLines/master/ConstellationLines.csv"
  );

  // ── Парсимо HYG ──────────────────────────────────────────────────────────
  console.log("⚙️  Парсимо дані зірок...");
  const hygLines = hygRaw.trim().split("\n");
  const rawHeader = parseCSVLine(hygLines[0]);
  const header = rawHeader.map(unquote);

  const colHr     = header.indexOf("hr");
  const colRa     = header.indexOf("ra");
  const colDec    = header.indexOf("dec");
  const colMag    = header.indexOf("mag");
  const colProper = header.indexOf("proper");
  const colBayer  = header.indexOf("bf");

  console.log(`   Колонки: hr=${colHr}, ra=${colRa}, dec=${colDec}, mag=${colMag}`);

  const starByHr = new Map();
  for (let i = 1; i < hygLines.length; i++) {
    const cols = parseCSVLine(hygLines[i]).map(unquote);
    const hr = parseInt(cols[colHr]);
    if (!hr || isNaN(hr)) continue;
    const ra  = parseFloat(cols[colRa]);
    const dec = parseFloat(cols[colDec]);
    const mag = parseFloat(cols[colMag]);
    if (isNaN(ra) || isNaN(dec) || isNaN(mag)) continue;
    const proper = cols[colProper];
    const bayer  = cols[colBayer];
    const name   = proper || bayer || `HR\u00a0${hr}`;
    starByHr.set(hr, { ra, dec, mag, name });
  }
  console.log(`   Завантажено ${starByHr.size} зірок з HR номерами`);

  // ── Парсимо лінії ────────────────────────────────────────────────────────
  console.log("⚙️  Парсимо лінії сузір'їв...");
  const linesByCon = new Map();
  for (const row of linesRaw.trim().split("\n").slice(1)) {
    const cols = row.split(",").map(s => s.trim());
    if (!cols[0]) continue;
    const abr = cols[0];
    const hrs = cols.slice(2).map(Number).filter(n => n > 0);
    if (!linesByCon.has(abr)) linesByCon.set(abr, []);
    linesByCon.get(abr).push(hrs);
  }
  console.log(`   Завантажено лінії для ${linesByCon.size} сузір'їв`);

  // ── Генеруємо ────────────────────────────────────────────────────────────
  console.log("⚙️  Генеруємо координати зірок...");
  const results = [];

  for (const [abr, lineGroups] of linesByCon) {
    const hrSet = new Set();
    for (const g of lineGroups) for (const hr of g) hrSet.add(hr);

    const starData = [...hrSet]
      .filter(hr => starByHr.has(hr))
      .map(hr => ({ hr, ...starByHr.get(hr) }));

    if (starData.length === 0) {
      console.log(`   ⚠️  ${abr}: немає зірок у каталозі`);
      continue;
    }

    // Межі RA — обробка переходу через 0h/24h
    let ras = starData.map(s => s.ra);
    const raSpan = Math.max(...ras) - Math.min(...ras);
    if (raSpan > 12) {
      ras = ras.map(r => r < 12 ? r + 24 : r);
    }
    starData.forEach((s, i) => { s.raAdj = ras[i]; });

    const raMin  = Math.min(...ras),      raMax  = Math.max(...ras);
    const decMin = Math.min(...starData.map(s => s.dec));
    const decMax = Math.max(...starData.map(s => s.dec));
    const pad = 0.1;

    const hrToIdx = new Map();
    const stars = starData
      .sort((a, b) => a.mag - b.mag)
      .map((s, idx) => {
        hrToIdx.set(s.hr, idx);
        const raRange  = raMax  - raMin  || 1;
        const decRange = decMax - decMin || 1;
        // RA зростає вліво на небі (дзеркально)
        const rawLeft = 1 - (s.raAdj - raMin) / raRange;
        const rawTop  = 1 - (s.dec   - decMin) / decRange;
        const left = `${((pad + rawLeft  * (1 - 2*pad)) * 100).toFixed(1)}%`;
        const top  = `${((pad + rawTop   * (1 - 2*pad)) * 100).toFixed(1)}%`;
        const size = s.mag < 1.5 ? 8 : s.mag < 2.5 ? 7 : s.mag < 3.5 ? 5 : s.mag < 4.5 ? 4 : 3;
        return { name: s.name, top, left, size };
      });

    const lines = [];
    for (const group of lineGroups) {
      const valid = group.filter(hr => hrToIdx.has(hr));
      for (let i = 0; i + 1 < valid.length; i++) {
        const a = hrToIdx.get(valid[i]);
        const b = hrToIdx.get(valid[i + 1]);
        if (a !== undefined && b !== undefined && a !== b) {
          lines.push([a, b]);
        }
      }
    }

    const off = SKY_OFFSETS[abr] || [0, 0];
    results.push({ abr, id: slugify(abr), skyX: off[0], skyY: off[1], stars, lines });
  }

  console.log(`✅ Згенеровано ${results.length} сузір'їв`);

  // ── Записуємо ────────────────────────────────────────────────────────────
  const outDir = path.join(__dirname, "data");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const blocks = results.map(c => {
    const starsStr = c.stars
      .map(s => `      { name: "${s.name}", top: "${s.top}", left: "${s.left}", size: ${s.size} }`)
      .join(",\n");
    const linesStr = c.lines.map(([a,b]) => `[${a},${b}]`).join(", ");
    return `  "${c.id}": { stars: [\n${starsStr}\n  ], lines: [${linesStr}] }`;
  }).join(",\n\n");

  const namesBlock = results.map(c => {
    const ua = UA_NAMES[c.abr] || c.abr;
    const la = LA_NAMES[c.abr] || c.abr;
    const en = EN_NAMES[c.abr] || c.abr;
    return `  "${c.id}": { uk: "${ua}", la: "${la}", en: "${en}", skyX: ${c.skyX}, skyY: ${c.skyY} }`;
  }).join(",\n");

  const output = `// AUTO-GENERATED — не редагуй вручну
// Джерела: HYG Database (CC BY-SA) + ConstellationLines (CC BY 4.0)
// Перегенерувати: node generate-constellations.mjs

export const generatedStars: Record<string, {
  stars: { name: string; top: string; left: string; size: number }[];
  lines: [number, number][];
}> = {
${blocks}
};

export const generatedNames: Record<string, {
  uk: string; la: string; en: string; skyX: number; skyY: number;
}> = {
${namesBlock}
};
`;

  const outPath = path.join(outDir, "generated-stars.ts");
  fs.writeFileSync(outPath, output, "utf8");
  console.log(`\n✅ Файл записано: data/generated-stars.ts`);
  console.log(`   ${results.length} сузір'їв готові до використання!`);
}

main().catch(err => {
  console.error("❌ Помилка:", err.message);
  process.exit(1);
});
