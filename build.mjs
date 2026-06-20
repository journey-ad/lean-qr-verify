// Build 4 comparison bundles from two commits in the lean-qr submodule
// Usage: node build.mjs

import { execSync } from 'child_process';
import { transformSync } from '@babel/core';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = fileURLToPath(new URL('.', import.meta.url));
const SUB = join(ROOT, 'lean-qr');
const BASE = '8355089';
const FIXED = '00c68bb';

function build(commit, es5, outFile, genVar, corVar) {
  execSync(`git -C "${SUB}" checkout ${commit} -- src/`, { encoding: 'utf8' });
  execSync(`cd "${SUB}" && npx rollup --config rollup.config.mjs 2>&1`, { encoding: 'utf8', stdio: 'pipe' });

  let code = readFileSync(join(SUB, 'build', 'nano.mjs'), 'utf8');
  code = code.replace(
    'export{r as correction,m as generate}',
    `window.${genVar}=m;window.${corVar}=r`,
  );
  if (es5) {
    code = `(function(){${transformSync(code, {
      presets: [['@babel/preset-env', { targets: { ie: '11' } }]],
      sourceType: 'script',
    }).code}})();`;
  }
  writeFileSync(join(ROOT, outFile), code);
}

build(BASE,  true,  `qr-${BASE}-es5.js`,  `gen_${BASE}_es5`, `cor_${BASE}_es5`);
build(BASE,  false, `qr-${BASE}-es6.js`,  `gen_${BASE}_es6`, `cor_${BASE}_es6`);
build(FIXED, true,  `qr-${FIXED}-es5.js`, `gen_${FIXED}_es5`, `cor_${FIXED}_es5`);
build(FIXED, false, `qr-${FIXED}-es6.js`, `gen_${FIXED}_es6`, `cor_${FIXED}_es6`);

execSync(`git -C "${SUB}" checkout ${BASE} -- src/`, { encoding: 'utf8' });
console.log('done');
