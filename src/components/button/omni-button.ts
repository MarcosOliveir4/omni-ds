import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Size, Variant } from './model';
import buttonStyles from './omni-button.scss?inline';

@customElement('omni-button')
export class OmniButton extends LitElement {
  static styles = unsafeCSS(buttonStyles);

  @property({ type: String })
  variant: Variant = 'primary';

  @property({ type: String })
  size: Size = 'medium';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Function })
  onClick?: (event: MouseEvent) => void;

  constructor() {
    super();
    this.addEventListener(
      'click',
      (event) => {
        if (this.disabled) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
        }
      },
      { capture: true },
    );
  }

  render() {
    return html`
      <button class=${this.variant} ?disabled=${this.disabled} part="base">
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'omni-button': OmniButton;
  }
}
