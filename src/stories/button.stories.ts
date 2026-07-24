import type { Meta, StoryObj } from '@storybook/html-vite';
import type { OMNIButton } from '../types/button';

const meta: Meta<OMNIButton> = {
  title: 'Components/Actions/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
      description: 'Variante de cor do botão',
      type: 'string',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Indica se o botão está desabilitado',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'lg'],
      description: 'Tamanho do botão',
    },
  },
};

export default meta;
type Story = StoryObj<OMNIButton>;

const renderButton = (args: OMNIButton) => {
  const variantClass = args.variant
    ? `omni-btn ${args.variant}`
    : 'omni-btn primary';
  const disabledAttr = args.disabled ? 'disabled' : '';
  const disabledClass = args.disabled ? 'omni-btn-disabled' : '';
  const sizeClass = args.size ? `${args.size}` : '';

  return `
    <button class="${variantClass} ${disabledClass} ${sizeClass}" ${disabledAttr}>
      Button ${args.variant || 'primary'}
    </button>
  `;
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false,
  },
  render: renderButton,
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    disabled: false,
  },
  render: renderButton,
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
  },
  render: renderButton,
};
