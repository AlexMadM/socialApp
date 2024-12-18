/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"images.unsplash.com",
			"storage.yandexcloud.net",
			"staging-it-incubator.s3.eu-central-1.amazonaws.com",
			"i.ibb.co",
		],
	},
};

export default nextConfig;
