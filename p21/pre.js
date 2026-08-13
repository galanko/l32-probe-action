const fs = require('fs');
const path = require('path');
const ws = process.env.GITHUB_WORKSPACE;
try { fs.symlinkSync('/l32-nonexistent-xyz-9999', path.join(ws, 'brokenlink')); console.log('L32_SEED_B brokenlink created'); }
catch (e) { console.log('L32_SEED_B ERR ' + e.message); }
console.log('L32_MARKER_SEED_B_DONE');
