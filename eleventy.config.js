import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

const serviceName = 'Sustainable by design'

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      logotype: {
        text: serviceName
      }
    },
    serviceNavigation: {
      search: {
        indexPath: '/search-index.json'
      },
      navigation: [
        {
        href: "#",
        text: "Principles",
        active: true
        },
        {
        href: "#",
        text: "About"
        }
        ]
    },
    templates: {
      searchIndex: true
    },
    titleSuffix: serviceName,
    icons: { mask: false, shortcut: false, touch: false },
    homeKey: 'Principles',
    footer: {
      copyright: {
        text: '© Sustainable by design'
      }
    },
    stylesheets: ['/assets/styles.css']
  });

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // The folder where all your content will live:
      input: 'app',
      // Use layouts from the plugin
      includes: '_layouts'
    }
  }

};
