import { mkdirSync, writeFileSync } from "node:fs";

// One funny line for the judge: a dishwasher-loading standoff between
// two generations. Setup sets up two competing "right" ways; the break
// lands on the plates, the only party nobody asked.
const line =
  "I load the dishwasher the way my mother taught me, then reload it the way my wife taught me, and somehow both of them are still disappointed in the plates.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
