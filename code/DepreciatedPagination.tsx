import * as React from "react"
import { Frame, Page, PropertyControls, ControlType } from "framer"

export interface Props {
    width: number
    height: number
    color: string
    leftIcon: any
    rightIcon: any
    gap: number
    overflow: any
    enum: any
} // Define type of property

export interface State {
    i: any
    currentPageIndex: any
}

export class PageEffect {
    static None = "none"
    static CoverFlow = "coverflow"
    static Cube = "cube"
    static Pile = "pile"
    static Wheel = "wheel"
}

class DepreciatedPagination extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            currentPageIndex: 0,
            i: 0,
        }
        this.tapForwards = this.tapForwards.bind(this)
        this.tapBackwards = this.tapBackwards.bind(this)
    }

    static defaultProps = {
        // Set default properties
        ...Frame.defaultProps,
        width: 375,
        height: 812,
        enum: PageEffect.None,
        color: "#fff",
        leftIcon: null,
        rightIcon: null,
        gap: 10,
        overflow: "hidden",
    }
    static propertyControls: PropertyControls = {
        // Items shown in property panel
        children: {
            type: ControlType.Array,
            title: "Content",
            propertyControl: {
                type: ControlType.ComponentInstance,
                title: "Page",
            },
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
        },
        gap: {
            type: ControlType.Number,
            title: "Gap",
            defaultValue: 10,
            min: 0,
            max: 100,
            step: 1,
        },
        overflow: {
            type: ControlType.Enum,
            title: "Overflow",
            options: ["hidden", "visible"],
            optionTitles: ["Hidden", "Visible"],
        },
        color: {
            type: ControlType.Color,
            title: "Arrow Color",
        },
        leftIcon: {
            type: ControlType.File,
            title: "Left Icon",
            allowedFileTypes: ["svg"],
        },
        rightIcon: {
            type: ControlType.File,
            title: "Right Icon",
            allowedFileTypes: ["svg"],
        },
    }
    tapForwards() {
        if (this.state.i < this.props.children.length - 1) {
            this.setState({
                currentPageIndex: this.state.currentPageIndex + 1,
                i: this.state.i + 1,
            })
        } else {
            this.setState({
                currentPageIndex: this.props.children.length - 1,
                i: this.props.children.length - 1,
            })
        }
    }
    tapBackwards() {
        if (this.state.i > 0) {
            this.setState({
                currentPageIndex: this.state.currentPageIndex - 1,
                i: this.state.i - 1,
            })
        } else {
            this.setState({
                currentPageIndex: 0,
                i: 0,
            })
        }
    }

    render() {
        console.log(this.props)
        const { width, height } = this.props
        const backFrameStyle: React.CSSProperties = {
            width: 44,
            height: 44,
            position: "absolute",
            backgroundColor: " hsla(0, 0%, 100%, 0)",
            bottom: 20,
            left: 20,
        }
        const forwardFrameStyle: React.CSSProperties = {
            width: 44,
            height: 44,
            position: "absolute",
            backgroundColor: " hsla(0, 0%, 100%, 0)",
            bottom: 20,
            right: 20,
        }
        return (
            <div>
                <Page
                    {...this.props}
                    width={width}
                    height={height}
                    gap={this.props.gap}
                    padding={0}
                    background={"#000000"}
                    momentum={false}
                    overflow={this.props.overflow}
                    defaultEffect={this.props.enum}
                    currentPage={this.state.currentPageIndex}
                >
                    {this.props.children}
                </Page>
                <Frame style={backFrameStyle} onClick={this.tapBackwards}>
                    {this.props.leftIcon !== null &&
                    this.props.leftIcon.includes(".svg") ? (
                        <img
                            src={this.props.leftIcon}
                            alt="Image not Supported"
                        />
                    ) : (
                        <svg width="44" height="44">
                            <path
                                d="M 2 22 L 42 22"
                                fill="transparent"
                                stroke-width="3"
                                stroke={this.props.color}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M 16 37 L 2 22"
                                fill="transparent"
                                stroke-width="3"
                                stroke={this.props.color}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M 16 6.5 L 2 21.5"
                                fill="transparent"
                                stroke-width="3"
                                stroke={this.props.color}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    )}
                </Frame>
                <Frame style={forwardFrameStyle} onClick={this.tapForwards}>
                    {this.props.rightIcon !== null &&
                    this.props.rightIcon.includes(".svg") ? (
                        <img
                            src={this.props.rightIcon}
                            alt="Image not Supported"
                        />
                    ) : (
                        <svg width="44" height="44">
                            <path
                                d="M 2 22 L 42 22 L 28 7"
                                fill="transparent"
                                stroke-width="3"
                                stroke={this.props.color}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M 28 37.5 L 42 22"
                                fill="transparent"
                                stroke-width="3"
                                stroke={this.props.color}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    )}
                </Frame>
            </div>
        )
    }
}
