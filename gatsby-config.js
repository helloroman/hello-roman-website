module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-react-svg`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-sass-resources',
      options: {
        resources: [
          './src/assets/styles/variables.scss',
          './src/assets/styles/mixins.scss',
          './src/assets/styles/typography.scss'
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat:500,600,700:latin-ext'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hello Roman`,
        short_name: 'helloroman',
        start_url: `/`,
        background_color: `#F8F8F8`,
        theme_color: `#4123DE`,
        display: `standalone`,
        icon: `public/static/helloroman-logo.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
};