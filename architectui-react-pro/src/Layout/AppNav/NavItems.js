export const MainNav = [
  {
    icon: 'pe-7s-paint',
    label: 'Design',
    content: [
      {
        label: 'Landing',
        to: '#/dashboards/design-landing'
      },
      {
        label: 'Collections',
        to: '#/dashboards/design-collection'
      },
      {
        label: 'Product',
        to: '#/dashboards/design-product'
      },
      {
        label: 'User',
        to: '#/dashboards/design-user'
      },
      {
        label: 'Cart',
        to: '#/dashboards/design-cart'
      },
      {
        label: 'Search',
        to: '#/dashboards/design-search'
      }
    ]
  },
  {
    icon: 'pe-7s-rocket',
    label: 'Publish',
    to: '#/dashboards/publish'
  },
  {
    icon: 'pe-7s-tools',
    label: 'Settings',
    to: '#/dashboards/settings'
  },
  {
    icon: 'pe-7s-plugin',
    label: 'Integrations',
    to: '#/dashboards/integrations'
  },
  {
    icon: 'pe-7s-speaker',
    label: 'Push Notifications',
    content: [
      {
        icon: 'pe-7s-plugin',
        label: 'Send',
        to: '#/dashboards/push-notifications'
      },
      {
        icon: 'pe-7s-plugin',
        label: 'Scheduled',
        to: '#/dashboards/push-notifications-scheduled'
      }
    ]
  },

  // component ui

  {
    label: 'Analytics',
    icon: 'pe-7s-graph3',
    to: '#/dashboards/analytics'
  },
  {
    label: 'Preview on Device',
    icon: 'pe-7s-phone',
    to: '#/dashboards/preview-app'
  },
  {
    label: 'Tutorials',
    icon: 'pe-7s-video',
    to: '#/dashboards/tutorials'
  },
  {
    label: "FAQ's",
    icon: 'pe-7s-help1',
    to: 'https://appit.drift.help',
    externalLink: true
  },
  {
    label: 'Leave a Review',
    icon: 'pe-7s-like2',
    to:
      'https://apps.shopify.com/mobile-app-creator-appit?#modal-show=ReviewListingModal',
    externalLink: true
  },
  {
    label: 'Get a Free Month',
    icon: 'pe-7s-cash',
    to: '#/dashboards/get-a-free-month'
  }
];
export const ComponentsNav = [
  {
    label: 'Analytics',
    icon: 'pe-7s-graph3',
    to: '#/dashboards/analytics'
  },
  {
    label: 'Preview on Device',
    icon: 'pe-7s-phone',
    to: '#/dashboards/preview-app'
  },
  {
    label: 'Tutorials',
    icon: 'pe-7s-video',
    to: '#/dashboards/tutorials'
  },
  {
    label: "FAQ's",
    icon: 'pe-7s-help1',
    to: 'https://appit.drift.help',
    externalLink: true
  },
  {
    label: 'Leave a Review',
    icon: 'pe-7s-like2',
    to:
      'https://apps.shopify.com/mobile-app-creator-appit?#modal-show=ReviewListingModal',
    externalLink: true
  },
  {
    label: 'Get a Free Month',
    icon: 'pe-7s-cash',
    to: '#/dashboards/get-a-free-month'
  }
];
export const FormsNav = [
  {
    icon: 'pe-7s-light',
    label: 'Elements',
    content: [
      {
        label: 'Controls',
        to: '#/forms/controls'
      },
      {
        label: 'Layouts',
        to: '#/forms/layouts'
      },
      {
        label: 'Validation',
        to: '#/forms/validation'
      },
      {
        label: 'Wizards',
        content: [
          {
            label: 'Variation 1',
            to: '#/forms/wizard-1'
          },
          {
            label: 'Variation 2',
            to: '#/forms/wizard-2'
          },
          {
            label: 'Variation 3',
            to: '#/forms/wizard-3'
          }
        ]
      },
      {
        label: 'Sticky Form Headers',
        to: '#/forms/sticky-headers'
      }
    ]
  },
  {
    icon: 'pe-7s-joy',
    label: 'Widgets',
    content: [
      {
        label: 'Datepicker',
        to: '#/forms/datepicker'
      },
      {
        label: 'Range Slider',
        to: '#/forms/range-slider'
      },
      {
        label: 'Input Selects',
        to: '#/forms/input-selects'
      },
      {
        label: 'Toggle Switch',
        to: '#/forms/toggle-switch'
      },
      {
        label: 'Dropdowns',
        to: '#/forms/dropdown'
      },
      {
        label: 'WYSIWYG Editor',
        to: '#/forms/wysiwyg-editor'
      },
      {
        label: 'Input Mask',
        to: '#/forms/input-mask'
      },
      {
        label: 'Typeahead',
        to: '#/forms/typeahead'
      },
      {
        label: 'Clipboard',
        to: '#/forms/clipboard'
      },
      {
        label: 'Textarea Autosize',
        to: '#/forms/textarea-autosize'
      },
      {
        label: 'Number Spinners',
        to: '#/forms/numberspinners'
      },
      {
        label: 'Color Picker',
        to: '#/forms/color-picker'
      },
      {
        label: 'Dropzone',
        to: '#/forms/dropzone'
      }
    ]
  }
];
export const WidgetsNav = [
  {
    icon: 'pe-7s-graph2',
    label: 'Chart Boxes',
    content: [
      {
        label: 'Variation 1',
        to: '#/widgets/chart-boxes'
      },
      {
        label: 'Variation 2',
        to: '#/widgets/chart-boxes-2'
      },
      {
        label: 'Variation 3',
        to: '#/widgets/chart-boxes-3'
      }
    ]
  },
  {
    icon: 'pe-7s-id',
    label: 'Profile Boxes',
    to: '#/widgets/profile-boxes'
  },
  {
    icon: 'pe-7s-display1',
    label: 'Content Boxes',
    to: '#/widgets/content-boxes'
  }
];
export const ChartsNav = [
  {
    icon: 'pe-7s-graph2',
    label: 'ChartJS',
    to: '#/charts/chartjs'
  },
  {
    icon: 'pe-7s-graph',
    label: 'Apex Charts',
    to: '#/charts/apexcharts'
  },
  {
    icon: 'pe-7s-gleam',
    label: 'Gauges',
    to: '#/charts/gauges'
  },
  {
    icon: 'pe-7s-graph1',
    label: 'Chart Sparklines 1',
    to: '#/charts/sparklines-1'
  },
  {
    icon: 'pe-7s-edit',
    label: 'Chart Sparklines 2',
    to: '#/charts/sparklines-2'
  }
];
