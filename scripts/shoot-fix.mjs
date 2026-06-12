import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

mkdirSync("scripts/shots", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
await page.goto("http://localhost:3000/", { waitUntil: "load", timeout: 90000 });
await page.waitForTimeout(3500);

const ys = [0, 1400, 2600, 3200, 3800, 4400, 5000, 5800, 6800, 7800, 8800, 9800, 10800, 11800, 12800, 13800];
for (const y of ys) {
  await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "auto" }), y);
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `scripts/shots/h-${y}.png` });
}
console.log("scrollHeight:", await page.evaluate(() => document.body.scrollHeight));
await browser.close();
