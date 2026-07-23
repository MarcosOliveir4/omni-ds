import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import type { OmniButtonProps } from './model';
import './omni-button';

const meta: Meta<OmniButtonProps> = {
  title: 'Components/Omni Button',
  component: 'omni-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline'],
      description: 'Estilo visual principal do botão',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do botão',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita as interações com o botão',
    },
    label: {
      control: 'text',
      description: 'Texto interno do botão (injetado via slot)',
    },
  },
  args: {},
  render: (args) => html`
    <omni-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
    >
      ${args.label}
    </omni-button>
  `,
};

export default meta;

type Story = StoryObj<OmniButtonProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    label: 'Botão Primário',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'medium',
    disabled: false,
    label: 'Botão Outline',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: true,
    label: 'Desabilitado',
  },
};
