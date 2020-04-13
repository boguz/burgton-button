/* eslint max-len: 0 */

import { LitElement, html } from 'lit-element';
import styles from './styles/burgton-button-styles';

export default class BurgtonButton extends LitElement {
  static get is() { return 'burgton-button'; }

  static get styles() {
    return styles;
  }

  // eslint-disable-next-line class-methods-use-this
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
      // define which type of button we want to use
      type: { type: String },
      state: { type: Boolean },
      label: { type: String },
      labelPosition: { type: String },
      targetSelectors: { type: String },
      targetClasses: { type: String },
      debug: { type: Boolean },
      errors: { type: Array },
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
    if (value && !acceptedPositions.includes(value)) {
      this._addError(
        `The labelPosition '${value}' is not valid. Please choose "top", "bottom", "right" or "left".`,
        'invalid property',
        'labelPosition',
        `${value}`,
      );
    }
    this._labelPosition = value;
  }

  /**
   * Get value of labelPosition property
   */
  get labelPosition() {
    return this._labelPosition;
  }

  /**
   * Check vor valid values and set value of targetSelectors property
   */
  set targetSelectors(value) {
    if (value === '') {
      this._addError(
        'Looks like the "targetSelectors" attribute is empty.',
        'empty property',
        'targetSelectors',
        '-',
      );
      this._targetSelectors = null;
      return;
    }

    if (value.length > 0) {
      const targetSelectors = this.getAttribute('targetSelectors').split(',').map((item) => item.trim());
      targetSelectors.forEach((targetSelector) => {
        if (!document.querySelector(targetSelector)) {
          this._addError(
            `Looks like we could not find the ${targetSelector} element you were looking for.`,
            'invalid selector',
            'targetSelectors',
            `${targetSelector}`,
          );
          this._targetSelectors = null;
        } else {
          this._targetSelectors = value;
        }
      });
    }

    if (this._targetSelectors && this._targetClasses) {
      if (this._targetSelectors.length !== this._targetClasses.length) {
        this._addError(
          'The number of selectors in the "targetSelectors" property does not match the number of classes in the "targetClasses" attribute.',
          'not matched properties',
          'targetSelectors / targetClasses',
          `${this._targetSelectors.length} / ${this._targetClasses.length}`,
        );
      }
    }
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
    if (value === '') {
      this._addError(
        'Looks like the "targetClasses" attribute is empty.',
        'empty property',
        'targetClasses',
        '-',
      );
      this._targetClasses = null;
    } else {
      this._targetClasses = value;
    }
  }

  /**
   * Get value of targetClasses property
   */
  get targetClasses() {
    return this._targetClasses;
  }

  constructor() {
    super();

    this.errors = [];
    this.type = 'default';
    this.state = false;
    this.label = null;
    this.labelPosition = null;
    this.debug = false;
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
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._handleClick);

    // eslint-disable-next-line no-unused-expressions
    this.debug && this._logDebug();

    this.addEventListener('click', this._toggleTargetClasses);
  }

  // eslint-disable-next-line no-unused-vars
  attributeChangedCallback(name, old, value) {
    if (name === 'type' && !this.acceptedTypes.includes(value)) {
      this._addError(
        `The type '${value}' in not a valid. Reverting back to 'default'.`,
        'invalid property',
        'type',
        `${value}`,
      );
      this.type = 'default';
    } else {
      super.attributeChangedCallback(name, old, value);
    }
  }

  /**
   * @private
   * Handle click on the burgton-button element
   *    1. toggle state
   *
   */
  _handleClick() {
    this.toggleState();
    this._dispatchEvent('burgton-button-click');
  }

  /**
   * @private
   * Show debug information
   *    1. Burgton button element
   *    2. Burgton button properties
   *    3. Burgton button error
   */
  _logDebug() {
    console.group('%c===== BURGTON BUTTON DEBUGGER INFO =====', 'background-color: coral; color: white; padding: .5rem 1rem; .25rem;');

    console.groupCollapsed('1. BURGTON BUTTON ELEMENT:');
    console.log(this); // eslint-disable-line no-console
    console.groupEnd();

    console.groupCollapsed('2. BURGTON BUTTON PROPERTIES:');
    console.table({
      type: this.type,
      label: this.label,
      labelPosition: this.labelPosition,
    });
    console.groupEnd();

    console.groupCollapsed('3. BURGTON BUTTON ERRORS:');
    if (this.errors.length > 0) {
      console.log(`%c${this.errors.length} errors found! 💣`, 'color: crimson; font-weight: bold;'); // eslint-disable-line no-console
      console.table(this.errors);
    } else {
      console.log('%cNo errors found! 👍', 'color: seagreen; font-weight: bold;'); // eslint-disable-line no-console
    }
    console.groupEnd();

    console.groupCollapsed('4. BURGTON BUTTON INFORMATION:');
    console.log('Github: https://github.com/boguz/burgton-button'); // eslint-disable-line no-console
    console.log('https://boguz.github.io/burgton-button-docs/'); // eslint-disable-line no-console
    console.groupEnd();

    console.groupEnd();
  }

  /**
   * @private
   * Toggle target classes on defined target elements
   */
  _toggleTargetClasses() {
    const targetSelectors = this.getAttribute('targetSelectors').split(',').map((item) => item.trim());
    const targetClasses = this.getAttribute('targetClasses').split(',').map((item) => item.trim());

    if (!this._targetSelectors || !this._targetClasses) {
      console.warn('BURGTON BUTTON - Ooops, something went wrong:\n\nCould not toggle the target classes. Check the console or turn on the debug mode for more information.');
      return;
    }

    targetSelectors.forEach((targetSelector, index) => {
      document.querySelector(targetSelector).classList.toggle(targetClasses[index]);
    });
  }

  /**
   * @private
   * Display warning on the console and add error to the errors array
   */
  _addError(errorMessage, errorType, errorProperty, errorValue) {
    console.warn(`BURGTON BUTTON - Ooops, something went wrong:\n\n${errorMessage}`);
    this.errors.push([errorType, errorProperty, errorValue]);
  }

  /**
   *
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
