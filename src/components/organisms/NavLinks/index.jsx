import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  FaUserAlt as UserIcon,
  FaTachometerAlt as HomeIcon,
  FaBookOpen as CourseIcon,
  FaCircle as FallBackIcon,
  FaGlobe as ExploreIcon,
} from "react-icons/fa";

import css from "./NavLinks.module.css";

const navIcons = {
  //user: { path: "/settings", name: "Settings", icon: <SettingIcon /> },
  home: { path: "/", name: "Dashboard", icon: <HomeIcon /> },
  courses: { path: "/course", name: "Courses", icon: <CourseIcon /> },
  profile: { path: "/profile", name: "Profile", icon: <UserIcon /> },
  explore: { path: "/explore", name: "Explore", icon: <ExploreIcon /> },
  //classRoom: { path: "/classroom", name: "Classroom", icon: <ClassRoomIcon /> },
};

console.log();

function NavLinks() {
  return (
    <>
      <ul className={css.link_tab}>
        {Object.keys(navIcons).map((item) => (
          <li className={css.link_icons} key={item}>
            <NavLink to={navIcons[item].path}>
              {navIcons[item].icon || <FallBackIcon />}
              <p>{[navIcons[item].name]}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavLinks;
