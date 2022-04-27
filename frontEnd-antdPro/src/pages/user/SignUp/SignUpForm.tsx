import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import styles from './index.module.less';
import { connect } from 'umi';

const SignUpForm: React.FC = (props: any) => {
  const onFinish = async (values: Object) => {
    props.dispatch({
      type: "user/signUp",
      payload: values,
    })
  };
  return (
    <div>
      <div className={styles.formTitle}>注册</div>
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
        <Form.Item
          name="email"
          rules={[{ required: true, message: '请输入邮箱！' }]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="邮箱"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(({ login }: any) => login)(SignUpForm)