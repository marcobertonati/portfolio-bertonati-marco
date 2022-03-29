module.exports = {
  siteMetadata: {
    title: "Marco Bertonati | Web Developer",
    titleTemplate: "%s · The Real Hero",
    description: "Web page about Marco Bertonati.",
    url: "https://www.portfoliobertonatimarco.gatsbyjs.io/", // No trailing slash allowed!
    image: "/src/images/fav-icon-bertonati.svg", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@marco_bertonati",
    siteUrl: `https://www.portfoliobertonatimarco.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-J3NRMLVP4K",
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-postcss`,
  ],
};
