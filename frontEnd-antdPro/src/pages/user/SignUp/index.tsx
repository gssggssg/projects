import React from 'react';
import LoginForm from './LoginForm'
import styles from './index.module.less';

const SignUp: React.FC = () => {
  return (
    <div className={styles.loginbg}>
      <div className={styles.container}>
        <div className={styles.loginForm}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
