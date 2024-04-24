import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import style from "../styles/Carousel.module.scss";

const MAX_VISIBILITY = window.innerWidth > 660 ? 3 : 1;

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  return (
    <div className={style.carousel}>
      {active > 0 && (
        <button
          className={style.nav + " " + style.left}
          onClick={() => setActive((i: number) => i - 1)}
        >
          <FaChevronLeft />
        </button>
      )}
      <div className={style.overf}>
        {React.Children.map(children, (child: React.ReactNode, i: number) => (
          <div
            className={style.card_container}
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            {child}
          </div>
        ))}
      </div>
      {active < count - 1 && (
        <button
          className={style.nav + " " + style.right}
          onClick={() => setActive((i: number) => i + 1)}
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default Carousel;
