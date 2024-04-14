import AddProject from "./components/NewProjectComponents/AddProject";
import CurrentProject from "./components/CurrentProject";
import NoProject from "./components/NoProject";
import Projects from "./components/Projects";

import { useState } from "react";

function App() {
  const [projects, setProjects] = useState({
    currMenu: "no-projects",
    projectArr: [],
    tasks: [],
  });

  function addTask(text) {
    let taskId = Math.random();
    setProjects((prevTasks) => {
      const newTask = {
        text: text,
        projectId: prevTasks.currMenu,
        id: taskId,
      };
      return {
        ...prevTasks,
        tasks: [newTask, ...prevTasks.tasks],
      };
    });
  }

  function deleteTask(id) {
    setProjects((prevTasks) => {
      return {
        ...prevTasks,
        tasks: prevTasks.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function showCurrentProject(id) {
    setProjects((prevMenu) => {
      return { ...prevMenu, currMenu: id };
    });
  }

  function showAddProjectMenu() {
    setProjects((prevMenu) => {
      return { ...prevMenu, currMenu: "add-project" };
    });
  }

  function showNoProjects() {
    setProjects((prevMenu) => {
      return { ...prevMenu, currMenu: "no-projects" };
    });
  }

  function saveNewProject(projectData) {
    let newId = Math.random();
    setProjects((prevProjects) => {
      const newProject = { ...projectData, id: newId };
      return {
        ...prevProjects,
        projectArr: [...prevProjects.projectArr, newProject],
      };
    });
    showCurrentProject(newId);
  }

  function deleteCurrentProject() {
    setProjects((prevProjects) => {
      return {
        ...prevProjects,
        currMenu: "no-projects",
        projectArr: prevProjects.projectArr.filter(
          (project) => project.id !== prevProjects.currMenu
        ),
        tasks: prevProjects.tasks.filter(
          (task) => task.projectId !== prevProjects.currMenu
        ),
      };
    });
    console.log(projects);
  }

  function returnComponent() {
    const selectedProject = projects.projectArr.find(
      (project) => project.id === projects.currMenu
    );

    switch (projects.currMenu) {
      case "no-projects":
        return <NoProject showMenu={showAddProjectMenu} />;
      case "add-project":
        return <AddProject onAdd={saveNewProject} onCancel={showNoProjects} />;
      case selectedProject.id:
        return (
          <CurrentProject
            project={selectedProject}
            deleteProject={deleteCurrentProject}
            addNewTask={addTask}
            deleteCurrTask={deleteTask}
            tasks={projects.tasks.filter(
              (task) => task.projectId === projects.currMenu
            )}
          />
        );
    }
  }

  return (
    <div className='flex  mt-10'>
      <Projects
        showMenu={showAddProjectMenu}
        projectList={projects.projectArr}
        showProject={showCurrentProject}
        currentMenu={projects.currMenu}
      />
      {returnComponent()}
    </div>
  );
}

export default App;
