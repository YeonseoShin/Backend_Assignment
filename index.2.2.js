const fs = require('fs').promises;
const path = require('path');

async function searchJsFiles(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await searchJsFiles(fullPath); // 디렉토리면 재귀적으로 탐색
      } else if (path.extname(entry.name) === '.js') {
        console.log(fullPath); // .js 파일이면 경로 출력
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err.message);
  }
}

searchJsFiles('test'); 
