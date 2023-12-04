import style from "../styles/ContactButton.module.scss";

interface ContactData {
  link: string;
  platform: string;
  user: string;
  children: React.ReactNode;
}

const ContactButton = (props: ContactData) => {
  return (
    <a className={style.button} href={props.link} target="_blank">
      <p className={style.logo}>{props.children}</p>
      <div>
        <p className={style.link}>{props.platform}</p>
        <p className={style.user}>{props.user}</p>
      </div>
    </a>
  );
};

export default ContactButton;
