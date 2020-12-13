import * as React from "react";
import { useLocation } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import logo from "../../../assets/img/logo.svg";
import InfoProgress from "../../organisms/InfoProgress";
import css from "./Header.module.css";

const complementaryItems = {
  icon: {
    path: "/",
    render: <FaUserCircle size={50} key={"icon"} />,
    name: "Icon",
  },
  progress: {
    path: "/course",
    render: <InfoProgress key={"progress"} />,
    name: "Courses",
  },
  profile: {
    path: "/profile",
    render: <InfoProgress key={"progress"} />,
    name: "Profile",
  },
  explore: {
    path: "/explore",
    render: <InfoProgress key={"progress"} />,
    name: "Explore",
  },
  login: {
    path: "/login",
    render: null,
    name: "Sign up",
  },
};

function Header(props) {
  const { pathname } = useLocation();

  return (
    <header className={css.header}>
      <img src={logo} alt="Logo" className={css.logo} />
      <div className={css.header_mesage}>
        <div className={css.header_hello}>
          <h3 className={css.header_page}>
            {Object.keys(complementaryItems).map((item) => {
              return complementaryItems[item].path === pathname
                ? complementaryItems[item].name
                : null;
            })}
          </h3>
          {pathname === "/" ? <p>Enjoy Learning today</p> : null}
        </div>
        <div className={css.header_complement}>
          {Object.keys(complementaryItems).map((item) => {
            return complementaryItems[item].path === pathname
              ? complementaryItems[item].render
              : null;
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
