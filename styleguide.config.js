const path = require('path');

module.exports = {
  title: '@ox2/select',
  serverPort: 55012,
  styleguideDir: './docs',
  skipComponentsWithoutExample: true,
  webpackConfig: {
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              plugins: [
                require('babel-plugin-transform-class-properties'),
                require('babel-plugin-transform-do-expressions'),
                require('babel-plugin-transform-export-extensions'),
                require('babel-plugin-transform-object-rest-spread'),
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
  require: [
    '@ox2/css-font-roboto',
    '@ox2/css-font-roboto-condensed',
    '@ox2/css-icons-linear',
    '@ox2/ycss',
    'react-select/dist/react-select.css',
  ],
  sections: [
    {
      name: 'Get Started',
      sections: [
        {
          name: 'About',
          content: './info/introduction.md',
        },
        {
          name: 'Installation',
          content: './info/installation.md',
        },
        {
          name: 'Usage',
          content: './info/usage.md',
        },
      ],
    },
    {
      name: 'Components',
      components: 'src/**/[A-Z]*.js',
    },
    {
      name: 'History',
      content: './CHANGELOG.md',
    },
    {
      name: 'License',
      content: './LICENSE',
    },
  ],
  getExampleFilename: componentpath =>
    componentpath.replace(/\.js$/, '.examples.md'),
  getComponentPathLine: componentPath => {
    const name = path.basename(componentPath, '.js');
    const componentPathFixed = componentPath.replace(/src\//i, '');
    const dir = path.dirname(componentPathFixed);
    return `import ${name} from '@ox2/select/${dir}';`;
  },
};
