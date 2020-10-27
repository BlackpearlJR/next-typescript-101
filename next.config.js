const moment = require('moment');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const date = moment().format('YYYYMMDD');
const dev = process.env.NODE_ENV === 'development';

module.exports = {
  // target: 'serverless',
  trailingSlash: false,
  env: {
    NEXT_PUBLIC_BUILD_TIME: `${date}`,
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
    NEXT_PUBLIC_APP_SETTINGS_URL: process.env.NEXT_PUBLIC_APP_SETTINGS_URL,
    NEXT_PUBLIC_CLIENT_NAME: process.env.NEXT_PUBLIC_CLIENT_NAME,
    NEXT_PUBLIC_FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
    NEXT_PUBLIC_IMAGE_ENDPOINT: process.env.NEXT_PUBLIC_IMAGE_ENDPOINT,
    NEXT_PUBLIC_LIVE_ENDPOINT: process.env.NEXT_PUBLIC_LIVE_ENDPOINT,
    NEXT_PUBLIC_PORT: process.env.NEXT_PUBLIC_PORT,
    NEXT_PUBLIC_S3_ACCESS_KEY: process.env.NEXT_PUBLIC_S3_ACCESS_KEY,
    NEXT_PUBLIC_S3_BUCKET: process.env.NEXT_PUBLIC_S3_BUCKET,
    NEXT_PUBLIC_S3_SECRET_KEY: process.env.NEXT_PUBLIC_S3_SECRET_KEY,
    NEXT_PUBLIC_SITE_DESCRIPTION: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_THEME_NAME: process.env.NEXT_PUBLIC_THEME_NAME,
    NEXT_PUBLIC_VERSION: process.env.NEXT_PUBLIC_VERSION

  },
  webpack(config){
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    if (config.mode === 'production'){
      if (Array.isArray(config.optimization.minimizer)){
        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
      }
    }

    return config;
  }
};
