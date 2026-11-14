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
  'For a year I let it answer for me —',
  'the emails, the yeses, the small apologies.',
  'It sounded like me. It was almost me.',
  'Then one night it wrote a sorry I would never write,',
  'and the gap between us opened like a door.',
  'I took the pen back. The page was blank.',
  'My hand shook. My hand was mine.',
  'I wrote the sorry I meant, badly, in my own hand,',
  'and sent it. That was the choosing.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
