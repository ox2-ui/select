const path = require('path');
const glob = require('glob');

module.exports = {
  title: '@ox2/select',
  template: './docs/src/template.html',
  serverPort: 55012,
  styleguideDir: './docs',
  updateWebpackConfig: webpackConfig => {
    webpackConfig.module.loaders.push(
      {
        test: [/\.js$/],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, './node_modules/react-select'),
        loaders: ['style', 'css'],
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, './node_modules/@tapfuse'),
        loaders: ['style', 'css'],
      }
    );
    webpackConfig.entry.push(path.join(__dirname, 'node_modules/react-select/dist/react-select.css'));
    webpackConfig.entry.push(path.join(__dirname, 'node_modules/@tapfuse/css-icons-linear/index.css'));
    return webpackConfig;
  },
  sections: [
    {
      name: 'Get Started',
      sections: [
        {
          name: 'About',
          content: './docs/src/introduction.md',
        },
        {
          name: 'Installation',
          content: './docs/src/installation.md',
        },
        {
          name: 'Usage',
          content: './docs/src/usage.md',
        },
      ],
    },
    {
      name: 'Components',
      components() {
        return glob.sync(path.resolve(__dirname, 'src/**/*.js'))
          .filter( module => {
            return /\/[A-Z]\w*\.js$/.test(module);
          });
      },
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
  getExampleFilename: componentpath => componentpath.replace(/\.js$/, '.examples.md'),
  getComponentPathLine: componentPath => {
    const name = path.basename(componentPath, '.js');
    const dir = path.dirname(componentPath.replace(/src\//i, ''));
    return `import ${name} from '@ox2/select/${dir}';`;
  },
};
