import { css } from 'lit-element';

export default css`
  :host([type='fall-down']) .line--top {
    top: 0;
    animation: fall-down__line-top-animation--deactivate  var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='fall-down'][active]) .line--top {
    animation: fall-down__line-top-animation--activate  var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='fall-down']) .line--middle {
    top: 10px;
    animation: fall-down__line-middle-animation--deactivate .var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='fall-down'][active]) .line--middle {
    animation: fall-down__line-middle-animation--activate  var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='fall-down']) .line--bottom {
    top: 20px;
    animation: fall-down__line-bottom-animation--deactivate  var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='fall-down'][active]) .line--bottom {
    animation: fall-down__line-bottom-animation--activate  var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes fall-down__line-top-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(-45deg);
    }
  
    30% {
      top: 16px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 16px;
    }
  
    100% {
      top: 4px;
    }
  }
  
  @keyframes fall-down__line-top-animation--activate {
    0% {
      top: 4px;
    }
  
    30% {
      top: 16px;
    }
  
    60% {
      top: 16px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 10px;
      transform: rotate(-45deg);
    }
  }
  
  @keyframes fall-down__line-middle-animation--deactivate {
    0% {
      opacity: 0;
    }
  
    30% {
      top: 16px;
      opacity: 0;
    }
  
    60% {
      top: 16px;
      opacity: 1;
    }
  
    100% {
      top: 10px;
      opacity: 1;
    }
  }
  
  @keyframes fall-down__line-middle-animation--activate {
    0% {
      top: 10px;
      opacity: 1;
    }
  
    30% {
      top: 16px;
      opacity: 1;
    }
  
    60% {
      top: 16px;
      opacity: 0;
    }
  
    100% {
      opacity: 0;
    }
  }
  
  @keyframes fall-down__line-bottom-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(45deg);
    }
  
    30% {
      top: 16px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 16px;
    }
  
    100% {
      top: 16px;
    }
  }
  
  @keyframes fall-down__line-bottom-animation--activate {
    0% {
      top: 16px;
    }
  
    30% {
      top: 16px;
    }
  
    60% {
      top: 16px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 10px;
      transform: rotate(45deg);
    }
  }
`;
