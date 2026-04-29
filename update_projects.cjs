const fs = require('fs');

const content = fs.readFileSync('src/data/projects.ts', 'utf-8');

function generateSectionsStr(prefix, count) {
  let str = '[\n';
  for (let i = 1; i <= count; i++) {
    str += `        {
          id: 'section-${i}',
          layout: 'full-image',
          image: '/${prefix}-en-${i}.jpg',
          imageZh: '/${prefix}-zh-${i}.jpg'
        }${i === count ? '' : ','}\n`;
  }
  str += '      ]';
  return str;
}

let updated = content;

// Iterate projects 2 to 6
for (let id = 2; id <= 6; id++) {
  const regex = new RegExp(`id: ${id},[\\s\\S]*?zh: \\{[\\s\\S]*?solution: '.*?'\\n    \\}`);
  updated = updated.replace(regex, (match) => {
    // Add theme and snapScroll
    let newMatch = match.replace(/year: '.*?',/, `year: '${match.match(/year: '(.*?)'/)[1]}',\n    theme: 'light',\n    snapScroll: true,`);
    
    // Append sections to en
    newMatch = newMatch.replace(/solution: '(.*?)'(\n    \})/g, `solution: '$1',\n      sections: ${generateSectionsStr(`project${id}`, 8)}$2`);
    
    return newMatch;
  });
}

fs.writeFileSync('src/data/projects.ts', updated);
console.log("Updated projects.ts successfully");
