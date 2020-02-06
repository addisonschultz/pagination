### Details

A single code component that allows you to connect to content, and click through without code overrides.

Drag onto the canvas, and connect to however many frames you would like!

There are two types of Pagination encapsuled in this component:

`Page` - Extends the [Page](https://www.framer.com/api/page/) component in Framer X.

`Flip` - Includes the [FlipPage](https://www.npmjs.com/package/react-flip-page) component from `react-flip-page`.

### Properties

- **Page Type** - Type of Pagination. Set to `Page` by default.

**Page Properties**

- **Transition** — Default or Custom Page Transition. Set to `defualt` by default.
- **Effect** — Page Effect on Change. Set to `none` by default when enabled.
- **Custom Effect** — Custom Page Effect on Change. Set to `shrink` by default when enabled.
- **Gap** — Sets the gap between the connected content. Set to `10` by default.
- **Overflow** — If the connected content can be seen outside of the component itself. Set to `hidden` by default.
- **Background Color** — The background color that shows when a gap is set on the Page component. Set to `#000000` by default.
- **Draggable** — If the Page can be changed by dragging. Set to `false` by default.
- **Tap Area** — Where the tappable area is located. Toggle between Corners and Sides. Set to `corners` by default.
- **Carousel** — Whether or not the Page will jump to the beginning when it reaches the end or vice versa. Set to `on` by default.
- **Icons** — Whether or not the icons will show. Set to `show` by default.
- **Icon Color** — Arrow color. Set to `#FFF` by default. Option doesn't work when you upload your own icon
- **Left Icon** — Left Icon. Set to `null` by default.
- **Right Icon** — Right Icon. Set to `null` by default.

**Flip Properties**

- **Orientation** - Direction the Flip Page will turn. Set to `vertical` by default.
- **Uncut Pages** - Whether or not the content will overflow the Flip Page. `true` returns a more "bookish" effect. Set to `false` by default.
- **Animation Duration** - Duration in ms for the flip animation. Set to `200` by default.
- **Treshold** - Distance in px to swipe before the gesture is activated. Set to `10` by default.
- **Max Angle** - Angle of the page when there's nothing to display before/after. Set to `45` by default.
- **Mask Opacity** - Opacity of the masks that covers the underneath content. Set to `0.4` by default.
- **Perspective** - Perspective value of the page fold effect. The bigger, the less noticeable. Set to `130` by default.
- **Background** - Background of the pages. Set to `#fff` by default.
- **Direction Hint** - Indicates if the component must hint the user on how it works. Set to `false` by default.
- **Swipe Hint** - Indicates if the component must hint the user on how it works. Set to `false` by default.
- **Touch Hint** - Indicates if the component must hint the user on how it works. Set to `false` by default.
- **Flip on Touch** - Whether or not you can touch to change pages. Set to `false` by default.
- **Loop** - If the carousel will restart when it reaches the end. Set to `true` by default.
- **Disable Swipe** - Whether or not swipe gestures are recognized. Set to `false` by default.
- **Responsive** - If the connected content will be able to be seen in the Pagination Component. Connected content must be at least the same dimensions as the Pagination Component. Set to `true` by default.
- **Start Page** - Index for the pages to start on. Set to `0` by default.

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
| v1.13.0 | Add support for `react-flip-page`                                        |
| v1.14.0 | Add custom transition `fade`                                             |
| v1.15.0 | Add support for custom `background-color` on `Page`                      |
| v1.16.0 | Minor UX updates                                                         |
| v1.17.0 | Add custom transition `lineup`                                           |
| v1.18.0 | Fix clipped `borderRadius` on FlipPage                                   |

\*This component was a React Class component before Framer X21. Current version is a refactored functional component, but the original code for the now depreciated Class Pagination Component can still be found in this package when looking at the code if you'd like to explore the differences between Class and Functional React components.

\*Thanks to [@derlukasg](https://twitter.com/derlukasg) for also contributing to the custom fade transition!
\*Thanks to [@steveruizok](https://twitter.com/steveruizok) for also contributing to the [custom lineup transition](https://twitter.com/steveruizok/status/1225043878467842048)!

Feel free to reach out to me [@addisonschultz](https://twitter.com/AddisonSchultz) with any questions, or feel free to submit a [pull request](https://github.com/addisonschultz/pagination).
