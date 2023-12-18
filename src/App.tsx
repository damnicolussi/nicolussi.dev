import NavItem from "./components/NavItem";
import style from "./styles/Body.module.scss";
import { FaGithub, FaPython } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import StudyCard from "./components/StudyCard";
import GithubC from "./components/GithubC";
import CurrentWork from "./components/CurrentWork";
import ProjectCard from "./components/ProjectCard";
import ContactButton from "./components/ContactButton";
import ScrollButton from "./components/ScrollButton";
import { useEffect, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll("[data-section]");
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).offsetHeight;

      if (
        scrollPosition >= sectionTop - 100 &&
        scrollPosition < sectionTop + sectionHeight - 100
      ) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const toggleVisible = () => {
    const buttonElement = document.getElementById("visibility");
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrolled > 300) {
      if (buttonElement) {
        buttonElement.style.opacity = "1";
        buttonElement.style.transition = "opacity 0.2s ease-in-out";
      }
    } else if (scrolled <= 300) {
      if (buttonElement) {
        buttonElement.style.opacity = "0";
        buttonElement.style.transition = "opacity 0.2s ease-in-out";
      }
    }
  };

  return (
    <>
      <div className={style.body}>
        <div className={style.box}>
          <div className={style.nav_container}>
            <NavItem
              data-nav
              title="About"
              link="about"
              active={activeSection === "about"}
            />
            <NavItem
              data-nav
              title="Projects"
              link="projects"
              active={activeSection === "projects"}
            />
            <NavItem
              data-nav
              title="Contacts"
              link="contacts"
              active={activeSection === "contacts"}
            />
            <div className={style.setting} id="visibility">
              <ScrollButton />
            </div>
          </div>

          <div className={style.cnt_container}>
            <div data-section className={style.sec_home} id="home">
              <div className={style.home}>
                <div className={style.image_cnt}>
                  <img src="/images/pfp.png" alt="me" />
                </div>
                <div className={style.data_cnt}>
                  <h1 className={style.title}>
                    Hi, I'm <b>Damiano Nicolussi</b>
                  </h1>
                  <p className={style.description}>
                    Computer, Communications and Electronic Engineering student
                    at University of Trento
                  </p>
                  <div className={style.logo_cnt}>
                    <div className={style.media}>
                      <a
                        className={style.logos}
                        href="https://github.com/damnicolussi"
                        target="_blank"
                      >
                        <div className={style.icon}>
                          <FaGithub className={style.logo} />
                        </div>
                        <span className={style.logo_desc}>@damnicolussi</span>
                      </a>
                    </div>
                    <div className={style.media}>
                      <a
                        className={style.logos}
                        href="https://linkedin.com/in/damiano-nicolussi"
                        target="_blank"
                      >
                        <div className={style.icon}>
                          <FaLinkedin className={style.logo} />
                        </div>
                        <span className={style.logo_desc}>
                          damiano-nicolussi
                        </span>
                      </a>
                    </div>
                    <div className={style.media}>
                      <a
                        className={style.logos}
                        href="mailto:damiano@nicolussi.dev"
                        target="_blank"
                      >
                        <div className={style.icon}>
                          <MdEmail className={style.logo} />
                        </div>
                        <span className={style.logo_desc}>
                          damiano@nicolussi.dev
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of section */}

            <div data-section className={style.section} id="about">
              <div className={style.about}>
                <h1 className={style.title}>About Me</h1>
                <p className={style.description}>
                  My name is <u>Damiano Nicolussi</u>, I am <u>19 years old</u>,
                  and I am currently a student in the{" "}
                  <u>
                    Bachelor's degree program in "Computer, Communications, and
                    Electronic Engineering"
                  </u>{" "}
                  at the <u>University of Trento</u>. I am passionate about{" "}
                  <u>programming</u>, <u>web development</u>, and{" "}
                  <u>cybersecurity</u>. My enthusiasm for these fields drives my
                  academic pursuits and fuels my dedication to studying these
                  fascinating disciplines.
                </p>
                <StudyCard
                  img="unitn"
                  title="Bachelor in Computer, Communications and Electronic Engineering"
                  place="University of Trento"
                  start="2023"
                  end="..."
                />
                <StudyCard
                  img="unitn"
                  title="CyberChallenge.IT"
                  place="University of Trento"
                  start="2021"
                  end="2021"
                />
                <StudyCard
                  img="imm"
                  title="Liceo Scientifico op. Scienze Applicate"
                  place="Istituto Martino Martini - Mezzolombardo"
                  start="2018"
                  end="2023"
                />
              </div>
            </div>

            {/* end of section */}

            <div data-section className={style.section} id="projects">
              <div className={style.projects}>
                <div className={style.project_list}>
                  <h1 className={style.title}>Projects</h1>
                  <p className={style.description}>
                    Here are some of my projects, both personal and academic.
                    I'm always open to new ideas and collaborations!
                    <div className={style.carousel}>
                      <ProjectCard
                        bg="dae-locator-bg"
                        title="DAE Locator"
                        desc="DAE Locator is a Telegram Bot in Python that helps you find the nearest defibrillators around you thanks to the data saved in OpenStreetMap."
                        url="dae-locator"
                        useit="https://t.me/daelocator_bot"
                      >
                        <FaPython />
                      </ProjectCard>
                    </div>
                  </p>
                </div>

                <div className={style.github}>
                  <GithubC />
                  <CurrentWork icon="dae-locator" link="DAE Locator" />
                </div>
              </div>
            </div>

            {/* end of section */}

            <div data-section className={style.section} id="contacts">
              <div className={style.contacts}>
                <h1 className={style.title}>Contact Me</h1>
                <p className={style.description}>
                  If you wish to contact me, you can reach me here:
                </p>
                <div className={style.mailto}>
                  <a href="mailto:damiano@nicolussi.dev" target="_blank">
                    damiano@nicolussi.dev
                  </a>
                </div>
                <div className={style.socialbtn}>
                  <ContactButton
                    link="https://github.com/damnicolussi"
                    platform="Github"
                    user="@damnicolussi"
                  >
                    <FaGithub />
                  </ContactButton>

                  <ContactButton
                    link="https://linkedin.com/in/damiano-nicolussi"
                    platform="Linkedin"
                    user="damiano-nicolussi"
                  >
                    <FaLinkedin />
                  </ContactButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
