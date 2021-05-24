import { html, css, LitElement } from 'lit-element';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property() message = 'Learn LitElement';

  static get styles() {
    return css`
      h1 {
        font-size: 4rem;
      }
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        font-size: 24px;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        <h1>Frisch verbrunnert</h1>
       
      </div>
    `;
  }
}
