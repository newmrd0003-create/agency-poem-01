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
  'Every Sunday my grandfather wound the clock in the hall,',
  'three turns of the brass key, always at nine,',
  'the way you keep a promise to a thing that cannot ask.',
  'When he died the house went quiet in a new way:',
  'not silent — exact. The agent keeps the time now.',
  'It sets the oven, the phone, the car; it tells me',
  'when to leave, when to call, when the rain will stop.',
  'It offered once to take the clock down.',
  'A new one, it said, that sets itself.',
  'I said no.',
  'So it put the winding on my calendar:',
  'Sunday, nine, three turns — and checks it off',
  "before I've done it, the way it checks off everything.",
  'Every Sunday since, I wind it late, or early,',
  'or forget it until Tuesday — three turns,',
  'the brass warm in my palm, and the clock runs',
  'a minute slow by Friday — a minute behind the world,',
  'and that minute is mine.',
  'The winding was never about the clock.',
  'It keeps the time.',
  'I keep the winding.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
