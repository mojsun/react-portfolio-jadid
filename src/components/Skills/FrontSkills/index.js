import styles from "../FrontSkills/Home.module.css";
import gsap from "gsap";

const projects = [
  {
    title: "Html",
    color: "#f2efe8",
  },
  {
    title: "Css",
    color: "#e3ddcf",
  },
  {
    title: "Sass",
    color: "#d5cbb7",
  },
  {
    title: "Jquery",
    color: "#c7b99f",
  },
  {
    title: "Bootstrap",
    color: "#b7ab98",
  },
  {
    title: "React",
    color: "#9d937e",
  },
  {
    title: "Redux",
    color: "#857a67",
  },
  {
    title: "Javascript",
    color: "#6d6353",
  },
  {
    title: "Vite",
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
