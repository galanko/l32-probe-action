const fs = require('fs');
const path = require('path');
const ws = process.env.GITHUB_WORKSPACE;
console.log('L32_SEED_A ws=' + ws);
console.log('L32_SEED_A exists=' + fs.existsSync(ws));
fs.writeFileSync(path.join(ws, 'seed.txt'), 'L32HASHFILESSEED\n');
function mk(name, target) {
  try { fs.symlinkSync(target, path.join(ws, name)); console.log('L32_SEED_A link ' + name + ' -> ' + target); }
  catch (e) { console.log('L32_SEED_A ERR ' + name + ' ' + e.message); }
}
mk('linkpasswd', '/etc/passwd');
mk('linkhost', '/etc/hostname');
mk('etclink', '/etc');
mk('rootlink', '/');
for (const f of fs.readdirSync(ws)) console.log('L32_SEED_A WS_ENTRY ' + f);
console.log('L32_MARKER_SEED_A_DONE');
