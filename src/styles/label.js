import { css } from 'lit-element';

export default css`
  .label {
    position: absolute;
    font-size: var(--burgton-button-label-font-size);
    color: var(--burgton-button-label-font-color);
    font-weight: var(--burgton-button-label-font-weight);
    text-transform: var(--burgton-button-label-text-transform);
  }
  
  :host([active]) .label {
    color: var(--burgton-button-label-font-color-active);
  }
  
  :host([labelPosition='bottom']) .label {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  :host([labelPosition='top']) .label {
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
  }
  
  :host([labelPosition='left']) .label {
    top: 50%;
    transform: translate(-100%, -50%);
    left: -5px;
  }
  
  :host([labelPosition='right']) .label {
    top: 50%;
    transform: translateY(-50%);
    left: calc(100% + 3px);
  }
`;
