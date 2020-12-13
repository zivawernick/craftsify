import * as React from "react";

import css from "./VideoFrame.module.css";

function VideoFrame({ key, src, name }) {
  return (
    <>
      <iframe
        title={name}
        key={key}
        src={src}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className={css.video_frame}
      ></iframe>
    </>
  );
}

export default VideoFrame;
