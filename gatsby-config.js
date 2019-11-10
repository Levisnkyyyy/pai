module.exports = {
  siteMetadata: {
    title: `פאי - ניקוי ספות | ניקוי שטיחים | ניקוי מזרנים | ניקוי מושבי הרכב ועוד`,
    description: `ניקוי ספות מקצועי ויסודי, חברתינו מציעה ניקוי בבית וברכב לשלל הפריטים: מזרנים, מושבים, פוליש, ניקוי לאחר שיפוץ ועוד. פאי קלין מציעה שירותים בצפון, לרבות חיפה והקריות`,
    author: `@paiclean`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/img/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Assistant\:300,400,600,700,800` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },    
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-146804018-2",
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
