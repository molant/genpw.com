/* eslint-disable no-console */
import webpack from 'webpack';
import config from '../config/webpack';

export default function(done = () => {}) {
  const wp = webpack(config);

  wp.run((err, stats) => {
    if (err) {
      throw err;
    }
    if (stats.hasErrors()) {
      const info = stats.toJson();
      throw new Error(info.errors);
    }
    console.log('JS build complete!');
    done();
  });
}
