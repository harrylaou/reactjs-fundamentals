'use strict'

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils-academy/InterpolateHtmlPlugin')
const StatsPlugin = require('stats-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const paths = require('./paths')
const common = require('./webpack.common')

// Webpack uses `publicPath` to determine where the app is being served from.
// It requires a trailing slash, or the file assets will get an incorrect path.
const publicPath = paths.servedPath
// Some apps do not use client-side routing with pushState.
// For these, "homepage" can be set to "." to enable relative asset paths.
const shouldUseRelativeAssetPaths = publicPath === './'

// Development builds of React are slow and not intended for production.
if (process.env.NODE_ENV !== 'production') {
  throw new Error('Production builds must have NODE_ENV=production.')
}

// Note: defined here because it will be used more than once.
const cssFilename = 'css/[name].css'

// ExtractTextPlugin expects the build output to be flat.
// (See https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/27)
// However, our output is structured with css, js and media folders.
// To have this structure working with relative paths, we have to use custom options.
const extractTextPluginOptions = shouldUseRelativeAssetPaths
  ? // Making sure that the publicPath goes back to to build folder.
    {publicPath: Array(cssFilename.split('/').length).join('../')}
  : {}

// This is the production configuration.
// It compiles slowly and is focused on producing a fast and minimal bundle.
// The development configuration is different and lives in a separate file.
module.exports = {
  bail: true,
  devtool: 'source-map',
  entry: [require.resolve('./polyfills'), paths.appIndexJs, paths.appVendorJs],
  output: {
    path: paths.appBuild,
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    // We inferred the "public path" (such as / or /my-project) from homepage.
    publicPath
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules, paths.appVendorJs],
    extensions: ['.js', '.json', '.jsx']
  },
  resolveLoader: {
    modules: [paths.appNodeModules, paths.appVendorJs]
  },
  module: {
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      {parser: {requireEnsure: false}},
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: common.esLint,
        include: paths.appSrc
      },
      common.fileLoader,
      common.urlLoader,
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel-loader',
        exclude: [/\.test\.jsx?$/, /\.story\.(js|jsx)$/],
        options: {
          babelrc: true
          // presets: [require.resolve('babel-preset-react-app')],
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          Object.assign(
            {
              fallback: 'style-loader',
              use: [common.cssLoader, common.postcssLoader]
            },
            extractTextPluginOptions
          )
        )
      }
      // ** STOP ** Are you adding a new loader?
      // Remember to add the new extension(s) to the "url" loader exclusion list.
    ]
  },
  plugins: [
    new InterpolateHtmlPlugin(process.env.NODE_ENV),
    new HtmlWebpackPlugin(common.htmlWebpackConfig),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // Minify the code.
    new webpack.optimize.UglifyJsPlugin(common.uglifyJSconfig),
    new ExtractTextPlugin({
      filename: cssFilename
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),

    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5,
      moveToParents: true
    }),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html)$/,
      threshold: 10240,
      minRatio: 0.8
    }),

    new StatsPlugin('profile.json', {
      chunkModules: true,
      exclude: [/node_modules[\\\/]react/]
    })
  ],
  node: common.node,
  profile: true
}
