import * as React from "react";
import { ListGroupItemHeading, ListGroupItemText } from "reactstrap";

import css from "./InfoCards.module.css";

function InfoCards({ text, title }) {
  return (
    <>
      <ListGroupItemHeading>{title}</ListGroupItemHeading>
      <ListGroupItemText>{text}</ListGroupItemText>
    </>
  );
}

export default InfoCards;
