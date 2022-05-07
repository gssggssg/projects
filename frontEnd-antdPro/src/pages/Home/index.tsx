import React from 'react';
import { connect } from 'umi';
import { Button } from 'antd';

const Hoem: React.FC = (props: any) => {

  const getUser = async () => {
    props.dispatch({
      type: "user/getUser",
    })
  };

  return (
    <div>
      这是主页
      <Button type="primary" onClick={() => getUser()} block>
        获取用户信息
      </Button>
    </div>
  );
};

export default connect(({ home, user }: any) => { return { home, user } })(Hoem);
