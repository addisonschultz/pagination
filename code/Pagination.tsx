import * as React from "react";
import {
  Frame,
  Page,
  ControlType,
  addPropertyControls,
  Override,
  transform
} from "framer";
import FlipPage from "react-flip-page";

export interface Props {
  /**
   * Master Toggle
   */
  toggle: boolean;
  children: any;
  width: number;
  height: number;

  /**
   * Props for Page Component
   */
  color: string;
  leftIcon: any;
  rightIcon: any;
  gap: number;
  overflow: any;
  pageBackgroundColor: string;
  enum: any;
  custom: any;
  icons: boolean;
  tapArea: boolean;
  carousel: boolean;
  dragEnabled: boolean;
  transition: boolean;

  /**
   * Props for Flip Page Component
   */
  orientation: "vertical" | "horizontal";
  uncutPages: boolean;
  animationDuration: number;
  treshold: number;
  maxAngle: number;
  maskOpacity: number;
  perspective: number;
  pageBackground: string;
  showHint: boolean;
  showSwipeHint: boolean;
  showTouchHint: boolean;
  flipOnTouch: boolean;
  onPageChange: () => void;
  onStartSwiping: () => void;
  onStopSwiping: () => void;
  loopForever: boolean;
  disableSwipe: boolean;
  responsive: boolean;
  startAt: number;
}

export class PageEffect {
  static None = "none";
  static CoverFlow = "coverflow";
  static Cube = "cube";
  static Pile = "pile";
  static Wheel = "wheel";
}

export function Pagination(props: Props) {
  const { width, height } = props;

  const [current, setCurrent] = React.useState(0);

  function tapForwards(event, info) {
    if (props.carousel === false && current >= props.children.length - 1) {
      return;
    }
    if (
      props.children.length !== undefined &&
      props.children.length > 0 &&
      current >= props.children.length - 1
    ) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  function tapBackwards(event, info) {
    if (props.carousel === false && current <= 0) {
      return;
    }
    if (
      current <= 0 &&
      props.children.length !== undefined &&
      props.children.length > 0
    ) {
      setCurrent(props.children.length);
    } else {
      setCurrent(current - 1);
    }
  }

  let customTransition;
  if (props.custom === "Custom1") {
    customTransition = { ...Custom1() };
  }
  if (props.custom === "Custom2") {
    customTransition = { ...Custom2() };
  }
  if (props.custom === "Custom3") {
    customTransition = { ...Custom3() };
  }
  if (props.custom === "Custom4") {
    customTransition = { ...Custom4() };
  }

  if (props.toggle) {
    let flipBorderStyle = props.children[0].props.style.borderRadius;
    return (
      <FlipPage
        height={props.responsive ? null : 812}
        width={props.responsive ? null : 375}
        orientation={props.orientation}
        uncutPages={props.uncutPages}
        animationDuration={props.animationDuration}
        treshold={props.treshold}
        maxAngle={props.maxAngle}
        maskOpacity={props.maskOpacity}
        perspective={`${props.perspective}em`}
        pageBackground={props.pageBackground}
        showHint={props.showHint}
        showSwipeHint={props.showSwipeHint}
        showTouchHint={props.showTouchHint}
        flipOnTouch={props.flipOnTouch}
        onPageChange={props.onPageChange}
        onStartSwiping={props.onStartSwiping}
        onStopSwiping={props.onStopSwiping}
        loopForever={props.loopForever}
        disableSwipe={props.disableSwipe}
        responsive={props.responsive}
        startAt={props.startAt}
        style={{
          borderRadius: flipBorderStyle,
          overflow: "hidden"
        }}
      >
        {props.children}
      </FlipPage>
    );
  }
  return (
    <div>
      <Page
        {...props}
        {...(props.transition !== true ? customTransition : null)}
        width={width}
        height={height}
        gap={props.gap}
        padding={0}
        background={props.pageBackgroundColor}
        momentum={false}
        overflow={props.overflow}
        defaultEffect={props.enum}
        onChangePage={(current, previous, page) => {
          setCurrent(current);
        }}
        currentPage={current}
        dragEnabled={props.dragEnabled}
      >
        {props.children}
      </Page>
      <Frame
        size={"100%"}
        onTap={tapBackwards}
        style={props.tapArea ? cornerbackFrameStyle : sideleftFrameStyle}
      >
        {props.icons === false ||
        props.tapArea === false ? null : props.leftIcon !== null &&
          props.leftIcon.includes(".svg") ? (
          <img src={props.leftIcon} alt="Image not Supported" />
        ) : (
          <svg width="44" height="44">
            <path
              d="M 2 22 L 42 22"
              fill="transparent"
              stroke-width="3"
              stroke={props.color}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M 16 37 L 2 22"
              fill="transparent"
              stroke-width="3"
              stroke={props.color}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M 16 6.5 L 2 21.5"
              fill="transparent"
              stroke-width="3"
              stroke={props.color}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </Frame>
      <Frame
        size={"100%"}
        onTap={tapForwards}
        style={props.tapArea ? cornerforwardFrameStyle : siderightFrameStyle}
      >
        {props.icons === false ||
        props.tapArea === false ? null : props.rightIcon !== null &&
          props.rightIcon.includes(".svg") ? (
          <img src={props.rightIcon} alt="Image not Supported" />
        ) : (
          <svg width="44" height="44">
            <path
              d="M 2 22 L 42 22 L 28 7"
              fill="transparent"
              stroke-width="3"
              stroke={props.color}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M 28 37.5 L 42 22"
              fill="transparent"
              stroke-width="3"
              stroke={props.color}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </Frame>
    </div>
  );
}

addPropertyControls(Pagination, {
  // Pagination Property Controls
  children: {
    type: ControlType.Array,
    title: "Pages",
    propertyControl: {
      type: ControlType.ComponentInstance
    }
  },
  toggle: {
    type: ControlType.Boolean,
    title: "Page Type",
    enabledTitle: "Flip",
    disabledTitle: "Page"
  },
  /**
   * Native Page Property Controls
   */
  transition: {
    type: ControlType.Boolean,
    title: "Transition",
    enabledTitle: "Default",
    disabledTitle: "Custom",
    hidden(props) {
      return props.toggle === true;
    }
  },
  enum: {
    type: ControlType.Enum,
    title: "Effect",
    options: [
      PageEffect.None,
      PageEffect.CoverFlow,
      PageEffect.Cube,
      PageEffect.Pile,
      PageEffect.Wheel
    ],
    optionTitles: ["None", "Cover Flow", "Cube", "Pile", "Wheel"],
    hidden(props) {
      return props.transition === false || props.toggle === true;
    }
  },
  custom: {
    type: ControlType.Enum,
    title: "Custom Effect",
    options: ["Custom1", "Custom2", "Custom3", "Custom4"],
    optionTitles: ["Shrink", "Rotate", "Fade", "Lineup"],
    hidden(props) {
      return props.transition === true;
    }
  },
  gap: {
    type: ControlType.Number,
    title: "Gap",
    defaultValue: 10,
    min: 0,
    max: 200,
    step: 1,
    hidden(props) {
      return props.toggle === true;
    }
  },
  overflow: {
    type: ControlType.Enum,
    title: "Overflow",
    options: ["hidden", "visible"],
    optionTitles: ["Hidden", "Visible"],
    hidden(props) {
      return props.toggle === true;
    }
  },
  pageBackgroundColor: {
    type: ControlType.Color,
    title: "Background Color",
    hidden(props) {
      return props.toggle === true;
    }
  },
  dragEnabled: {
    type: ControlType.Boolean,
    title: "Draggable",
    enabledTitle: "True",
    disabledTitle: "False",
    hidden(props) {
      return props.toggle === true;
    }
  },
  tapArea: {
    type: ControlType.Boolean,
    title: "Tap Area",
    enabledTitle: "Corners",
    disabledTitle: "Sides",
    hidden(props) {
      return props.toggle === true;
    }
  },
  carousel: {
    type: ControlType.Boolean,
    title: "Carousel",
    enabledTitle: "On",
    disabledTitle: "Off",
    hidden(props) {
      return props.toggle === true;
    }
  },
  icons: {
    type: ControlType.Boolean,
    title: "Icons",
    enabledTitle: "Show",
    disabledTitle: "Hide",
    hidden(props) {
      return props.tapArea === false || props.toggle === true;
    }
  },
  color: {
    type: ControlType.Color,
    title: "Color",
    hidden(props) {
      return (
        props.icons === false ||
        props.tapArea === false ||
        props.toggle === true ||
        (props.rightIcon.includes(".svg") && props.leftIcon.includes(".svg"))
      );
    }
  },
  leftIcon: {
    type: ControlType.File,
    title: "Left Icon",
    allowedFileTypes: ["svg"],
    hidden(props) {
      return (
        props.icons === false ||
        props.tapArea === false ||
        props.toggle === true
      );
    }
  },
  rightIcon: {
    type: ControlType.File,
    title: "Right Icon",
    allowedFileTypes: ["svg"],
    hidden(props) {
      return (
        props.icons === false ||
        props.tapArea === false ||
        props.toggle === true
      );
    }
  },
  /**
   * FlipPage Property Controls
   */
  orientation: {
    type: ControlType.Enum,
    title: "Orientation",
    options: ["vertical", "horizontal"],
    optionTitles: ["Vertical", "Horizontal"],
    hidden(props) {
      return props.toggle === false;
    }
  },
  uncutPages: {
    type: ControlType.Boolean,
    title: "Uncut Pages",
    enabledTitle: "True",
    disabledTitle: "False",
    hidden(props) {
      return props.toggle === false;
    }
  },
  animationDuration: {
    type: ControlType.Number,
    title: "Animation Duration",
    min: 100,
    max: 1000,
    step: 1,
    hidden(props) {
      return props.toggle === false;
    }
  },
  treshold: {
    type: ControlType.Number,
    title: "Treshold",
    min: 5,
    max: 90,
    step: 1,
    hidden(props) {
      return props.toggle === false;
    }
  },
  maxAngle: {
    type: ControlType.Number,
    title: "Max Angle",
    min: 1,
    max: 90,
    step: 1,
    hidden(props) {
      return props.toggle === false;
    }
  },
  maxOpacity: {
    type: ControlType.Number,
    title: "Mask Opacity",
    min: 0.1,
    max: 1,
    step: 0.1,
    hidden(props) {
      return props.toggle === false;
    }
  },
  perspective: {
    type: ControlType.Number,
    title: "Perspective",
    min: 50,
    max: 500,
    step: 1,
    hidden(props) {
      return props.toggle === false;
    }
  },
  pageBackground: {
    type: ControlType.Color,
    title: "Background Color",
    hidden(props) {
      return props.toggle === false;
    }
  },
  showHint: {
    type: ControlType.Boolean,
    title: "Direction Hint",
    enabledTitle: "True",
    disabledTitle: "False",
    hidden(props) {
      return props.toggle === false;
    }
  },
  showSwipeHint: {
    type: ControlType.Boolean,
    title: "Swipe Hint",
    enabledTitle: "True",
    disabledTitle: "False",
    hidden(props) {
      return props.toggle === false;
    }
  },
  showTouchHint: {
    type: ControlType.Boolean,
    title: "Touch Hint",
    enabledTitle: "True",
    disabledTitle: "False",
    hidden(props) {
      return props.toggle === false;
    }
  },
  flipOnTouch: {
    type: ControlType.Boolean,
    title: "Flip on Touch",
    enabledTitle: "True",
    disabledTitle: "False",
    hidden(props) {
      return props.toggle === false;
    }
  },
  loopForever: {
    type: ControlType.Boolean,
    title: "Loop",
    enabledTitle: "True",
    disabledTitle: "False",
    hidden(props) {
      return props.toggle === false;
    }
  },
  disableSwipe: {
    type: ControlType.Boolean,
    title: "Disable Swipe",
    enabledTitle: "True",
    disabledTitle: "False",
    hidden(props) {
      return props.toggle === false;
    }
  },
  responsive: {
    type: ControlType.Boolean,
    title: "Responsive",
    enabledTitle: "True",
    disabledTitle: "False",
    hidden(props) {
      return props.toggle === false;
    }
  },
  startAt: {
    type: ControlType.Number,
    title: "Start Page",
    displayStepper: true,
    hidden(props) {
      return props.toggle === false;
    }
  }
});

Pagination.defaultProps = {
  /**
   * Pagination Default Props
   */
  ...Frame.defaultProps,
  toggle: false,
  width: 375,
  height: 812,
  /**
   * Native Page Default Props
   */
  enum: PageEffect.None,
  color: "#fff",
  leftIcon: null,
  rightIcon: null,
  gap: 10,
  overflow: "hidden",
  pageBackgroundColor: "#000000",
  icons: true,
  tapArea: true,
  carousel: true,
  dragEnabled: false,
  transition: true,
  custom: "Custom1",
  /**
   * Flip Page Default Props
   */
  orientation: "horizontal",
  uncutPages: false,
  animationDuration: 200,
  treshold: 10,
  maxAngle: 45,
  maxOpacity: 0.4,
  perspective: 130,
  pageBackground: "rgba(0, 0, 0, 0)",
  showHint: false,
  showSwipeHint: false,
  showTouchHint: false,
  flipOnTouch: false,
  loopForever: true,
  disableSwipe: false,
  responsive: true,
  startAt: 0
};

const sideleftFrameStyle: React.CSSProperties = {
  width: 100,
  height: "100%",
  position: "absolute",
  backgroundColor: " hsla(0, 0%, 100%, 0)",
  bottom: 0,
  left: 0
};
const siderightFrameStyle: React.CSSProperties = {
  width: 100,
  height: "100%",
  position: "absolute",
  backgroundColor: " hsla(0, 0%, 100%, 0)",
  bottom: 0,
  right: 0
};
const cornerbackFrameStyle: React.CSSProperties = {
  width: 44,
  height: 44,
  position: "absolute",
  backgroundColor: " hsla(0, 0%, 100%, 0)",
  bottom: 20,
  left: 20
};

const cornerforwardFrameStyle: React.CSSProperties = {
  textAlign: "center",
  width: 44,
  height: 44,
  position: "absolute",
  backgroundColor: " hsla(0, 0%, 100%, 0)",
  bottom: 20,
  right: 20
};

function Custom1(): Override {
  return {
    effect(info) {
      return {
        rotateY: info.normalizedOffset * -20,
        scale: 1 - Math.abs(info.normalizedOffset)
      };
    }
  };
}
function Custom2(): Override {
  return {
    effect(info) {
      return {
        rotate: Math.abs(info.normalizedOffset) * 360
      };
    }
  };
}
function Custom3(): Override {
  return {
    effect(info) {
      return {
        opacity: 1 - Math.abs(info.normalizedOffset),
        x: -info.offset
      };
    }
  };
}
function Custom4(): Override {
  return {
    effect(info) {
      const { offset, normalizedOffset, index } = info;
      return {
        x: -offset + normalizedOffset * 48,
        y: normalizedOffset * 16,
        z: -index,
        scale: transform(normalizedOffset, [0, 1], [1, 0.9], { clamp: false }),
        opacity: normalizedOffset + 1
      };
    }
  };
}
