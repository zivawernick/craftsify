import * as React from "react";
import { Progress } from "reactstrap";

import css from "./InfoProgress.module.css";

function InfoProgress({ actual }) {
  return (
    <div className={css.progress_bar}>
      <Progress color="success" value={actual} max={100}></Progress>
    </div>
  );
}

export default InfoProgress;
