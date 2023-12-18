import React from "react";
import style from "../styles/ProjectCard.module.scss";

interface ProjectInfo {
  bg: string;
  title: string;
  desc: string;
  url: string;
  useit?: string;
  children: React.ReactNode;
}

const ProjectCard = (props: ProjectInfo) => {
  return (
    <div className={style.card}>
      <img src={`/images/projects/${props.bg}.png`} alt={props.title} />
      <div className={style.content}>
        <p className={style.title}>{props.title}</p>
        <p className={style.desc}>{props.desc}</p>
        <div className={style.footer}>
          <div className={style.code_cnt}>
            <p className={style.code}>{props.children}</p>
          </div>
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
                Use the Bot
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
