import { useState } from "react";
import EditTask from "./editTask";

const Task = ({
  id,
  title,
  description,
  listId,
  allLists,
  onEdit,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleMove = (e) => {
    const newListId = e.target.value;
    onEdit({ id, title, description, listId: newListId });
  };

  return (
    <div className="task grid grid-cols-1 gap-4 p-4 bg-gray-100 shadow">
      <h3 className="task-title text-blue-500">{title}</h3>
      <p className="task-description">{description}</p>

      <select
        className="p-2 border rounded"
        value={listId}
        onChange={handleMove}
      >
        {allLists.map((list) => (
          <option key={list.id} value={list.id}>
            {list.name}
          </option>
        ))}
      </select>

      <input type="checkbox" className="task-checkbox" />

      <div>
        <button
          type="button"
          onClick={() => onDelete(id)}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Delete
        </button>

        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Edit
        </button>

        {isEditing && (
          <EditTask
            task={{ id, title, description }}
            onSave={(updatedTask) => {
              onEdit({ ...updatedTask, listId });
              setIsEditing(false);
            }}
            onClose={() => setIsEditing(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Task;
