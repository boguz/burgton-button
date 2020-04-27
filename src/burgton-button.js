/* eslint max-len: 0 */

import { LitElement, html } from 'lit-element';
import styles from './styles/burgton-button-styles';
import 'focus-visible/dist/focus-visible';

export default class BurgtonButton extends LitElement {
  static get is() { return 'burgton-button'; }

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <span class="line line--top"></span>
      <span class="line line--middle"></span>
      <span class="line line--bottom"></span>
      ${this.label ? html`<span class="label">${this.label}</span>` : ''}
    `;
  }

  static get properties() {
    return {
      type: { type: String },
      state: { type: Boolean },
      label: { type: String },
      labelPosition: { type: String },
      targetSelectors: { type: String },
      targetClasses: { type: String },
      description: { type: String },
    };
  }

  /**
   * Set or remove 'active' attribute according to the value of the this.state property
   * @param value
   */
  set state(value) {
    this._state = value;
    // eslint-disable-next-line no-unused-expressions
    this._state ? this.setAttribute('active', '') : this.removeAttribute('active');
    this.setAttribute('aria-pressed', this._state);
    this._toggleTargetClasses();
    this._dispatchEvent('burgton-button-state-change');
  }

  /**
   * Get correct value for the state property
   */
  get state() {
    return this._state;
  }

  /**
   * Set the button type
   * @param value
   */
  set type(value) {
    this._type = value;
    this.setAttribute('type', this._type);
  }

  /**
   * Get value of type property
   */
  get type() {
    return this._type;
  }

  /**
   * Add warning if labelPosition property has an invalid value
   */
  set labelPosition(value) {
    const acceptedPositions = ['top', 'bottom', 'right', 'left'];
    if ((value && !acceptedPositions.includes(value)) || value === '') {
      this._logError(`"${value}" is not a valid labelPosition value`);
      this.setAttribute('labelPosition', 'bottom');
      this._labelPosition = 'bottom';
    } else {
      this._labelPosition = value;
    }
  }

  /**
   * Get value of labelPosition property
   */
  get labelPosition() {
    return this._labelPosition;
  }

  set targetSelectors(value) {
    this._targetSelectors = value;
  }

  /**
   * Get value of targetSelectors property
   */
  get targetSelectors() {
    return this._targetSelectors;
  }

  /**
   * Check if not empty and set value of targetClasses property
   */
  set targetClasses(value) {
    this._targetClasses = value;
  }

  /**
   * Get value of targetClasses property
   */
  get targetClasses() {
    return this._targetClasses;
  }

  /**
   * Set the 'aria-label' attribute.
   * This attribute is used by screen readers to 'describe' the element
   */
  set description(value) {
    const validValue = value.length > 0 ? value : 'Menu button';
    this._description = this.label ? this.label : validValue;
    this.setAttribute('aria-label', this._description);
  }

  /**
   * Get value of description property
   */
  get description() {
    return this._description;
  }

  set label(value) {
    this._label = value;
    this.setAttribute('aria-label', this._label);
  }

  get label() {
    return this._label;
  }

  constructor() {
    super();

    this.type = 'default';
    this.state = false;
    this.label = null;
    this.labelPosition = 'bottom';
    this.description = 'Menu button';
    this.acceptedTypes = [
      'default',
      'arrow-left',
      'arrow-right',
      'arrow-to-arrow',
      'astronaut',
      'async',
      'crossed',
      'ellipsis',
      'fall-down',
      'minus',
      'rotator',
      'spin',
      'underlined',
      'vertical-rotator',
      'zoom',
    ];

    this.addA11yFeatures();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._handleClick);
    this.addEventListener('keydown', this._handleKeyPressed);
  }

  // eslint-disable-next-line no-unused-vars
  attributeChangedCallback(name, old, value) {
    if (name === 'type' && !this.acceptedTypes.includes(value)) {
      this._logError(`"${value}" is not a valid type value`);
      this.type = 'default';
    } else {
      super.attributeChangedCallback(name, old, value);
    }
  }

  /**
   * To improve accessibility we need to add some attributes to the element
   * so it is seen as a 'button' also by screen readers
   */
  addA11yFeatures() {
    this.setAttribute('role', 'button');
    this.setAttribute('aria-pressed', false);
    this.tabIndex = 0;
    this.setAttribute('aria-haspopup', 'menu');
  }

  /**
   * @private
   * Handle click on the burgton-button element
   *    1. toggle state
   */
  _handleClick() {
    this.toggleState();
    this._dispatchEvent('burgton-button-click');
  }

  /**
   * Handle key press when the burgton-button is focused
   * This is a functionality of the native <button> element.
   * @param event
   * @private
   */
  _handleKeyPressed(event) {
    if (event.key === ' ' || event.key === 'Enter' || event.key === 'Spacebar') {
      event.preventDefault();
      this._handleClick();
    }
  }

  /**
   * @private
   * Toggle target classes on defined target elements
   */
  _toggleTargetClasses() {
    if (this._targetSelectors && this._targetClasses) {
      const targetsCollection = this.getAttribute('targetSelectors').split(',').map((item) => item.trim());
      const classesCollection = this.getAttribute('targetClasses').split(',').map((item) => item.trim());

      if (targetsCollection.length !== classesCollection.length) {
        this._logError(`The number of target selectors (${targetsCollection.length}) does not match the number of target classes (${classesCollection.length}), so to prevent errors the selector toggle will be disabled. Make sure the number of targetSelectors and targetClasses match.`);
        return;
      }
      targetsCollection.forEach((targetsElement, index) => {
        document.querySelector(targetsElement).classList.toggle(classesCollection[index]);
      });
    }
  }

  /**
   * @param eventName
   * @private
   * Dispatch custom events so other elements can react to them
   */
  _dispatchEvent(eventName) {
    const newEvent = new CustomEvent(eventName, {
      bubbles: true,
      composed: true,
      detail: {
        state: this.state,
      },
    });
    this.dispatchEvent(newEvent);
  }

  /**
   * @param error
   * @private
   * Print error on the console and show link to documentation
   */
  _logError(error) {
    console.error(`BURGTON BUTTON ERROR: ${error}`);
    // eslint-disable-next-line no-console
    console.info('You can find the documentation for the burgton button here: https://boguz.github.io/burgton-button-docs/');
  }

  /**
   * @public
   * Toggle the button state
   */
  toggleState() {
    this.state = !this.hasAttribute('active');
  }

  /**
   * @public
   * Change state to true to activate the button
   */
  activate() {
    this.state = true;
    this._dispatchEvent('burgton-button-activate');
  }

  /**
   * @public
   * Change state to false to deactivate the button
   */
  deactivate() {
    this.state = false;
    this._dispatchEvent('burgton-button-deactivate');
  }
}
