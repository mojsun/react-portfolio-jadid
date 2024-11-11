import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  title,
  description,
  src,
  link,
  color,
  progress,
  range,
  targetScale,
  UsedApp,
  buttonGithub,
  buttonLive,
  deploy,
  app,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      {/* Background Video for mobile */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" md:hidden absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/stars.mp4" type="video/mp4" />
      </video>
      {/* Background Video for Desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" hidden md:block absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/images/stars.mp4" type="video/mp4" />
      </video>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-2vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <h2 className="font-bold">{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p className="md:pb-8 line-clamp-2">{description}</p>
            {/* <span className="md:pb-2">
              <a href={link} target="_blank" rel="noreferrer">
                See Figma Sheet design
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span> */}
            <div className="flex flex-row space-x-3 md:pb-8">
              <button className="btn border-t-neutral-800 text-white w-6/12 h-2/12">
                <a href={buttonLive}>Live</a>
              </button>
              <button className="btn border-t-neutral-800 text-white  w-6/12 h-2/12">
                <a href={buttonGithub}>Github</a>
              </button>
            </div>
            <div className="ml-1 mt-3 ">
              <h1 className="text-start ">
                Deployed on:{" "}
                <span className="font-bold text-md mt-1 mb-3 ">{deploy}</span>
              </h1>
              <h1 className="text-start  ">
                Main app used: <span className="font-bold text-md ">{app}</span>
              </h1>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <img fill src={`/images/${src}`} alt="BackImage" />
            </motion.div>
          </div>
        </div>
        <div>
          <h1 className={styles.UsedApp}>App Used: {UsedApp}</h1>
          <div></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
