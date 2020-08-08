
const allConfig = () => {
    if (process.env.NODE_ENV !== 'test') {
      console.log('WARNING: Default environment is being overwritten by env.json');
      return import('./env.json').then(data => data.default)
    }
  return {};
}

module.exports = {
  allConfig
};