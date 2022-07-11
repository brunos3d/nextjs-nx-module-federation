// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require("next-compose-plugins");
const withNx = require('@nrwl/next/plugins/with-nx');
const { withMedusa } = require("@module-federation/dashboard-plugin");
const { withFederatedSidecar } = require('@module-federation/nextjs-mf');
const packageVersion = require('../../package.json').version;
let merge = require('webpack-merge');

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:4400";
const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || "http://localhost:4200";
const MEDUSA_API_URL = process.env.NEXT_PUBLIC_MEDUSA_API_URL || "http://localhost:3333";

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack5: true,
  webpack(config, options) {
    const { isServer } = options;

    config.experiments = { topLevelAwait: true };

    config.module.rules.push({
      test: /_app.tsx/,
      loader: '@module-federation/nextjs-mf/lib/federation-loader.js',
    });

    if (isServer) {
      // ignore it on SSR, realistically you probably wont be SSRing Fmodules, without paid support from @ScriptedAlchemy
      Object.assign(config.resolve.alias, {
        checkout: false,
        with_medusa: false,
      });
    }

    return merge.merge(config, {
      entry() {
        return config.entry().then(entry => {
          return entry;
        });
      },
    });
  },
};

const federatedSidecarProvider = withFederatedSidecar({
  name: 'store',
  filename: 'static/chunks/remoteEntry.js',
  remotes: {
    checkout: `checkout@${CHECKOUT_URL}/_next/static/chunks/remoteEntry.js`,
    with_medusa: `with_medusa@${APP_URL}/_next/static/chunks/remoteEntry.js`,
  },
  shared: {},
});

const medusaProvider = withMedusa({
  name: "with_medusa",
  publishVersion: packageVersion,
  filename: "dashboard.json",
  packageJsonPath: require.resolve('../../package.json'),
  dashboardURL: `${MEDUSA_API_URL}/api/update?token=${process.env.DASHBOARD_WRITE_TOKEN}`,
  versionChangeWebhook: "http://cnn.com/",
  metadata: {
    clientUrl: MEDUSA_API_URL,
    baseUrl: APP_URL,
    source: {
      url: "https://github.com/BrunoS3D/nextjs-nx-module-federation/tree/main/apps/with-medusa",
    },
    remote: APP_URL + "/remoteEntry.js",
  },
});

module.exports = withPlugins([
  withNx,
  federatedSidecarProvider,
  medusaProvider
], nextConfig)
