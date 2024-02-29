import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
    task: []
  });

  function handleTask(text) {
    setProjectState((prevStatus) => {
      const taskId = Math.random();
      const newTask = {
        projectId: prevStatus.selectedProjectId,
        text: text,
        id: taskId
      };
      return {
        ...prevStatus,
        task: [...prevStatus.task, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevStat) => {
      return {
        ...prevStat,
        task: prevStat.task.filter((task) => task.id !== id)
      };
    });
   }
  function handleStartAddProject() {
    setProjectState((prevStatus) => {
      return {
        ...prevStatus,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectdata) {
    setProjectState((prevStatus) => {
      const projectId = Math.random();
      const newProject = {
        ...projectdata,
        id: projectId,
      };
      return {
        ...prevStatus,
        selectedProjectId: undefined,
        project: [...prevStatus.project, newProject],
      };
    });
  }
  function handleCancelButton() {
    setProjectState((prevStat) => {
      return {
        ...prevStat,
        selectedProjectId: undefined,
      };
    });
  }
  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  function handleDeleteProject() {
    setProjectState((prevStat) => {
      return {
        ...prevStat,
        selectedProjectId: undefined,
        project: prevStat.project.filter((project) => project.id !== projectsState.selectedProjectId)
      };
    });
  }
  const selectedProject = projectsState.project.find(project => project.id == projectsState.selectedProjectId)
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleTask}
    onDeleteTask={handleDeleteTask} tasks={projectsState.task} />;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelButton} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartProject={handleStartAddProject}
        projects={projectsState.project}
        onSelectProject={handleSelectProject}
        selectProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
