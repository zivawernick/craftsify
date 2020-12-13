import * as React from "react";
import CourseList from "../../atoms/CourseList";

import css from "./Dashboard.module.css";

function Dashboard({ courses }) {
  return (
    <div className={css.table}>
      <h4>Recent Courses</h4>
      <hr />
      <div className={css.courses_list}>
        {courses.map((item) => (
          <CourseList
            svg={item.svg}
            completed={item.completed}
            name={item.name}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
