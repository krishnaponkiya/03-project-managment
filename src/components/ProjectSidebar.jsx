import Button from "./Button";

export default function ProjectSideBar({ onStartProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <Button onClick={onStartProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((data) => (
          <li key={data.id}>
            <button className="w-full text-left px-2 py-1 my-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {data.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
