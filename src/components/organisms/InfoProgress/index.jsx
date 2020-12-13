import * as React from "react";
import { Progress } from "reactstrap";

import css from "./InfoProgress.module.css";

console.log();
const calcProgress = 4;

function InfoProgress() {
  return (
    <div className="text-center ">
      <Progress multi>
        <Progress
          color="success"
          value={calcProgress * 10}
          max={100}
        ></Progress>
      </Progress>
    </div>
  );
}

export default InfoProgress;
