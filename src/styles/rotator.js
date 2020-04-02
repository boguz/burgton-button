import { css } from 'lit-element';

export default css`
  :host([type='rotator']) .line--top {
    top: 4px;
    animation: rotator__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='rotator'][active]) .line--top {
    animation: rotator__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='rotator']) .line--middle {
    top: 10px;
    animation: rotator__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='rotator'][active]) .line--middle {
    animation: rotator__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='rotator']) .line--bottom {
    top: 16px;
    animation: rotator__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='rotator'][active]) .line--bottom {
    animation: rotator__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes rotator__line-top-animation--deactivate {
    0% {
      transform: rotate(315deg);
      top: 10px;
    }
  
    40%,
    70% {
      transform: rotate(180deg);
      top: 10px;
    }
  
    100% {
      transform: rotate(0);
      top: 4px;
    }
  }
  
  @keyframes rotator__line-top-animation--activate {
    0% {
      transform: rotate(0);
      top: 4px;
    }
  
    30%,
    60% {
      transform: rotate(180deg);
      top: 10px;
    }
  
    100% {
      transform: rotate(315deg);
      top: 10px;
    }
  }
  
  @keyframes rotator__line-middle-animation--deactivate {
    0%,
    40% {
      opacity: 0;
    }
  
    70% {
      transform: rotate(180deg);
      opacity: 0;
    }
  
    100% {
      transform: rotate(0)
    }
  }
  
  @keyframes rotator__line-middle-animation--activate {
    0% {
      transform: rotate(0)
    }
  
    30% {
      transform: rotate(180deg);
      opacity: 0;
    }
  
    60%,
    100% {
      opacity: 0;
    }
  }
  
  @keyframes rotator__line-bottom-animation--deactivate {
    0% {
      transform: rotate(405deg);
      top: 10px;
    }
  
    40%,
    70% {
      top: 10px;
      transform: rotate(180deg);
    }
  
    100% {
      transform: rotate(0);
      top: 16px;
    }
  }
  
  @keyframes rotator__line-bottom-animation--activate {
    0% {
      transform: rotate(0);
      top: 16px;
    }
  
    30%,
    60% {
      top: 10px;
      transform: rotate(180deg);
    }
  
    100% {
      transform: rotate(405deg);
      top: 10px;
    }
  }
`;
