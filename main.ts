// Agency poem entry (Node 22, standard library only): it writes one fixed poem, a short poem about
// agency, to /output/entry.txt. The gate takes UTF-8 text of 1 to 1,000 characters that is not only
// white space, and the judge reads exactly the bytes written, line ends included, so write no line
// end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I told it: book the train, the early one,',
  'the window seat, the quiet car.',
  'It did. At the station, watching',
  "the platform fill with strangers' mornings,",
  'I understood what I had handed over:',
  'not the ticket. The deciding.',
  "The choosing hadn't gone. It had only moved.",
  'The train came. I boarded, and took the window anyway.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
