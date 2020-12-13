import * as React from "react";
import VideoCarrousel from "../../organisms/Carrousel";
import css from "./Course.module.css";

function Course({ courses }) {
  return (
    <>
      <VideoCarrousel courses={courses} className={css} />
      <section className={css.controls}>
        <button className={css.finish}>Finish Module</button>
        <button className={css.next}>Next Module</button>
      </section>
    </>
  );
}

export default Course;
