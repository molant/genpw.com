/* eslint-disable no-console */

import layouts from 'metalsmith-layouts';
import Metalsmith from 'metalsmith';
import branch from 'metalsmith-branch';
import moveUp from 'metalsmith-move-up';
import sass from 'metalsmith-sass';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../config/webpack';

export default function (reload = () => {}) {
  const wp = webpack(webpackConfig);
  wp.run((err) => {
    if (err) {
      throw err;
    }
    reload();
    console.log('JS build complete!');
  });

  Metalsmith(path.dirname(__dirname))
    .metadata({
      site: {
        description: '',
        title: 'Genpw',
        url: 'https://genpw.com',
      },
    })
    .source('./src')
    .destination('./dist')
    .clean(false)
    .ignore([
      '**/src/design/pug/**',
      '**/src/design/js/**',
    ])
    .use(
      branch()
        .pattern('content/**')
        .use(layouts({
          directory: './src/design/pug',
          engine: 'pug',
          rename: true,
        }))
        .use(moveUp('content/**')),
    )
    .use(
      branch()
        .pattern('design/scss/style.scss')
        .use(sass({
          outputDir: originalPath => originalPath.replace('scss', 'css'),
        }))
        .use(moveUp('design/css/**')),
    )
    .build((err) => {
      if (err) {
        throw err;
      }
      reload();
      console.log('Site build complete!');
    });
}
