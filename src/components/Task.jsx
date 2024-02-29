import NewTask from "./NewTask";

export default function Task({ tasks, onAdd, onDelete,task }) {
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAdd={onAdd}></NewTask>
        {task.length == 0 && (<p className="text-stone-800 mb-4">This projet does not have any task yet</p>)}
        {task.length > 0 && (<ul className="p-4 mt-8 rounded-md bg-stone-100">
            {task.map((task1) => <li key={task1.id} className="flex justify-between my-4">
                <span>{task1.text}</span>
                <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task1.id)}>Clear</button>
            </li>)}
        </ul>
        )}
    </section>
}