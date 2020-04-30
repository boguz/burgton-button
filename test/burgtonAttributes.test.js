import { html, fixture, expect } from '@open-wc/testing';
import BurgtonButton from '../index';

describe('Test type attribute', () => {
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

describe('Test label attributes', () => {
  it('No default label value', async () => {
    const el = (await fixture(html`<burgton-button></burgton-button>`));
    expect(el.label).to.be.null;
  });

  it('Can add custom label', async () => {
    const el = (await fixture(html`<burgton-button label="Menu"></burgton-button>`));
    expect(el.label).to.equal('Menu');
  });

  it('Accepts "top" as labelPosition', async () => {
    const el = (await fixture(html`<burgton-button labelPosition="top"></burgton-button>`));
    expect(el.labelPosition).to.equal('top');
  });

  it('Accepts "bottom" as labelPosition', async () => {
    const el = (await fixture(html`<burgton-button labelPosition="bottom"></burgton-button>`));
    expect(el.labelPosition).to.equal('bottom');
  });

  it('Accepts "right" as labelPosition', async () => {
    const el = (await fixture(html`<burgton-button labelPosition="right"></burgton-button>`));
    expect(el.labelPosition).to.equal('right');
  });

  it('Accepts "left" as labelPosition', async () => {
    const el = (await fixture(html`<burgton-button labelPosition="left"></burgton-button>`));
    expect(el.labelPosition).to.equal('left');
  });

  it('Invalid labelPosition value defaults to "bottom"', async () => {
    const el = (await fixture(html`<burgton-button labelPosition="banana"></burgton-button>`));
    expect(el.labelPosition).to.equal('bottom');
  });
});

describe('Test target selectors', () => {
  it('No default target selectors', async () => {
    const el = (await fixture(html`<burgton-button></burgton-button>`));
    expect(el.targetSelectors).to.be.undefined;
  });

  it('Can add single target selector', async () => {
    const el = (await fixture(html`<burgton-button targetSelectors="#testID"></burgton-button>`));
    expect(el.targetSelectors).to.equal('#testID');
  });

  it('Can add multiple target selectors', async () => {
    const el = (await fixture(html`<burgton-button targetSelectors="#testIDOne, #testIDTwo"></burgton-button>`));
    expect(el.targetSelectors).to.equal('#testIDOne, #testIDTwo');
  });
});

describe('Test target classes', () => {
  it('No default target classes', async () => {
    const el = (await fixture(html`<burgton-button></burgton-button>`));
    expect(el.targetClasses).to.be.undefined;
  });

  it('Can add single target class', async () => {
    const el = (await fixture(html`<burgton-button targetClasses="active"></burgton-button>`));
    expect(el.targetClasses).to.equal('active');
  });

  it('Can add multiple target classes', async () => {
    const el = (await fixture(html`<burgton-button targetClasses="active, open"></burgton-button>`));
    expect(el.targetClasses).to.equal('active, open');
  });
});

describe('Test description attribute', () => {
  it('Default description value is "Menu button"', async () => {
    const el = (await fixture(html`<burgton-button></burgton-button>`));
    expect(el.description).to.equal('Menu button');
  });

  it('Can add new description', async () => {
    const el = (await fixture(html`<burgton-button description="test description"></burgton-button>`));
    expect(el.description).to.equal('test description');
  });

  it('Empty description property defaults to "Menu Button"', async () => {
    const el = (await fixture(html`<burgton-button description=""></burgton-button>`));
    expect(el.description).to.equal('Menu button');
  });
});

describe('Test noAnimation attribute', () => {
  it('Default animation duration is 500ms', async () => {
    const el = (await fixture(html`<burgton-button></burgton-button>`));
    const style = window.getComputedStyle(el);
    const animationDuration = style.getPropertyValue('--burgton-button-animation-duration').trim();
    expect(animationDuration).to.equal('500ms');
  });
});

describe('Test state attributes', () => {
  it('Default state value if false', async () => {
    const el = (await fixture(html`<burgton-button></burgton-button>`));
    expect(el.state).to.equal(false);
  });
});


