import { html } from 'lit-html';
// @ts-ignore: JSX/MDX with Stencil
import docs from './modus-alert-storybook-docs.mdx';

export default {
  title: 'Components/Alert',
  argTypes: {
    ariaLabel: {
      name: 'aria-label',
      description: "The alert's aria-label",
      table: {
        type: { summary: 'string' },
      },
    },
    buttonAriaLabel: {
      description: "The button's aria-label",
      table: {
        type: { summary: 'string' },
      },
    },
    buttonText: {
      description: "The button's text",
      table: {
        type: { summary: 'string' },
      },
    },
    dismissible: {
      description: 'Whether the alert is dismissible, renders the close icon',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
    message: {
      description: 'The alert message',
      table: {
        type: { summary: 'string' },
      },
      type: { required: true },
    },
    type: {
      control: {
        options: ['error', 'info', 'success', 'warning'],
        type: 'select',
      },
      description: 'The type of the alert',
      table: {
        defaultValue: { summary: `'info'` },
        type: {
          summary: `'error' | 'info' | 'success' | 'warning'`,
        },
      },
    },
  },
  parameters: {
    actions: {
      handles: ['dismissClick', 'actionClick '],
    },
    controls: { expanded: true, sort: 'requiredFirst' },
    docs: {
      page: docs,
    },
    options: {
      isToolshown: true,
    },
  },
};

const Template = ({ ariaLabel, buttonAriaLabel, buttonText, dismissible, message, type }) => html`
  <modus-alert
    ariaLabel=${ariaLabel}
    button-aria-label=${buttonAriaLabel}
    button-text=${buttonText}
    dismissible=${dismissible}
    message=${message}
    type=${type}>
  </modus-alert>
`;

export const Default = {
  render: Template,

  args: {
    ariaLabel: '',
    buttonAriaLabel: '',
    buttonText: '',
    dismissible: false,
    message: 'Info alert (default)',
    type: 'info',
  },
};

export const ActionButton = {
  render: Template,

  args: {
    ariaLabel: '',
    buttonAriaLabel: 'Action button',
    buttonText: 'Action',
    dismissible: false,
    message: 'Info alert with action button',
    type: 'info',
  },
};

export const Dismissible = {
  render: Template,

  args: {
    ariaLabel: '',
    buttonAriaLabel: '',
    buttonText: '',
    dismissible: true,
    message: 'Dismissible alert',
    type: 'info',
  },
};

export const Error = {
  render: Template,

  args: {
    ariaLabel: '',
    buttonAriaLabel: '',
    buttonText: '',
    dismissible: false,
    message: 'Error alert',
    type: 'error',
  },
};

export const Success = {
  render: Template,

  args: {
    ariaLabel: '',
    buttonAriaLabel: '',
    buttonText: '',
    dismissible: false,
    message: 'Success alert',
    type: 'success',
  },
};

export const Warning = {
  render: Template,

  args: {
    ariaLabel: '',
    buttonAriaLabel: '',
    buttonText: '',
    dismissible: false,
    message: 'Warning alert',
    type: 'warning',
  },
};

const TemplateWithLink = ({ ariaLabel, buttonAriaLabel, buttonText, dismissible, message, type }) => html`
  <modus-alert
    ariaLabel=${ariaLabel}
    button-aria-label=${buttonAriaLabel}
    button-text=${buttonText}
    dismissible=${dismissible}
    message=${message}
    type=${type}>
    This is a info alert with <a href="#">an example link</a>
  </modus-alert>
`;

export const WithLink = {
  render: TemplateWithLink,

  args: {
    ariaLabel: '',
    buttonAriaLabel: '',
    buttonText: '',
    dismissible: false,
    type: 'info',
    message: null,
  },
};
