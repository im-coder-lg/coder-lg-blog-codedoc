import { 
  configuration, 
  DefaultMarkdownCustomComponents
} from '@codedoc/core';
import { codingBlog } from '@codedoc/coding-blog-plugin';

import { theme } from './theme';
import { Utterances } from './components/utterances';
import { SeeTypo$ } from './components/SeeTypo';
import { googleAnalytics } from './components/GoogleAnalytics/plugin';
import { Card } from './components/card';



export const config = /*#__PURE__*/configuration({
  theme,
  src: {
    base: 'src/markdown'
  },
  dest: {
    html: 'dist',
    assets: 'dist',
    styles: 'dist/styles',
    bundle: 'dist/bundle',
  },
  page: {
    title: {
      base: ''
    },
    favicon: 'src/assets/favicon.ico',
    meta: {
      keywords: ['tech','lessons','markdown','lord','LG'],
    },
  },
  plugins: [
    codingBlog({
      assets: [ 'src/assets' ],
      feed: {
        url: 'https://im-coder-lg.github.io/codedoc-blog/',
        title: 'LG',
        exclude: [
          'archive.md',
          'about.md'  //,
          // '2020-07-29_everything.md'
        ]
      }
    }),
    googleAnalytics("")
  ],
  markdown: {
    customComponents: {
      ...DefaultMarkdownCustomComponents,
      Utterances,
      Card,
      SeeTypo$
    }
  },
    misc: {
    github: {
      user: 'im-coder-lg',            // --> name of the user on GitHub owning the repo
      repo: 'codedoc-blog',         // --> name of the repo on GitHub
      action: 'Star',             // --> action of the GitHub button
      count: true,               // --> whether to show the `count` on the GitHub button
      large: false,                // --> whether to show a `large` GitHub button
      standardIcon: true,        // --> whether to use the GitHub icon on the GitHub button or use an action specific icon
    },
    gitter: {
      room: 'im-coder-lg/codedoc-blog'  // --> id of the Gitter room for the project
    }
  },
  //...
});
