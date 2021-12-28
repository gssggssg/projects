import * as React from "react";
import styles from "./index.module.scss";

interface Props {
  text: string;
  style?: { [property: string]: string };
  className?: string;
  width?: string | number;
  height?: string | number;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

/**
 * @param style Card的样式
 * @param className Card的类名
 * @param width Card的宽，数字类型单位就为px
 * @param height Card的高，数字类型单位就为px
 * @param disabled Card的是否禁用，false(默认) 按钮可以点击 true 按钮不可点击为禁用状态
 * @param loading Card的loading状态，false(默认) 不再loading 状态，true进行loading状态
 */
const Button: React.FC<Props> = (props: Props): JSX.Element => {
  const { style, className, width, height, disabled, onClick } = props;
  const gssgDisabled = disabled ? disabled : false;
  // const gssgWidth = typeof width === "string" ? width : `${width}px`;
  // const gssgHeight= typeof height === "string" ? height : `${height}px`;
  // const gssgOnClick = gssgDisabled ? onClick : null;
  return (
    <button
      className={`${styles.gssgButton} ${className || ""}`}
      style={{ ...style, width, height }}
      disabled={gssgDisabled}
      onClick={onClick}
    >
      <span>{props.text}</span>
    </button>
  );
};

export default Button;