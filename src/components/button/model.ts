export type Variant = 'primary' | 'secondary' | 'outline';
export type Size = 'small' | 'medium' | 'large';

export interface OmniButtonProps {
  variant: Variant;
  size: Size;
  disabled: boolean;
  label: string;
}
