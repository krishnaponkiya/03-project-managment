import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSidebar";
function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });
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
  let content;
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
      />
      {content}
    </main>
  );
}

export default App;
