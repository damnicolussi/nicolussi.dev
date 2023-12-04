import style from "../styles/StudyCard.module.scss";

interface CardInfo {
  img: string;
  title: string;
  place: string;
  start: string;
  end: string;
}

const StudyCard = (props: CardInfo) => {
  return (
    <>
      <div className={style.card}>
        <div className={style.main}>
          <div className={style.image_cnt}>
            <img src={`./src/assets/logos/${props.img}.svg`} alt={props.img} />
          </div>
          <div className={style.data_cnt}>
            <p className={style.title}>{props.title}</p>
            <p className={style.desc}>{props.place}</p>
          </div>
        </div>
        <div className={style.second}>
          <div className={style.vl}></div>
          <div className={style.date_cnt}>
            <p className={style.date}>{props.start}</p>
            <p className={style.date}>{props.end}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyCard;
