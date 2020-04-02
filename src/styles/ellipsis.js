import { css } from 'lit-element';

export default css`
  :host([type='ellipsis']) .line--top {
    top: 0;
    animation: ellipsis__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='ellipsis'][active]) .line--top {
    animation: ellipsis__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='ellipsis']) .line--middle {
    top: 10px;
    animation: ellipsis__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='ellipsis'][active]) .line--middle {
    animation: ellipsis__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='ellipsis']) .line--bottom {
    top: 20px;
    animation: ellipsis__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='ellipsis'][active]) .line--bottom {
    animation: ellipsis__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes ellipsis__line-top-animation--deactivate {
    0% {
      top: 10px;
      left: 2px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    30% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    60% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    100% {
      top: 4px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
    }
  }
  
  @keyframes ellipsis__line-top-animation--activate {
    0% {
      top: 4px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
    }
  
    30% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    60% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    100% {
      top: 10px;
      left: 2px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  }
  
  @keyframes ellipsis__line-middle-animation--deactivate {
    0% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    30% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    60% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    100% {
      top: 10px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
    }
  }
  
  @keyframes ellipsis__line-middle-animation--activate {
    0% {
      top: 10px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
    }
  
    30% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    60% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    100% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  }
  
  @keyframes ellipsis__line-bottom-animation--deactivate {
    0% {
      top: 10px;
      left: 18px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    30% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    60% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    100% {
      top: 16px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
    }
  }
  
  @keyframes ellipsis__line-bottom-animation--activate {
    0% {
      top: 16px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
    }
  
    30% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    60% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    100% {
      top: 10px;
      left: 18px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  }
`;
