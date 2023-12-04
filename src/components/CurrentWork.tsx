import style from "../styles/CurrentWork.module.scss";

interface Work {
  icon: string;
  link: string;
}

const CurrentWork = (props: Work) => {
  return (
    <div className={style.content}>
      <img
        src={`/images/icon/${props.icon}.png`}
        alt={props.icon}
        className={style.logo}
      />
      <div>
        <p className={style.title}>I'm currently working on:</p>
        <p className={style.desc}>{props.link}</p>
      </div>
    </div>
  );
};

export default CurrentWork;
