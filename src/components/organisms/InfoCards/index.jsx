import * as React from "react";
import { Link } from "react-router-dom";
import { Media } from "reactstrap";

import css from "./InfoCards.module.css";

function InfoCards({ text, title, src }) {
  return (
    <>
      <Media tag="li" className={css}>
        <Media body>
          <Media heading>
            <Link to="/course">{title}</Link>
          </Media>
          {text}
        </Media>
        <Media right href="#">
          <Media object data-src={src} alt={title} />
        </Media>
      </Media>
    </>
  );
}

export default InfoCards;
