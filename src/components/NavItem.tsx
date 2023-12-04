import style from "../styles/NavItem.module.scss";

interface NavItemProps {
  title: string;
  link: string;
  active: boolean;
}

function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const NavItem = (props: NavItemProps) => {
  return (
    <a
      className={props.active ? `${style.title} ${style.active}` : style.title}
      onClick={() => scrollToId(props.link)}
    >
      {props.title}
    </a>
  );
};

export default NavItem;
