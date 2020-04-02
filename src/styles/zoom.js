import { css } from 'lit-element';

export default css`
  :host([type='zoom']) .line--top {
    top: 4px;
    animation: zoom__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='zoom'][active]) .line--top {
    animation: zoom__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='zoom']) .line--middle {
    top: 10px;
    animation: zoom__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='zoom'][active]) .line--middle {
    animation: zoom__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='zoom']) .line--bottom {
    top: 16px;
    animation: zoom__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='zoom'][active]) .line--bottom {
    animation: zoom__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes zoom__line-top-animation--deactivate {
    0% {
      top: 10px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(45deg);
    }
  
    30% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      transform: rotate(45deg);
    }
  
    60% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 1px;
      border-radius: 3px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 4px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(0deg);
    }
  }
  
  @keyframes zoom__line-top-animation--activate {
    0% {
      top: 4px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(0deg);
    }
  
    30% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 1px;
      border-radius: 3px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      transform: rotate(45deg);
    }
  
    100% {
      top: 10px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(45deg);
    }
  }
  
  @keyframes zoom__line-middle-animation--deactivate {
    0%,
    60% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      opacity: 0;
    }
  
    100% {
      top: 10px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      opacity: 1;
    }
  }
  
  @keyframes zoom__line-middle-animation--activate {
    0% {
      top: 10px;
      left: 1xp;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      opacity: 1;
    }
  
    30%,
    100% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      opacity: 0;
    }
  }
  
  @keyframes zoom__line-bottom-animation--deactivate {
    0% {
      top: 10px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(-45deg);
    }
  
    30% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      transform: rotate(-45deg);
    }
  
    60% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 16px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(0deg);
    }
  }
  
  @keyframes zoom__line-bottom-animation--activate {
    0% {
      top: 16px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(0deg);
    }
  
    30% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      transform: rotate(-45deg);
    }
  
    100% {
      top: 10px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(-45deg);
    }
  }
`;
