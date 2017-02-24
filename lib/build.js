import minimist from 'minimist';
import BrowserSync from './browsersync';
import Firebase from './firebase';

const argv = minimist(process.argv);

/**
 * Don't run the dev server when we're deploying
 */
if (!argv.buildOnly) {
  const bs = new BrowserSync('DevServer', new Firebase())
    .start();

  bs.watch('dist/').on('change', () => {
    bs.reload();
  });

  bs.watch('./firebase.json').on('change', () => {
    bs.proxy.restart();
  });

  bs.watch('dist/js/').on('change', () => {
    bs.reload();
  });
}
