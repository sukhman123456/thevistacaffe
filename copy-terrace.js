import fs from 'node:fs';
import path from 'node:path';

const brainDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\26cdc0f6-c9c0-4689-830d-ee497ff4f362';
const targetDir = path.resolve('src/assets');

const files = [
  ['vista_sunset_terrace_1791648785584.jpg', 'vista-terrace.jpg'],
  ['vista_clean_portrait_1791822358486.jpg', 'vista-terrace-portrait.jpg'],
];

for (const [srcRel, destName] of files) {
  const src = path.join(brainDir, srcRel);
  const dest = path.join(targetDir, destName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${destName}`);
  } else {
    console.warn(`Missing: ${src}`);
  }
}
