import * as React from "react";
import { Media } from "reactstrap";
import { FaUserEdit } from "react-icons/fa";

import css from "./Profile.module.css";

function Profile() {
  return (
    <div>
      <Media className={css.profile}>
        <Media left top href="#">
          <FaUserEdit size={150} />
        </Media>
        <Media body className={css.text}>
          <Media heading>User info</Media>
          <ul>
            <li>Name: Sharmistha Singh</li>
            <li>Age: 54</li>
            <li>Language: English</li>
            <li>Country: India</li>
          </ul>
        </Media>
      </Media>
    </div>
  );
}

export default Profile;
