import { useState } from "react";
import styles from "./style.module.scss";
import Titles from "./titles";
import Descriptions from "./descriptions";

const data = [
  {
    title: "About me",
    description1: "I'm a full-stack developer with a keen eye for design,",
    description2: " skilled in both front-end and back-end development,",
    description3:
      " hardworking, and ready to bring valuable support to your project!",
    speed: 0.5,
  },
  {
    title: "Work Experience",
    description1: "From 2023 - Now = Freelance Software Developer",
    description2: "Nov 2020 - Dec 2022 = Project Manager",
    description3: "Aug 2017 - Nov 2020 = WordPress Front-end Developer",
    speed: 0.5,
  },

  {
    title: "Education",
    description1:
      " 2023 : Software Engineering Certificate - University of Toronto - Canada  ",
    description2:
      " 2017-2019 : Master of Architectural Engineering - Mazandaran University - Iran  ",
    description3:
      " 2012-2016 : Bachelore of Architectural Engineering - Mazandaran University - Iran  ",

    speed: 0.8,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className={styles.container}>
      <Titles data={data} setSelectedProject={setSelectedProject} />
      <Descriptions data={data} selectedProject={selectedProject} />
    </div>
  );
}
