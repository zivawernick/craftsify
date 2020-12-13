import * as React from "react";
import { Media } from "reactstrap";
import InfoCards from "../../organisms/InfoCards";

import css from "./Explore.module.css";

function Explore({ courses }) {
  return (
    <Media list className={css.container}>
      {courses.map((item) => (
        <InfoCards
          text={item.text}
          title={item.name}
          src={item.src}
          key={item.id}
        />
      ))}
    </Media>
  );
}

export default Explore;
