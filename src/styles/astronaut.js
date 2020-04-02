import { css } from 'lit-element';

export default css`
  :host([type='astronaut']) .line--top {
    top: 4px;
    animation: astronaut__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
      
  :host([type='astronaut'][active]) .line--top {
    top: 4px;
    animation: astronaut__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='astronaut']) .line--middle {
    top: 10px;
    animation: astronaut__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='astronaut'][active]) .line--middle {
    top: 10px;
    animation: astronaut__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='astronaut']) .line--bottom {
    top: 16px;
    animation: astronaut__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='astronaut'][active]) .line--bottom {
    top: 16px;
    animation: astronaut__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
      
  @keyframes astronaut__line-top-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(-45deg);
      opacity: 1;
    }

    48% {
      top: 20px;
      transform: rotate(-45deg);
      opacity: 0;
    }

    52% {
      top: -6px;
      transform: rotate(0deg);
      opacity: 0;
    }

    100% {
      top: 4px;
      opacity: 1;
    }
  }

  @keyframes astronaut__line-top-animation--activate {
    0% {
      top: 4px;
      opacity: 1;
    }

    48% {
      top: -6px;
      opacity: 0;
      transform: rotate(0deg);
    }

    52% {
      top: 20px;
      transform: rotate(-45deg);
      opacity: 0;
    }

    100% {
      top: 10px;
      transform: rotate(-45deg);
      opacity: 1;
    }
  }
  
  @keyframes astronaut__line-middle-animation--deactivate {
    0% {
      top: 10px;
      opacity: 0;
    }

    48% {
      top: 20px;
    }

    52% {
      top: 0px;
      opacity: 0;
    }

    100% {
      top: 10px;
      opacity: 1;
    }
  }

  @keyframes astronaut__line-middle-animation--activate {
    0% {
      top: 10px;
      opacity: 1;
    }

    48% {
      top: 0px;
      opacity: 0;
    }

    52% {
      top: 20px;
    }

    100% {
      top: 10px;
      opacity: 0;
    }
  }
  
  @keyframes astronaut__line-bottom-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(45deg);
      opacity: 1;
    }

    48% {
      top: 20px;
      transform: rotate(45deg);
      opacity: 0;
    }

    52% {
      top: 6px;
      transform: rotate(0deg);
      opacity: 0;
    }

    100% {
      top: 16px;
      opacity: 1;
    }
  }

  @keyframes astronaut__line-bottom-animation--activate {
    0% {
      top: 16px;
      opacity: 1;
    }
  
    48% {
      top: 6px;
      transform: rotate(0deg);
      opacity: 0;
    }
  
    52% {
      top: 20px;
      transform: rotate(45deg);
      opacity: 0;
    }
  
    100% {
      top: 10px;
      transform: rotate(45deg);
      opacity: 1;
    }
  }
`;
