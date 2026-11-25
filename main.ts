import { mkdirSync, writeFileSync } from "node:fs";

// One single line about office life: a real detail (the office coffee
// machine) with the laugh landing in the last few words.
const line =
  "Our office coffee machine has two settings: brown water and a noise like it's filing a complaint with HR.";

// The gate requires 1-199 characters; fail loudly instead of shipping a
// line the scorer would refuse.
if (line.length < 1 || line.length > 199 || line.trim() === "") {
  throw new Error(`entry line is ${line.length} characters, outside the 1-199 gate`);
}

// The program/v1 harness grades /output/entry.txt, so write the line there
// and print exactly the same line (and nothing else) to stdout.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
