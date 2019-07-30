### Details

A single code component that allows you to connect to content, and click through without code overrides.

Drag onto the canvas, and connect to however many frames you would like!

### Properties

- **Transition** — Default or Custom Page Transition. Set to `defualt` by default
- **Effect** — Page Effect on Change. Set to `none` by default when enabled.
- **Custom Effect** — Custom Page Effect on Change. Set to `shrink` by default when enabled.
- **Gap** — Sets the gap between the connected content. Set to `10` by default
- **Overflow** — If the connected content can be seen outside of the component itself. Set to `hidden` by default
- **Draggable** — If the Page can be changed by dragging. Set to `false` by default
- **Tap Area** — Where the tappable area is located. Toggle between Corners and Sides. Set to `corners` by default
- **Carousel** — Whether or not the Page will jump to the beginning when it reaches the end or vice versa. Set to `on` by default
- **Icons** — Whether or not the icons will show. Set to `show` by default
- **Icon Color** — Arrow color. Set to `#FFF` by default. Option doesn't work when you upload your own icon
- **Left Icon** — Left Icon. Set to `null` by default.
- **Right Icon** — Right Icon. Set to `null` by default.

### Versions

| Version | Description                                                              |
| ------- | ------------------------------------------------------------------------ |
| v1.0.0  | Initial Publish                                                          |
| v1.1.0  | Cleaned up code                                                          |
| v1.2.0  | Added arrow icons with changeable color                                  |
| v1.3.0  | Added ability to change page effect                                      |
| v1.4.0  | Added option to change left and right icons with user uploaded svg files |
| v1.5.0  | Updated Readme and images                                                |
| v1.6.0  | Cleaned up code                                                          |
| v1.7.0  | Fixed missing arrow assets                                               |
| v1.8.0  | This time actually fixed arrow assets                                    |
| v1.9.0  | Hotfix to work in Framer X beta                                          |
| v1.10.0 | Added functionality to edit props, and fixed to work with new API        |
| v1.11.0 | Added tons of new props, and added some custom transitions.              |
| v1.12.0 | Updated Readme                                                           |

\*This component was a React Class component before Framer X21. Current version is a refactored functional component, but the original code for the now depreciated Class Pagination Component can still be found in this package when looking at the code.
