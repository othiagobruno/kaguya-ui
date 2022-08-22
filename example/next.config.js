/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['kaguyaui-core'])

module.exports = withTM({
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    URL_BACKEND: process.env.URL_BACKEND,
    CRYPTO_KEY: process.env.CRYPTO_KEY,
  },
})
