import { html, fixture, expect } from '@open-wc/testing';
import BurgtonButton from '../index';

describe('Test BurgtonButton Attributes', () => {
  it('Has "default" as default value for the type property', async () => {
    const el = (await fixture(html`<burgton-button></burgton-button>`));
    expect(el.type).to.equal('default');
  });

  it('Accepts valid values for the type property', async () => {
    const el = (await fixture(html`<burgton-button type="astronaut"></burgton-button>`));
    expect(el.type).to.equal('astronaut');
  });

  it('Reverts to "default" if type values is not valid', async () => {
    const el = (await fixture(html`<burgton-button type="banana"></burgton-button>`));
    expect(el.type).to.equal('default');
  });

});
