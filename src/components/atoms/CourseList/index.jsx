import * as React from "react";

import css from "./CourseList.module.css";

import InfoProgress from "../../organisms/InfoProgress";

function VideoFrame({ svg, completed, name }) {
  return (
    <div className={css.list_item}>
      <div className={css.info}>
        <h4>{name}</h4>
        <InfoProgress actual={completed} />
      </div>
      <img src={svg} alt={name} />
    </div>
  );
}

export default VideoFrame;
