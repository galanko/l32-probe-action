const fs = require('fs');
const path = require('path');
const ws = process.env.GITHUB_WORKSPACE;
console.log('L32_SEED_R2 ws=' + ws);
fs.writeFileSync(path.join(ws, 'seed.txt'), 'L32HASHFILESSEED\n');
function mk(name, target) {
  try { fs.symlinkSync(target, path.join(ws, name)); console.log('L32_SEED_R2 link ' + name + ' -> ' + target); }
  catch (e) { console.log('L32_SEED_R2 ERR ' + name + ' ' + e.message); }
}
mk('linkpasswd', '/etc/passwd');
mk('linkhost', '/etc/hostname');
mk('rootlink', '/');
mk('usrsharelink', '/usr/share');
console.log('L32_MARKER_SEED_R2_DONE');
