import { css } from 'lit-element';

export default css`
  :host([type='vertical-rotator']) .line--top {
    top: 4px;
    animation: vertical-rotator__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='vertical-rotator'][active]) .line--top {
    animation: vertical-rotator__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='vertical-rotator']) .line--middle {
    top: 10px;
    animation: vertical-rotator__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='vertical-rotator'][active]) .line--middle {
    animation: vertical-rotator__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='vertical-rotator']) .line--bottom {
    top: 16px;
    animation: vertical-rotator__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='vertical-rotator'][active]) .line--bottom {
    animation: vertical-rotator__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes vertical-rotator__line-top-animation--deactivate {
    0% {
      transform: rotate(135deg);
      top: 9px;
    }
  
    40%,
    70% {
      transform: rotate(90deg);
      top: 9px;
    }
  
    100% {
      transform: rotate(0);
      top: 4px;
    }
  }
  
  @keyframes vertical-rotator__line-top-animation--activate {
    0% {
      transform: rotate(0);
      top: 4px;
    }
  
    30%,
    60% {
      transform: rotate(90deg);
      top: 9px;
      color: red;
    }
  
    100% {
      transform: rotate(135deg);
      top: 9px;
    }
  }
  
  @keyframes vertical-rotator__line-middle-animation--deactivate {
    0%,
    40% {
      opacity: 0;
    }
  
    70% {
      transform: rotate(90deg);
      opacity: 0;
    }
  
    100% {
      transform: rotate(0)
    }
  }
  
  @keyframes vertical-rotator__line-middle-animation--activate {
    0% {
      transform: rotate(0)
    }
  
    30% {
      transform: rotate(90deg);
      opacity: 0;
    }
  
    60%,
    100% {
      opacity: 0;
    }
  }
  
  @keyframes vertical-rotator__line-bottom-animation--deactivate {
    0% {
      transform: rotate(225deg);
      top: 9px;
    }
  
    40%,
    70% {
      top: 9px;
      transform: rotate(90deg);
    }
  
    100% {
      transform: rotate(0);
      top: 16px;
    }
  }
  
  @keyframes vertical-rotator__line-bottom-animation--activate {
    0% {
      transform: rotate(0);
      top: 16px;
    }
  
    30%,
    60% {
      top: 9px;
      transform: rotate(90deg);
    }
  
    100% {
      transform: rotate(225deg);
      top: 9px;
    }
  }
`;
