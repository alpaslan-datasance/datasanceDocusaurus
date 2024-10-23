import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Redocusaurus from 'redocusaurus';
import path from 'path';

const config: Config = {
  title: 'Datasance Documentation',
  tagline: 'Datasance Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://alpaslan-datasance.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Datasance', // Usually your GitHub org/user name.
  projectName: 'datasance.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '3.0.0',
              path: '3.0.0',
            },
          },

        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    // Redocusaurus config
    [
      'redocusaurus',
      {
        config: path.join(__dirname, 'redocly.yaml'),
        openapi: {
          path: 'openapi',
          routeBasePath: '/api',
        },
        // Plugin Options for loading OpenAPI files
        specs: [
          // Pass it a path to a local OpenAPI YAML file
          {
            // Redocusaurus will automatically bundle your spec into a single file during the build
            spec: 'openapi/index.yaml',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Datasance',
      logo: {
        alt: 'Datasance',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documents',
        },
        {
          label: 'API',
          position: 'left',
          items: [
            {
              label: 'All',
              to: '/api',
            }
          ]
        },
        {
          type: "docsVersionDropdown",
          position: 'right',
        },
        {
          href: 'https://github.com/Datasance',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://tr.linkedin.com/in/emirhandurmus',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Eclipse ioFog Community',
              href: 'https://iofog.org/community.html/',
            },
            {
              label: 'Visit the ioFog Discussion Forum',
              href: 'https://discuss.iofog.org/',
            },
            {
              label: 'Eclipse ioFog Slack',
              href: 'https://iofog.slack.com/join/shared_invite/enQtNTQxMDczNjE0Mjc5LTRhMTE2YjgwNmRhOTg5ZmI3MGQ5OGM0N2E1MDg0OTJmMWYxZTgxZjE2MjA3NzY2MTFlZmEyYzc3OGQ5NmM4ZjI',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Datasance',
            },
            {
              label: 'LinkedIn',
              href: 'https://tr.linkedin.com/in/emirhandurmus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Datasance, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
