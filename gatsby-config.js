/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: '/demandaro',
  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: { alias: { '~': 'src' }, extensions: ['ts', 'tsx'] },
    },
  ],
};
