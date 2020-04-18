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

  it('Accepts valid "top" as labelPosition', async () => {
    const el = (await fixture(html`<burgton-button labelPosition="top"></burgton-button>`));
    expect(el.labelPosition).to.equal('top');
  });

  it('Accepts valid "bottom" as labelPosition', async () => {
    const el = (await fixture(html`<burgton-button labelPosition="bottom"></burgton-button>`));
    expect(el.labelPosition).to.equal('bottom');
  });

  it('Accepts valid "right" as labelPosition', async () => {
    const el = (await fixture(html`<burgton-button labelPosition="right"></burgton-button>`));
    expect(el.labelPosition).to.equal('right');
  });

  it('Accepts valid "left" as labelPosition', async () => {
    const el = (await fixture(html`<burgton-button labelPosition="left"></burgton-button>`));
    expect(el.labelPosition).to.equal('left');
  });

  it('Invalid labelPosition value defaults to "bottom"', async () => {
    const el = (await fixture(html`<burgton-button labelPosition="banana"></burgton-button>`));
    expect(el.labelPosition).to.equal('bottom');
  });
});
