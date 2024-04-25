import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import style from "../styles/GithubC.module.scss";
import { FaGithub } from "react-icons/fa";

const GithubC = () => {
  const [totalCount_git, setTotalCount_git] = useState<number>(0);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/damnicolussi?y=last")
      .then((response) => response.json())
      .then((data) => setTotalCount_git(data.total.lastYear));
  }, []);

  console.log(totalCount_git);

  const selectLastHalfYear = (contributions: any[]) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 4;

    return contributions.filter(
      (activity: { date: string | number | Date }) => {
        const date = new Date(activity.date);
        const monthOfDay = date.getMonth();

        return (
          date.getFullYear() === currentYear &&
          monthOfDay > currentMonth - shownMonths &&
          monthOfDay <= currentMonth
        );
      }
    );
  };

  return (
    <div className={style.github}>
      <p className={style.githubtxt}>All my projects are available on GitHub</p>

      <div className={style.github_profile}>
        <div className={style.content}>
          <FaGithub className={style.logo} />
          <p className={style.desc}>@damnicolussi</p>
        </div>
        <a
          href="https://github.com/damnicolussi"
          target="_blank"
          className={style.button}
        >
          Follow
        </a>
      </div>

      <div className={style.calendar}>
        <GitHubCalendar
          username="damnicolussi"
          colorScheme="light"
          hideColorLegend
          hideMonthLabels
          // labels={{
          //   totalCount: "{{count}} contributions in the last six months",
          // }}
          totalCount={totalCount_git}
          transformData={selectLastHalfYear}
        />
      </div>
    </div>
  );
};

export default GithubC;
