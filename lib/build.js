import minimist from 'minimist';
import Firebase from './firebase';

const argv = minimist(process.argv);

/**
 * Don't run the dev server when we're deploying
 */
if (!argv.buildOnly) {
  const fb = new Firebase().start();
}
