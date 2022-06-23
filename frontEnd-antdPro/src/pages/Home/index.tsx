import React, { useEffect } from 'react';
import { connect } from 'umi';
import { Card, Descriptions } from 'antd';
import styles from "./index.module.less";

const Home: React.FC = (props: any) => {
  const { dispatch, user } = props
  const { userName, email, createdAt, updatedAt } = user.user

  useEffect(
    () => {
      dispatch({ type: "user/getUser" }); // 获取用户信息
    }, []
  )

  return (
    <div className={styles.home}>
      <Card bordered={false} style={{ width: 600, margin: 'auto' }}>
        <Descriptions title="用户信息">
          <Descriptions.Item label="姓名" span={3}>{userName}</Descriptions.Item>
          <Descriptions.Item label="邮箱" span={3}>{email}</Descriptions.Item>
          <Descriptions.Item label="创建时间" span={3}>{createdAt}</Descriptions.Item>
          <Descriptions.Item label="更新时间" span={3}>{updatedAt}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default connect(({ home, user }: any) => { return { home, user } })(Home);
