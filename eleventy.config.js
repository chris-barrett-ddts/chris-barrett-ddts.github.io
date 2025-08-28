import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
        logotype: {
          text: 'Sustainable by design'
        }
    },
    titleSuffix: 'Sustainable by design',
    icons: {mask: false, shortcut: false, touch: false},
    homeKey: 'Principles',
    footer: {
        copyright: {
            text: '© Sustainable by design'
          }
    },
    stylesheets: ['/assets/styles.css'],
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
