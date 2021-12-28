// import * as React from "react";
import React, { useState } from 'react';
import { connect } from "react-redux";
import Button from "../../../components/Button";
import Prompt from "./prompt";
import "./index.scss";

interface Props {
  dispatch: any,
  data: any,
  isEdit: boolean,
  currentData: {
    [index: number]: {
      id: number,
      value: string;
      title: string;
    }
  }
};

const Buttons = (props: Props): JSX.Element => {
  const { isEdit, currentData, data } = props;
  const [show, setShow] = useState(false);
  const [dropDown, setDropDown] = useState([]);
  const [dropShow, setDropShow] = useState(false);

  // 编辑
  const edit = (): void => {
    props.dispatch({
      type: "todo/updata",
      payload: { isEdit: false },
    });
  };
  // 保存
  const save = (): void => {
    props.dispatch({
      type: "todo/saveData",
      payload: { currentData },
    });
  };
  // 增加
  const addData = (): void => {
    props.dispatch({
      type: "todo/addData",
      payload: { currentData },
    });
    edit();
  };
  // 删除
  const deleteData = (): void => {
    setShow(true);
  };

  const confirm = (): void => {
    props.dispatch({
      type: "todo/deleteData",
      payload: { currentData },
    });
    setShow(false);
  };

  const cancel = (): void => {
    setShow(false);
  };

  const search = (e: any): void => {
    const aaa = data.filter((item: { title: string }) => {
      const aa = item.title.search(new RegExp(`${e.target.value}`, "gi"));
      return aa >= 0 && true;
    });
    setDropDown(aaa);
  };

  const dropDownShow = () => {
    setDropShow(true);
  };

  const nihaoya = (e: any) => {
    props.dispatch({
      type: "todo/updata",
      payload: { currentData: e, isEdit: false },
    });
    setDropShow(false);
  };

  console.log(dropDown);

  return (
    <div className='buttons'>
      {/* <div className='search' onFocus={dropDownShow} onBlur={dropDownShowFalse}> */}
      <div className='search' onFocus={dropDownShow}>
        <input placeholder='请输入您要查找的' onInput={search} />
        <button onClick={search}>搜索</button>
        {
          dropShow && <div className='dropDown'>
            <ul>
              {
                dropDown.length > 0 ?
                  dropDown?.map((item: { title: string, id: string, value: string }): JSX.Element => {
                    return (<li key={item.id} onClick={() => nihaoya(item)}>
                      <span>{item.title}</span>
                    </li>);
                  }) :
                  <div className='defaultDrop'>
                    <span>暂无内容</span>
                  </div>
              }
            </ul>
          </div>
        }
      </div>
      <div>
        <Button onClick={addData} text={"新增"} />
        <Button onClick={deleteData} text={"删除"} />
        <Prompt confirm={confirm} cancel={cancel} show={show} />
        {isEdit && <Button onClick={edit} text={"编辑"} />}
        {!isEdit && <Button onClick={save} text={"保存"} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state: { todo: any }) => ({
  todo: state.todo,
  isEdit: state.todo.isEdit,
  currentData: state.todo.currentData,
  data: state.todo.data,
});

export default connect(mapStateToProps)(Buttons);