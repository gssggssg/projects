import * as React from "react";
import Card from "../../components/Card";
import style from "./index.module.scss";

type GobangProps = {
};

const Gobang: React.FC<GobangProps> = (): JSX.Element => {
  return (
    <div className={style.interface}>
      <Card width="50%" height="400px" >
        <div style={{ lineHeight: "400px" }}>这里是Gobang-页面</div>
      </Card>
    </div>
  );
};

export default Gobang;