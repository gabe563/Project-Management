import AddProject from "./NewProjectComponents/AddProject";

export default function Projects({
  showMenu,
  projectList,
  showProject,
  currentMenu,
}) {
  return (
    <aside className='bg-black mr-10 p-8 pt-20 h-[calc(100vh-2.5rem)] w-1/4 rounded-tr-xl'>
      <h1 className='text-xl text-stone-200 font-bold mb-5'>YOUR PROJECTS</h1>
      <button
        className='bg-stone-700 text-stone-400 py-2 px-4 rounded-md mt-3 mb-7 hover:text-stone-300 hover:bg-stone-600'
        onClick={showMenu}
      >
        + Add Project
      </button>
      <div className='flex flex-col text-stone-400 rounded-sm'>
        {projectList.map((project) => {
          let classes =
            " text-start hover:text-stone-200 mb-2  p-1 pl-2  hover:bg-stone-900 w-full";
          if (project.id === currentMenu) {
            classes += "bg-stone-800 text-stone-200 bg-stone-900 ";
          } else {
            classes += "text-stone-400";
          }
          return (
            <button
              onClick={() => showProject(project.id)}
              key={project.id}
              className={classes}
            >
              {project.title}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
