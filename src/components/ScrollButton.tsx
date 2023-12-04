import { SlArrowUp } from "react-icons/sl";
import style from "../styles/ScrollButton.module.scss";

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <p className={style.button}>
      <SlArrowUp onClick={scrollToTop} />
    </p>
  );
};

export default ScrollButton;
