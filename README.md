# burgton-button
A simple customizable burger button

## TODOS:

## things to do

#### Bugs
- [ ] Cannot read property 'split' of null
- [ ] Animation when scaled (the animation isn't smooth)
- [ ] Fix animation with delay (when it deactivates)

#### Features
- [x] Add animations time
- [x] Custom line color
- [x] Custom active line color
- [x] Add animation boolean (animated or not) / notAnimated
- [x] Add easing type
- [x] Add animation delay
- [x] Add border-radius
- [x] Add scale
- [x] Add target
- [x] Add label
- [x] Expose a toggle method that can be called from outside
- [x] Emit custom events so other components can react to them

#### Animations
- [x] Arrow left
- [x] Arrow right
- [x] astronaut
- [x] async
- [x] crossed
- [x] default
- [x] ellipsis
- [x] fall down
- [x] minus
- [x] rotator
- [x] spin
- [x] underlined
- [x] vertical rotator
- [x] zoom
- [x] Arrow to arrow

#### Things to improve
- [ ] Prevent animations on page load


#### Code
- [x] Add error if type isn't one of the accepted types, revert to 'default'
- [x] Move line-color, animation duration and delay, scale, to use css custom properties instead of attributes
- [x] Add debug mode
- [x] Check for attribute type and validity
- [x] Add css custom properties to label properties (font size, colors,...)
- [ ] Fix debug after changing to use CSS custom properties
- [ ] Check if css custom properties are valid (revert to default?)
- [ ] Rewrite styles in CSS and import them in element
- [ ] Find way to load only the necessary css file (according to button type)
- [ ] Add custom-components.json file (https://github.com/webcomponents/custom-elements-json)
- [ ] Add tests
- [ ] A11y

#### Things to explain in Documentation
- [x] How to install
- [x] How to change button type
- [x] How to use the css variables
- [x] noAnimation
- [ ] Debug
- [ ] Add documentation link to the debug

