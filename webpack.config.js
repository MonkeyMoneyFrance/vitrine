var webpack = require("webpack");
var path = require("path");

var CompressionPlugin = require("compression-webpack-plugin");
var BUILD_DIR = path.resolve(__dirname, "build/");
var APP_DIR = path.resolve(__dirname, "src/");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin").default;

//createSiteMap("https://www.monkeymoney.fr")
const options = {
  policy: [
    {
      userAgent: "*",
      allow: "/",
      crawlDelay: 2
    }
  ],
  sitemap: "https://www.monkeymoney.fr/sitemap.xml",
  host: "https://www.monkeymoney.fr"
}


var config = {
  entry: {
    path: APP_DIR + "/index.js"
  },
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  resolve: {
    // extensions: ['*', '.js', '.jsx']
    extensions: ["*", ".js", ".jsx", ".css"]
  },
  node: {
    fs: "empty"
  },
  devServer: {
    contentBase: "./build"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "autoprefixer", "sass?sourceMap"]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=100000&mimetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=100000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=100000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: "file-loader"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=100000&mimetype=image/svg+xml"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ]
  },
  plugins: [
    new RobotstxtPlugin(options),
    // new CleanWebpackPlugin(['build']),
    new webpack.DefinePlugin({
      // <-- key to reducing React's size
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      }
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};

module.exports = config;
