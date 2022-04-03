import React from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import styles from "./index.module.scss";
import SignUp from "./SignUp";

type LogInType = {
  dispatch: any,
}

const LogIn: React.FC<LogInType> = (props: LogInType): JSX.Element => {
  const { dispatch } = props;
  return (
    <div className={styles.blackBg}>
      <Card width={600} >
        <>
          <SignUp dispatch={dispatch} />
        </>
      </Card>
    </div>
  );
};

export default connect()(LogIn);