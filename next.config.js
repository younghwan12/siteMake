/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/layout' : '',
  publicRuntimeConfig: {
    contextPath: process.env.NODE_ENV === 'production' ? '/layout' : '',
    uploadPath: process.env.NODE_ENV === 'production' ? '/layout/upload.php' : '/api/upload'
  },
}

module.exports = nextConfig
