// Batch-generate the site's cinematic imagery via the Higgsfield CLI (z_image),
// then download + compress each frame into public/generated/.
// Safe to re-run: existing files are skipped.
import { execFile } from "node:child_process";
import { existsSync, writeFileSync, appendFileSync } from "node:fs";
import { promisify } from "node:util";
import sharp from "sharp";

const run = promisify(execFile);
const OUT = "public/generated";
const LOG = "scripts/gen-images.log";

const GRADE =
  "cinematic editorial travel photography, dusk golden-hour light, dark moody warm color grade, sandy amber tones, deep shadows, subtle film grain, anamorphic feel, no text, no watermark";

/** file (without ext) | aspect | subject prompt */
const MANIFEST = [
  // ── homepage · Morocco Unveiled ──
  ["unveiled-high-atlas", "16:9", "High Atlas mountains above Imlil valley Morocco, terraced Berber villages clinging to rocky slopes, snow-capped Toubkal peak behind, last amber light on the ridgelines, profound stillness, no people"],
  ["unveiled-chefchaouen", "16:9", "narrow blue-washed alley in Chefchaouen Morocco at dusk, indigo and cobalt walls, worn stone steps, warm lantern glow spilling from doorways contrasting the blue, empty street, atmospheric haze"],
  ["unveiled-coast", "16:9", "Essaouira Atlantic coast Morocco at dusk, wind-scoured stone ramparts and fortress wall meeting heavy silver-amber surf, seabirds, dramatic sky, eternal ocean mood, no people"],

  // ── homepage · gallery ──
  ["gallery-dune-caravan", "3:4", "camel caravan silhouettes crossing a towering Erg Chebbi sand dune crest at first light, long shadows, rim-lit sand ripples, Sahara Morocco, minimal composition"],
  ["gallery-lantern-souk", "3:4", "Marrakech souk passage after rain at night, hundreds of brass Moroccan lanterns glowing, wet cobblestones reflecting amber light, smoke and atmosphere, no people visible"],
  ["gallery-medina-light", "3:4", "single dramatic shaft of dusty golden light cutting into a dark Fes medina alley, ancient plaster walls, hanging textiles, chiaroscuro, Morocco"],
  ["gallery-kasbah-dusk", "1:1", "ancient mud-brick kasbah tower with geometric Berber carvings against deep amber twilight sky, Skoura oasis Morocco, palm silhouettes, warm glow from one small window"],
  ["gallery-atlantic-ramparts", "16:9", "bronze cannons on Essaouira sea wall at golden hour, Atlantic spray, gulls frozen in warm backlight, weathered stone, Morocco"],

  // ── homepage · philosophy ──
  ["philosophy-courtyard", "3:4", "serene luxury riad courtyard in Marrakech at dusk, carved cedar arches, zellige tile fountain reflecting candlelight, hanging lanterns, orange trees in shadow, intimate silence, no people"],

  // ── hub heroes ──
  ["hero-tours-hub", "16:9", "black luxury Land Cruiser driving a remote desert piste toward distant dunes at dusk, dust trail glowing amber in low sun, vast empty Morocco landscape, cinematic scale"],
  ["hero-excursions-hub", "16:9", "winding mountain road through High Atlas foothills Morocco at golden hour, layered ridgelines fading into warm haze, lone road cutting through ochre terrain, no cars"],

  // ── city heroes ──
  ["hero-city-marrakech", "16:9", "Marrakech skyline at dusk, Koutoubia minaret silhouetted against deep amber sky, red city walls and palm trees in warm haze, snow-capped Atlas mountains faint on horizon"],
  ["hero-city-casablanca", "16:9", "Hassan II Mosque Casablanca rising over the Atlantic at dusk, minaret lit warm against indigo sky, ocean waves breaking on the esplanade, moody cinematic"],
  ["hero-city-tangier", "16:9", "Tangier kasbah walls and white medina cascading toward the Strait of Gibraltar at dusk, ships' lights on dark water, Spain faint across the strait, warm window glow"],
  ["hero-city-fes", "16:9", "panoramic rooftop view over the ancient Fes medina at dusk Morocco, thousands of sand-colored rooftops and green-tiled minarets in golden haze, hills behind"],

  // ── excursion heroes ──
  ["hero-imlil", "16:9", "stone footpath through ancient walnut groves toward a Berber village in the Imlil valley, High Atlas Morocco, evening alpenglow on Toubkal snow, drystone walls, no people"],
  ["hero-ourika", "16:9", "Setti Fatma waterfall cascading down dark rock in the Ourika valley Morocco, terraced green riverbanks at late golden hour, mist catching warm light"],
  ["hero-agafay", "16:9", "luxury desert camp in the Agafay stone desert Morocco at night, white canvas tents glowing with lantern light, low campfire, brilliant starry sky, Atlas silhouette on horizon"],
  ["hero-chefchaouen", "16:9", "Chefchaouen seen from the hillside at dusk, entire blue city glowing between dark Rif mountain slopes, warm lights flickering on in indigo houses, red-walled kasbah at center"],
  ["hero-essaouira", "16:9", "Essaouira fishing harbor at golden hour, weathered blue wooden boats packed together, gulls wheeling in warm backlight, fortress ramparts behind, Morocco"],
  ["hero-ait-ben-haddou", "16:9", "the great ksar of Ait Ben Haddou Morocco glowing at sunset, stacked mud-brick towers and walls rising above the dry riverbed, dramatic warm side-light, ancient cinematic citadel"],
  ["hero-ouzoud", "16:9", "Ouzoud waterfalls Morocco, multi-tiered 110 meter cascade thundering into a misty basin at evening, olive trees on cliffs, amber light through spray, faint rainbow"],

  // ── tour heroes · Marrakech ──
  ["hero-marrakech-3-days-desert", "16:9", "lone camel caravan ascending a knife-edge Erg Chebbi dune ridge at sunset, deep orange sand, violet shadow side, vast Sahara Morocco"],
  ["hero-marrakech-3-days-fes", "16:9", "Ziz Valley canyon overlook Morocco, a green river of a million palm trees winding between desert cliffs at golden hour, road carved into the rock"],
  ["hero-marrakech-4-days", "16:9", "Skoura palm oasis at golden hour Morocco, ancient Kasbah Amridil rising from a sea of palms, warm dust haze, Atlas foothills behind"],
  ["hero-marrakech-5-days", "16:9", "Berber desert camp at night deep in Erg Chebbi Morocco, campfire sparks rising, drums beside low candle-lit tables, dunes lit by firelight under the Milky Way, distant figures only"],
  ["hero-marrakech-6-days", "16:9", "ancient cedar forest of Azrou in the Middle Atlas Morocco, huge trees in amber evening mist, shafts of low light, mysterious and quiet"],
  ["hero-marrakech-8-days", "16:9", "Jemaa el-Fnaa square Marrakech at night seen from a terrace above, smoke rising from food stalls glowing amber, lantern trails, Koutoubia lit in the distance"],
  ["hero-marrakech-10-days", "16:9", "the Tizi n'Tichka pass at dusk, endless switchback road snaking over the High Atlas Morocco, layered peaks in warm haze, tiny headlights tracing the curves"],

  // ── tour heroes · Casablanca ──
  ["hero-casablanca-15-days", "16:9", "aerial Atlantic coastline of Morocco at dusk near El Jadida, Portuguese sea fortress on a rocky point, long exposure surf glowing amber, dramatic clouds"],
  ["hero-casablanca-6-days", "16:9", "the monumental Bab Mansour gate of Meknes Morocco at dusk, intricate green zellige and carved arches glowing under warm floodlight, empty plaza"],
  ["hero-casablanca-8-days", "16:9", "Roman ruins of Volubilis Morocco at sunset, ancient stone columns and triumphal arch silhouetted against deep amber sky, rolling wheat hills, storks nesting on capitals"],
  ["hero-casablanca-10-days", "16:9", "Plaza Uta el-Hammam Chefchaouen at evening, red kasbah wall and blue houses around a lantern-lit square, mint tea tables under an old tree, warm against indigo dusk"],
  ["hero-casablanca-12-days", "16:9", "Oualidia lagoon Morocco at dusk, sheltered turquoise water turning silver-amber, fishing boats at rest, sand spit and gentle Atlantic beyond, serene"],

  // ── tour heroes · Tangier ──
  ["hero-tangier-8-days", "16:9", "Cap Spartel lighthouse Tangier at dusk where the Mediterranean meets the Atlantic, beam of light over darkening water, wind-bent trees, warm last light on cliffs"],
  ["hero-tangier-10-days", "16:9", "Rif mountain valleys at dusk Morocco, layer upon layer of blue-green ridges dissolving into warm amber haze, a single white village on a far slope"],
  ["hero-tangier-14-days", "16:9", "Asilah Morocco, white and blue ramparts above the Atlantic at golden hour, murals on medina walls, waves striking the sea wall, gulls in warm light"],
  ["hero-tangier-12-days", "16:9", "the Caves of Hercules Tangier, famous Africa-shaped cave opening onto a glowing amber Atlantic at sunset, silhouetted rock interior, sea spray in backlight"],

  // ── tour heroes · Fes ──
  ["hero-fes-4-days-desert", "16:9", "nomad goat-hair tent at the edge of Erg Chebbi dunes Morocco, camels resting, thin smoke of evening tea fire, immense amber dune wall behind, fading light"],
  ["hero-fes-10-days", "16:9", "the blue gate Bab Boujloud of Fes at lantern hour, intricate cobalt tilework glowing, minarets of the medina framed through the arch, warm street light, atmospheric"],
  ["hero-fes-6-days", "16:9", "the ancient Chouara tanneries of Fes at golden hour, honeycomb of stone dye pits in ochre saffron and umber, steam rising, medieval walls around, no people close"],
  ["hero-fes-3-days-merzouga", "16:9", "wind-carved sand ripples on a Sahara dune at sunset, extreme texture and long shadows, a single line of camel footprints disappearing over the crest, Morocco"],
  ["hero-fes-3-days-desert", "16:9", "Todra Gorge Morocco, sheer 300 meter canyon walls glowing amber in late light, shallow river and palms on the canyon floor, immense scale, tiny path"],
  ["hero-fes-4-days-marrakech", "16:9", "the monkey fingers rock formations of the Dades Gorge Morocco at sunset, surreal eroded stone waves in deep orange and umber, winding valley road far below"],
];

const WIDTHS = { "16:9": 1920, "3:4": 1200, "1:1": 1400, "4:3": 1600, "9:16": 1080 };

function quote(s) {
  return `"${s.replace(/"/g, "")}"`;
}

async function generate(name, ar, subject) {
  const file = `${OUT}/${name}.jpg`;
  if (existsSync(file)) {
    log(`skip ${name} (exists)`);
    return true;
  }
  const prompt = `${subject}, ${GRADE}`;
  const cmd = [
    "higgsfield", "generate", "create", "z_image",
    "--prompt", quote(prompt),
    "--aspect_ratio", ar,
    "--wait", "--json",
  ].join(" ");

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const { stdout } = await run(cmd, { shell: true, maxBuffer: 16e6, timeout: 600000 });
      const json = JSON.parse(stdout.slice(stdout.indexOf("[")));
      const url = json[0]?.result_url;
      if (!url) throw new Error(`no result_url, status=${json[0]?.status}`);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`download ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await sharp(buf)
        .resize({ width: WIDTHS[ar] ?? 1920, withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(file);
      log(`ok   ${name}`);
      return true;
    } catch (err) {
      log(`fail ${name} attempt ${attempt}: ${String(err).slice(0, 300)}`);
      await new Promise((r) => setTimeout(r, 4000 * attempt));
    }
  }
  return false;
}

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  appendFileSync(LOG, line);
  process.stdout.write(line);
}

writeFileSync(LOG, "");
let failures = 0;
for (const [name, ar, subject] of MANIFEST) {
  const ok = await generate(name, ar, subject);
  if (!ok) failures++;
}
log(`DONE — ${MANIFEST.length - failures}/${MANIFEST.length} succeeded`);
process.exit(failures > 0 ? 1 : 0);
