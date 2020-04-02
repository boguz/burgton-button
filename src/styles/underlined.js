import { css } from 'lit-element';

export default css`
  :host([type='underlined']) .line--top {
    top: 4px;
    animation: underlined__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='underlined'][active]) .line--top {
    animation: underlined__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='underlined']) .line--middle {
    top: 10px;
    animation: underlined__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='underlined'][active]) .line--middle {
    animation: underlined__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='underlined']) .line--bottom {
    top: 16px;
    animation: underlined__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='underlined'][active]) .line--bottom {
    animation: underlined__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes underlined__line-top-animation--deactivate {
    0% {
      width: 20px;
      top: 4px;
      left: 1px;
      transform: rotate(-135deg);
    }
  
    100% {
      transform: rotate(0deg);
    }
  }
  
  @keyframes underlined__line-top-animation--activate {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      width: 20px;
      top: 4px;
      left: 1px;
      transform: rotate(-135deg);
    }
  }
  
  @keyframes underlined__line-middle-animation--deactivate {
    0% {
      width: 20px;
      transform: rotate(135deg);
      top: 4px;
      left: 1px;
    }
  
    100% {
      transform: rotate(0deg);
      top: 10px;
    }
  }
  
  @keyframes underlined__line-middle-animation--activate {
    0% {
      transform: rotate(0deg);
      top: 10px;
    }
  
    100% {
      width: 20px;
      transform: rotate(135deg);
      top: 4px;
      left: 1px;
    }
  }
  
  @keyframes underlined__line-bottom-animation--deactivate {
    0% {
      width: 20px;
      left: 1px;
    }
  
    100% {
      width: 20px;
      left: 1px;
    }
  }
  
  @keyframes underlined__line-bottom-animation--activate {
    0% {
      width: 20px;
      left: 1px;
    }
  
    100% {
      width: 20px;
      left: 1px;
    }
  }
`;
