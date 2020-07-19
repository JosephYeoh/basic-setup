const fs = require('fs');
const path = require('path');

const ENV_FILE = path.resolve(__dirname, './env.json');

export const allConfig = ():any => {
  let items = {};
  if (fs.existsSync(ENV_FILE)) {
    if (process.env.NODE_ENV !== 'test') {
      console.log('WARNING: Default environment is being overwritten by env.json');
    }
    items = JSON.parse(fs.readFileSync(ENV_FILE, 'utf8'));
  }
  return items;
}