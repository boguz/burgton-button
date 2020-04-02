import { css } from 'lit-element';

export default css`
  :host([type='async']) .line--top {
    top: 4px;
    animation: async__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='async'][active]) .line--top {
        animation: async__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='async']) .line--middle {
    top: 10px;
    animation: async__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='async'][active]) .line--middle {
    animation: async__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='async']) .line--bottom {
    top: 16px;
    animation: async__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='async'][active]) .line--bottom {
    animation: async__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes async__line-top-animation--deactivate {
    0% {
      width: 20px;
      top: 10px;
      transform: rotate(-45deg);
    }
  
    20%,
    80% {
      width: 0;
    }
  
    100% {
      width: 20px;
    }
  }
  
  @keyframes async__line-top-animation--activate {
    0% {
      width: 20px;
    }
  
    20%,
    80% {
      width: 0;
    }
    
    100% {
      width: 20px;
      top: 10px;
      transform: rotate(-45deg);
    }
  }
  
  @keyframes async__line-middle-animation--deactivate {
    0%,
    60% {
      width: 0;
    }
  
    80%,
    100% {
      width: 20px;
    }
  }
  
  @keyframes async__line-middle-animation--activate {
    0%,
    20% {
      width: 20px;
    }
  
    40%,
    100% {
      width: 0;
    }
  }
  
  @keyframes async__line-bottom-animation--deactivate {
    0% {
      width: 20px;
      top: 10px;
      transform: rotate(45deg);
    }
  
    20%,
    40% {
      width: 0;
      top: 20px;
      transform: rotate(0deg);
    }
  
    60%,
    100% {
      width: 20px;
    }
  }
  
  @keyframes async__line-bottom-animation--activate {
    0%,
    40% {
      width: 20px;
    }
  
    60%,
    80% {
      width: 0;
      top: 20px;
      transform: rotate(0deg);
    }
  
    100% {
      width: 20px;
      top: 10px;
      transform: rotate(45deg);
    }
  }
`;
