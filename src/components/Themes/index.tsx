import * as React from "react";
import "./index.scss";
import "./bright.scss";
import "./dark.scss";

interface Props {
  children?: JSX.Element;
  style?: { [property: string]: string };
  className?: string;
  theme: string;
  selection?: boolean;
  scrollBar?: boolean;
};

interface Themes {
  [propName: string]: string;
};

const themes: Themes = {
  dark: "gssgThemeDark",
  bright: "gssgThemeBright",
};

/**
 * @param style Card的样式
 * @param className Card的类名
 * @param theme 主题颜色 dark(黑暗主题) brigth(明亮主题)
 * @param selection 选中文本颜色，默认为true 跟随主题颜色
 * @param scrollBar 浏览器滚动条 默认为 true 跟随主题颜色
 */

const Theme: React.FC<Props> = (props: Props): JSX.Element => {
  const { theme, className, selection = true, scrollBar = true } = props;
  scrollBar && import("./scrollBar.scss");
  return (
    <div className={
      `gssgTheme 
      ${themes[theme]} 
      ${selection ? "choose" : ""} 
      ${className ? className : ""}`}>
      {props.children}
    </div>
  );
};

export default Theme;