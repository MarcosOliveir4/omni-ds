import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { expect, fn } from 'storybook/test';

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
    onClick: {
      action: 'clicked',
      description: 'Evento disparado ao clicar no botão',
    },
  },
  args: {
    onClick: fn(),
  },
  render: (args) => html`
    <omni-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      @click=${args.onClick}
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
    onClick: fn(),
  },
  play: async ({ args, canvasElement, userEvent }) => {
    const button = canvasElement.querySelector('omni-button') as HTMLElement;
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'medium',
    disabled: false,
    label: 'Botão Outline',
    onClick: fn(),
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: true,
    label: 'Desabilitado',
    onClick: fn(),
  },
  play: async ({ args, canvasElement, userEvent }) => {
    const button = canvasElement.querySelector('omni-button') as HTMLElement;
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};
