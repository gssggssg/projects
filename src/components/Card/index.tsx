import * as React from "react";
import "./index.scss";

interface Props {
  children?: JSX.Element;
  style?: { [property: string]: string };
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: string | number;
};

/**
 * @param style Card的样式
 * @param className Card的类名
 * @param width Card的宽，数字类型单位就为px
 * @param height Card的高，数字类型单位就为px
 * @param Rounded Card的圆角，数字类型单位就为px
 */
// const Card = (props: Props): JSX.Element => {
const Card: React.FC<Props> = (props: Props): JSX.Element => {
  let { style, className, width, height, rounded } = props;
  width = typeof width === "string" ? width : `${width}px`;
  height = typeof height === "string" ? height : `${height}px`;
  rounded = typeof rounded === "string" ? rounded : `${rounded}px`;
  return (
    <div
      className={`componentCard ${className}`}
      style={{ ...style, width, height, borderRadius: rounded }}
    >
      {props.children}
    </div>
  );
};

export default Card;