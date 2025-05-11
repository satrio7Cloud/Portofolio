import React, { useState } from "react";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaAngular,
  FaChartLine,
  FaDocker,
  FaFigma,
  FaProjectDiagram,
  FaLaptopCode,
} from "react-icons/fa/index.js";
import {
  SiAdobexd,
  SiAdobephotoshop,
  SiPostgresql,
  SiGo,
} from "react-icons/si/index.js";

//  about data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Backend Development",
        icons: [
          <FaPhp key="php" />,
          <FaJava key="java" />,
          <FaJs key="javascript" />,
          <FaNodeJs key="node" />,
          <SiPostgresql key="postgresql" />,
          <FaDocker key="docker" />,
          <SiGo key="golang" />, 
        ],
      },
      {
        title: "Frontend Development",
        icons: [<FaReact key="react" />, <FaAngular key="angular" />],
      },
      {
        title: "Authentication & Architecture",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="adob" />,
          <FaChartLine key="chartjs" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="adob" />,
          <FaChartLine key="chartjs" />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software Engineer - Carik Mandiri (DKI Jakarta)",
        stage: "Sep 2023 - Feb 2025",
        icon: <FaProjectDiagram key="carik" />,
      },
      {
        title:
          "Software Engineer - Cooperative System (Mitra Sejahtera Digital)",
        stage: "Jul 2022 - Aug 2023",
        icon: <FaLaptopCode key="koperasi" />,
      },
      {
        title: "Software Engineer - School Payment Tracker (EduTech Nusantara)",
        stage: "Jul 2021 - Jun 2022",
        icon: <FaLaptopCode key="edutech" />,
      },
      {
        title:
          "Software Engineer - Smart Attendance System (Karya Digital Mandiri)",
        stage: "Apr 2020 - May 2021",
        icon: <FaLaptopCode key="hris" />,
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "STMIK JAKARTA STI&K ",
        stage: "2021 - 2025",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Programmer - Program Disnaker",
        stage: "2023",
      },
      {
        title: "Edspert.id - kickstart your Front End Dev",
        stage: "2023",
      },
    ],
  },
 {
  title: "Vision and Goals",
  info: [
    {
      title: "Innovative Problem Solving",
      stage:
        "Drive positive change through technology by building scalable and high-performance systems that solve real-world problems.",
    },
    {
      title: "Delivering Impactful Solutions",
      stage:
        "Develop high-quality digital products and services that empower clients and institutions to achieve their operational and strategic goals.",
    },
  ],
}

];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        {/* <Avatar /> */}
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Hey, I'm a <span className="text-accent">Full Stack Developer</span>{" "}
            who loves building cool stuff for the web.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-2-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Hi there! I'm Satrio — a web developer who enjoys turning ideas into
            awesome digital experiences. I'm always curious about new tech and
            love learning things that help me create better websites and apps.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none max-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6 ">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={6} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] 
                  after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max 
              gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                    <div className="font-light">{item.title}</div>

                    <div className="hidden md:flex text-white">-</div>

                    <div className="text-sm text-gray-300">{item.stage}</div>

                    {item.icons && (
                      <div className="flex gap-x-3">
                        {item.icons.map((icon, itemIndex) => (
                          <div key={itemIndex} className="text-2xl text-white">
                            {icon}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
