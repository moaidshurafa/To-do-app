import React, { useState } from "react";
import Task from "./task";
import AddTask from "./addTask";

const List = ({
  name,
  listId,
  tasks,
  onEditTask,
  onAddTask,
  onDeleteTask,
  allLists,
}) => {
  const [showModel, setShowModel] = useState(false);

  const handleAddTask = (newTask) => {
    onAddTask({ ...newTask, listId });
  };

  return (
    <div className="bg-white p-20 rounded shadow">
      <h2 className="text-4xl font-semibold pb-10 mb-2">{name}</h2>

      <button
        onClick={() => setShowModel(true)}
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        + Add task
      </button>

      {showModel && (
        <AddTask
          listId={listId}
          onClose={() => setShowModel(false)}
          onSave={handleAddTask}
        />
      )}

      <div className="space-y-2">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            listId={listId}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
            allLists={allLists}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
