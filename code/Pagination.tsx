import * as React from "react"
import { Frame, Page, ControlType, addPropertyControls, Override } from "framer"

export interface Props {
    width: number
    height: number
    color: string
    leftIcon: any
    rightIcon: any
    gap: number
    overflow: any
    enum: any
    custom: any
    icons: boolean
    tapArea: boolean
    carousel: boolean
    dragEnabled: boolean
    transition: boolean
} // Define type of property

export class PageEffect {
    static None = "none"
    static CoverFlow = "coverflow"
    static Cube = "cube"
    static Pile = "pile"
    static Wheel = "wheel"
}

export function Pagination(props) {
    const { width, height } = props

    const [current, setCurrent] = React.useState(0)

    function tapForwards(event, info) {
        if (props.carousel === false && current >= props.children.length - 1) {
            return
        }
        if (
            props.children.length !== undefined &&
            props.children.length > 0 &&
            current >= props.children.length - 1
        ) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

    function tapBackwards(event, info) {
        if (props.carousel === false && current <= 0) {
            return
        }
        if (
            current <= 0 &&
            props.children.length !== undefined &&
            props.children.length > 0
        ) {
            setCurrent(props.children.length)
        } else {
            setCurrent(current - 1)
        }
    }

    let customTransition
    if (props.custom === "Custom1") {
        customTransition = { ...Custom1() }
    }
    if (props.custom === "Custom2") {
        customTransition = { ...Custom2() }
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
                background={"#000000"}
                momentum={false}
                overflow={props.overflow}
                defaultEffect={props.enum}
                onChangePage={(current, previous, page) => {
                    setCurrent(current)
                }}
                currentPage={current}
                dragEnabled={props.dragEnabled}
            >
                {props.children}
            </Page>
            <Frame
                size={"100%"}
                onTap={tapBackwards}
                style={
                    props.tapArea ? cornerbackFrameStyle : sideleftFrameStyle
                }
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
                style={
                    props.tapArea
                        ? cornerforwardFrameStyle
                        : siderightFrameStyle
                }
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
    )
}

addPropertyControls(Pagination, {
    // Items shown in property panel
    children: {
        type: ControlType.Array,
        title: "Content",
        propertyControl: {
            type: ControlType.ComponentInstance,
            title: "Page",
        },
    },
    transition: {
        type: ControlType.Boolean,
        title: "Transition",
        enabledTitle: "Default",
        disabledTitle: "Custom",
    },
    enum: {
        type: ControlType.Enum,
        title: "Effect",
        options: [
            PageEffect.None,
            PageEffect.CoverFlow,
            PageEffect.Cube,
            PageEffect.Pile,
            PageEffect.Wheel,
        ],
        optionTitles: ["None", "Cover Flow", "Cube", "Pile", "Wheel"],
        hidden(props) {
            return props.transition === false
        },
    },
    custom: {
        type: ControlType.Enum,
        title: "Custom Effect",
        options: ["Custom1", "Custom2"],
        optionTitles: ["Shrink", "Rotate"],
        hidden(props) {
            return props.transition === true
        },
    },
    gap: {
        type: ControlType.Number,
        title: "Gap",
        defaultValue: 10,
        min: 0,
        max: 200,
        step: 1,
    },
    overflow: {
        type: ControlType.Enum,
        title: "Overflow",
        options: ["hidden", "visible"],
        optionTitles: ["Hidden", "Visible"],
    },
    dragEnabled: {
        type: ControlType.Boolean,
        title: "Draggable",
        enabledTitle: "True",
        disabledTitle: "False",
    },
    tapArea: {
        type: ControlType.Boolean,
        title: "Tap Area",
        enabledTitle: "Corners",
        disabledTitle: "Sides",
    },
    carousel: {
        type: ControlType.Boolean,
        title: "Carousel",
        enabledTitle: "On",
        disabledTitle: "Off",
    },
    icons: {
        type: ControlType.Boolean,
        title: "Icons",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        hidden(props) {
            return props.tapArea === false
        },
    },
    color: {
        type: ControlType.Color,
        title: "Color",
        hidden(props) {
            return (
                props.icons === false ||
                props.tapArea === false ||
                (props.rightIcon.includes(".svg") &&
                    props.leftIcon.includes(".svg"))
            )
        },
    },
    leftIcon: {
        type: ControlType.File,
        title: "Left Icon",
        allowedFileTypes: ["svg"],
        hidden(props) {
            return props.icons === false || props.tapArea === false
        },
    },
    rightIcon: {
        type: ControlType.File,
        title: "Right Icon",
        allowedFileTypes: ["svg"],
        hidden(props) {
            return props.icons === false || props.tapArea === false
        },
    },
})

Pagination.defaultProps = {
    ...Frame.defaultProps,
    width: 375,
    height: 812,
    enum: PageEffect.None,
    color: "#fff",
    leftIcon: null,
    rightIcon: null,
    gap: 10,
    overflow: "hidden",
    icons: true,
    tapArea: true,
    carousel: true,
    dragEnabled: false,
    transition: true,
    custom: "Custom1",
}

const sideleftFrameStyle: React.CSSProperties = {
    width: 100,
    height: "100%",
    position: "absolute",
    backgroundColor: " hsla(0, 0%, 100%, 0)",
    bottom: 0,
    left: 0,
}
const siderightFrameStyle: React.CSSProperties = {
    width: 100,
    height: "100%",
    position: "absolute",
    backgroundColor: " hsla(0, 0%, 100%, 0)",
    bottom: 0,
    right: 0,
}
const cornerbackFrameStyle: React.CSSProperties = {
    width: 44,
    height: 44,
    position: "absolute",
    backgroundColor: " hsla(0, 0%, 100%, 0)",
    bottom: 20,
    left: 20,
}

const cornerforwardFrameStyle: React.CSSProperties = {
    textAlign: "center",
    width: 44,
    height: 44,
    position: "absolute",
    backgroundColor: " hsla(0, 0%, 100%, 0)",
    bottom: 20,
    right: 20,
}

function Custom1(): Override {
    return {
        effect(info) {
            return {
                rotateY: info.normalizedOffset * -20,
                scale: 1 - Math.abs(info.normalizedOffset),
            }
        },
    }
}
function Custom2(): Override {
    return {
        effect(info) {
            return {
                rotate: Math.abs(info.normalizedOffset) * 360,
            }
        },
    }
}
