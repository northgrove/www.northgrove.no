/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/N-logo-tr2.png',
    infoLink: 'https://www.northgrove.no',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Northgrove', // Title for your website.
  tagline: 'Examples that counts',
  url: 'https://www.northgrove.no', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'www.northgrove.no',
  organizationName: 'northgrove',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'Login-to-your-JavaScript-application-with-Azure-AD', label: 'Docs'},
    //{doc: 'doc4', label: 'API'},
    //{page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
    {search: true },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/N-logo-tr2-inv.png',
  footerIcon: 'img/N-logo-tr2.png',
  favicon: 'img/N-logo-tr2.png',

  /* Colors for website */
  colors: {
    primaryColor: '#5B9BD5',
    secondaryColor: '#005DA0',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Kjetil Nordlund - Northgrove`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js',
'https://platform.linkedin.com/badges/js/profile.js'
],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/N-logo-tr2.png',
  twitterImage: 'img/N-logo-tr2.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',


  enableUpdateTime: true,
  enableUpdateBy: true,
  facebookAppId: 341163786698427,
  twitter: true,
  facebookPixelId: 551187012013880,
  repoUrl: "https://github.com/northgrove/www.northgrove.no",
  editUrl: "https://github.com/northgrove/www.northgrove.no/edit/master/docs/"
};

module.exports = siteConfig;
