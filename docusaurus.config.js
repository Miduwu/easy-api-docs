// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'easy-api.ts',
  tagline: 'APIs are cool.',
  favicon: 'img/eats.png',
  url: 'https://eats-v3.akiracore.repl.co',
  baseUrl: '/',
  organizationName: 'Miduwu',
  projectName: 'easy-api-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Miduwu/easy-api-docs/tree/new',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      image: 'img/eats-banner.jpg',
      announcementBar: {
          id: "join_us",
          content: 'Do you like easy-api.ts? Join our <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/dKhuDRW8dB">discord server</a>',
          backgroundColor: "#E5F9E0",
          textColor: "#091E42",
          isCloseable: true
      },
      colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'easy-api.ts',
        logo: {
          alt: 'ea.ts logo',
          src: 'img/eats.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Home',
          },
          {
            href: 'https://github.com/Miduwu/easy-api-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
             href: "https://npmjs.com/package/easy-api.ts",
             label: "NPM",
             position: "right"
          }
        ],
      },
      footer: {
        style: 'dark',
        logo: {
            alt: 'easy-api.ts',
            src: 'img/eats.png',
            href: 'https://opensource.fb.com',
            width: 60,
            height: 60,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/docs/home',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/dKhuDRW8dB',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Miduwu/easy-api-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Moonlight Group.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
