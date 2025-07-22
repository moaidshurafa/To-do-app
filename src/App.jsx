import React, { useState } from "react";
import { initialList } from "./data/initialList";
import { initialTask } from "./data/initialTask";
import List from "./components/list";
import AddNewList from "./components/addNewList";
import { v4 as uuidv4 } from "uuid";

const  App = ()=> {
  const [lists, setLists] = useState(initialList);
  const [tasks, setTasks] = useState(initialTask);

  const handleAddTask = (newTask) => {
    const taskWithId = { ...newTask, id: uuidv4() };
    setTasks((prev) => [...prev, taskWithId]);
  };

  const handleEditTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleDeleteTask = (idToDelete) => {
    setTasks((prev) => prev.filter((task) => task.id !== idToDelete));
  };

  return (
    <div>
      <header className="bg-blue-600 text-white p-12 text-center fixed w-full">
        <h1 className="text-4xl font-bold">TO DO APP</h1>
      </header>

      <section className="p-4">
        <div className="flex flex-row pt-40 gap-4">
          <AddNewList
            onAddList={(newList) => setLists((prev) => [...prev, newList])}
            onSave={(newList) => {
              if (newList) {
                setLists((prev) => [...prev, newList]);
              }
            }}
          />

          {lists.map((list) => {
            const tasksForList = tasks.filter(
              (task) => task.listId === list.id
            );
            return (
              <List
                key={list.id}
                listId={list.id}
                name={list.name}
                tasks={tasksForList}
                onAddTask={handleAddTask}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
                allLists={lists}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
