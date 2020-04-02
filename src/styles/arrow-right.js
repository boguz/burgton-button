import { css } from 'lit-element';

export default css`
  :host([type='arrow-right']) .line--top {
    top: 0;
    animation: arrow-right__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='arrow-right'][active]) .line--top {
    animation: arrow-right__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='arrow-right']) .line--middle {
    top: 10px;
  }
  
  :host([type='arrow-right']) .line--bottom {
    top: 20px;
    animation: arrow-right__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='arrow-right'][active]) .line--bottom {
    animation: arrow-right__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes arrow-right__line-top-animation--deactivate {
    0% {
      top: 2px;
      width: 14px;
      left: 8px;
      transform: rotate(45deg);
    }

    30% {
      top: 10px;
      width: 20px;
      left: 1px;
      transform: rotate(0deg);
    }

    60% {
      top: 10px;
    }

    100% {
      top: 4px;
      left: 1px;
    }
  }
  
  @keyframes arrow-right__line-top-animation--activate {
    0% {
      top: 4px;
      left: 1px;
    }

    30% {
      top: 10px;
    }

    60% {
      top: 10px;
      width: 20px;
      left: 1px;
      transform: rotate(0deg);
    }

    100% {
      top: 5px;
      width: 14px;
      left: 8px;
      transform: rotate(45deg);
    }
  }
  
  @keyframes arrow-right__line-bottom-animation--deactivate {
    0% {
      top: 15px;
      width: 14px;
      left: 8px;
      transform: rotate(-45deg);
    }
  
    30% {
      top: 10px;
      width: 16px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
    }
  
    100% {
      top: 16px;
      left: 1px;
    }
  }
  
  @keyframes arrow-right__line-bottom-animation--activate {
    0% {
      top: 16px;
      left: 1px;
    }
  
    30% {
      top: 10px;
    }
  
    60% {
      top: 10px;
      width: 16px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 15px;
      width: 14px;
      left: 8px;
      transform: rotate(-45deg);
    }
  }
`;
