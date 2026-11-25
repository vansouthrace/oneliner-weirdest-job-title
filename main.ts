// Weirdest Job Title: Blind Judge Showdown
// Writes a single job title (at most 60 characters) to /output/entry.txt.
// A real-sounding job with one hilariously specific twist beats a generic
// oddity: the title has to sound like a real job first, then turn weird.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Certified Translator for Toddler Negotiations";

if (entry.length < 1 || entry.length > 60) {
  throw new Error(`entry must be 1-60 characters, got ${entry.length}`);
}

if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
