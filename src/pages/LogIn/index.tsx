import * as React from "react";
import Input from "../../components/Input";
import Card from "../../components/Card";
import Button from "../../components/Button";
import styles from "./index.module.scss";
type LogInType = {}

const LogIn: React.FC<LogInType> = (): JSX.Element => {
  return (
    <Card width={600}>
      <>
        注册与登录页面
        <form onChange={(e) => console.log(e.target)}>
          <div className={styles.form}>
            <ul>
              <li><Input placeholder="请输入账号" onChange={(first: any) => console.log(first)} /></li>
              <li><Input placeholder="请输入账号" onChange={(first: any) => console.log(first)} /></li>
              <li><Input placeholder="请输入账号" onChange={(first: any) => console.log(first)} /></li>
              <li><Input placeholder="请输入账号" onChange={(first: any) => console.log(first)} /></li>
            </ul>
          </div>
          <Button text="注册" />
        </form>
      </>
    </Card>
  );
};

export default LogIn;