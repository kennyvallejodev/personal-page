const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
	images: {
		domains: ['kenny-page-assets.s3.us-west-2.amazonaws.com']
	},
	webpack(config, options) {
		return config;
	},
});
