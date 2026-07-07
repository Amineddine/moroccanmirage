// Visual QA for the light retheme + enriched itineraries.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = "scripts/shots-light";
mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });

async function shoot(url, name, ys) {
  await page.goto(`http://localhost:3000${url}`, { waitUntil: "load", timeout: 90000 });
  await page.waitForTimeout(2500);
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (const y of ys) {
    const top = y === "end" ? h - 900 : y;
    await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "auto" }), top);
    await page.waitForTimeout(1300);
    await page.screenshot({ path: `${OUT}/${name}-${top}.png` });
  }
}

await shoot("/", "home", [0, 1200, 2600, 4200, "end"]);
await shoot("/tours", "tours", [0, 1200, "end"]);
await shoot("/tours/marrakech/marrakech-3-days-desert", "tour-detail", [0, 900, 1900, 3000, "end"]);
await shoot("/tours/the-grand-traverse", "gt", [0, 1400, 3200, "end"]);
await shoot("/contact", "contact", [0]);

const mob = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mob.goto("http://localhost:3000/tours/casablanca/casablanca-10-days", { waitUntil: "load", timeout: 90000 });
await mob.waitForTimeout(2200);
for (const y of [0, 1500, 4000]) {
  await mob.evaluate((yy) => window.scrollTo({ top: yy, behavior: "auto" }), y);
  await mob.waitForTimeout(1100);
  await mob.screenshot({ path: `${OUT}/m-tour-${y}.png` });
}

await browser.close();
console.log("done");
