// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require("next-compose-plugins");
const { withFederatedSidecar } = require('@module-federation/nextjs-mf');
const {withMedusa} = require('@module-federation/dashboard-plugin')
let merge = require('webpack-merge');

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
        store: false,
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



const withMedusaProvider = withMedusa({
  name: "store",
  publishVersion: packageVersion,
  filename: "dashboard.json",
  packageJsonPath: require.resolve('../../package.json'),
  dashboardURL: `http://localhost:3333/api/update?token=${process.env.DASHBOARD_WRITE_TOKEN}`,
  versionChangeWebhook: "http://cnn.com/",
  metadata: {
    clientUrl: "http://localhost:3333",
    baseUrl: process.env.VERCEL_URL
      ? "https://" + process.env.VERCEL_URL
      : "http://localhost:3001",
    source: {
      url: "https://github.com/module-federation/federation-dashboard/tree/master/dashboard-example/home",
    },
    remote: process.env.VERCEL_URL
      ? "https://" + process.env.VERCEL_URL + "/remoteEntry.js"
      : "http://localhost:3001/remoteEntry.js",
  },
});


const withFederationProvider = withFederatedSidecar({
  name: 'checkout',
  filename: 'static/chunks/remoteEntry.js',
  remotes: {
    store: `store@${process.env.NEXT_PUBLIC_STORE_URL}/_next/static/chunks/remoteEntry.js`,
    checkout: `checkout@${process.env.NEXT_PUBLIC_CHECKOUT_URL}/_next/static/chunks/remoteEntry.js`,
  },
  exposes: {
    './buy-button': './components/buy-button/buy-button.tsx',
    './useAddToCartHook': './hooks/useAddToCart.ts',
  },
  shared: {
  }
})


module.exports = withPlugins([
  withNx,
  withFederationProvider,
  withMedusaProvider
], nextConfig)
