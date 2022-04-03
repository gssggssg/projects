import * as React from "react";
import classnames from "classnames";
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
 * @param style Button的样式
 * @param className Button的类名
 * @param width Button的宽，数字类型单位就为px
 * @param height Button的高，数字类型单位就为px
 * @param disabled Button的是否禁用，false(默认) 按钮可以点击 true 按钮不可点击为禁用状态
 * @param loading Button的loading状态，false(默认) 不再loading 状态，true进行loading状态
 * @param onClick Button的单击响应事件
 */

const Button: React.FC<Props> = (props: Props): JSX.Element => {
  const { style, className, width, height, disabled, onClick } = props;
  const gssgDisabled = disabled ? disabled : false;
  return (
    <button
      className={classnames(styles["gssg-but"], className)}
      style={{ ...style, width, height }}
      disabled={gssgDisabled}
      onClick={onClick}
    >
      <span>{props.text}</span>
    </button>
  );
};

export default Button;