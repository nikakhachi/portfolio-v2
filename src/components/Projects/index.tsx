import { FC, useState } from "react";
import styles from "./styles.module.css";
import { forwardRef } from "react";
import { Project } from "./project";
import projects, { ProjectType } from "../../data/projects";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled, Switch, SwitchProps } from "@mui/material";

const IOSSwitch = styled((props: SwitchProps) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(() => ({
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      "& + .MuiSwitch-track": {
        backgroundColor: "#25afff",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#25afff",
    opacity: 1,
  },
}));

interface ProjectsProps extends React.RefAttributes<HTMLDivElement> {
  scrollToStart: () => void;
}

export const Projects: FC<ProjectsProps> = forwardRef((props, ref) => {
  const DEFAULT_LIMIT = 2;
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [projectType, setProjectType] = useState(ProjectType.WEB3);

  return (
    <div ref={ref} className={styles.container}>
      <h3 className={styles.title}>
        Projects <span>(Total {projects.web2.length + projects.web3.length})</span>
      </h3>
      <hr />
      <span style={{ marginTop: "1rem" }}>
        Web3
        <IOSSwitch
          checked={projectType == ProjectType.WEB2}
          onClick={() => {
            if (projectType == ProjectType.WEB3) {
              setProjectType(ProjectType.WEB2);
            } else {
              setProjectType(ProjectType.WEB3);
            }
          }}
          color="default"
        />
        Web2
      </span>
      <div className={styles.projectsContainer}>
        {projects[projectType === ProjectType.WEB3 ? "web3" : "web2"].slice(0, limit).map((project, index) => (
          <Project
            key={index}
            index={index}
            image={project.image}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            slideshow={project.slideshow}
            client={project.client}
            demo={project.demo === "" ? null : project.demo}
            github={project.github === "" ? null : project.github}
            url={project.url === "" ? null : project.url}
          />
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            if (limit === DEFAULT_LIMIT) {
              setLimit(projects.web2.length + projects.web3.length);
            } else {
              setLimit(DEFAULT_LIMIT);
              props.scrollToStart();
            }
          }}
          className={styles.moreBtn}
        >
          {limit === DEFAULT_LIMIT ? (
            <>
              Show More <KeyboardArrowDownIcon />
            </>
          ) : (
            <>
              Show Less <KeyboardArrowUpIcon />
            </>
          )}
        </button>
      </div>
    </div>
  );
});
