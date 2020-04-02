import { css } from 'lit-element';

export default css`
  :host([type='arrow-to-arrow']) .line--top {
    top: 4px;
    animation: arrow-to-arrow__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='arrow-to-arrow'][active]) .line--top {
    animation: arrow-to-arrow__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  
  :host([type='arrow-to-arrow']) .line--middle {
    top: 10px;
  }
  
  :host([type='arrow-to-arrow']) .line--bottom {
    top: 16px;
    animation: arrow-to-arrow__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='arrow-to-arrow'][active]) .line--bottom {
    animation: arrow-to-arrow__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes arrow-to-arrow__line-top-animation--deactivate {
    0% {
      top: 5px;
      width: 14px;
      left: 0;
      transform: rotate(-45deg);
    }
  
    30% {
      top: 10px;
      width: 20px;
      left: 1px;
      transform: rotate(0deg);
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
  
  @keyframes arrow-to-arrow__line-top-animation--activate {
    0% {
      top: 5px;
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
      width: 20px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 5px;
      width: 14px;
      left: 0;
      transform: rotate(-45deg);
    }
  }
  
  @keyframes arrow-to-arrow__line-bottom-animation--deactivate {
    0% {
      top: 15px;
      width: 14px;
      left: 0;
      transform: rotate(45deg);
    }
  
    30% {
      top: 10px;
      width: 16px;
      left: 1px;
      transform: rotate(0deg);
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
  
  @keyframes arrow-to-arrow__line-bottom-animation--activate {
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
      width: 16px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 15px;
      width: 14px;
      left: 0;
      transform: rotate(45deg);
    }
  }
`;
