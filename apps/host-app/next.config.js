const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          products: 'products@http://localhost:3001/remoteEntry.js',
          basket: 'basket@http://localhost:3002/remoteEntry.js',
        },
        filename: 'remoteEntry.js', // Add this line
        shared: {
          react: { singleton: true, eager: true, requiredVersion: false },
          'react-dom': { singleton: true, eager: true, requiredVersion: false },
        },
      })
    );

    return config;
  },
};
