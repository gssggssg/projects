// import * as React from "react";
import React, { } from 'react';
import { connect } from "react-redux";
import Button from "../../../components/Button";
import "./prompt.scss";

interface Props {
  show?: boolean;
  confirm?: any;
  cancel?: any;
};

const Prompt = (props: Props): JSX.Element => {
  const { confirm, cancel, show } = props;
  return (
    <>
      <div className={`gssgPrompt ${show}show`}>
        <div className='gssgPromptMask'></div>
        <div className='gssgPromptContent'>
          <div className='gssgPromptText'>
            <p>确定要删除吗？</p>
          </div>
          <div className='gssgPromptButton'>
            <Button text="确定" onClick={confirm} />
            <Button text="取消" onClick={cancel} />
          </div>
        </div>
      </div>
    </>
  );
};

export default connect()(Prompt);