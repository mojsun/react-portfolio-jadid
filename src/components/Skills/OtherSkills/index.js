import styles from "../OtherSkills/Home.module.css";
import gsap from "gsap";

const projects = [
  {
    title: "Figma",
    color: "#f2efe8",
  },
  {
    title: "photoshop",
    color: "#e3ddcf",
  },
  {
    title: "git",
    color: "#d5cbb7",
  },
  {
    title: "responsive",
    color: "#c7b99f",
  },
  {
    title: "motionframe",
    color: "#b7ab98",
  },
  {
    title: "gsap",
    color: "#9d937e",
  },
  {
    title: "word",
    color: "#857a67",
  },
  {
    title: "excel",
    color: "#6d6353",
  },
  {
    title: "powerpoint",
    color: "#554c40",
  },
];

//https://anacuna.com/

export default function Home() {
  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {
      top: "-2vw",
      backgroundColor: projects[index].color,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "white",
      duration: 0.3,
      delay: 0.1,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => {
          return (
            <div
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, index);
              }}
              key={index}
            >
              <p>{project.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
