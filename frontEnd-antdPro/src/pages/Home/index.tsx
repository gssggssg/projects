import React from 'react';
import { connect, history } from 'umi';
import { Card, Button, Descriptions } from 'antd';
import styles from "./index.module.less";

const Home: React.FC = (props: any) => {
  const getUser = async () => {
    props.dispatch({
      type: "user/getUser",
    })
  };
  const { user } = props;
  return (
    <div className={styles.home}>
      <Card bordered={false} style={{ width: 600, margin: 'auto' }}>
        {
          Object.keys(user?.user).length ?
            <Descriptions title="用户信息">
              <Descriptions.Item label="姓名" span={3}>{user?.user?.userName}</Descriptions.Item>
              <Descriptions.Item label="邮箱" span={3}>{user?.user?.email}</Descriptions.Item>
              <Descriptions.Item label="创建时间" span={3}>{user?.user?.createdAt}</Descriptions.Item>
              <Descriptions.Item label="更新时间" span={3}>{user?.user?.updatedAt}</Descriptions.Item>
            </Descriptions>
            : <Button type="primary" onClick={() => getUser()} block>
              获取用户信息
            </Button>
        }
      </Card>
      <div className={styles.butGroup}>
        <Button type="primary" onClick={() => history.push('/login')} block>登录</Button>
        <Button type="primary" onClick={() => history.push('/signUp')} block>注册</Button>
      </div>
    </div>
  );
};

export default connect(({ home, user }: any) => { return { home, user } })(Home);
