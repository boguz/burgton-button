import { html, fixture, expect } from '@open-wc/testing';
import BurgtonButton from '../index';

describe('Test Accessibility', () => {
  it('Default description is added as "aria-label"', async () => {
    const el = (await fixture(html`<burgton-button></burgton-button>`));
    expect(el.getAttribute('aria-label')).to.equal('Menu button');
  });

  it('Custom description is added as "aria-label"', async () => {
    const el = (await fixture(html`<burgton-button description="test description"></burgton-button>`));
    expect(el.getAttribute('aria-label')).to.equal('test description');
  });

  it('Label overwrites description value for the "aria-label" attribute', async () => {
    const el = (await fixture(html`<burgton-button label="test label"></burgton-button>`));
    expect(el.getAttribute('aria-label')).to.equal('test label');
  });
});
