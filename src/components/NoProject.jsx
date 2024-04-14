import logo from "../assets/no-projects.png";

export default function Main({ showMenu }) {
  return (
    <main className='mt-32 flex flex-col items-center gap-5 m-auto'>
      <img className='w-16' src={logo} alt='no projects' />
      <h1 className='text-stone-500 text-2xl font-bold'>No Project Selected</h1>
      <p className='text-xl text-stone-400'>
        Select a project or get started with a new one
      </p>
      <button
        className='bg-stone-700 text-stone-400 py-2 px-4 rounded-md mt-3 hover:text-stone-300 hover:bg-stone-600'
        onClick={showMenu}
      >
        Create new project
      </button>
    </main>
  );
}
