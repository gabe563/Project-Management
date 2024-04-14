import Tasks from "./TaskComponents/Tasks";

export default function CurrentProject({
  project,
  deleteProject,
  addNewTask,
  deleteCurrTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <section className='w-[50rem] mx-auto mt-32'>
      <div className='flex mb-4'>
        <div className='w-2/3 '>
          <h1 className=' text-3xl font-bold text-stone-700 mb-2'>
            {project.title}
          </h1>
          <p className='text-stone-400 mb-2'>{formattedDate}</p>
          <p className='w-3/4 text-stone-700 whitespace-pre-wrap'>
            {project.description}
          </p>
        </div>
        <button
          className='text-stone-700 self-start m-3'
          onClick={deleteProject}
        >
          Delete
        </button>
      </div>
      <hr className='w-3/4 border border-stone-300' />
      <Tasks onCreate={addNewTask} onDelete={deleteCurrTask} tasks={tasks} />
    </section>
  );
}
