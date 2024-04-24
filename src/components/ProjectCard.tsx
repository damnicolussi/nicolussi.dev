import React, { useState, useEffect } from "react";
import style from "../styles/ProjectCard.module.scss";

interface ProjectInfo {
  bg: string;
  title: string;
  desc: string;
  url: string;
  subtitle?: string;
  useit?: string;
  children: React.ReactNode;
  comingSoon?: boolean;
}

const iconColors: { [key: string]: string } = {
  FaPython: "#3972A2",
  FaReact: "#087A9F",
};

const ProjectCard = (props: ProjectInfo) => {
  const getIconColor = (child: React.ReactNode) => {
    if (React.isValidElement(child)) {
      const iconName = (
        child.type as React.ComponentType<any>
      ).name?.toString();
      return iconColors[iconName] || "";
    }
    return "";
  };

  const [currentChild, setCurrentChild] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 660 && React.Children.count(props.children) > 1) {
      const interval = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentChild(
            (currentChild) =>
              (currentChild + 1) % React.Children.count(props.children)
          );
          setIsVisible(true);
        }, 500);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className={style.card}>
      <img src={`/images/projects/${props.bg}.png`} alt={props.title} />
      <div className={style.content}>
        <p className={style.title}>{props.title}</p>
        <p className={style.desc}>{props.desc}</p>
        <div className={style.footer}>
          <div className={style.code_cnt}>
            {window.innerWidth > 660 ? (
              React.Children.map(props.children, (child: React.ReactNode) => (
                <span
                  className={style.code}
                  style={{ color: getIconColor(child) }}
                >
                  {child}
                </span>
              ))
            ) : (
              <span
                className={style.code}
                style={{
                  color: getIconColor(
                    React.Children.toArray(props.children)[currentChild]
                  ),
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {React.Children.toArray(props.children)[currentChild]}
              </span>
            )}
          </div>
          {props.comingSoon ? (
            <a className={style.button} style={{ cursor: "wait" }}>
              Coming Soon ...
            </a>
          ) : (
            <div className={style.links}>
              <a
                className={style.button}
                href={`https://github.com/damnicolussi/${props.url}`}
                target="_blank"
              >
                View in GitHub
              </a>
              {props.useit !== undefined ? (
                <a className={style.button} href={props.useit} target="_blank">
                  {props.subtitle}
                </a>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
