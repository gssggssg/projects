import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect, history } from 'umi';
import styles from './index.module.less';

const LoginForm: React.FC = (props: any) => {
  const onFinish = async (values: Object) => {
    props.dispatch({
      type: "user/login",
      payload: values,
    })
  };
  return (
    <div>
      <div className={styles.formTitle}>登录</div>
      <Form
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="userName"
          rules={[{ required: true, message: '请输入用户名！' }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="passWord"
          rules={[{ required: true, message: '请输入密码！' }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <div className={styles.butGroup}>
            <Button type="primary" htmlType="submit" >
              登录
            </Button>
            <Button onClick={() => history.push('/signUp')}>
              注册
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(({ login }: any) => login)(LoginForm)