/** @type {import('next').NextConfig} */
const nextConfig = {
  // comment out export for testing build, make sure to uncomment it to create the out folder for deployment!
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
