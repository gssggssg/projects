import React, { useState } from "react";
import { connect } from "react-redux";
import Input from "../../components/Input";
import Card from "../../components/Card";
import Button from "../../components/Button";
import styles from "./index.module.scss";

type LogInType = {
  dispatch: any,
}

const LogIn: React.FC<LogInType> = (props): JSX.Element => {
  const [formData, setFormData] = useState({});

  const formChange = (type: string, value: string): void => {
    setFormData({ ...formData, [type]: value });
  };

  const addAccount = (): void => {
    props.dispatch({
      type: "logIn/addData",
      payload: { ...formData },
    });
  };

  return (
    <div className={styles.blackBg}>
      <Card width={600} >
        <>
          注册与登录页面
          <div className={styles.form}>
            <div>
              账号:
              <Input
                placeholder="请输入账号"
                onChange={(e: any) => formChange("username", e.target.value)}
              />
            </div>
            <div>
              邮箱:
              <Input
                placeholder="请输入邮件"
                onChange={(e: any) => formChange("email", e.target.value)}
              />
            </div>
            <div>
              密码:
              <Input
                placeholder="请输入密码"
                onChange={(e: any) => formChange("password", e.target.value)}
              />
            </div>
            {/* <div>
              密码: <Input placeholder="请确认密码" onChange={(first: any) => console.log(first)} />
            </div> */}
          </div>
          <Button text="注册" onClick={() => addAccount()} />
        </>
      </Card>
    </div>
  );
};

export default connect()(LogIn);