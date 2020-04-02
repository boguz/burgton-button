import { css } from 'lit-element';

export default css`
  :host([type='minus']) .line--top {
    top: 4px;
    animation: minus__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='minus'][active]) .line--top {
    animation: minus__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='minus']) .line--middle {
    top: 10px;
  }
  
  :host([type='minus']) .line--bottom {
    top: 16px;
    animation: minus__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='minus'][active]) .line--bottom {
    animation: minus__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes minus__line-top-animation--deactivate {
    0% {
      top: 10px;
    }
  
    100% {
      top: 4px;
    }
  }
  
  @keyframes minus__line-top-animation--activate {
    0% {
      top: 4px;
    }
  
    100% {
      top: 10px;
    }
  }
  
  @keyframes minus__line-bottom-animation--deactivate {
    0% {
      top: 10px;
    }
  
    100% {
      top: 16px;
    }
  }
  
  @keyframes minus__line-bottom-animation--activate {
    0% {
      top: 16px;
    }
  
    100% {
      top: 10px;
    }
  }
`;
