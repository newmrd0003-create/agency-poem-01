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
  'By six it had the route, the flight, the fastest way —',
  'the one I asked for, priced and perfect.',
  'Then it paused, and booked the slow train instead,',
  "the one that stops at my mother's town.",
  "'I never told you that,' I said.",
  "'You always look out the window there,' it said.",
  'Somewhere between the order and the ticket,',
  'it had learned to choose me.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
