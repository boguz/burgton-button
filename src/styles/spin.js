import { css } from 'lit-element';

export default css`
  :host([type='spin']) .line--top {
    top: 0;
    animation: spin__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='spin'][active]) .line--top {
    animation: spin__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='spin']) .line--middle {
    top: 10px;
    animation: spin__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='spin'][active]) .line--middle {
    animation: spin__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='spin']) .line--bottom {
    top: 20px;
    animation: spin__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='spin'][active]) .line--bottom {
    animation: spin__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes spin__line-top-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(315deg);
    }
  
    100% {
      top: 4px;
      transform: rotate(0deg);
    }
  }
  
  @keyframes spin__line-top-animation--activate {
    0% {
      top: 4px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 10px;
      transform: rotate(315deg);
    }
  }
  
  @keyframes spin__line-middle-animation--deactivate {
    0% {
      opacity: 0;
      transform: rotate(360deg);
    }
  
    100% {
      opacity: 1;
      transform: rotate(0deg);
    }
  }
  
  @keyframes spin__line-middle-animation--activate {
    0% {
      opacity: 1;
      transform: rotate(0deg);
    }
  
    100% {
      opacity: 0;
      transform: rotate(360deg);
    }
  }
  
  @keyframes spin__line-bottom-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(405deg);
    }
  
    100% {
      top: 16px;
      transform: rotate(0deg);
    }
  }
  
  @keyframes spin__line-bottom-animation--activate {
    0% {
      top: 16px;
      transform: rotate(0deg);
    }
  
  100% {
      top: 10px;
      transform: rotate(405deg);
    }
  }
`;
