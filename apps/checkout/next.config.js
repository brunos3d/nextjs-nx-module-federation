// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const { withFederatedSidecar } = require('@module-federation/nextjs-mf');
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


const nxNextConfig = withNx(nextConfig)

module.exports = withFederatedSidecar({
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
  },
})(nxNextConfig);
