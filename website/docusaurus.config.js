// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Payroll123 AI Governance Playbook',
  tagline: 'Reglas y estándares para desarrollo asistido por IA',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://carevalo-empowerhr.github.io',
  baseUrl: '/ai-assistant-governance-framework/',

  organizationName: 'carevalo-empowerhr',
  projectName: 'ai-assistant-governance-framework',
  trailingSlash: false,

  onBrokenLinks: 'warn',
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
          path: '../playbook',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/carevalo-empowerhr/ai-assistant-governance-framework/edit/master/playbook/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Payroll123 Playbook',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'playbookSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://github.com/carevalo-empowerhr/ai-assistant-governance-framework',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} EmpowerHR — Payroll123 AI Governance Playbook`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php', 'bash'],
      },
    }),
};

export default config;
