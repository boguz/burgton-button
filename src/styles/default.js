import { css } from 'lit-element';

export default css`
  :host([type='default']) .line--top {
    top: 4px;
    animation: default__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
      
  :host([type='default'][active]) .line--top {
    top: 4px;
    animation: default__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='default']) .line--middle {
    top: 10px;
    animation: default__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='default'][active]) .line--middle {
    top: 10px;
    animation: default__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='default']) .line--bottom {
    top: 16px;
    animation: default__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='default'][active]) .line--bottom {
    top: 16px;
    animation: default__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
      
  @keyframes default__line-top-animation--deactivate {
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

  @keyframes default__line-top-animation--activate {
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
  
  @keyframes default__line-middle-animation--deactivate {
    0% {
      opacity: 0;
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

  @keyframes default__line-middle-animation--activate {
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
      opacity: 0;
    }
  }
  
  @keyframes default__line-bottom-animation--deactivate {
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

  @keyframes default__line-bottom-animation--activate {
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
