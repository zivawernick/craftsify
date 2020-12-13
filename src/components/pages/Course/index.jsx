import * as React from "react";
import { ListGroup } from "reactstrap";
import InfoCards from "../../organisms/InfoCards";

import css from "./Course.module.css";

function Course({ courses }) {
  return (
    <>
      <ListGroup className=".col-sm-auto .offset-sm-1">
        {courses.map((item) => (
          <InfoCards text={item.text} title={item.name} />
        ))}
      </ListGroup>
    </>
  );
}

export default Course;
