import React from "react";
import styles from "./style.module.scss";

export default function index({ data, selectedProject }) {
  const crop = (string, maxLength) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className={styles.descriptions}>
      {data.map((project, i) => {
        const { title, description1, description2, description3 } = project;
        return (
          <div
            key={i}
            className={styles.description}
            style={{
              clipPath:
                selectedProject === i ? "inset(0 0 0)" : "inset(50% 0 50%",
            }}
          >
            {/* <p>{crop(title, 9)}</p> */}

            <p>{description1}</p>
            <p>{description2}</p>
            <p>{description3}</p>
          </div>
        );
      })}
    </div>
  );
}
