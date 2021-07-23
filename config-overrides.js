const { override, fixBabelImports,addLessLoader} = require('customize-cra');
const path = require('path');
const paths = require('react-scripts/config/paths');
paths.appBuild = path.join(path.dirname(paths.appBuild), 'docs');
const rewriteEntry = () => config => {
  config.output = {
    path: path.resolve(__dirname, './docs'),
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: './',
  }
  return config;
};
 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     style: 'css',
     libraryDirectory: "es",
   }),
   addLessLoader({
    javascriptEnabled: true,
    modifyVars:{'@primary-color':'#97d496'},
  }),
  rewriteEntry(),
);