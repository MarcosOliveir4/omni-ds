import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
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

  render() {
    const btnClasses = {
      [this.variant]: true,
      [this.size]: true,
    };

    return html`
      <button
        class=${classMap(btnClasses)}
        ?disabled=${this.disabled}
        part="base"
      >
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
