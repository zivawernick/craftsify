import React from "react";

import Routes from "./router";

import NavLinks from "./components/organisms/NavLinks";
import Header from "./components/atoms/Header";

import desk from "./assets/img/desk.svg";
import paint from "./assets/img/paint.svg";
import sew from "./assets/img/sew.svg";

const name = "Vilma";
const greetings = {
  dashboard: `Welcome ${name}`,
  clasroom: "Classroom",
  course: "Course",
  explore: "Explore",
  profile: "Profile",
  settings: "Settings",
};
const courses = [
  {
    id: 1,
    name: "Sewing",
    dificult: 2,
    text: "This course consists of learning to sew",
    completed: 50,
    src: "./assets/img/sew.svg",
    videoList: [
      "https://www.youtube.com/watch?v=oD_KpZm7OaM",
      "https://www.youtube.com/watch?v=rXmnb4AALXg",
      "https://www.youtube.com/watch?v=5-ZGHh7PV4M",
      //"https://www.youtube.com/watch?v=Wj13LiSX8ZE",
    ],
  },
  {
    id: 2,
    name: "Carpentry",
    dificult: 3,
    text: "This course consists of learning to build a desk",
    completed: 24,
    src: desk,
    videoList: [
      "https://www.youtube.com/watch?v=zCNgrOR8FEU",
      "https://www.youtube.com/watch?v=l8-LpSRrW44",
      "https://www.youtube.com/watch?v=o4ijHIRaGXc",
      "https://www.youtube.com/watch?v=y8W7KbJTg7A",
      "https://www.youtube.com/watch?v=B1A3aiEHIzk",
    ],
  },
  {
    id: 3,
    name: "Painting",
    dificult: 1,
    text: "This course consists of learning to paint",
    completed: 5,
    src: paint,
    videoList: [
      "https://www.youtube.com/watch?v=FPz8Xyt3z-w",
      "https://www.youtube.com/watch?v=CU3k3s4TADQ",
      "https://www.youtube.com/watch?v=cDzcoyeaRKI",
      "https://www.youtube.com/watch?v=1Fgkwcym4j4",
      "https://www.youtube.com/watch?v=IVraaTI4Txc",
    ],
  },
];

function App() {
  return (
    <>
      <Header greet={greetings} />
      <Routes courses={courses} />
      <NavLinks />
    </>
  );
}

export default App;
