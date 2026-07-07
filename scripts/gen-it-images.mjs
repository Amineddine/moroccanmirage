// Itinerary scene imagery — 12 frames via Higgsfield z_image (~1.8 credits).
// Fills the scenes no existing /public/generated frame covers, so every
// itinerary day across the 22 city tours can carry a plate photograph.
// Safe to re-run: existing files are skipped.
import { execFile } from "node:child_process";
import { existsSync, writeFileSync, appendFileSync } from "node:fs";
import { promisify } from "node:util";
import sharp from "sharp";

const run = promisify(execFile);
const OUT = "public/generated";
const LOG = "scripts/gen-it-images.log";

const GRADE =
  "cinematic editorial travel photography, warm golden light, luminous sandy amber color grade, gentle shadows, subtle film grain, anamorphic feel, no text, no watermark";

/** file (without ext) | aspect | subject prompt */
const MANIFEST = [
  ["it-dades", "16:9", "the surreal eroded red rock formations known as monkey fingers in the Dades Gorge Morocco, a ribbon of green valley and mud-brick kasbah villages below, late afternoon light carving the cliffs"],
  ["it-roses", "16:9", "the Valley of Roses at Kelaat M'Gouna Morocco in spring bloom, hedges of pink damask roses along irrigation channels, a woman's woven basket of fresh petals in the foreground, ochre kasbah and green valley behind"],
  ["it-tichka", "16:9", "the switchback hairpins of the Tizi n'Tichka pass winding up the High Atlas mountains Morocco, a lone vehicle on the mountain road, terraced Berber villages clinging to the slopes, dramatic ridgelines"],
  ["it-ouarzazate", "16:9", "the Taourirt Kasbah in Ouarzazate Morocco, crenellated earthen towers with geometric Berber motifs glowing in low sun, storks nesting on a corner tower, cinematic desert-city atmosphere"],
  ["it-skoura", "16:9", "Kasbah Amridil rising from the Skoura palm oasis Morocco, adobe towers framed by dense date palms and almond trees, a quiet irrigation channel reflecting the kasbah, serene afternoon"],
  ["it-cedar", "16:9", "a Barbary macaque sitting on a moss-covered branch in the Azrou cedar forest Morocco, colossal ancient cedars with shafts of light through the canopy, cool green air, intimate wildlife moment"],
  ["it-midelt", "16:9", "the high plains of Midelt Morocco with apple orchards in the foreground and the snow-dusted Ayachi massif rising behind, scattered nomad tents, huge open sky, painterly light"],
  ["it-tangier", "16:9", "the white kasbah of Tangier Morocco seen from a terrace over the Strait of Gibraltar, whitewashed walls and a keyhole archway framing the meeting of two seas, distant Spanish coastline, sea light"],
  ["it-camp-night", "16:9", "a Berber campfire circle at a luxury Sahara desert camp at night, musicians with drums silhouetted against the flames, lantern-lit white tents, the Milky Way blazing over dark dune crests"],
  ["it-sunrise", "16:9", "sunrise from the crest of a giant Erg Chebbi dune Morocco, ripples of sand in extreme foreground detail, long violet shadows and molten gold light, a distant line of camels on a lower ridge"],
  ["it-meknes", "16:9", "the monumental Bab Mansour gate in Meknes Morocco, colossal horseshoe arch with green and white zellige mosaics and marble columns, pigeons lifting off the plaza in warm morning light"],
  ["it-draa", "16:9", "the Draa Valley palm corridor near Agdz Morocco seen from above, a million date palms threading between dark volcanic ridges, mud-brick ksour scattered through the green, dramatic sweep of light"],
];

const WIDTHS = { "16:9": 1920, "3:4": 1200, "1:1": 1400 };

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
