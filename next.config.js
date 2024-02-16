const DOMAIN = process.env.dev_env ? "http://localhost:3000" : "";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  /*async redirects() {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: true,
      },
    ];
  },*/
  images: {
    remotePatterns: [
      {
        protocol: "http",
        port: "9000",
        hostname: "localhost",
      },
      {
        protocol: "http",
        port: "8080",
        hostname: "localhost",
        pathname: "/api/users/photos/static/*",
      },
    ],
  },
  env: {
    baseUrl: process.env.local_env
      ? "http://localhost:8080/api/"
      : `${DOMAIN}/api/`,
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextIntl = require("next-intl/plugin")("./i18n.js");

module.exports = withNextIntl(nextConfig);
