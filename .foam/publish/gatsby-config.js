module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Primer`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/readme",
        contentPath: `${__dirname}/../..`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.foam/**",
          "**/.vscode/**",
        ],
      },
    },
  ],
};
