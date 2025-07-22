import { v4 as uuidv4 } from "uuid";
// initialize the tasks with uuid
// Each task can be an object with a unique UUID, title, and description.
export const initialTask = [
  {
    id: uuidv4(),
    title: "Setup Project",
    description: "Initialize the project with React and Vite",
  },
];
