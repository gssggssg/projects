// 注册
import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./index.module.scss";

type SignInType = {
  dispatch: any,
}

const SignUp: React.FC<SignInType> = (props): JSX.Element => {
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

  return (<>
    <div className={styles.form}>
      <div className={styles.formTitle}>
        注册页面
      </div>
      <div className={styles.formList}>
        <div className={styles.listItem}>
          <div className={styles.listItemLabel}>
            账号:
          </div>
          <Input
            placeholder="请输入账号"
            onChange={(e: any) => formChange("username", e.target.value)}
          />
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemLabel}>
            邮箱:
          </div>
          <Input
            placeholder="请输入邮件"
            onChange={(e: any) => formChange("email", e.target.value)}
          />
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemLabel}>
            密码:
          </div>
          <Input
            placeholder="请输入密码"
            onChange={(e: any) => formChange("password", e.target.value)}
          />
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemLabel}>
            确认密码:
          </div>
          <Input
            placeholder="请重复输入密码"
            onChange={(first: any) => console.log(first)}
          />
        </div>
      </div>
    </div>
    <Button text="注册" onClick={() => addAccount()} />
  </>
  );
};

export default SignUp;