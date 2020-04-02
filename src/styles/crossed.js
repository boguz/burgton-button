import { css } from 'lit-element';

export default css`
  :host([type='crossed']) .line--top {
    top: 0;
    animation: crossed__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='crossed'][active]) .line--top {
    animation: crossed__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='crossed']) .line--middle {
    top: 10px;
    animation: crossed__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='crossed'][active]) .line--middle {
    animation: crossed__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='crossed']) .line--bottom {
    top: 20px;
    animation: crossed__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='crossed'][active]) .line--bottom {
    animation: crossed__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes crossed__line-top-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(-45deg);
    }
  
    30% {
      top: 10px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
    }
  
    100% {
      top: 4px;
    }
  }
  
  @keyframes crossed__line-top-animation--activate {
    0% {
      top: 4px;
    }
  
    30% {
      top: 10px;
    }
  
    60% {
      top: 10px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 10px;
      transform: rotate(-45deg);
    }
  }
  
  @keyframes crossed__line-middle-animation--deactivate {
    0% {
      opacity: 1;
    }
  
    30% {
      opacity: 0;
    }
  
    60% {
      opacity: 1;
    }
  
    100% {
      opacity: 1;
    }
  }
  
  @keyframes crossed__line-middle-animation--activate {
    0% {
      opacity: 1;
    }
  
    30% {
      opacity: 1;
    }
  
    60% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  }
  
  @keyframes crossed__line-bottom-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(45deg);
    }
  
    30% {
      top: 10px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
    }
  
    100% {
      top: 16px;
    }
  }
  
  @keyframes crossed__line-bottom-animation--activate {
    0% {
      top: 16px;
    }
  
    30% {
      top: 10px;
    }
  
    60% {
      top: 10px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 10px;
      transform: rotate(45deg);
    }
  }
`;
