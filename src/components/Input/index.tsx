import * as React from "react";
import classnames from "classnames";
import styles from "./index.module.scss";

interface Props {
  style?: { [property: string]: string };
  value?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => {};
  onChange?: any;
};

/**
 * @param style 样式
 * @param className 类名
 * @param disabled Input的是否禁用，false(默认) 按钮可以点击 true 按钮不可点击为禁用状态
 * @param loading Input的loading状态，false(默认) 不再loading 状态，true进行loading状态
 * @param onInput Input内容改变的回调
 * @param onChange Input内容改变的回调
 */

const Input: React.FC<Props> = (props: Props): JSX.Element => {
  const { style, value, className, disabled, placeholder } = props;
  const { onInput, onChange } = props;

  return (
    <div className={classnames(styles["gssg-input"], className)}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        style={style}
        disabled={disabled}
        className={classnames(styles["gssg-inp"], className)}
        onInput={(event) => onInput && onInput(event)}
        onChange={(event) => onChange && onChange(event)}
      />
    </div>
  );
};

export default (Input);