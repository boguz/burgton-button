import { html, fixture, expect } from '@open-wc/testing';
import BurgtonButton from '../index';

describe('Test public methods', () => {
  it('toggleState changes from false to true', async () => {
    const el = (await fixture(html`<burgton-button></burgton-button>`));
    el.toggleState();
    expect(el.state).to.equal(true);
  });

  it('toggleState toggles between true', async () => {
    const el = (await fixture(html`<burgton-button></burgton-button>`));
    el.toggleState();
    el.toggleState();
    el.toggleState();
    el.toggleState();
    expect(el.state).to.equal(false);
  });

  it('activate changes state to true', async () => {
    const el = (await fixture(html`<burgton-button></burgton-button>`));
    el.activate();
    expect(el.state).to.equal(true);
  });

  it('deactivate changes state to false', async () => {
    const el = (await fixture(html`<burgton-button></burgton-button>`));
    el.state = true;
    el.deactivate();
    expect(el.state).to.equal(false);
  });
});
