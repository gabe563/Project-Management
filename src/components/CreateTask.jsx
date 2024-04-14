export default function CreateTask({ name, deleteTask, id }) {
  return (
    <div className='flex m-2'>
      <p>{name}</p>
      <button
        className='ml-auto hover:text-red-500'
        onClick={() => deleteTask(id)}
      >
        Clear
      </button>
    </div>
  );
}
