module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['https://www.nystore.pk'],
    loader: 'akamai',
    path: '',
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  "basepath": "https://new.nystore.pk",
}
