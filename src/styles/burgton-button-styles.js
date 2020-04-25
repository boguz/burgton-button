import {css} from 'lit-element';
import defaultStyles from './default';
import arrowLeftStyles from './arrow-left';
import arrowRightStyles from './arrow-right';
import astronautStyles from './astronaut';
import asyncStyles from './async';
import crossedStyles from './crossed';
import ellipsisStyles from './ellipsis';
import fallDownStyles from './fall-down';
import minusStyles from './minus';
import rotatorStyles from './rotator';
import spinStyles from './spin';
import underlinedStyles from './underlined';
import verticalRotatorStyles from './vertical-rotator';
import zoomStyles from './zoom';
import arrowToArrow from './arrow-to-arrow';

import labelStyles from './label';

export default css`
      :host {
        box-sizing: border-box;
        position: relative;
        cursor: pointer;
        height: 24px;
        width: 24px;
        transform: scale(var(--burgton-button-scale));
        
        --burgton-button-default-line-color: #66cc99;
        
        --burgton-button-border-radius: 0px;
        --burgton-button-line-color: var(--burgton-button-default-line-color);
        --burgton-button-line-color-active: var(--burgton-button-line-color);
        --burgton-button-animation-duration: 500ms;
        --burgton-button-animation-delay: 0s;
        --burgton-button-easing: ease-in-out;
        --burgton-button-scale: 1;
        
        --burgton-button-label-font-size: 14px;
        --burgton-button-label-font-color: #999999;
        --burgton-button-label-font-color-active: #999999;
        --burgton-button-label-font-weight: inherit;
        --burgton-button-label-text-transform: uppercase;
      }
      
      .line {
        position: absolute;
        left: 1px;
        height: 3px;
        width: 20px;
        background-color: var(--burgton-button-line-color);
        border-radius: var(--burgton-button-border-radius);
      }
      
      :host([active]) .line {
        background-color: var(--burgton-button-line-color-active);
      }
      
      :host(:focus:not(.focus-visible)) {
        outline: none;
      }
      
      /* NO ANIMATION */
      :host([noAnimation]) .line--top,
      :host([noAnimation]) .line--middle,
      :host([noAnimation]) .line--bottom {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
      }
      
      ${defaultStyles}
      ${arrowLeftStyles}
      ${arrowRightStyles}
      ${astronautStyles}
      ${asyncStyles}
      ${crossedStyles}
      ${ellipsisStyles}
      ${fallDownStyles}
      ${minusStyles}
      ${rotatorStyles}
      ${spinStyles}
      ${underlinedStyles}
      ${verticalRotatorStyles}
      ${zoomStyles}
      ${arrowToArrow}
      
      ${labelStyles}
`;
