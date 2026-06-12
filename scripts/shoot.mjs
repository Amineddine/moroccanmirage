// Visual QA: capture viewport screenshots of key pages at several scroll depths.
// Usage: node scripts/shoot.mjs [urlPath scrolls...]   (defaults to the full route sweep)
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = "http://localhost:3000";
const OUT = "scripts/shots";
mkdirSync(OUT, { recursive: true });

const TARGETS = [
  { path: "/", name: "home", scrolls: [0, 1200, 2400, 3600, 4800, 6000, 7200, 8400, 9600, 10800, 12000, 13500, 15000, 16500] },
  { path: "/tours", name: "tours", scrolls: [0, 900, 1800] },
  { path: "/tours/marrakech", name: "city", scrolls: [0, 900, 1900] },
  { path: "/tours/marrakech/marrakech-10-days", name: "tour", scrolls: [0, 900, 2000, 3200] },
  { path: "/excursions", name: "excursions", scrolls: [0, 1000, 2200] },
  { path: "/excursions/agafay", name: "excursion", scrolls: [0, 900, 1800] },
  { path: "/contact", name: "contact", scrolls: [0, 700] },
  { path: "/customize", name: "customize", scrolls: [0] },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });

for (const t of TARGETS) {
  await page.goto(BASE + t.path, { waitUntil: "load", timeout: 90000 });
  await page.waitForTimeout(3000);
  for (const y of t.scrolls) {
    await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "auto" }), y);
    await page.waitForTimeout(1600);
    await page.screenshot({ path: `${OUT}/${t.name}-${y}.png` });
  }
  console.log(`shot ${t.name}`);
}

// mobile sweep
const mob = await browser.newPage({ viewport: { width: 390, height: 844 } });
for (const t of [TARGETS[0], TARGETS[3], TARGETS[4]]) {
  await mob.goto(BASE + t.path, { waitUntil: "load", timeout: 90000 });
  await mob.waitForTimeout(2500);
  for (const y of [0, 1200, 3000]) {
    await mob.evaluate((yy) => window.scrollTo({ top: yy, behavior: "auto" }), y);
    await mob.waitForTimeout(1200);
    await mob.screenshot({ path: `${OUT}/m-${t.name}-${y}.png` });
  }
  console.log(`shot mobile ${t.name}`);
}

await browser.close();
console.log("done");
