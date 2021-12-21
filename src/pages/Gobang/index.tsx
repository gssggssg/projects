import * as React from "react";
import Card from "../../components/Card";
import "./index.scss";

const Gobang = (): JSX.Element => {
  return (
    <div className="interface">
      <Card width="50%" height="400px" >
        <div style={{ lineHeight: "400px" }}>这里是Gobang-页面</div>
      </Card>
    </div>
  );
};

export default Gobang;