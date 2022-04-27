import React from 'react';
import SignUpForm from './SignUpForm'
import styles from './index.module.less';

const SignUp: React.FC = () => {
  return (
    <div className={styles.loginbg}>
      <div className={styles.container}>
        <div className={styles.loginForm}>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
