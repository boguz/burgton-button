# burgton-button
`<burgton-button>` is a simple, customisable and accessible lit-element menu burger button that you can use in your projects.

Amongst other features, it allows you to choose from different animations, customise colors, animation speed and event toggle classes on multiple targets on the page.


## DEMO
You can find examples of the different button possibilities on the [documentation page](https://boguz.github.io/burgton-button-docs/)


## DOCUMENTATION
On the [documentation page](https://boguz.github.io/burgton-button-docs/) you can find an easy to follow "Getting Started" guide, as well as a API description so you can fully customize your `<burgton-button>` element.


## GETTING STARTED
You can use the <burgton-button> element on your project in 3 simple steps:

1. Install the `<burgton-button>` on your project via NPM (or download it here)

   ```javascript
   npm install burgton-button
   ```
   
2. Import the `<burgton-button>` module on your project
   
    ```html
    <script type="module" src="node_modules/burgton-button/index.js"></script>
    ```
   
3. Add the <burgton-button> element to you page and customize it to your taste

    ```html
    <burgton-button type="astronaut"></burgton-button>
    ```


## API

#### Attributes
You can use some attributes to customize your `<burgton-button>

| Attribute | Description | Valid Values  | Default | Example |
| --------- | ----------- | ------------- | ------- | ------- |
| `type` | Defines the button animation | 'default', 'arrow-left', 'arrow-right', 'arrow-to-arrow', 'astronaut', 'async', 'crossed', 'ellipsis', 'fall-down', 'minus', 'rotator', 'spin', 'underlined', 'vertical-rotator', 'zoom' | 'default' | `<burgton-button type="astronaut"></burgton-button>` |
| `label` | Defines the text that will be show with the button | String | - | `<burgton-button label="Menu"></burgton-button>` |
| `labelPosition` | Defines the position of the label text in relation to the button | 'top', 'bottom', 'right', 'left' | - | `<burgton-button label="Menu" labelPosition="top"></burgton-button>` |
| `targetSelectors` | Defines on which elements you want to toggle a class when the button is clicked. You can select multiple element by separating the selectors with a comma | CSS Selector | - | `<burgton-button targetSelectors="#circle-one, .circle-two" targetClasses="active, colorful"></burgton-button>` |
| `targetClasses` | Defines the class that will be toggled on the selected element. The number of classes must match the number of selectors | CSS selector | - | `<burgton-button targetSelectors="#circle-three" targetClasses="active"></burgton-button>` |
| `description` | Defines the default text for the 'aria-label' attribute. This value is overwritten with the `label` Text (if present) | String | 'Menu button' | `<burgton-button description="Menu on/off button"></burgton-button>` |
| `noAnimation` | Disables the button animation, making the transition between inactive and active states immediate | - | - | `<burgton-button noAnimation></burgton-button>` |
| `debug` | Enables the debug mode | - | - | `<burgton-button debug></burgton-button>` |

#### Styles
`<burgton-button>` exposes several CSS custom properties that you can use to further customize it.

| Property | Description | Valid Values  | Default | Example |
| -------- | ----------- | ------------- | ------- | ------- |
| `--burgton-button-line-color` | Set the color of the button lines when it is inactive | CSS color value | #66cc99 | `--burgton-button-line-color: tomato;` |
| `--burgton-button-line-color-active` | Set the color of the button lines when it is active. If not defined will inherit color from inactive state. | CSS color value | `--burgton-button-line-color` | `--burgton-button-line-color-active: purple;` |
| `--burgton-button-animation-duration` | Set the animation duration | CSS time value | 500ms | `--burgton-button-animation-duration: .75s;` |
| `--burgton-button-easing` | Set the animation easing | CSS easing value | ease-in-out | `--burgton-button-easing: ease-out;` |
| `--burgton-button-scale` | Set the button scale (size) | Number (multiplier) | 1 | `--burgton-button-scale: 1.3;` |
| `--burgton-button-border-radius` | Set the button lines border-radius | CSS border-radius value | 0px | `--burgton-button-border-radius: 2px;` |
| `--burgton-button-label-font-size` | Set the font-size for the button label | CSS font-size value | 14px | `--burgton-button-label-font-size: 1rem;` |
| `--burgton-button-label-font-color` | Set the font color for the button label | CSS color value | #999999 | `--burgton-button-label-font-color: white;` |
| `--burgton-button-label-font-color-active` | Set the font color for the label text when the button is active | CSS color value | #999999 | `--burgton-button-label-font-color-active: purple;` |
| `--burgton-button-label-font-weight` | Set the font weight for the label text when the button is active | CSS font-weight value | inherit | `--burgton-button-label-font-weight: 600;` |
| `--burgton-button-label-text-transform` | Set the text-transform for the label text when the button is active | CSS text-transform value | uppercase | `--burgton-button-label-text-transform: capitalize;` |

#### Methods
`<burgton-button>` exposes several methods which you can call from you application. 

| Method | Description | Example |
| ------ | ----------- | ------- |
| `.toggleState()` | Toggle between the button's active and inactive state | `yourButton.toggleState();` |
| `.activate()` | Activate the button | `yourButton.activate();` |
| `.deactivate()` | Deactivate the button | `yourButton.deactivate();` |

#### Events
`<burgton-button> fires several custom events so you can react to them on you application.

| Event | Description |
| ----- | ----------- |
| `burgton-button-state-change` | Fires whenever the button's state changes |
| `burgton-button-click` | Fires whenever the button is clicked |
| `burgton-button-activate` | Fires whenever the button state becomes active |
| `burgton-button-deactivate`  | Fires whenever the button state becomes inactive |

#### A11y
Accessibility is very important, so we try to implement some good practices to reach as many users as possible and provide them a good experience.
We do this mainly by adding several relevant aria attributes and also by giving you the possibility to change them via attributes.


## CONTRIBUTING
If you have any ideas, suggestions or question you can open an issue on [github repo](https://github.com/boguz/burgton-button).

You can also find the burgton-buttons package on [NPM](https://www.npmjs.com/package/burgton-button).

