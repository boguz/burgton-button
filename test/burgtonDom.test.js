import { html, fixture, expect } from '@open-wc/testing';
import BurgtonButton from '../index';

describe('Test BurgtonButton shadow DOM', () => {
  it('Exists', async () => {
    const el = (await fixture(html`<burgton-button></burgton-button>`));
    expect(el.type).to.exist;
  });

  it('Has correct shadowDOM', async () => {
    const el = (await fixture(html`<burgton-button></burgton-button>`));
    expect(el).shadowDom.to.equal(`
      <span class="line line--top"></span>
      <span class="line line--middle"></span>
      <span class="line line--bottom"></span>
    `);
  });
});
