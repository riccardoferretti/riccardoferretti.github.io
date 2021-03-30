// TODO use Foam
// const Foam = require('foam-core');
// const ws = Foam.uris.computeRelativeURI(Foam.URI.file(__dirname), '..');
// console.log('foam workspace:' + ws.fsPath)
// const config = Foam.createConfigFromFolders([ws], {
//   include: ['**/*.md'],
//   ignore: ['.foam/**', '.github/**', '.vscode/**'],
// });
// const foam = Foam.bootstrap(config, new Foam.FileDataStore(config));

// console.log('Foam booted');

module.exports = (title) => {
  return `/${encodeURI(title)}`
}
